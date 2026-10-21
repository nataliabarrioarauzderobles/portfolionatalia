// GEOMETRÍA DE LAS PIEZAS (para la vista previa del configurador)
// Genera los trazados SVG del ojo y de los labios. Se calcula una sola vez al construir la web.

type Punto = [number, number];

// Contorno de almendra (el blanco del ojo): dos curvas de Bézier cuadráticas
function almendra(ancho: number, alto: number, n = 120): Punto[] {
  const puntos: Punto[] = [];
  const k = alto * 2; // con k = 2·alto, el pico de la curva queda a "alto"
  for (let i = 0; i < n; i++) {
    const t = i / n;
    // mitad superior (de izquierda a derecha) y mitad inferior (de derecha a izquierda)
    const superior = t < 0.5;
    const u = superior ? t * 2 : (t - 0.5) * 2;
    const x0 = superior ? -ancho : ancho;
    const x2 = superior ? ancho : -ancho;
    const yc = superior ? -k : k;
    const x = (1 - u) ** 2 * x0 + 2 * (1 - u) * u * 0 + u ** 2 * x2;
    const y = 2 * (1 - u) * u * yc;
    puntos.push([x, y]);
  }
  return puntos;
}

// Desplaza cada punto hacia fuera (por la normal) según una función de grosor
function hacia_fuera(puntos: Punto[], grosor: (i: number, n: number) => number): Punto[] {
  const n = puntos.length;
  return puntos.map(([x, y], i) => {
    const [xa, ya] = puntos[(i - 1 + n) % n];
    const [xb, yb] = puntos[(i + 1) % n];
    let nx = yb - ya;
    let ny = -(xb - xa);
    const largo = Math.hypot(nx, ny) || 1;
    nx /= largo; ny /= largo;
    // la normal debe apuntar hacia fuera (lejos del centro)
    if (nx * x + ny * y < 0) { nx = -nx; ny = -ny; }
    const g = grosor(i, n);
    return [x + nx * g, y + ny * g];
  });
}

const trazado = (p: Punto[]) => 'M' + p.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join('L') + 'Z';

const BLANCO = almendra(150, 62);
const BASE = 20;

export const ojo = {
  blanco: trazado(BLANCO),
  contornos: {
    liso: trazado(hacia_fuera(BLANCO, () => BASE)),
    pestanas: trazado(hacia_fuera(almendra(150, 62, 96), (i) => (i % 2 ? BASE + 26 : BASE))),
    ondas: trazado(hacia_fuera(BLANCO, (i, n) => BASE + 12 + 12 * Math.sin((i / n) * Math.PI * 2 * 9))),
    lunares: trazado(hacia_fuera(BLANCO, () => BASE + 6)),
    corona: trazado(hacia_fuera(BLANCO, () => BASE)),
  } as Record<string, string>,
  // círculos de la "corona": bultos sobre el borde superior
  corona: hacia_fuera(almendra(150, 62, 30), () => BASE + 4)
    .filter((_, i) => i >= 3 && i <= 12)
    .map(([x, y]) => ({ x: +x.toFixed(1), y: +y.toFixed(1), r: 13 })),
  // lunares repartidos por la mitad del borde
  lunares: hacia_fuera(almendra(150, 62, 26), () => (BASE + 6) / 2).map(([x, y]) => ({ x: +x.toFixed(1), y: +y.toFixed(1), r: 5.5 })),
};

export const labios = {
  // labios con arco de Cupido
  exterior: 'M-170 0 C-130 -62 -70 -86 -32 -58 C-14 -46 -6 -46 0 -52 C6 -46 14 -46 32 -58 C70 -86 130 -62 170 0 C120 78 -120 78 -170 0 Z',
  // boca abierta (sonrisa)
  boca: 'M-138 2 C-80 -26 80 -26 138 2 C90 46 -90 46 -138 2 Z',
  dientes: 'M-120 -4 C-70 -22 70 -22 120 -4 L118 12 C70 2 -70 2 -118 12 Z',
  // boca cerrada
  linea: 'M-150 2 C-90 -14 -30 -4 0 -2 C30 -4 90 -14 150 2',
};
