// LOS PROYECTOS DE DISEÑO
// Cada proyecto tiene una imagen de portada (la que se ve en la página de Diseño),
// un texto (en español e inglés) y uno o varios bloques de imágenes que se ven al entrar en él.
// Las rutas de imagen son relativas a src/assets.
// Los textos en español vienen del Portfolio Nov 2025; los ingleses son traducción.
// Wannabes y Moda tienen todavía texto PROVISIONAL.

type Texto = { es: string; en: string };

export interface Bloque {
  subtitulo?: Texto;
  imagenes: string[];
  // 'ancho': una imagen protagonista · 'rejilla': collage · 'trio': diseño → mockup → modelo
  disposicion?: 'ancho' | 'rejilla' | 'trio';
}

export interface Proyecto {
  id: string;
  titulo: Texto;
  año?: string;
  portada: string; // imagen de la portada en la página de Diseño
  texto: Texto;
  bloques: Bloque[];
}

const d = (carpeta: string, ...archivos: string[]) => archivos.map((a) => `diseno/${carpeta}/${a}.jpg`);

export const proyectos: Proyecto[] = [
  {
    id: 'lucilla',
    titulo: { es: 'LUCILLA', en: 'LUCILLA' },
    año: '2024',
    portada: 'diseno/ojo-y-labios/silla-ojo-campo.jpg',
    texto: {
      es: 'Este proyecto surge de una investigación sobre la pareidolia, el impulso de ver rostros donde no los hay. A partir de esta idea se cuestiona la frontera entre arte y diseño: cómo un objeto funcional puede adquirir una presencia casi humana y generar dudas sobre su uso.\n\nDe esta exploración nace Lucilla, una silla-persona completamente utilizable, pero diseñada para provocar una pausa: ¿es un mueble o una obra de arte? Su ambigüedad invita a replantear cómo percibimos y habitamos los objetos.\n\nEl proyecto incluye también un imaginario más amplio de mobiliario basado en estas formas y la producción de piezas experimentales, entre ellas unos tablones de madera que funcionan tanto como lienzos como elementos estructurales del tablero de una mesa.',
      en: 'This project grew out of research into pareidolia, the urge to see faces where there are none. From this idea it questions the border between art and design: how a functional object can take on an almost human presence and make us doubt its purpose.\n\nThis exploration gave rise to Lucilla, a chair-person that is fully usable but designed to make us pause: is it furniture or a work of art? Its ambiguity invites us to rethink how we perceive and live with objects.\n\nThe project also includes a wider imaginary of furniture based on these forms and the production of experimental pieces, among them wooden boards that work both as canvases and as structural elements of a table top.',
    },
    bloques: [
      { imagenes: d('ojo-y-labios', 'silla-ojo-campo'), disposicion: 'ancho' },
      { subtitulo: { es: 'Lucilla', en: 'Lucilla' }, imagenes: d('ojo-y-labios', 'silla-ojo-1', 'silla-ojo-detalle'), disposicion: 'rejilla' },
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
    portada: 'diseno/la-cabezona/02-local.jpg',
    texto: {
      es: 'El restaurante La Cabezona, ubicado en Madrid, es el punto de partida de este proyecto, que comenzó con el diseño del logotipo, el cual sirvió como base para toda la identidad visual del local.\n\nA partir de esta imagen se desarrollaron el mural principal y varias pinturas que forman parte del interior. El objetivo era unificar el espacio mediante un enfoque gráfico consistente, creando una identidad reconocible y coherente a lo largo de la intervención artística, el trabajo de diseño y los elementos funcionales del restaurante.\n\nLa paleta de colores del proyecto se definió a partir de los tonos utilizados en el mural, combinando colores vibrantes y contrastes que reflejan el carácter del restaurante. A partir de estos elementos se creó una gama de recursos visuales adicionales, incluyendo ilustraciones, piezas decorativas, el menú y el merchandising, manteniendo siempre una línea visual coherente a lo largo de todo el proyecto.',
      en: 'La Cabezona restaurant in Madrid is the starting point of this project, which began with the design of the logo, the basis for the venue’s whole visual identity.\n\nFrom this image came the main mural and several paintings that are part of the interior. The aim was to unify the space through a consistent graphic approach, creating a recognisable, coherent identity across the artistic intervention, the design work and the restaurant’s functional elements.\n\nThe colour palette was drawn from the tones used in the mural, combining vibrant colours and contrasts that reflect the restaurant’s character. From these elements a range of additional visual resources was created, including illustrations, decorative pieces, the menu and merchandise, always keeping a coherent visual line throughout the project.',
    },
    bloques: [
      { imagenes: d('la-cabezona', '01-mural'), disposicion: 'ancho' },
      { imagenes: d('la-cabezona', '02-local', '03-logo', '04-bolsas', '05-bolsa-mesa', '06-bolsa-pared'), disposicion: 'rejilla' },
    ],
  },
  {
    id: 'conservas-fonseca',
    titulo: { es: 'Conservas Fonseca', en: 'Conservas Fonseca' },
    portada: 'diseno/boquerones/02-boquerones-vertical.jpg',
    texto: {
      es: 'Desarrollo de la identidad visual para una edición limitada de la línea de anchoas de Conservas Fonseca, creando un sistema gráfico específico para el diseño del packaging de las latas.\n\nEl proyecto incluyó el diseño del logotipo y la definición de un lenguaje visual coherente que tradujera los valores de la marca a un formato premium y de edición especial. A partir de esta identidad, se produjeron diversos paneles publicitarios y materiales promocionales, adaptando los elementos gráficos a múltiples formatos y asegurando la consistencia visual en todas las aplicaciones.\n\nEl resultado es una propuesta sólida y unificada que refuerza la presencia de la marca y mejora su comunicación en los puntos de venta y en los medios gráficos.',
      en: 'Visual identity for a limited edition of Conservas Fonseca’s anchovy line, creating a specific graphic system for the design of the tins’ packaging.\n\nThe project included the logo and the definition of a coherent visual language that would translate the brand’s values into a premium, special-edition format. From this identity, several advertising panels and promotional materials were produced, adapting the graphic elements to many formats while keeping visual consistency across every application.\n\nThe result is a solid, unified proposal that strengthens the brand’s presence and improves its communication at the point of sale and in print.',
    },
    bloques: [
      { imagenes: d('boquerones', '01-anchoas'), disposicion: 'ancho' },
      { imagenes: d('boquerones', '02-boquerones-vertical', '03-boqueron', '04-lata-trasera'), disposicion: 'rejilla' },
      { subtitulo: { es: 'Latas', en: 'Tins' }, imagenes: d('boquerones', '05-latas-troquel'), disposicion: 'ancho' },
    ],
  },
  {
    id: 'wannabes',
    titulo: { es: 'Wannabes', en: 'Wannabes' },
    portada: 'diseno/wannabes/03-modelo.jpg',
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
    portada: 'diseno/moda/motomami-10-foto.jpg',
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

// PIEZAS DECORATIVAS (ojos y labios): texto de presentación, del Portfolio Nov 2025
export const textoPiezas = {
  es: [
    'Esta colección está compuesta por piezas de madera que funcionan como decoración de mobiliario. Cada pieza encaja en una base que actúa como mesa, convirtiéndose la obra en sí misma en su superficie.',
    'El concepto nace con la intención de redefinir la línea entre el arte y el diseño. Al mismo tiempo, estas piezas también pueden funcionar de manera independiente como obras de arte, sirviendo como decoraciones únicas para el hogar.',
  ],
  en: [
    'This collection is made up of wooden pieces that work as furniture decoration. Each piece fits into a base that acts as a table, so the artwork itself becomes its surface.',
    'The idea was born to redraw the line between art and design. At the same time, the pieces can stand on their own as artworks, as unique decorations for the home.',
  ],
};

// Piezas ya diseñadas (fotos de las piezas reales)
export const modelosPieza = [
  { id: 'ojo-lunares', imagen: 'diseno/ojo-y-labios/ojo-lunares.jpg', nombre: { es: 'Ojo de lunares', en: 'Polka-dot eye' } },
  { id: 'ojo-turquesa', imagen: 'diseno/ojo-y-labios/ojo-turquesa.jpg', nombre: { es: 'Ojo turquesa', en: 'Turquoise eye' } },
  { id: 'ojo-pestanas', imagen: 'diseno/ojo-y-labios/ojo-pestanas-azules.jpg', nombre: { es: 'Ojo de pestañas azules', en: 'Blue-lash eye' } },
  { id: 'ojo-morado', imagen: 'diseno/ojo-y-labios/ojo-morado.jpg', nombre: { es: 'Ojo morado', en: 'Purple eye' } },
  { id: 'labios', imagen: 'diseno/ojo-y-labios/labios-rojos.jpg', nombre: { es: 'Labios', en: 'Lips' } },
];

// Paleta del configurador: tonos con nombre, como una carta de pintura
export const coloresPieza = [
  { id: 'rojo-labio', hex: '#C8352E', nombre: { es: 'Rojo labio', en: 'Lip red' } },
  { id: 'terracota', hex: '#B65A3C', nombre: { es: 'Terracota', en: 'Terracotta' } },
  { id: 'naranja', hex: '#E07B39', nombre: { es: 'Naranja', en: 'Orange' } },
  { id: 'mostaza', hex: '#D9A83A', nombre: { es: 'Mostaza', en: 'Mustard' } },
  { id: 'amarillo', hex: '#EBCB45', nombre: { es: 'Amarillo', en: 'Yellow' } },
  { id: 'oliva', hex: '#8A8B4E', nombre: { es: 'Oliva', en: 'Olive' } },
  { id: 'verde-botella', hex: '#2F5D4B', nombre: { es: 'Verde botella', en: 'Bottle green' } },
  { id: 'turquesa', hex: '#2FB3B0', nombre: { es: 'Turquesa', en: 'Turquoise' } },
  { id: 'azul-cielo', hex: '#8FB5D6', nombre: { es: 'Azul cielo', en: 'Sky blue' } },
  { id: 'azul-cobalto', hex: '#2E5FA8', nombre: { es: 'Azul cobalto', en: 'Cobalt blue' } },
  { id: 'lavanda', hex: '#B6A3CF', nombre: { es: 'Lavanda', en: 'Lavender' } },
  { id: 'morado', hex: '#7A4FA0', nombre: { es: 'Morado', en: 'Purple' } },
  { id: 'rosa', hex: '#E58CB0', nombre: { es: 'Rosa', en: 'Pink' } },
  { id: 'arena', hex: '#D9C7AA', nombre: { es: 'Arena', en: 'Sand' } },
  { id: 'negro', hex: '#1E1C1A', nombre: { es: 'Negro', en: 'Black' } },
  { id: 'blanco', hex: '#FBFAF7', nombre: { es: 'Blanco hueso', en: 'Bone white' } },
];
