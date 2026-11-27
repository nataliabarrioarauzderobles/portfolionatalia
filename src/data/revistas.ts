// CADA PROYECTO DE DISEÑO COMO UNA REVISTA (formato A, como la de Lusilla que maquetó Natalia)
// · Lusilla: son las páginas de su PDF (LUCILLAWEB), tal cual.
// · El resto sigue el mismo estilo, con estos tipos de página:
//    portada  → foto a sangre con el nombre del proyecto en mayúsculas muy espaciadas (encajar: dibujo entero, más pequeño, sobre blanco)
//    texto    → página blanca solo con el texto del proyecto (de proyectos.ts), sin títulos (centrado: en el centro de la página)
//    imagen   → una foto a sangre
//    doble    → una foto que ocupa las dos páginas abiertas (encajar: entera, sobre blanco)
//    pequena  → una imagen pequeña centrada sobre blanco
//    negra    → página negra con una o dos imágenes (dibujos)
//    par      → dos imágenes, una encima de otra, sobre blanco
//    contra   → contraportada blanca: nombre y año, una imagen pequeña y tu nombre espaciado
//    hoja     → una página ya maquetada, como imagen (Lusilla y La Cabezona); enlace: una zona pulsable (en % de la página)
// "vistas" (opcional) dice qué páginas se ven juntas en el ordenador (empezando a contar en 0).

export type Pagina =
  | { tipo: 'portada'; imagen: string; oscuro?: boolean; encajar?: boolean }
  | { tipo: 'texto'; centrado?: boolean }
  | { tipo: 'imagen'; imagen: string }
  | { tipo: 'doble'; imagen: string; encajar?: boolean }
  | { tipo: 'pequena'; imagen: string }
  | { tipo: 'negra'; imagenes: string[] }
  | { tipo: 'par'; imagenes: string[] }
  | { tipo: 'contra'; imagen: string }
  | { tipo: 'hoja'; imagen: string; enlace?: { href: string; texto: string; x: number; y: number; w: number; h: number } };

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
    // la portada de siempre (el logo con el nombre en la letra de la web); después, las páginas de su PDF (LAcabezonaweb)
    paginas: [
      { tipo: 'portada', imagen: d('la-cabezona/03-logo'), oscuro: true, encajar: true },
      // página 2: el texto, con el enlace a la web del restaurante encima de "https://lacabezona.es/"
      { tipo: 'hoja', imagen: 'diseno/revistas/la-cabezona/pagina-02.jpg', enlace: { href: 'https://lacabezona.es/', texto: 'lacabezona.es', x: 41.5, y: 74.8, w: 24.5, h: 4.4 } },
      ...hojas('la-cabezona', 12).slice(2),
    ],
    // portada sola; después, de dos en dos (4-5 es el mural a doble página); contraportada sola
    vistas: [[0], [1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11]],
  },
  'conservas-fonseca': {
    disciplina: { es: 'Packaging · Identidad', en: 'Packaging · Identity' },
    // la portada de siempre (los boquerones con el nombre en la letra de la web); después, las páginas de su PDF (CONSERVASWEB)
    paginas: [
      { tipo: 'portada', imagen: d('boquerones/02-boquerones-vertical'), oscuro: true },
      // página 2: el texto, con el enlace a la web de la marca encima de "https://www.conservasfonseca.com/"
      { tipo: 'hoja', imagen: 'diseno/revistas/conservas-fonseca/pagina-02.jpg', enlace: { href: 'https://www.conservasfonseca.com/', texto: 'conservasfonseca.com', x: 36.6, y: 66.1, w: 34.6, h: 3.2 } },
      ...hojas('conservas-fonseca', 10).slice(2),
    ],
    // portada sola; después, de dos en dos (4-5 es el troquel de las latas a doble página); contraportada sola
    vistas: [[0], [1, 2], [3, 4], [5, 6], [7, 8], [9]],
  },
  wannabes: {
    disciplina: { es: 'Moda · Ilustración', en: 'Fashion · Illustration' },
    // la portada de siempre (el dibujo del diseño 03 con el nombre en la letra de la web);
    // después, las páginas de su PDF (WANNABESWEB) tal cual están maquetadas
    paginas: [
      { tipo: 'portada', imagen: d('wannabes/03-diseno'), oscuro: true, encajar: true },
      ...hojas('wannabes', 20).slice(1),
    ],
    // portada sola; después, de dos en dos (4-5, 8-9 y 12-13 son fotos a doble página); contraportada sola
    vistas: [[0], [1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19]],
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
