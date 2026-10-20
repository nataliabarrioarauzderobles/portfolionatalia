import type { ImageMetadata } from 'astro';

// Astro carga aquí todas las imágenes de src/assets para poder optimizarlas.
const archivos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{jpg,png}', { eager: true });

// Devuelve una imagen por su ruta dentro de src/assets, p. ej. 'diseno/boquerones/01-anchoas.jpg'.
export function imagen(ruta: string): ImageMetadata {
  const encontrada = archivos[`/src/assets/${ruta}`];
  if (!encontrada) throw new Error(`No encuentro la imagen src/assets/${ruta}`);
  return encontrada.default;
}

// Devuelve todas las imágenes de una carpeta, ordenadas por nombre (sin extensión),
// de modo que "desglose" va antes que "desglose-mockup" y que "desglose-mockup-2".
export function imagenesDe(carpeta: string): ImageMetadata[] {
  const prefijo = `/src/assets/${carpeta.replace(/\/$/, '')}/`;
  const sinExtension = (ruta: string) => ruta.replace(/\.[^.]+$/, '');
  return Object.keys(archivos)
    .filter((ruta) => ruta.startsWith(prefijo) && !ruta.slice(prefijo.length).includes('/'))
    .sort((a, b) => sinExtension(a).localeCompare(sinExtension(b)))
    .map((ruta) => archivos[ruta].default);
}
