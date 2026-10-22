// CADA PROYECTO DE DISEÑO COMO UNA REVISTA (formato A, como la de Lucilla que maquetó Natalia)
// · Lucilla: son las páginas de su PDF (LUCILLAWEB), tal cual.
// · El resto sigue el mismo estilo, con estos tipos de página:
//    portada  → foto a sangre con el nombre del proyecto en mayúsculas muy espaciadas
//    texto    → página blanca solo con el texto del proyecto (de proyectos.ts), sin títulos
//    imagen   → una foto a sangre
//    doble    → una foto que ocupa las dos páginas abiertas (encajar: entera, sobre blanco)
//    pequena  → una imagen pequeña centrada sobre blanco
//    negra    → página negra con una o dos imágenes (dibujos)
//    par      → dos imágenes, una encima de otra, sobre blanco
//    contra   → contraportada blanca: nombre y año, una imagen pequeña y tu nombre espaciado
//    hoja     → una página ya maquetada, como imagen (la usan las páginas de Lucilla)
// "vistas" (opcional) dice qué páginas se ven juntas en el ordenador (empezando a contar en 0).

export type Pagina =
  | { tipo: 'portada'; imagen: string; oscuro?: boolean }
  | { tipo: 'texto' }
  | { tipo: 'imagen'; imagen: string }
  | { tipo: 'doble'; imagen: string; encajar?: boolean }
  | { tipo: 'pequena'; imagen: string }
  | { tipo: 'negra'; imagenes: string[] }
  | { tipo: 'par'; imagenes: string[] }
  | { tipo: 'contra'; imagen: string }
  | { tipo: 'hoja'; imagen: string };

export interface Revista {
  año?: string;
  disciplina: { es: string; en: string };
  paginas: Pagina[];
  vistas?: number[][];
}

const d = (ruta: string) => `diseno/${ruta}.jpg`;
const hojas = (carpeta: string, n: number): Pagina[] =>
  Array.from({ length: n }, (_, i) => ({ tipo: 'hoja', imagen: `diseno/revistas/${carpeta}/pagina-${String(i + 1).padStart(2, '0')}.jpg` }));

export const revistas: Record<string, Revista> = {
  lucilla: {
    año: '2024',
    disciplina: { es: 'Mobiliario · Escultura', en: 'Furniture · Sculpture' },
    paginas: hojas('lucilla', 19),
    // portada y texto solos; después, de dos en dos (5-6 es la doble página del césped); contraportada sola
    vistas: [[0], [1], [2, 3], [4, 5], [6, 7], [8, 9], [10, 11], [12, 13], [14, 15], [16, 17], [18]],
  },
  'la-cabezona': {
    disciplina: { es: 'Interiorismo · Identidad', en: 'Interiors · Identity' },
    paginas: [
      { tipo: 'portada', imagen: d('la-cabezona/06-bolsa-pared') },
      { tipo: 'texto' },
      { tipo: 'imagen', imagen: d('la-cabezona/02-local') },
      { tipo: 'pequena', imagen: d('la-cabezona/03-logo') },
      { tipo: 'doble', imagen: d('la-cabezona/01-mural'), encajar: true },
      { tipo: 'imagen', imagen: d('la-cabezona/05-bolsa-mesa') },
      { tipo: 'pequena', imagen: d('la-cabezona/04-bolsas') },
      { tipo: 'contra', imagen: d('la-cabezona/03-logo') },
    ],
  },
  'conservas-fonseca': {
    disciplina: { es: 'Packaging · Identidad', en: 'Packaging · Identity' },
    paginas: [
      { tipo: 'portada', imagen: d('boquerones/02-boquerones-vertical'), oscuro: true },
      { tipo: 'texto' },
      { tipo: 'imagen', imagen: d('boquerones/04-lata-trasera') },
      { tipo: 'pequena', imagen: d('boquerones/03-boqueron') },
      { tipo: 'doble', imagen: d('boquerones/01-anchoas') },
      { tipo: 'doble', imagen: d('boquerones/05-latas-troquel'), encajar: true },
      { tipo: 'contra', imagen: d('boquerones/01-anchoas') },
    ],
  },
  wannabes: {
    disciplina: { es: 'Moda · Ilustración', en: 'Fashion · Illustration' },
    paginas: [
      { tipo: 'portada', imagen: d('wannabes/01-modelo'), oscuro: true },
      { tipo: 'texto' },
      { tipo: 'imagen', imagen: d('wannabes/02-modelo') },
      { tipo: 'par', imagenes: [d('wannabes/01-diseno'), d('wannabes/01-mockup')] },
      { tipo: 'imagen', imagen: d('wannabes/03-modelo') },
      { tipo: 'par', imagenes: [d('wannabes/03-diseno'), d('wannabes/03-mockup')] },
      { tipo: 'pequena', imagen: d('wannabes/02-mockup') },
      { tipo: 'contra', imagen: d('wannabes/01-diseno') },
    ],
  },
  moda: {
    disciplina: { es: 'Moda · Dirección de arte', en: 'Fashion · Art direction' },
    paginas: [
      { tipo: 'portada', imagen: d('moda/motomami-10-foto') },
      { tipo: 'texto' },
      { tipo: 'imagen', imagen: d('moda/motomami-11-foto') },
      { tipo: 'negra', imagenes: [d('moda/motomami-01-portada'), d('moda/motomami-02-contraportada')] },
      { tipo: 'doble', imagen: d('moda/motomami-03-interior') },
      { tipo: 'negra', imagenes: [d('moda/motomami-04-disco1'), d('moda/motomami-05-disco2')] },
      { tipo: 'imagen', imagen: d('moda/motomami-06-poster') },
      { tipo: 'par', imagenes: [d('moda/motomami-07-etiquetas'), d('moda/motomami-08-letra')] },
      { tipo: 'imagen', imagen: d('moda/motomami-09-foto') },
      { tipo: 'pequena', imagen: d('moda/negro-00-figurin') },
      { tipo: 'imagen', imagen: d('moda/negro-05') },
      { tipo: 'par', imagenes: [d('moda/negro-01'), d('moda/negro-02')] },
      { tipo: 'par', imagenes: [d('moda/negro-03'), d('moda/negro-04')] },
      { tipo: 'imagen', imagen: d('moda/negro-06') },
      { tipo: 'contra', imagen: d('moda/motomami-01-portada') },
    ],
  },
};
