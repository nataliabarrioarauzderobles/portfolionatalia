// Configuración de Astro.
// - site: la dirección donde se publica la web (tu dominio).
// - base: la subcarpeta; con dominio propio la web vive en la raíz, así que es '/'.
// El archivo public/CNAME le dice a GitHub Pages cuál es tu dominio.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nataliabarrioarauz.com',
  base: '/',
});