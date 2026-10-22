// PROTOTIPO 3D DE UNA PIEZA DE MADERA
// A partir del diseño pintado (una imagen con el fondo transparente) se calcula el contorno de la pieza,
// se "corta" en un tablero de madera de unos 2 cm (con los cantos redondeados y pintados del color del borde,
// como las piezas reales) y se coloca de pie sobre una balda, con su sombra. Se puede girar con el ratón o el dedo.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export interface DatosPieza {
  imagen: HTMLCanvasElement; // el diseño, con el fondo transparente
  dentro: Uint8Array;        // 1 = la pieza, 0 = fuera (mismo tamaño que la imagen)
  ancho: number;
  alto: number;
  colorCanto: string;        // color de los cantos (el del borde de la pieza)
}

// ── contorno: zona más grande de la máscara → lista de puntos alrededor ──
function contorno(d: DatosPieza): [number, number][] {
  const f = 3; // se trabaja a un tercio de la resolución
  const w = Math.floor(d.ancho / f), h = Math.floor(d.alto / f);
  const m = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) m[y * w + x] = d.dentro[(y * f + 1) * d.ancho + x * f + 1];
  // la zona conectada más grande
  const etiqueta = new Int32Array(w * h).fill(-1);
  const pila: number[] = [];
  let mejor = -1, mejorTam = 0;
  for (let i = 0, n = 0; i < w * h; i++) {
    if (!m[i] || etiqueta[i] >= 0) continue;
    let tam = 0;
    pila.push(i); etiqueta[i] = n;
    while (pila.length) {
      const p = pila.pop()!; tam++;
      const x = p % w, y = (p - x) / w;
      for (const q of [x > 0 ? p - 1 : -1, x < w - 1 ? p + 1 : -1, y > 0 ? p - w : -1, y < h - 1 ? p + w : -1]) {
        if (q >= 0 && m[q] && etiqueta[q] < 0) { etiqueta[q] = n; pila.push(q); }
      }
    }
    if (tam > mejorTam) { mejorTam = tam; mejor = n; }
    n++;
  }
  const es = (x: number, y: number) => x >= 0 && y >= 0 && x < w && y < h && etiqueta[y * w + x] === mejor;
  // seguimiento del borde (vecindad de Moore)
  let inicio = -1;
  for (let i = 0; i < w * h; i++) if (etiqueta[i] === mejor) { inicio = i; break; }
  if (inicio < 0) return [];
  const dirs = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];
  const sx = inicio % w, sy = (inicio - sx) / w;
  let x = sx, y = sy, d0 = 6;
  const puntos: [number, number][] = [];
  for (let paso = 0; paso < w * h * 4; paso++) {
    puntos.push([x * f, y * f]);
    let encontrado = false;
    for (let k = 0; k < 8; k++) {
      const dd = (d0 + 6 + k) % 8; // empieza buscando "hacia atrás a la izquierda"
      const nx = x + dirs[dd][0], ny = y + dirs[dd][1];
      if (es(nx, ny)) { x = nx; y = ny; d0 = dd; encontrado = true; break; }
    }
    if (!encontrado || (x === sx && y === sy && paso > 2)) break;
  }
  // suavizar y aligerar
  const n = puntos.length, r = 3;
  const suave: [number, number][] = [];
  for (let i = 0; i < n; i += 2) {
    let ax = 0, ay = 0;
    for (let k = -r; k <= r; k++) { const p = puntos[(i + k + n) % n]; ax += p[0]; ay += p[1]; }
    suave.push([ax / (2 * r + 1), ay / (2 * r + 1)]);
  }
  return suave;
}

// textura de pintura: un poco de grano para que no parezca plano
function conPintura(imagen: HTMLCanvasElement): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = imagen.width; c.height = imagen.height;
  const x = c.getContext('2d')!;
  x.drawImage(imagen, 0, 0);
  const datos = x.getImageData(0, 0, c.width, c.height);
  const p = datos.data;
  for (let i = 0; i < p.length; i += 4) {
    if (!p[i + 3]) continue;
    const ruido = (Math.random() - 0.5) * 14;
    p[i] = Math.max(0, Math.min(255, p[i] + ruido));
    p[i + 1] = Math.max(0, Math.min(255, p[i + 1] + ruido));
    p[i + 2] = Math.max(0, Math.min(255, p[i + 2] + ruido));
  }
  x.putImageData(datos, 0, 0);
  return c;
}

export function mostrarPieza3D(contenedor: HTMLElement, d: DatosPieza) {
  const puntos = contorno(d);
  const ANCHO_3D = 2; // la pieza mide 2 unidades de ancho (de imagen)
  const k = ANCHO_3D / d.ancho;
  const forma = new THREE.Shape(puntos.map(([px, py]) => new THREE.Vector2((px - d.ancho / 2) * k, -(py - d.alto / 2) * k)));

  // alto real de la pieza (para apoyarla en la balda)
  let minY = Infinity, maxY = -Infinity, minX = Infinity, maxX = -Infinity;
  forma.getPoints().forEach((p) => { minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y); minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x); });

  const grosor = 0.075;
  const geometria = new THREE.ExtrudeGeometry(forma, { depth: grosor, bevelEnabled: true, bevelThickness: 0.014, bevelSize: 0.012, bevelSegments: 3, curveSegments: 1 });
  geometria.translate(-(minX + maxX) / 2, -minY, -grosor / 2);

  // la cara: el diseño pintado. Las coordenadas de la cara son las de la forma → se ajusta la textura
  const textura = new THREE.CanvasTexture(conPintura(d.imagen));
  textura.colorSpace = THREE.SRGBColorSpace;
  textura.wrapS = textura.wrapT = THREE.ClampToEdgeWrapping;
  textura.repeat.set(1 / ANCHO_3D, d.ancho / (ANCHO_3D * d.alto));
  // (las coordenadas de textura de la cara se calculan con la forma antes de moverla)
  textura.offset.set(0.5, 0.5);
  textura.anisotropy = 8;

  const cara = new THREE.MeshStandardMaterial({ map: textura, roughness: 0.82, metalness: 0 });
  const canto = new THREE.MeshStandardMaterial({ color: new THREE.Color(d.colorCanto), roughness: 0.9, metalness: 0 });
  const pieza = new THREE.Mesh(geometria, [cara, canto]);
  pieza.castShadow = true;
  pieza.receiveShadow = true;

  // ── escena ──
  const escena = new THREE.Scene();
  const camara = new THREE.PerspectiveCamera(28, 1, 0.1, 50);
  const alturaPieza = maxY - minY;
  const centroY = alturaPieza / 2;
  camara.position.set(0, centroY + 0.35, 5.2);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping; // blancos limpios, como en las fotos
  renderer.toneMappingExposure = 1.2;
  contenedor.appendChild(renderer.domElement);

  escena.add(new THREE.HemisphereLight(0xffffff, 0xd9d4cc, 1.6));
  const sol = new THREE.DirectionalLight(0xffffff, 2.2);
  sol.position.set(-2.5, 4, 3.5);
  sol.castShadow = true;
  sol.shadow.mapSize.set(2048, 2048);
  sol.shadow.camera.left = -3; sol.shadow.camera.right = 3; sol.shadow.camera.top = 3; sol.shadow.camera.bottom = -3;
  sol.shadow.radius = 6;
  sol.shadow.bias = -0.0005;
  escena.add(sol);
  const relleno = new THREE.DirectionalLight(0xfff4e6, 0.6);
  relleno.position.set(3, 1.5, 2);
  escena.add(relleno);

  // balda: solo se ve la sombra
  const suelo = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), new THREE.ShadowMaterial({ opacity: 0.16 }));
  suelo.rotation.x = -Math.PI / 2;
  suelo.receiveShadow = true;
  escena.add(suelo);
  escena.add(pieza);

  // girar con el ratón o el dedo (sin zoom ni desplazamiento), dentro de unos límites para ver la cara
  const controles = new OrbitControls(camara, renderer.domElement);
  controles.target.set(0, centroY, 0);
  controles.enableZoom = false;
  controles.enablePan = false;
  controles.enableDamping = true;
  controles.minAzimuthAngle = -1.1;
  controles.maxAzimuthAngle = 1.1;
  controles.minPolarAngle = 0.9;
  controles.maxPolarAngle = 1.62;
  controles.update();

  // mientras nadie lo toca, la pieza se balancea despacio para que se vean los cantos
  let tocado = false;
  controles.addEventListener('start', () => (tocado = true));

  const ajustar = () => {
    const w = contenedor.clientWidth, h = contenedor.clientHeight || w * 0.75;
    renderer.setSize(w, h);
    camara.aspect = w / h;
    // encuadre: que la pieza quepa entera con aire alrededor
    const anchoVisible = Math.max(maxX - minX, alturaPieza * camara.aspect) * 1.35;
    const distancia = anchoVisible / 2 / Math.tan((camara.fov * Math.PI) / 360) / camara.aspect;
    camara.position.set(camara.position.x, centroY + 0.35, Math.max(distancia, alturaPieza * 2.2));
    camara.updateProjectionMatrix();
  };
  const observador = new ResizeObserver(ajustar);
  observador.observe(contenedor);
  ajustar();

  let activo = true;
  const reloj = new THREE.Clock();
  const sinMovimiento = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const bucle = () => {
    if (!activo) return;
    const t = reloj.getElapsedTime();
    if (!tocado && !sinMovimiento) {
      const balanceo = Math.sin(t * 0.55) * 0.5;
      // entrada: llega girando desde un lado durante el primer segundo y medio
      const e = Math.min(1, t / 1.6), suave = 1 - Math.pow(1 - e, 3);
      pieza.rotation.y = -1.2 + (balanceo + 1.2) * suave;
    }
    controles.update();
    renderer.render(escena, camara);
    requestAnimationFrame(bucle);
  };
  bucle();

  return {
    imagen: () => renderer.domElement.toDataURL('image/png'),
    destruir: () => {
      activo = false;
      observador.disconnect();
      controles.dispose();
      geometria.dispose(); textura.dispose(); cara.dispose(); canto.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
