// LOS PROYECTOS DE DISEÑO
// Cada proyecto tiene un título y un texto (en español e inglés).
// Cómo se maqueta cada uno como revista (páginas e imágenes) está en revistas.ts.
// Las rutas de imagen son relativas a src/assets.
// Los textos en español vienen del Portfolio Nov 2025; los ingleses son traducción.
// Wannabes y Moda tienen todavía texto PROVISIONAL.

type Texto = { es: string; en: string };

export interface Proyecto {
  id: string;
  titulo: Texto;
  año?: string;
  portada: string; // imagen principal (la portada de la revista se elige en revistas.ts)
  texto: Texto;
}

export const proyectos: Proyecto[] = [
  {
    id: 'lucilla',
    titulo: { es: 'LUSILLA', en: 'LUSILLA' },
    año: '2024',
    portada: 'diseno/ojo-y-labios/silla-ojo-campo.jpg',
    texto: {
      es: 'Este proyecto surge de una investigación sobre la pareidolia, el impulso de ver rostros donde no los hay. A partir de esta idea se cuestiona la frontera entre arte y diseño: cómo un objeto funcional puede adquirir una presencia casi humana y generar dudas sobre su uso.\n\nDe esta exploración nace Lusilla, una silla-persona completamente utilizable, pero diseñada para provocar una pausa: ¿es un mueble o una obra de arte? Su ambigüedad invita a replantear cómo percibimos y habitamos los objetos.\n\nEl proyecto incluye también un imaginario más amplio de mobiliario basado en estas formas y la producción de piezas experimentales, entre ellas unos tablones de madera que funcionan tanto como lienzos como elementos estructurales del tablero de una mesa.',
      en: 'This project grew out of research into pareidolia, the urge to see faces where there are none. From this idea it questions the border between art and design: how a functional object can take on an almost human presence and make us doubt its purpose.\n\nThis exploration gave rise to Lusilla, a chair-person that is fully usable but designed to make us pause: is it furniture or a work of art? Its ambiguity invites us to rethink how we perceive and live with objects.\n\nThe project also includes a wider imaginary of furniture based on these forms and the production of experimental pieces, among them wooden boards that work both as canvases and as structural elements of a table top.',
    },
  },
  {
    id: 'la-cabezona',
    titulo: { es: 'La Cabezona', en: 'La Cabezona' },
    portada: 'diseno/la-cabezona/02-local.jpg',
    texto: {
      es: 'El restaurante La Cabezona, ubicado en Madrid, es el punto de partida de este proyecto, que comenzó con el diseño del logotipo, el cual sirvió como base para toda la identidad visual del local.\n\nA partir de esta imagen se desarrollaron el mural principal y varias pinturas que forman parte del interior. El objetivo era unificar el espacio mediante un enfoque gráfico consistente, creando una identidad reconocible y coherente a lo largo de la intervención artística, el trabajo de diseño y los elementos funcionales del restaurante.\n\nLa paleta de colores del proyecto se definió a partir de los tonos utilizados en el mural, combinando colores vibrantes y contrastes que reflejan el carácter del restaurante. A partir de estos elementos se creó una gama de recursos visuales adicionales, incluyendo ilustraciones, piezas decorativas, el menú y el merchandising, manteniendo siempre una línea visual coherente a lo largo de todo el proyecto.',
      en: 'La Cabezona restaurant in Madrid is the starting point of this project, which began with the design of the logo, the basis for the venue’s whole visual identity.\n\nFrom this image came the main mural and several paintings that are part of the interior. The aim was to unify the space through a consistent graphic approach, creating a recognisable, coherent identity across the artistic intervention, the design work and the restaurant’s functional elements.\n\nThe colour palette was drawn from the tones used in the mural, combining vibrant colours and contrasts that reflect the restaurant’s character. From these elements a range of additional visual resources was created, including illustrations, decorative pieces, the menu and merchandise, always keeping a coherent visual line throughout the project.',
    },
  },
  {
    id: 'conservas-fonseca',
    titulo: { es: 'Conservas Fonseca', en: 'Conservas Fonseca' },
    portada: 'diseno/boquerones/02-boquerones-vertical.jpg',
    texto: {
      es: 'Desarrollo de la identidad visual para una edición limitada de la línea de anchoas de Conservas Fonseca, creando un sistema gráfico específico para el diseño del packaging de las latas.\n\nEl proyecto incluyó el diseño del logotipo y la definición de un lenguaje visual coherente que tradujera los valores de la marca a un formato premium y de edición especial. A partir de esta identidad, se produjeron diversos paneles publicitarios y materiales promocionales, adaptando los elementos gráficos a múltiples formatos y asegurando la consistencia visual en todas las aplicaciones.\n\nEl resultado es una propuesta sólida y unificada que refuerza la presencia de la marca y mejora su comunicación en los puntos de venta y en los medios gráficos.',
      en: 'Visual identity for a limited edition of Conservas Fonseca’s anchovy line, creating a specific graphic system for the design of the tins’ packaging.\n\nThe project included the logo and the definition of a coherent visual language that would translate the brand’s values into a premium, special-edition format. From this identity, several advertising panels and promotional materials were produced, adapting the graphic elements to many formats while keeping visual consistency across every application.\n\nThe result is a solid, unified proposal that strengthens the brand’s presence and improves its communication at the point of sale and in print.',
    },
  },
  {
    id: 'wannabes',
    titulo: { es: 'Wannabes', en: 'Wannabes' },
    portada: 'diseno/wannabes/03-modelo.jpg',
    texto: {
      es: 'Diseños de camiseta para la marca Wannabes a partir de mis dibujos de rostros a línea. Cada diseño se muestra con su mockup y con la prenda puesta.',
      en: 'T-shirt designs for the Wannabes brand, based on my line-drawn faces. Each design is shown with its mockup and worn.',
    },
  },
  {
    id: 'moda',
    titulo: { es: 'Moda', en: 'Fashion' },
    portada: 'diseno/moda/motomami-10-foto.jpg',
    texto: {
      es: 'Proyectos de moda: MOTOMAMI, identidad gráfica y sesión fotográfica con una moto como escenario, y una colección en negro construida con volumen y transparencias.',
      en: 'Fashion projects: MOTOMAMI, a graphic identity and photo shoot staged around a motorbike, and an all-black collection built on volume and sheer fabrics.',
    },
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

// COLORES DEL CONFIGURADOR "Crea tu pieza": tonos limpios, como los de las piezas reales
export const coloresPieza = [
  { hex: '#ffffff', nombre: { es: 'Blanco', en: 'White' } },
  { hex: '#1c1b1a', nombre: { es: 'Negro', en: 'Black' } },
  { hex: '#d2402f', nombre: { es: 'Rojo', en: 'Red' } },
  { hex: '#eeb4b7', nombre: { es: 'Rosa palo', en: 'Blush pink' } },
  { hex: '#e9853b', nombre: { es: 'Naranja', en: 'Orange' } },
  { hex: '#f2c94c', nombre: { es: 'Amarillo', en: 'Yellow' } },
  { hex: '#3e8e5e', nombre: { es: 'Verde', en: 'Green' } },
  { hex: '#8fd1c2', nombre: { es: 'Verde agua', en: 'Mint' } },
  { hex: '#2bb3c0', nombre: { es: 'Turquesa', en: 'Turquoise' } },
  { hex: '#3fa9e0', nombre: { es: 'Azul cielo', en: 'Sky blue' } },
  { hex: '#2e5aa8', nombre: { es: 'Azul', en: 'Blue' } },
  { hex: '#1f2d4f', nombre: { es: 'Azul noche', en: 'Navy' } },
  { hex: '#b9a2d8', nombre: { es: 'Lila', en: 'Lilac' } },
  { hex: '#7b52ab', nombre: { es: 'Morado', en: 'Purple' } },
  { hex: '#d8c3a0', nombre: { es: 'Arena', en: 'Sand' } },
];
