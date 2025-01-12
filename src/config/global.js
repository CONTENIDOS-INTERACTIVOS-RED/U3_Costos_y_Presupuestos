export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad:
      'Control y toma de decisiones basada en costos y presupuestos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Concepto de costos y su importancia en las organizaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición de costos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Diferencia entre empresas industriales y comerciales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Objetivos del costo',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Elementos del costo',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Definición de gasto',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Importancia de los costos en las organizaciones',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Clasificación de costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clasificación de costos, según el volumen',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clasificación de costos, según su aplicación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Métodos básicos de acumulación de costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Costeo ABC (<em>Activity Base Costing</em>)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Costeo por órdenes de trabajo (o por órdenes específicas)',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Polo García, B. (2017). Contabilidad de costos en la alta gerencia: teórico-práctico. Grupo Editorial Nueva Legislación SAS.',
      link: 'https://elibro.net/es/ereader/tecnologicodeloriente/70840?page=1',
    },
    {
      referencia:
        'Vásquez Rojas, F. A. (2021). Costos y Presupuestos para financieros junior. Grupo Editorial Nueva Legislación SAS.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/160288',
    },
    {
      referencia:
        'Lavalle Burguete, A. C. (2017). Análisis financiero. Editorial Digital UNID.',
      link: 'https://elibro.net/es/ereader/tecnologicodeloriente/41183?page=4',
    },
    {
      referencia:
        'Córdoba Padilla, M. (2014). Análisis financiero. Ecoe Ediciones.',
      link:
        'https://elibro.net/es/ereader/tecnologicodeloriente/114315?page=199',
    },
    {
      referencia:
        'Vásquez Rojas, F. A. (2021). Costos y Presupuestos para financieros junior. Grupo Editorial Nueva Legislación SAS.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/160288',
    },
    {
      referencia:
        'Polo García, B. (2018). Manual de presupuestos: teórico y práctico. Grupo Editorial Nueva Legislación SAS.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/68879',
    },
  ],
  glosario: [
    {
      termino: 'Costos directos',
      significado:
        'Son aquellos costos que se pueden asignar directamente a la producción de un bien o servicio, como los materiales y la mano de obra directa.',
    },
    {
      termino: 'Costos indirectos',
      significado:
        'Son aquellos costos que no se pueden asignar directamente a un producto o servicio específico, como los costos de administración, renta o energía.',
    },
    {
      termino: 'Costos fijos',
      significado:
        'Son costos que no cambian con el nivel de producción o ventas, como el alquiler de la fábrica o los sueldos del personal administrativo.',
    },
    {
      termino: 'Costos variables',
      significado:
        'Son aquellos costos que varían directamente con el nivel de producción, como los materiales directos y la mano de obra directa.',
    },
    {
      termino: 'Costos totales',
      significado:
        'Es la suma de todos los costos asociados con la producción de un bien o servicio, que incluye los costos directos e indirectos, fijos y variables.',
    },
    {
      termino: 'Costos de oportunidad',
      significado:
        'Son los beneficios perdidos por elegir una opción sobre otra. Este costo se refiere a lo que se deja de ganar, al tomar una decisión en lugar de otra.',
    },
    {
      termino: 'Costeo absorbente',
      significado:
        'Método que asigna tanto los costos fijos como los variables, a los productos, considerando todos los costos de producción.',
    },
    {
      termino: 'Costeo directo o variable',
      significado:
        'Método que solo considera los costos variables al calcular el costo de producción de un producto, excluyendo los costos fijos.',
    },
    {
      termino: 'Punto de equilibrio',
      significado:
        'Es el nivel de ventas o producción en el que los ingresos totales son iguales a los costos totales, sin generar ni pérdidas ni ganancias.',
    },
    {
      termino: 'Margen de contribución',
      significado:
        'Es la diferencia entre los ingresos por ventas y los costos variables, que cubre los costos fijos y genera ganancias.',
    },
  ],
}
