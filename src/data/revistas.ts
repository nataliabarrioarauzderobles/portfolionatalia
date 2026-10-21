// CADA PROYECTO DE DISEÑO COMO UNA REVISTA
// Cada proyecto tiene su propio "estilo de revista" (color, papel y cabecera) y una lista de páginas.
// Los textos largos salen de proyectos.ts (Portfolio Nov 2025): aquí se indica qué párrafo va en cada página.
//
// Tipos de página:
//  · portada  → la foto a sangre con la cabecera de la revista (es también la miniatura en Diseño)
//  · entrada  → título, entradilla (primer párrafo) y datos del proyecto
//  · imagen   → una foto: a sangre (ocupa toda la página) o con margen y pie de foto
//  · doble    → una foto que ocupa las dos páginas abiertas
//  · texto    → párrafos a dos columnas con letra capital, y una foto opcional
//  · cita     → una frase destacada en grande
//  · rejilla  → varias imágenes ordenadas en la retícula, con un titular
//  · contra   → contraportada
// Cambiar el orden de las páginas aquí cambia el orden en la web.

type Texto = { es: string; en: string };

export type Pagina =
  | { tipo: 'portada'; imagen: string; titular?: Texto }
  | { tipo: 'entrada' }
  | { tipo: 'imagen'; imagen: string; sangre?: boolean; pie?: Texto }
  | { tipo: 'doble'; imagen: string; encajar?: boolean; pie?: Texto }
  | { tipo: 'texto'; parrafos: number[]; imagen?: string; titular?: Texto }
  | { tipo: 'cita'; cita: Texto; imagen?: string }
  | { tipo: 'rejilla'; imagenes: string[]; titular?: Texto }
  | { tipo: 'contra'; imagen?: string };

export interface Revista {
  numero: string;
  disciplina: Texto;
  // estilo de la revista
  acento: string;   // color de la cabecera y los detalles
  papel: string;    // color del papel
  cabecera: 'condensada' | 'serif' | 'ancha' | 'negra';
  paginas: Pagina[];
}

const d = (ruta: string) => `diseno/${ruta}.jpg`;

export const revistas: Record<string, Revista> = {
  lucilla: {
    numero: '01',
    disciplina: { es: 'Mobiliario · Escultura', en: 'Furniture · Sculpture' },
    acento: '#1f7a45',
    papel: '#ffffff',
    cabecera: 'condensada',
    paginas: [
      { tipo: 'portada', imagen: d('ojo-y-labios/lucilla/lucilla-cesped'), titular: { es: 'La silla que te mira', en: 'The chair that looks back' } },
      { tipo: 'entrada' },
      { tipo: 'imagen', imagen: d('ojo-y-labios/lucilla/lucilla-bosque-natalia'), sangre: true },
      { tipo: 'doble', imagen: d('ojo-y-labios/lucilla/lucilla-tumbada'), pie: { es: 'Lucilla, 2024. Madera, tapicería y espuma.', en: 'Lucilla, 2024. Wood, upholstery and foam.' } },
      { tipo: 'texto', parrafos: [1], imagen: d('ojo-y-labios/silla-ojo-detalle'), titular: { es: 'Mueble u obra', en: 'Furniture or artwork' } },
      { tipo: 'imagen', imagen: d('ojo-y-labios/lucilla/lucilla-abrazo'), sangre: true },
      { tipo: 'cita', cita: { es: '¿Es un mueble o una obra de arte?', en: 'Is it furniture or a work of art?' }, imagen: d('ojo-y-labios/lucilla/lucilla-bosque') },
      { tipo: 'texto', parrafos: [2], imagen: d('ojo-y-labios/dibujos/dibujo-sofa-ojos'), titular: { es: 'Un imaginario de mobiliario', en: 'An imaginary of furniture' } },
      { tipo: 'rejilla', imagenes: ['dibujo-criatura', 'dibujo-silla', 'dibujo-banco', 'boceto-7'].map((a) => d(`ojo-y-labios/dibujos/${a}`)), titular: { es: 'Dibujos', en: 'Drawings' } },
      { tipo: 'rejilla', imagenes: ['boceto-1', 'boceto-2', 'boceto-3', 'boceto-4', 'boceto-5', 'boceto-6'].map((a) => d(`ojo-y-labios/dibujos/${a}`)), titular: { es: 'Bocetos', en: 'Sketches' } },
      { tipo: 'imagen', imagen: d('ojo-y-labios/silla-ojo-campo'), sangre: true },
      { tipo: 'contra' },
    ],
  },
  'la-cabezona': {
    numero: '02',
    disciplina: { es: 'Interiorismo · Identidad', en: 'Interiors · Identity' },
    acento: '#c8372d',
    papel: '#fbf6ee',
    cabecera: 'serif',
    paginas: [
      { tipo: 'portada', imagen: d('la-cabezona/06-bolsa-pared'), titular: { es: 'Un restaurante en Madrid', en: 'A restaurant in Madrid' } },
      { tipo: 'entrada' },
      { tipo: 'imagen', imagen: d('la-cabezona/03-logo'), pie: { es: 'El logotipo, punto de partida de toda la identidad.', en: 'The logo, starting point of the whole identity.' } },
      { tipo: 'doble', imagen: d('la-cabezona/01-mural'), encajar: true, pie: { es: 'Mural principal del local.', en: 'Main mural of the restaurant.' } },
      { tipo: 'texto', parrafos: [1], imagen: d('la-cabezona/02-local'), titular: { es: 'El espacio', en: 'The space' } },
      { tipo: 'imagen', imagen: d('la-cabezona/05-bolsa-mesa'), sangre: true },
      { tipo: 'cita', cita: { es: 'Una identidad reconocible y coherente.', en: 'A recognisable, coherent identity.' } },
      { tipo: 'texto', parrafos: [2], imagen: d('la-cabezona/04-bolsas'), titular: { es: 'Color y merchandising', en: 'Colour and merchandise' } },
      { tipo: 'contra' },
    ],
  },
  'conservas-fonseca': {
    numero: '03',
    disciplina: { es: 'Packaging · Identidad', en: 'Packaging · Identity' },
    acento: '#1d3a6b',
    papel: '#f3f1ec',
    cabecera: 'ancha',
    paginas: [
      { tipo: 'portada', imagen: d('boquerones/02-boquerones-vertical'), titular: { es: 'Edición limitada', en: 'Limited edition' } },
      { tipo: 'entrada' },
      { tipo: 'imagen', imagen: d('boquerones/04-lata-trasera'), sangre: true },
      { tipo: 'doble', imagen: d('boquerones/01-anchoas'), pie: { es: 'Anchoas, edición especial.', en: 'Anchovies, special edition.' } },
      { tipo: 'texto', parrafos: [1, 2], imagen: d('boquerones/03-boqueron'), titular: { es: 'Un sistema gráfico', en: 'A graphic system' } },
      { tipo: 'cita', cita: { es: 'Un formato premium y de edición especial.', en: 'A premium, special-edition format.' } },
      { tipo: 'doble', imagen: d('boquerones/05-latas-troquel'), encajar: true, pie: { es: 'Troquel de las latas.', en: 'Die-cut of the tins.' } },
      { tipo: 'contra' },
    ],
  },
  wannabes: {
    numero: '04',
    disciplina: { es: 'Moda · Ilustración', en: 'Fashion · Illustration' },
    acento: '#e2b21c',
    papel: '#ffffff',
    cabecera: 'negra',
    paginas: [
      { tipo: 'portada', imagen: d('wannabes/01-modelo'), titular: { es: 'Rostros para llevar puestos', en: 'Faces to wear' } },
      { tipo: 'entrada' },
      { tipo: 'rejilla', imagenes: [d('wannabes/01-diseno'), d('wannabes/01-mockup')], titular: { es: 'Diseño 01', en: 'Design 01' } },
      { tipo: 'imagen', imagen: d('wannabes/02-modelo'), sangre: true },
      { tipo: 'rejilla', imagenes: [d('wannabes/02-mockup'), d('wannabes/03-diseno'), d('wannabes/03-mockup')], titular: { es: 'Diseños 02 y 03', en: 'Designs 02 and 03' } },
      { tipo: 'cita', cita: { es: 'Rostros a línea, para llevar puestos.', en: 'Line-drawn faces, made to be worn.' } },
      { tipo: 'imagen', imagen: d('wannabes/03-modelo'), sangre: true },
      { tipo: 'contra' },
    ],
  },
  moda: {
    numero: '05',
    disciplina: { es: 'Moda · Dirección de arte', en: 'Fashion · Art direction' },
    acento: '#e0201b',
    papel: '#ffffff',
    cabecera: 'condensada',
    paginas: [
      { tipo: 'portada', imagen: d('moda/motomami-10-foto'), titular: { es: 'MOTOMAMI y colección en negro', en: 'MOTOMAMI and a black collection' } },
      { tipo: 'entrada' },
      { tipo: 'imagen', imagen: d('moda/motomami-11-foto'), sangre: true },
      { tipo: 'doble', imagen: d('moda/motomami-03-interior'), pie: { es: 'MOTOMAMI — interior del disco.', en: 'MOTOMAMI — record inner sleeve.' } },
      { tipo: 'rejilla', imagenes: ['motomami-01-portada', 'motomami-02-contraportada', 'motomami-04-disco1', 'motomami-05-disco2'].map((a) => d(`moda/${a}`)), titular: { es: 'El disco', en: 'The record' } },
      { tipo: 'imagen', imagen: d('moda/motomami-06-poster'), sangre: true },
      { tipo: 'rejilla', imagenes: ['motomami-07-etiquetas', 'motomami-08-letra', 'motomami-09-foto'].map((a) => d(`moda/${a}`)), titular: { es: 'Identidad', en: 'Identity' } },
      { tipo: 'cita', cita: { es: 'Volumen y transparencias.', en: 'Volume and sheer fabrics.' }, imagen: d('moda/negro-00-figurin') },
      { tipo: 'imagen', imagen: d('moda/negro-05'), sangre: true },
      { tipo: 'rejilla', imagenes: ['negro-01', 'negro-02', 'negro-03', 'negro-04'].map((a) => d(`moda/${a}`)), titular: { es: 'Colección en negro', en: 'Black collection' } },
      { tipo: 'contra', imagen: d('moda/negro-06') },
    ],
  },
};
