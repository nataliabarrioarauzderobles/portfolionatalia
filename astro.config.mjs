// Configuración de Astro.
// - site: la dirección donde se publica la web.
// - base: la subcarpeta. GitHub Pages publica en
//   https://nataliabarrioarauzderobles.github.io/portfolionatalia/
//   Cuando conectemos tu dominio propio, base pasará a ser '/'.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nataliabarrioarauzderobles.github.io',
  base: '/portfolionatalia',
});
