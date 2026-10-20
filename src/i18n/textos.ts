// Todos los textos fijos de la web, en español (es) e inglés (en).
// Para cambiar un texto, cámbialo aquí y se actualiza en todas las páginas.

export type Idioma = 'es' | 'en';

export const textos = {
  es: {
    menuPintura: 'Pintura',
    menuDiseno: 'Diseño',
    menuContacto: 'Contacto',
    inicio: 'Inicio',
    descripcionWeb: 'Natalia Barrio Araúz de Robles — pintura y diseño.',

    // Pintura
    pinturaTitulo: 'Pintura',
    series: {
      formas: 'Serie Formas',
      open: 'Serie Open',
      interfaces: 'Serie Interfaces',
      sueltas: 'Obras sueltas',
    },
    tecnicas: {
      oleo: 'Óleo sobre lienzo',
      mixta: 'Técnica mixta',
      acrilico: 'Acrílico sobre lienzo',
    },
    titulo: 'Título',
    medidas: 'Medidas',
    tecnica: 'Técnica',
    precio: 'Precio',
    consultarPrecio: 'Consultar precio',
    vendida: 'Vendida',
    botonConsultar: 'Consultar por WhatsApp',
    anterior: 'Anterior',
    siguiente: 'Siguiente',
    cerrar: 'Cerrar',
    verObra: 'Ver obra',
    mensajeObra: (titulo: string, medidas?: string) =>
      `Hola Natalia, me ha interesado la obra «${titulo}»${medidas ? ` (${medidas} cm)` : ''}. ¿Podrías darme más información sobre el precio y la disponibilidad?`,

    // Diseño
    disenoTitulo: 'Diseño',
    verImagen: 'Ver imagen',

    // Contacto
    contactoTitulo: 'Contacto',
    sobreMi: 'Sobre mí',
    email: 'Email',
    instagram: 'Instagram',
    telefono: 'Teléfono',
    escribemeWhatsApp: 'Escríbeme por WhatsApp',
    descargarCV: 'Descargar CV (PDF)',
    mensajeContacto: 'Hola Natalia, he visto tu web y me gustaría contactar contigo.',
  },
  en: {
    menuPintura: 'Painting',
    menuDiseno: 'Design',
    menuContacto: 'Contact',
    inicio: 'Home',
    descripcionWeb: 'Natalia Barrio Araúz de Robles — painting and design.',

    pinturaTitulo: 'Painting',
    series: {
      formas: 'Formas series',
      open: 'Open series',
      interfaces: 'Interfaces series',
      sueltas: 'Individual works',
    },
    tecnicas: {
      oleo: 'Oil on canvas',
      mixta: 'Mixed media',
      acrilico: 'Acrylic on canvas',
    },
    titulo: 'Title',
    medidas: 'Size',
    tecnica: 'Technique',
    precio: 'Price',
    consultarPrecio: 'Price on request',
    vendida: 'Sold',
    botonConsultar: 'Ask on WhatsApp',
    anterior: 'Previous',
    siguiente: 'Next',
    cerrar: 'Close',
    verObra: 'View artwork',
    mensajeObra: (titulo: string, medidas?: string) =>
      `Hi Natalia, I'm interested in the artwork “${titulo}”${medidas ? ` (${medidas} cm)` : ''}. Could you tell me more about its price and availability?`,

    disenoTitulo: 'Design',
    verImagen: 'View image',

    contactoTitulo: 'Contact',
    sobreMi: 'About me',
    email: 'Email',
    instagram: 'Instagram',
    telefono: 'Phone',
    escribemeWhatsApp: 'Message me on WhatsApp',
    descargarCV: 'Download CV (PDF, Spanish)',
    mensajeContacto: "Hi Natalia, I've seen your website and I'd like to get in touch.",
  },
} as const;
