// LA FICHA DE CADA CUADRO
// Para añadir una obra nueva:
//   1. Crea la carpeta src/assets/pintura/<serie>/<id>/ con la foto principal <id>.jpg
//      y, si tiene, sus mockups (<id>-mockup.jpg, <id>-mockup-2.jpg…).
//   2. Añade una línea en la lista de su serie, abajo.
// El orden de cada lista es el orden en que aparecen en la web.

export type Serie = 'formas' | 'open' | 'interfaces' | 'sueltas';
export type Tecnica = 'oleo' | 'mixta' | 'acrilico';

export interface Obra {
  id: string;        // nombre de la carpeta en src/assets (sin tildes ni espacios)
  titulo: string;    // título tal como se ve en la web
  medidas?: string;  // en cm, p. ej. '90 x 70'
  vendida?: boolean;
}

export interface SerieObras {
  id: Serie;
  tecnica?: Tecnica; // técnica común a toda la serie
  obras: Obra[];
}

export const series: SerieObras[] = [
  {
    id: 'formas',
    tecnica: 'oleo',
    // Empieza con obras disponibles; las vendidas van al final de la serie.
    obras: [
      { id: 'desglose', titulo: 'Desglose', medidas: '90 x 70' },
      { id: 'encuentro', titulo: 'Encuentro', medidas: '130 x 90' },
      { id: 'estructura', titulo: 'Estructura', medidas: '120 x 90' },
      { id: 'escapatoria', titulo: 'Escapatoria', medidas: '130 x 90' },
      { id: 'el-limite-del-gesto', titulo: 'El límite del gesto', medidas: '60 x 40' },
      { id: 'despersonificacion', titulo: 'Despersonificación', medidas: '130 x 90' },
      { id: 'deconstruccion-grafica', titulo: 'Deconstrucción gráfica', medidas: '107 x 85' },
      { id: 'principio-de-la-forma', titulo: 'Principio de la forma', medidas: '190 x 40' },
      { id: 'logica-del-espacio', titulo: 'Lógica del espacio', medidas: '85 x 70' },
      { id: 'nudo', titulo: 'Nudo', medidas: '80 x 60' },
      { id: 'organo', titulo: 'Órgano', medidas: '40 x 40' },
      // vendidas
      { id: 'arquitectura-del-abrazo', titulo: 'Arquitectura del abrazo', medidas: '280 x 135', vendida: true },
      { id: 'masa', titulo: 'Masa', medidas: '107 x 65', vendida: true },
      { id: 'mascara', titulo: 'Máscara', medidas: '60 x 60', vendida: true },
    ],
  },
  {
    id: 'open',
    tecnica: 'mixta',
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
    id: 'interfaces',
    tecnica: 'acrilico',
    obras: [
      { id: 'interfaces-i', titulo: 'Interfaces I', medidas: '60 x 60' },
      { id: 'interfaces-ii', titulo: 'Interfaces II', medidas: '60 x 60' },
      { id: 'interfaces-iii', titulo: 'Interfaces III', medidas: '60 x 60' },
      { id: 'interfaces-iv', titulo: 'Interfaces IV', medidas: '60 x 60' },
      { id: 'interfaces-v', titulo: 'Interfaces V', medidas: '60 x 60' },
      { id: 'interfaces-vi', titulo: 'Interfaces VI', medidas: '60 x 60' },
      { id: 'interfaces-vii', titulo: 'Interfaces VII', medidas: '80 x 60' },
    ],
  },
  {
    id: 'sueltas',
    // Títulos PROVISIONALES: cámbialos por los definitivos
    obras: [
      { id: 'color', titulo: 'Color' },
      { id: 'hombres', titulo: 'Hombres' },
      { id: 'mural-beige', titulo: 'Mural' },
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
