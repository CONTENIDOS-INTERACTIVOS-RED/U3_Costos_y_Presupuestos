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
        'Polo García, B. (2018). Manual de presupuestos: teórico y práctico. Grupo Editorial Nueva Legislación SAS.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/68879',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría',
      significado:
        'Proceso sistemático para examinar, evaluar y verificar la información financiera, operativa o administrativa de una organización, asegurando cumplimiento de normas, regulaciones y políticas establecidas para garantizar transparencia y precisión.',
    },
    {
      termino: 'BAII (Beneficio Antes de Intereses e Impuestos)',
      significado:
        'Indicador financiero que mide el rendimiento operativo de una empresa antes de descontar intereses e impuestos, mostrando su capacidad para generar ganancias mediante las operaciones principales del negocio.',
    },
    {
      termino: 'Costos',
      significado:
        'Gastos incurridos en la producción o adquisición de bienes y servicios, incluyendo materiales, mano de obra y otros elementos necesarios para llevar a cabo las operaciones de una organización.',
    },
    {
      termino: 'Liquidez',
      significado:
        'Capacidad de una empresa para cumplir con sus obligaciones financieras de corto plazo, analizando la facilidad para convertir activos en efectivo sin perder su valor en el proceso.',
    },
    {
      termino: 'Punto de Equilibrio',
      significado:
        'Nivel de ventas o ingresos en el que los costos totales igualan los ingresos totales, resultando en una situación sin pérdidas ni ganancias para la empresa.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'Capacidad de una empresa para generar ganancias en relación con sus ingresos, activos o patrimonio, evaluando la eficiencia en el uso de recursos para crear valor.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Probabilidad de ocurrencia de eventos que puedan afectar negativamente los objetivos financieros, operativos o estratégicos de una organización, incluyendo incertidumbres internas y externas.',
    },
    {
      termino: 'ROI (Retorno sobre la Inversión)',
      significado:
        'Indicador financiero que mide la rentabilidad de una inversión, calculando el porcentaje de beneficios generados en relación con los recursos invertidos por la empresa o individuo.',
    },
    {
      termino: 'Rotación de cartera',
      significado:
        'Indicador que mide la eficiencia en la gestión de cuentas por cobrar, evaluando el tiempo promedio que tarda una empresa en recuperar los créditos otorgados a sus clientes.',
    },
    {
      termino: 'Rotación de inventarios',
      significado:
        'Indicador financiero que mide cuántas veces se renueva el inventario en un periodo específico, evaluando la eficiencia en la gestión y utilización de existencias para evitar exceso o desabastecimiento.',
    },
    {
      termino: 'Utilidad',
      significado:
        'Ganancia obtenida por una empresa después de deducir todos los costos y gastos operativos, financieros y fiscales, reflejando el beneficio neto generado por las operaciones del negocio.',
    },
    {
      termino: 'Valor Neto Realizable',
      significado:
        'Valor estimado que se obtendría al vender un activo, menos los costos asociados a su venta, reflejando la recuperación económica posible de los bienes en el mercado actual.',
    },
  ],
}
