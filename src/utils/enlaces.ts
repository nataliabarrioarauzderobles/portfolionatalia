import type { Idioma } from '../i18n/textos';

// Tus datos de contacto, en un solo sitio.
export const contacto = {
  nombre: 'Natalia Barrio Araúz de Robles',
  email: 'nataliabarrioarauzderobles@gmail.com',
  instagram: 'nataliabarrioarauz',
  telefono: '+34 628 32 78 78',
  whatsapp: '34628327878', // número sin "+" ni espacios, como lo pide WhatsApp
};

// Construye una ruta interna teniendo en cuenta la "base" de astro.config.mjs.
// Ej.: url('pintura') -> /pintura
export function url(ruta = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${ruta}`.replace(/\/{2,}/g, '/');
}

// Ruta de una página en un idioma: es -> /pintura, en -> /en/pintura
export function rutaIdioma(idioma: Idioma, pagina = ''): string {
  return url(idioma === 'en' ? `en/${pagina}` : pagina);
}

// Enlace que abre WhatsApp con un mensaje ya escrito.
export function enlaceWhatsApp(mensaje: string): string {
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
