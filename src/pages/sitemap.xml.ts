// MAPA DE LA WEB PARA GOOGLE: la lista de todas las páginas, en español y en inglés.
// Se genera solo al publicar; si añades una página nueva, ponla también en "paginas".
import type { APIRoute } from 'astro';

const paginas = ['', 'pintura', 'diseno', 'colaboremos', 'encargos', 'crea-tu-pieza', 'contacto'];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://nataliabarrioarauz.com');
  const enlace = (idioma: 'es' | 'en', p: string) => new URL(`${idioma === 'en' ? 'en/' : ''}${p}${p ? '/' : ''}`, base).href;
  const urls = paginas.flatMap((p) => (['es', 'en'] as const).map((idioma) => `  <url>
    <loc>${enlace(idioma, p)}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${enlace('es', p)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${enlace('en', p)}"/>
    <priority>${p === '' ? '1.0' : p === 'pintura' ? '0.9' : '0.7'}</priority>
  </url>`));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
