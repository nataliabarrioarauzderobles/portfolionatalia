# Web de Natalia Barrio Araúz de Robles

Portfolio de pintura y diseño hecho con [Astro](https://astro.build). Astro genera una web
normal de HTML y CSS (con un poco de JavaScript solo para el visor de obras y "Diseña tu pieza").

## Cómo trabajar con la web

Abre una terminal en esta carpeta (en VS Code: menú *Terminal → Nueva terminal*) y usa:

| Comando | Qué hace |
|---|---|
| `npm install` | Instala Astro. Solo hace falta la primera vez (o si borras `node_modules`). |
| `npm run dev` | Abre la web en tu ordenador en http://localhost:4321/. Se actualiza sola al guardar cambios. Para pararla: `Ctrl + C`. |
| `npm run build` | Construye la versión final en la carpeta `dist/` (para comprobar que todo está bien). |

## Dónde está cada cosa

```
src/
├── pages/            Cada archivo es una página: index (home), pintura, diseno, contacto.
│   └── en/           Las mismas páginas en inglés.
├── components/
│   ├── paginas/      El contenido de cada página (compartido por los dos idiomas).
│   ├── Cabecera.astro, Pie.astro
│   ├── GaleriaSerie.astro    Scroll de cuadros + visor con carrusel y ficha.
│   ├── ProyectoDiseno.astro  Un proyecto de diseño (texto + imágenes).
│   ├── DisenaTuPieza.astro   El encargo personalizado por WhatsApp.
│   └── VisorImagen.astro     Ampliar imágenes en Diseño.
├── data/
│   ├── obras.ts      ← FICHAS DE LOS CUADROS (título, medidas, vendida…)
│   └── proyectos.ts  ← PROYECTOS DE DISEÑO (textos e imágenes)
├── i18n/textos.ts    ← Textos fijos en español e inglés (menú, botones, mensajes de WhatsApp)
├── utils/enlaces.ts  ← Tus datos de contacto (email, Instagram, teléfono, WhatsApp)
├── styles/global.css ← Colores, tipografías y espaciados
└── assets/           Imágenes (Astro las optimiza solas)
public/               Archivos que se sirven tal cual: CV en PDF y favicon.
```

## Tareas habituales

- **Añadir un cuadro:** crea `src/assets/pintura/<serie>/<id>/<id>.jpg` (y `<id>-mockup.jpg` si tiene mockup)
  y añade su línea en `src/data/obras.ts`.
- **Marcar una obra como vendida:** en `src/data/obras.ts`, añade `vendida: true` a su línea.
- **Cambiar un texto:** los textos de los proyectos están en `src/data/proyectos.ts`; "Sobre mí" en
  `src/components/paginas/Contacto.astro`; el resto en `src/i18n/textos.ts`.
- **Cambiar el CV:** sustituye `public/cv-natalia-barrio.pdf` (mismo nombre).

## Publicar

La web se publica sola en GitHub Pages cada vez que se suben cambios a la rama `main`
(ver `.github/workflows/deploy.yml`).
