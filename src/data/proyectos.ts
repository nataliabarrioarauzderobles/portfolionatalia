// LOS PROYECTOS DE DISEÑO
// Cada proyecto tiene un texto (en español e inglés) y uno o varios bloques de imágenes.
// Las rutas de imagen son relativas a src/assets.
// Los textos son PROVISIONALES: sustitúyelos por los tuyos cuando los tengas.

type Texto = { es: string; en: string };

export interface Bloque {
  subtitulo?: Texto;
  imagenes: string[];
  // 'ancho': una imagen a todo lo ancho · 'rejilla': cuadrícula · 'trio': diseño → mockup → modelo
  disposicion?: 'ancho' | 'rejilla' | 'trio';
}

export interface Proyecto {
  id: string; // también es el ancla del enlace: /diseno#la-cabezona
  titulo: Texto;
  texto: Texto;
  bloques: Bloque[];
}

const d = (carpeta: string, ...archivos: string[]) => archivos.map((a) => `diseno/${carpeta}/${a}.jpg`);

export const proyectos: Proyecto[] = [
  {
    id: 'ojo-y-labios',
    titulo: { es: 'Ojo y labios', en: 'Eye & Lips' },
    texto: {
      es: 'Piezas escultóricas que convierten fragmentos del rostro —ojos y labios— en objetos para habitar el espacio. La Silla Ojo lleva esa idea al mobiliario: una pieza funcional con carácter de personaje. Todas las piezas están hechas a mano y se venden como decoración de interiores. También puedes encargar la tuya, con la forma y los colores que elijas.',
      en: 'Sculptural pieces that turn fragments of the face —eyes and lips— into objects to live with. The Eye Chair takes the idea into furniture: a functional piece with the presence of a character. Every piece is handmade and sold as interior decoration. You can also commission your own, in the shape and colours you choose.',
    },
    bloques: [
      // las piezas sueltas de ojos y labios ya se ven arriba, en "Diseña tu pieza"
      { subtitulo: { es: 'Silla Ojo', en: 'Eye Chair' }, imagenes: d('ojo-y-labios', 'silla-ojo-campo', 'silla-ojo-1', 'silla-ojo-detalle'), disposicion: 'rejilla' },
      { subtitulo: { es: 'En casa', en: 'At home' }, imagenes: d('ojo-y-labios', 'piezas-estanteria'), disposicion: 'ancho' },
      {
        subtitulo: { es: 'Dibujos y bocetos', en: 'Drawings and sketches' },
        imagenes: [
          ...d('ojo-y-labios/dibujos', 'dibujo-criatura', 'dibujo-silla', 'dibujo-sofa-ojos', 'dibujo-banco'),
          ...d('ojo-y-labios/dibujos', 'boceto-1', 'boceto-2', 'boceto-3', 'boceto-4', 'boceto-5', 'boceto-6', 'boceto-7', 'boceto-8'),
        ],
        disposicion: 'rejilla',
      },
    ],
  },
  {
    id: 'la-cabezona',
    titulo: { es: 'La Cabezona', en: 'La Cabezona' },
    texto: {
      es: 'Identidad visual y mural para La Cabezona. A partir de un rostro dibujado a línea y lleno de color nacieron el logotipo, el mural del local y las aplicaciones de marca, como las bolsas.',
      en: 'Visual identity and mural for La Cabezona. A line-drawn face full of colour became the logo, the mural inside the venue and the brand applications, such as the bags.',
    },
    bloques: [
      { imagenes: d('la-cabezona', '01-mural'), disposicion: 'ancho' },
      { imagenes: d('la-cabezona', '02-local', '03-logo', '04-bolsas', '05-bolsa-mesa', '06-bolsa-pared'), disposicion: 'rejilla' },
    ],
  },
  {
    id: 'boquerones',
    titulo: { es: 'Boquerones', en: 'Boquerones' },
    texto: {
      es: 'Ilustraciones de boquerones y anchoas en colores vivos, llevadas al diseño de packaging para latas de conserva.',
      en: 'Brightly coloured illustrations of anchovies, taken into packaging design for tinned-fish cans.',
    },
    bloques: [
      { imagenes: d('boquerones', '01-anchoas'), disposicion: 'ancho' },
      { imagenes: d('boquerones', '02-boquerones-vertical', '03-boqueron', '04-lata-trasera'), disposicion: 'rejilla' },
      { subtitulo: { es: 'Latas', en: 'Cans' }, imagenes: d('boquerones', '05-latas-troquel'), disposicion: 'ancho' },
    ],
  },
  {
    id: 'wannabes',
    titulo: { es: 'Wannabes', en: 'Wannabes' },
    texto: {
      es: 'Diseños de camiseta para la marca Wannabes a partir de mis dibujos de rostros a línea. Cada diseño se muestra con su mockup y con la prenda puesta.',
      en: 'T-shirt designs for the Wannabes brand, based on my line-drawn faces. Each design is shown with its mockup and worn.',
    },
    bloques: [
      { subtitulo: { es: 'Diseño 01', en: 'Design 01' }, imagenes: d('wannabes', '01-diseno', '01-mockup', '01-modelo'), disposicion: 'trio' },
      { subtitulo: { es: 'Diseño 02', en: 'Design 02' }, imagenes: d('wannabes', '02-mockup', '02-modelo'), disposicion: 'trio' },
      { subtitulo: { es: 'Diseño 03', en: 'Design 03' }, imagenes: d('wannabes', '03-diseno', '03-mockup', '03-modelo'), disposicion: 'trio' },
    ],
  },
  {
    id: 'moda',
    titulo: { es: 'Moda', en: 'Fashion' },
    texto: {
      es: 'Proyectos de moda: MOTOMAMI, identidad gráfica y sesión fotográfica con una moto como escenario, y una colección en negro construida con volumen y transparencias.',
      en: 'Fashion projects: MOTOMAMI, a graphic identity and photo shoot staged around a motorbike, and an all-black collection built on volume and sheer fabrics.',
    },
    bloques: [
      {
        subtitulo: { es: 'MOTOMAMI', en: 'MOTOMAMI' },
        // disco (portada, contraportada, interior y discos), póster, etiquetas, lettering y sesión de fotos
        imagenes: d('moda', 'motomami-01-portada', 'motomami-02-contraportada', 'motomami-03-interior', 'motomami-04-disco1', 'motomami-05-disco2', 'motomami-06-poster', 'motomami-07-etiquetas', 'motomami-08-letra', 'motomami-09-foto', 'motomami-10-foto', 'motomami-11-foto'),
        disposicion: 'rejilla',
      },
      {
        subtitulo: { es: 'Colección en negro', en: 'Black collection' },
        imagenes: d('moda', 'negro-00-figurin', 'negro-01', 'negro-02', 'negro-03', 'negro-04', 'negro-05', 'negro-06'),
        disposicion: 'rejilla',
      },
    ],
  },
];

// Modelos de partida para "Diseña tu pieza"
export const modelosPieza = [
  { id: 'ojo-lunares', imagen: 'diseno/ojo-y-labios/ojo-lunares.jpg', nombre: { es: 'Ojo de lunares', en: 'Polka-dot eye' } },
  { id: 'ojo-turquesa', imagen: 'diseno/ojo-y-labios/ojo-turquesa.jpg', nombre: { es: 'Ojo turquesa', en: 'Turquoise eye' } },
  { id: 'ojo-pestanas', imagen: 'diseno/ojo-y-labios/ojo-pestanas-azules.jpg', nombre: { es: 'Ojo de pestañas azules', en: 'Blue-lash eye' } },
  { id: 'ojo-morado', imagen: 'diseno/ojo-y-labios/ojo-morado.jpg', nombre: { es: 'Ojo morado', en: 'Purple eye' } },
  { id: 'labios', imagen: 'diseno/ojo-y-labios/labios-rojos.jpg', nombre: { es: 'Labios', en: 'Lips' } },
  { id: 'silla-ojo', imagen: 'diseno/ojo-y-labios/silla-ojo-1.jpg', nombre: { es: 'Silla Ojo', en: 'Eye Chair' } },
];

export const coloresPieza = [
  { id: 'rojo', hex: '#C8352E', nombre: { es: 'Rojo', en: 'Red' } },
  { id: 'naranja', hex: '#E07B39', nombre: { es: 'Naranja', en: 'Orange' } },
  { id: 'amarillo', hex: '#E9C33B', nombre: { es: 'Amarillo', en: 'Yellow' } },
  { id: 'verde', hex: '#3F8F5A', nombre: { es: 'Verde', en: 'Green' } },
  { id: 'turquesa', hex: '#2FB3B0', nombre: { es: 'Turquesa', en: 'Turquoise' } },
  { id: 'azul', hex: '#2E5FA8', nombre: { es: 'Azul', en: 'Blue' } },
  { id: 'morado', hex: '#7A4FA0', nombre: { es: 'Morado', en: 'Purple' } },
  { id: 'rosa', hex: '#E58CB0', nombre: { es: 'Rosa', en: 'Pink' } },
  { id: 'beige', hex: '#CDB89A', nombre: { es: 'Beige', en: 'Beige' } },
  { id: 'negro', hex: '#1E1C1A', nombre: { es: 'Negro', en: 'Black' } },
  { id: 'blanco', hex: '#FBFAF7', nombre: { es: 'Blanco', en: 'White' } },
];

export const tamanosPieza = [
  { id: 'pequena', nombre: { es: 'Pequeña (unos 30 cm)', en: 'Small (about 30 cm)' } },
  { id: 'mediana', nombre: { es: 'Mediana (unos 50 cm)', en: 'Medium (about 50 cm)' } },
  { id: 'grande', nombre: { es: 'Grande (unos 80 cm)', en: 'Large (about 80 cm)' } },
  { id: 'medida', nombre: { es: 'A medida', en: 'Custom size' } },
];
