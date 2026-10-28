// LA FICHA DE CADA CUADRO
// Precios en euros: vienen del catálogo de Venezuela (en dólares) pasados al cambio del BCE de oct 2026.
// Para añadir una obra nueva:
//   1. Crea la carpeta src/assets/pintura/<serie>/<id>/ con la foto principal <id>.jpg
//      y, si tiene, sus mockups (<id>-mockup.jpg, <id>-mockup-2.jpg…).
//   2. Añade una línea en la lista de su serie, abajo.
// El orden de cada lista es el orden en que aparecen en la web.
// Los textos en español vienen del cuadernillo CUADERNILLO_VENEZUELA; los ingleses son traducción.

export type Serie = 'formas' | 'open' | 'interfaces' | 'sueltas';
export type Tecnica = 'oleo' | 'mixta' | 'acrilico';
type Texto = { es: string; en: string };

export interface Obra {
  id: string;        // nombre de la carpeta en src/assets (sin tildes ni espacios)
  titulo: string;    // título tal como se ve en la web
  medidas?: string;  // en cm, p. ej. '90 x 70'
  precio?: number;   // en euros; sin precio, la web dice "Consultar precio"
  vendida?: boolean;
  texto?: Texto;     // descripción de la obra (se lee en el visor, plegada)
}

export interface SerieObras {
  id: Serie;
  tecnica?: Tecnica; // técnica común a toda la serie
  año?: string;
  texto?: Texto;     // presentación de la serie
  obras: Obra[];
}

export const series: SerieObras[] = [
  {
    id: 'formas',
    tecnica: 'oleo',
    año: '2026',
    texto: {
      es: 'En DE-formando, la forma se construye, se transforma y se deforma, mientras el gesto humano aparece y poco a poco se desvanece dentro de la propia materia.',
      en: 'In DE-formando, form is built, transformed and deformed, while the human gesture appears and gradually fades into the material itself.',
    },
    // Empieza con obras disponibles; las vendidas van al final de la serie.
    obras: [
      { id: 'despersonificacion', titulo: 'Despersonificación', medidas: '130 x 90', precio: 2000, texto: {
        es: 'Despersonificación representa la pérdida progresiva de la identidad. Las formas se superponen y se fragmentan hasta eliminar el gesto humano, mientras que el fondo oscuro funciona como un espacio que contiene y separa los distintos elementos de la composición. Su profundidad contrasta con las formas del primer plano y refuerza la sensación de aislamiento de la figura.',
        en: 'Despersonificación represents the gradual loss of identity. Forms overlap and fragment until the human gesture is erased, while the dark background works as a space that holds and separates the elements of the composition. Its depth contrasts with the forms in the foreground and heightens the figure’s sense of isolation.' } },
      { id: 'encuentro', titulo: 'Encuentro', medidas: '130 x 90', precio: 2000, texto: {
        es: 'Encuentro es un símbolo de transformación continua. En esta pieza, la mirada atraviesa la estructura formal como una huella de permanencia, sugiriendo que incluso dentro de la deformación persiste una forma de reconocerse.',
        en: 'Encuentro is a symbol of continuous transformation. In this piece, the gaze passes through the formal structure like a trace of permanence, suggesting that even within deformation there remains a way of recognising oneself.' } },
      { id: 'escapatoria', titulo: 'Escapatoria', medidas: '130 x 90', precio: 2000, texto: {
        es: 'Escapatoria representa un momento de apertura. Un gesto corporal emerge de la estructura formal, sugiriendo la posibilidad de trascender los límites impuestos por la propia forma.',
        en: 'Escapatoria represents a moment of opening. A bodily gesture emerges from the formal structure, suggesting the possibility of transcending the limits imposed by form itself.' } },
      { id: 'desglose', titulo: 'Desglose', medidas: '90 x 70', precio: 1450, texto: {
        es: 'Desglose actúa como el cierre y la depuración de la serie. La figura humana se diluye por completo: ya no existe el rostro. Color y espacio se convierten en el único y verdadero cuerpo de la obra.',
        en: 'Desglose acts as the closing and distillation of the series. The human figure dissolves completely: the face no longer exists. Colour and space become the one true body of the work.' } },
      { id: 'logica-del-espacio', titulo: 'Lógica del espacio', medidas: '85 x 70', precio: 1400, texto: {
        es: 'Lógica del espacio propone una arquitectura de la forma. Entre equilibrio, contención y tensión, el espacio emerge como una fuerza silenciosa que construye la identidad de aquello que habita.',
        en: 'Lógica del espacio proposes an architecture of form. Between balance, restraint and tension, space emerges as a silent force that builds the identity of whatever inhabits it.' } },
      { id: 'deconstruccion-grafica', titulo: 'Deconstrucción gráfica', medidas: '107 x 65', precio: 1550, texto: {
        es: 'Deconstrucción gráfica parte de la transformación de la forma: las masas llenas se convierten en estructuras vacías y abiertas. El gesto humano permanece como hilo conductor, acompañado por el color como elemento de tensión y equilibrio.',
        en: 'Deconstrucción gráfica starts from the transformation of form: solid masses become empty, open structures. The human gesture remains as a common thread, with colour acting as an element of tension and balance.' } },
      { id: 'el-limite-del-gesto', titulo: 'El límite del gesto', medidas: '60 x 40', precio: 900, texto: {
        es: 'El límite del gesto explora el momento en que la figura deja de estar contenida dentro del lienzo. Las distintas capas y la textura rugosa generan una superficie que sobresale y da volumen a las formas, haciendo que el gesto parezca querer salir del plano. La materia se convierte así en una extensión del propio gesto.',
        en: 'El límite del gesto explores the moment when the figure is no longer contained within the canvas. The layers and rough texture create a surface that protrudes and gives volume to the forms, as if the gesture wanted to leave the picture plane. The material thus becomes an extension of the gesture itself.' } },
      { id: 'estructura', titulo: 'Identidad en capas', medidas: '120 x 90', precio: 1850 },
      { id: 'nudo', titulo: 'Nudo', medidas: '80 x 60', precio: 1300, texto: {
        es: 'Nudo materializa el punto de máxima fricción dentro de la serie. Las figuras humanas pierden sus límites individuales para entrelazarse y fundirse en una única estructura orgánica. Entre líneas que se retuercen y formas que se presionan mutuamente, el gesto humano se convierte en pura fuerza de contención y masa.',
        en: 'Nudo embodies the point of greatest friction in the series. Human figures lose their individual boundaries, intertwining and merging into a single organic structure. Among twisting lines and forms pressing against each other, the human gesture becomes pure restraint and mass.' } },
      { id: 'organo', titulo: 'Tama', medidas: '40 x 40', precio: 750, texto: {
        es: 'Fusión simbólica entre dos hermanas (Tali y Mali). La frontera de la serie DE-formando, donde el lazo afectivo convierte la figura en forma, gestando rostros que se entrelazan antes de disolverse en el espacio.',
        en: 'A symbolic fusion of two sisters (Tali and Mali). The frontier of the DE-formando series, where an emotional bond turns figure into form, giving rise to faces that intertwine before dissolving into space.' } },
      // vendidas
      { id: 'principio-de-la-forma', titulo: 'Principio de la forma', medidas: '190 x 40', vendida: true, texto: {
        es: 'Un tótem silencioso en el que la materia busca su propio equilibrio. Antes de la figura y de la representación, la forma emerge en su estado más puro y esencial.',
        en: 'A silent totem in which matter seeks its own balance. Before figure and representation, form emerges in its purest, most essential state.' } },
      { id: 'distorsion-de-la-forma', titulo: 'Distorsión de la forma', medidas: '260 x 180', vendida: true },
      { id: 'arquitectura-del-abrazo', titulo: 'Arquitectura del abrazo', medidas: '280 x 135', vendida: true, texto: {
        es: 'Arquitectura del abrazo articula uno de los núcleos conceptuales de DE-formando: el encuentro entre la lógica de la construcción y la potencia del gesto. La obra propone una estructura capaz de acoger.',
        en: 'Arquitectura del abrazo articulates one of the core ideas of DE-formando: the meeting between the logic of construction and the power of gesture. The work proposes a structure capable of embracing.' } },
      { id: 'masa', titulo: 'Masa', medidas: '107 x 65', vendida: true, texto: {
        es: 'Masa representa una multitud condensada en una única forma, donde numerosos ojos emergen de una misma materia. Una reflexión sobre lo colectivo y la sensación de ser observado dentro de la masa humana.',
        en: 'Masa depicts a crowd condensed into a single form, where many eyes emerge from the same matter. A reflection on the collective and on the feeling of being watched within the human mass.' } },
      { id: 'mascara', titulo: 'Máscara', medidas: '60 x 60', vendida: true, texto: {
        es: 'Máscara captura el instante en que el ser humano comienza a mimetizarse con la estructura. La figura y el fondo empiezan a entrelazarse, sugiriendo un rostro que se oculta o se construye a través de la propia pintura. En este juego de tensiones, la forma abstracta opera como un velo que se fusiona con el gesto humano y sugiere una transformación de la forma.',
        en: 'Máscara captures the moment when the human being begins to blend into the structure. Figure and background start to intertwine, suggesting a face that hides or is built through the painting itself. In this play of tensions, abstract form works as a veil that merges with the human gesture and suggests a transformation of form.' } },
    ],
  },
  {
    id: 'interfaces',
    tecnica: 'acrilico',
    año: '2025',
    texto: {
      es: 'Interfaces explora las conexiones entre rostros a través de una única línea que los atraviesa y relaciona. El color y el gesto construyen una red de vínculos en la que cada rostro forma parte de un mismo sistema.',
      en: 'Interfaces explores the connections between faces through a single line that runs through and links them. Colour and gesture build a network of ties in which every face is part of the same system.',
    },
    obras: [
      { id: 'interfaces-i', titulo: 'Interfaces I', medidas: '60 x 60', precio: 900 },
      { id: 'interfaces-ii', titulo: 'Interfaces II', medidas: '60 x 60' },
      { id: 'interfaces-iii', titulo: 'Interfaces III', medidas: '60 x 60' },
      { id: 'interfaces-iv', titulo: 'Interfaces IV', medidas: '60 x 60' },
      { id: 'interfaces-v', titulo: 'Interfaces V', medidas: '60 x 60', precio: 900 },
      { id: 'interfaces-vi', titulo: 'Interfaces VI', medidas: '60 x 60' },
      { id: 'interfaces-vii', titulo: 'Interfaces VII', medidas: '80 x 60' },
    ],
  },
  {
    id: 'open',
    tecnica: 'mixta',
    año: '2026',
    texto: {
      es: 'Tras finalizar DE-formando, la contención de la forma dio paso a una explosión de color y experimentación. Una etapa más intuitiva y libre, donde la mezcla de técnicas, materiales y colores se convierte en un impulso creativo casi desbordado.',
      en: 'After DE-formando, the restraint of form gave way to an explosion of colour and experimentation. A more intuitive, free stage, where the mix of techniques, materials and colours becomes an almost overflowing creative impulse.',
    },
    obras: [
      // Obras sobre papel: faltan las medidas
      { id: 'open-iii', titulo: 'Open III' },
      { id: 'open-iv', titulo: 'Open IV' },
      { id: 'open-v', titulo: 'Open V' },
      { id: 'open-vi', titulo: 'Open VI' },
      { id: 'open-vii', titulo: 'Open VII' },
      { id: 'open-viii', titulo: 'Open VIII' },
      { id: 'open-ix', titulo: 'Open IX' },
      { id: 'open-x', titulo: 'Open X' },
      { id: 'open-xi', titulo: 'Open XI' },
      { id: 'open-xii', titulo: 'Open XII' },
      { id: 'open-xiii', titulo: 'Open XIII' },
      // vendidas
      { id: 'open-i', titulo: 'Open I', medidas: '120 x 90', vendida: true },
      { id: 'open-ii', titulo: 'Open II', medidas: '85 x 66', vendida: true },
    ],
  },
  {
    id: 'sueltas',
    texto: {
      es: 'Obras independientes que surgen de la misma investigación y funcionan como pequeñas reflexiones sobre la forma, el cuerpo y sus límites.',
      en: 'Independent works that grow out of the same research and act as small reflections on form, the body and its limits.',
    },
    // Títulos PROVISIONALES: cámbialos por los definitivos
    obras: [
      { id: 'color', titulo: 'Color' },
      { id: 'hombres', titulo: 'Hombres' },
      { id: 'rostros-color', titulo: 'Rostros' },
      { id: 'azul', titulo: 'Azul' },
      { id: 'figuras-amarillo', titulo: 'Figuras en amarillo' },
      { id: 'figura-azul', titulo: 'Figura en azul' },
      { id: 'figuras-rojo', titulo: 'Figuras en rojo' },
      { id: 'cuerpos-i', titulo: 'Cuerpos I' },
      { id: 'cuerpos-ii', titulo: 'Cuerpos II' },
    ],
  },
];
