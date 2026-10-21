// MODELOS NUEVOS PARA COLOREAR (en el mismo estilo de línea que los dibujos de Natalia)
// Cada modelo es un SVG de 1200 × 900 con línea negra sobre blanco. Se dibuja en el lienzo
// del configurador y cada zona cerrada se puede pintar.

type Punto = [number, number];

// Contorno de almendra (el blanco del ojo): dos curvas de Bézier cuadráticas
function almendra(ancho: number, alto: number, n = 160): Punto[] {
  const puntos: Punto[] = [];
  const k = alto * 2; // con k = 2·alto, el pico de la curva queda a "alto"
  for (let i = 0; i < n; i++) {
    const t = i / n;
    const superior = t < 0.5;
    const u = superior ? t * 2 : (t - 0.5) * 2;
    const x0 = superior ? -ancho : ancho;
    const x2 = superior ? ancho : -ancho;
    const x = (1 - u) ** 2 * x0 + u ** 2 * x2;
    const y = 2 * (1 - u) * u * (superior ? -k : k);
    puntos.push([x, y]);
  }
  return puntos;
}

// Desplaza cada punto hacia fuera (por la normal) según una función de grosor
function haciaFuera(puntos: Punto[], grosor: (i: number, n: number) => number): Punto[] {
  const n = puntos.length;
  return puntos.map(([x, y], i) => {
    const [xa, ya] = puntos[(i - 1 + n) % n];
    const [xb, yb] = puntos[(i + 1) % n];
    let nx = yb - ya;
    let ny = -(xb - xa);
    const largo = Math.hypot(nx, ny) || 1;
    nx /= largo; ny /= largo;
    if (nx * x + ny * y < 0) { nx = -nx; ny = -ny; }
    const g = grosor(i, n);
    return [x + nx * g, y + ny * g];
  });
}

const d = (p: Punto[]) => 'M' + p.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L') + ' Z';

// Envuelve los trazados en un SVG listo para el lienzo (como "data URL")
function svg(contenido: string): string {
  const codigo =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="1200" height="900">` +
    `<rect width="1200" height="900" fill="#fff"/>` +
    `<g transform="translate(600 450)" fill="none" stroke="#111" stroke-width="5" stroke-linejoin="round" stroke-linecap="round">${contenido}</g></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(codigo)}`;
}

const blanco = almendra(420, 175);
const iris = '<circle cx="20" cy="-40" r="120"/><circle cx="40" cy="-70" r="38"/>';

// 1. Ojo de lunares: borde liso con lunares (cada lunar se puede pintar)
const lunares = haciaFuera(almendra(420, 175, 30), () => 58)
  .filter((_, i) => i % 15 !== 0)
  .map(([x, y]) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="20"/>`)
  .join('');
const ojoLunares = svg(`<path d="${d(haciaFuera(blanco, () => 115))}"/><path d="${d(blanco)}"/>${lunares}${iris}`);

// 2. Ojo con corona: bultos redondeados por arriba
const corona = haciaFuera(almendra(420, 175, 24), () => 95)
  .filter((_, i) => i >= 2 && i <= 10)
  .map(([x, y]) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="42"/>`)
  .join('');
const ojoCorona = svg(`${corona}<path d="${d(haciaFuera(blanco, () => 70))}" fill="#fff"/><path d="${d(blanco)}"/>${iris}`);

// 3. Labios cerrados
const labiosCerrados = svg(
  `<path d="M-470 20 C-360 -150 -180 -220 -80 -150 C-40 -120 -20 -118 0 -135 C20 -118 40 -120 80 -150 C180 -220 360 -150 470 20 C330 230 -330 230 -470 20 Z"/>` +
  // la línea central llega a las comisuras para separar labio de arriba y de abajo
  `<path d="M-470 20 C-270 -40 -80 0 0 6 C80 0 270 -40 470 20"/>`,
);

export const modelosNuevos = [
  { id: 'ojo-lunares', src: ojoLunares, nombre: { es: 'Ojo de lunares', en: 'Polka-dot eye' } },
  { id: 'ojo-corona', src: ojoCorona, nombre: { es: 'Ojo corona', en: 'Crown eye' } },
  { id: 'labios-cerrados', src: labiosCerrados, nombre: { es: 'Labios cerrados', en: 'Closed lips' } },
];
