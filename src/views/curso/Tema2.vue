<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Indicadores financieros relacionados con costos y presupuestos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/10.png', alt='')
      .col-lg-7
        .p-4(style="background-color: #FBEADF ")
          p.mb-0 Los indicadores financieros relacionados con costos y presupuestos, son herramientas claves para medir la eficiencia y el control financiero dentro de una organización. Estos indicadores no solo permiten analizar el uso de los recursos, sino también identificar áreas de mejora, para garantizar el cumplimiento de objetivos económicos.
            br
            br
            |Para comprender mejor su aplicación, se analiza en dos partes principales:
    #t_2_1.titulo-segundo(data-aos='fade-right')
      h2 #[span 2.1]  Análisis financiero
    p.mb-4 El análisis financiero es un proceso que permite descomponer y evaluar los resultados económicos de una organización. Según Lavalle Burguete (2017), este análisis se divide en aspectos cualitativos y cuantitativos, los cuales son esenciales para realizar diagnósticos que apoyen la toma de decisiones estratégicas. Los objetivos principales son:
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/11.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Evaluar productividad y eficiencia
          p.mb-0.text-center Determinar si los recursos generan productos o servicios de calidad. 
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/12.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Diagnosticar problemas financieros
          p.mb-0.text-center Identificar áreas de profundidad para implementar soluciones efectivas.
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/13.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Proveer información estratégica
          p.mb-0.text-center Apoyar la planificación, gestión y toma de decisiones fundamentadas.
    p.mb-4.fw-bold Las herramientas claves, son:
    ul.lista-ul
      li.d-flex
        i.fas.fa-circle.fa-xs
        p.mb-0 Estados financieros.
      li.d-flex
        i.fas.fa-circle.fa-xs
        p.mb-0 Reportes presupuestarios.
      li.d-flex
        i.fas.fa-circle.fa-xs
        p.mb-0 Indicadores de desempeño económico.
    p.mb-4 Los enfoques cualitativo y cuantitativo, desempeñan un papel crucial en el análisis financiero, permitiendo comprender y evaluar los procesos económicos de manera integral.
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/14.png" alt="")
          .custom-image-card__text.p-5
            h4.mb-2 Cualitativo
            p.mb-0 Identifica elementos que componen los procesos financieros.

      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/15.png" alt="")
          .custom-image-card__text.p-5
            h4.mb-2 Cuantitativo
            p.mb-0 Determina la producción de estos elementos, mediante cifras e indicadores claves.

    p.mb-4 Las contribuciones del análisis financiero, son:
    .mb-5(data-aos="fade-up" style="background-color: #ECFCF6")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            ul.lista-ul
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Elaboración de presupuestos más precisos.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Proyecciones financieras mejor fundamentadas.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Gestión optimizada de efectivo y crédito.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Evaluación integral de la rentabilidad y productividad.
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/16.png', alt='')
    #t_2_2.titulo-segundo(data-aos='fade-right')
      h2 #[span 2.2]  Análisis de estados financieros
    p.mb-4 Los estados financieros proporcionan una visión integral sobre la estabilidad y desempeño económico de una empresa. Estos informes son fundamentales para comprender el estado actual de una organización y prever su desempeño futuro.
      br
      br
      |Los propósitos principales son:
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/17.png', alt='')
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #D4DDF0 ")
          p.mb-0 Evaluar la estabilidad financiera y la solvencia de la empresa.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #D4DDF0 ")
          p.mb-0 Medir su capacidad de rentabilidad.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #D4DDF0 ")
          p.mb-0 Realizar proyecciones para la toma de decisiones. 
    p.mb-4 La evaluación de los estados financieros a través de indicadores claves, proporciona una visión clara de la situación económica de una empresa y sus oportunidades de mejora.
    //todo! Componente de audio 


    .bg-full-width.bg-color-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6

            p.mb-4 Para profundizar en el tema, se invita a revisar el siguiente audio:

            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Indicadores claves y beneficios del análisis financiero"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )
    




    p.mb-4 El análisis financiero y de estados financieros, son pilares fundamentales en la gestión organizacional. Estas herramientas permiten identificar áreas de mejora, garantizar la sostenibilidad económica y apoyar el cumplimiento de metas estratégicas. Utilizar estos indicadores de forma efectiva, contribuye significativamente a la estabilidad y crecimiento de la organización.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1.
      span Usuarios de la información financiera de la empresa
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/18.svg', alt='')
    p.mb-4 El análisis financiero, según Córdoba Padilla, M. (2014), es fundamental para diagnosticar la situación de una empresa y definir las estrategias futuras. A través de la interpretación de la información contable, es posible prever problemas potenciales, puesto que los registros reflejan, de manera continua, los efectos de las operaciones económicas, sean positivos o negativos. Para obtener una visión integral, es esencial emplear una combinación de indicadores y razones financieras que permitan analizar de manera conjunta, los diversos aspectos de la realidad económica y financiera de la organización.
      br
      br
      |La medición de cifras financieras, debe ajustarse al horizonte temporal:
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Corto plazo")
            p.mb-0 Evaluar liquidez y la generación de capital de trabajo.
          div(titulo="Mediano plazo")
            p.mb-0 Analizar la capacidad para obtener resultados operativos.
          div(titulo="Largo plazo")
            p.mb-0 Examinar el potencial de generar valor económico. 
      .col-lg-5.col-7: img(src='@/assets/curso/temas/21.png', alt='')
    p.mb-4 Es crucial que los activos de la empresa estén financiados de manera acorde a su plazo de realización. Por ejemplo, financiar activos a largo plazo, con recursos de corto plazo, puede generar ineficiencias, destacando la necesidad de interpretar correctamente, las cifras mediante indicadores o ratios financieros.
    h3 Indicadores o ratios financieros
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/19.png', alt='')
      .col-lg-9
        p.mb-4 De acuerdo con Córdoba Padilla, M. (2014), las razones financieras, también llamadas ratios o indicadores financieros, son coeficientes que relacionan dos cifras financieras mediante una división. Estas herramientas permiten:
        .p-4(data-aos="fade-left" style="background-color: #FBEADF ")
          .row.align-items-center
            .col-lg-auto.order-2
              img(src="@/assets/curso/temas/20.svg", style="max-width: 90px").mx-auto
            .col-lg
              ul.lista-ul
                li.d-flex
                  i.fas.fa-circle.fa-xs
                  p.mb-0 Medir y comparar el estado financiero actual o histórico de la empresa.
                li.d-flex
                  i.fas.fa-circle.fa-xs
                  p.mb-0 Identificar tendencias y realizar proyecciones a corto, mediano y largo plazo.
                li.d-flex
                  i.fas.fa-circle.fa-xs
                  p.mb-0 Tomar decisiones correctivas, basadas en los resultados obtenidos.
    p.mb-4 La clasificación de los indicadores financieros facilita su interpretación y análisis, agrupándolos en cuatro categorías principales. A continuación, se presentan en una tabla para mayor claridad:
    .bg-slyder.bg-full-width.p-5.mb-5
      SlyderA(tipo='b').bg-white
        .row.p-5
          .col-lg-8.mb-4.mb-lg-0
            h4 Razones de promedio medio de maduración
            p Determinan cuánto tiempo tardan en recuperarse las inversiones realizadas en activos de corto plazo.
          .col-lg-4.col-7
            figure
              img(src='@/assets/curso/temas/22.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-8.mb-4.mb-lg-0
            h4 Razones de liquidez
            p Analizan la capacidad de la empresa para cumplir con sus compromisos a corto plazo y convertir activos en efectivo.
          .col-lg-4.col-7
            figure
              img(src='@/assets/curso/temas/23.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-8.mb-4.mb-lg-0
            h4 Razones de endeudamiento o apalancamiento
            p Evalúan el nivel de financiamiento, obtenido a través de deudas, y su impacto en la estructura financiera.
          .col-lg-4.col-7
            figure
              img(src='@/assets/curso/temas/24.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-8.mb-4.mb-lg-0
            h4 Razones de rentabilidad
            p Valoran la gestión administrativa en términos de beneficios generados sobre las ventas y la inversión.
          .col-lg-4.col-7
            figure
              img(src='@/assets/curso/temas/25.png', alt='Texto que describa la imagen')
    .p-4(style="background-color: #E5F8F8 ").mb-4
      p.mb-0 Estas categorías abarcan los aspectos más relevantes del desempeño financiero empresarial, permitiendo comparar periodos económicos y proyectar el futuro de la organización, con base en información confiable y detallada.
        br
        br
        |La clasificación de los indicadores financieros, permite analizar diferentes aspectos claves de la gestión empresarial. A continuación, se presentan los principales indicadores organizados por categorías, los cuales ofrecen información para evaluar la operación, la liquidez, el nivel de endeudamiento y la rentabilidad de la empresa.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="R. PMM") Rotación de inventarios.
            br
            |Rotación de cartera. 
            br
            |Rotación de proveedores.
          p.text-small(numero="2" titulo="R. Liquidez") Fondo de maniobra/capital de trabajo.
            br
            |Liquidez general
            br
            |Liquidez estricta o prueba ácida.
          p.text-small(numero="3" titulo="R. Endeudamiento") Solvencia.
            br
            |Endeudamiento general.
          p.text-small(numero="4" titulo="R. Rentabilidad") Rentabilidad económica (ROI).
            br
            |Rentabilidad financiera (ROE).
      .col-lg-5.col-7: img(src='@/assets/curso/temas/26.png', alt='')
    h3 Razones de promedio medio de maduración
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/27.png', alt='')
      .col-lg-8
        p.mb-4 El periodo medio de maduración, es un indicador que permite a las organizaciones establecer el tiempo necesario para recuperar las inversiones efectuadas en activos de corto plazo, vinculados a su operación productiva. 
        .p-4(style="background-color: #E5F8F8")
          p.mb-4 Este ciclo, conocido como ciclo de explotación, abarca desde la adquisición de materias primas en el caso de las empresas manufactureras, o de mercancías, si son comercializadoras, pasando por el almacenamiento de inventarios, la venta de los productos, hasta el momento en que se logra el cobro a los clientes.
    p.mb-4 Este macro índice, a su vez, se descompone en varios subíndices, entre los cuales se destaca el siguiente:
    ul.lista-ul
      li.d-flex
        i.fas.fa-circle.fa-xs
        p.mb-0 #[b Periodo Medio de Almacenamiento de Materias Primas (PMA) o rotación de materias primas.] Este indicador refleja la cantidad de días que las materias primas permanecen en almacenamiento, antes de ser transformadas, aplicando principalmente a empresas dedicadas a la producción.
    .p-4.mb-4(style="background-color: #E5F8F8")
      h4.text-center.mb-0 PMA = 365 días x Saldo Medio de MP
        br
        |Compra de MP
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-0 Para calcular el saldo promedio de Materia Prima (MP), se puede utilizar la información del Estado de Situación Financiera Comparativo al 31 de diciembre. La fórmula consiste en sumar los saldos de dos años consecutivos y dividir el resultado entre 2. Por ejemplo, si el saldo de MP al 31 de diciembre del 2022 fue de $60.000 y al 31 de diciembre del 2023 fue de $70.000, el saldo promedio será de $65.000.
          br
          br
          |La compra de materia prima se obtiene del Estado de Costos o del Estado de Resultados, específicamente en las notas explicativas. Por ejemplo, si durante el 2023 la adquisición de MP fue de $835.000, aplicando la fórmula correspondiente, se determina que la MP permaneció almacenada durante 28 días.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/28.png', alt='')
    .p-4.mb-4(style="background-color: #E5F8F8")
      h4.text-center.mb-0 PMA 365 días x $65.000 = 28 días
        br
        |$835.000
    p.mb-4 Esta misma técnica, se usa para el periodo medio de fabricación, obteniendo los datos del producto en proceso, del estado de costo.
    ul.lista-ul
      li.d-flex
        i.fas.fa-circle.fa-xs
        p.mb-0 #[b La Rotación de inventarios o Periodo Medio de Venta (PMV),] representa el tiempo, medido en días, que los productos terminados o adquiridos, permanecen en inventario antes de ser vendidos. La fórmula para calcularlo es:   
    .p-4.mb-4(style="background-color: #E5F8F8")
      h4.text-center.mb-0 PMA= 365 días x Saldo Medio de Inventarios
        br
        |Costo de venta
    .p-4.mb-4(style="background-color: #E5F8F8")
      h4.text-center.mb-0 PMA= 365 días x Saldo Medio de Productos en Fabricación
        br
        |Consumo Producto Terminados
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/29.png', alt='')
      .col-lg-8
        p.mb-4 En el caso de una empresa comercial, la información se obtiene del Estado de Situación Financiera y del Estado de Resultados Integral. Para una empresa fabricante, los datos provienen del Estado de Costos, dado que está relacionado con su actividad productiva.
        ul.lista-ul
          li.d-flex
            i.fas.fa-circle.fa-xs
            p.mb-0 #[b El Periodo Medio de Cobro (PMC)], también conocido como rotación de cartera, es el tiempo, expresado en días, que la empresa tarda en recuperar el dinero correspondiente a su cartera. Este periodo abarca desde la realización de la venta hasta la recepción del pago, reflejando el plazo de financiación concedido a los clientes. La fórmula para calcularlo es:
    .p-4.mb-4(style="background-color: #E5F8F8")
      h4.text-center.mb-0 PMA= 365 días x Saldo Medio de Clientes
        br
        |Ventas
    p.mb-4 El Periodo Medio de Pago a Proveedores o Rotación de Proveedores (PMP), representa el tiempo que transcurre desde la adquisición de inventario o materia prima, hasta el pago final al proveedor.
      br
      br
      | #[b Su cálculo se realiza con la siguiente fórmula:]
    .p-4.mb-4(style="background-color: #E5F8F8")
      h4.text-center.mb-0 PMA= 365 días x Saldo Medio de Proveedores
        br
        |Compras
    p.mb-4.fw-bold La totalidad de la sumatoria de los subíndices, compone el Periodo Medio de maduración – PMM, el cual se expresa en días, así:
    .p-4.mb-4(style="background-color: #E5F8F8")
      h4.text-center.mb-0 PMM = PMA + PMF + PMV + PMC + PMP
    p.mb-4 El principal objetivo del análisis del PMM, es reducir la cantidad de días, puesto que mientras más breve sea, más rápido se recuperarán las inversiones. Es en este contexto, donde el empresario tiene la oportunidad de tomar decisiones sobre la política de su ciclo de explotación.
    h3 Índices de liquidez
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 Según Córdoba Padilla (2014), las razones de liquidez permiten evaluar la habilidad de una empresa para cumplir con sus compromisos financieros a corto plazo. Estas métricas proporcionan información clave sobre la solvencia inmediata de la organización y su capacidad para mantenerse estable ante circunstancias adversas. Básicamente, se trata de comparar las obligaciones de corto plazo con los recursos disponibles para cubrirlas.
        .p-4(data-aos="fade-left" style="background-color: #FBEADF ")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/30.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las razones de liquidez permiten evaluar la capacidad de una empresa para cumplir con sus compromisos financieros a corto plazo, los cuales están reflejados en el pasivo corriente del balance general.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/31.png', alt='')
    p.mb-4 Este pasivo incluye elementos como deudas con proveedores y empleados, préstamos a corto plazo, impuestos y dividendos pendientes, así como otros gastos no pagados. Para cubrir estas obligaciones, la empresa recurre a sus activos corrientes, que son aquellos que pueden convertirse en efectivo en el corto plazo. De esta manera, el análisis de liquidez se enfoca en los activos y pasivos corrientes para determinar la facilidad con que una empresa puede saldar sus deudas, utilizando el efectivo generado por dichos activos. Entre los indicadores de liquidez más comunes, se encuentran el capital de trabajo, la razón corriente, y la prueba ácida.
    ul.lista-ul
      li.d-flex
        i.fas.fa-circle.fa-xs
        p.mb-0 #[b El capital de trabajo o fondo de maniobra], se calcula de manera simple, restando el pasivo corriente del activo corriente. Sin embargo, lo que realmente permite entender este índice, es que refleja la porción del activo corriente que respalda la estructura financiera permanente de la empresa.
    .p-4.mb-4(style="background-color: #E5F8F8")
      h4.text-center.mb-0 CAPITAL DE TRABAJO = ACTIVO CTE. AC – PASIVO CTE. PC
    p.mb-4 Entre mayor sea el valor, mayor será la solvencia de la empresa en el corto plazo (un año).
    ul.lista-ul
      li.d-flex
        i.fas.fa-circle.fa-xs
        p.mb-0 #[b La liquidez general, o razón corriente], mide la cantidad de activos corrientes disponibles por cada unidad de pasivo corriente. Aunque cada empresa tiene características propias que deben ser consideradas, en general se sugiere que este índice esté cerca de 2. Si el valor es inferior a 1.5, podría indicar posibles problemas de tesorería. Por otro lado, si supera 3, puede sugerir que hay recursos no productivos en caja, lo cual podría impactar negativamente la rentabilidad. Su cálculo se realiza de la siguiente manera.
    .p-4.mb-4(style="background-color: #E5F8F8")
      h4.text-center.mb-0 RAZÓN CORRIENTE = ACTIVO CTE. / PASIVO CTE.
    ul.lista-ul
      li.d-flex
        i.fas.fa-circle.fa-xs
        p.mb-0 #[b La liquidez estricta, o prueba ácida], ajusta el activo corriente al excluir el valor del inventario, debido a que este es el componente más difícil de convertir en efectivo rápidamente. Dado que la acumulación de inventarios no garantiza su conversión inmediata en dinero, este índice permite evaluar la capacidad de la empresa para cubrir sus deudas a corto plazo de manera inmediata. La fórmula para calcularlo es la siguiente:
    .p-4.mb-4(style="background-color: #E5F8F8")
      h4.text-center.mb-0 PRUEBA ÁCIDA = (ACTIVO CTE – INVENTARIOS) / PASIVO CTE.
    h3 Indicadores de solvencia o endeudamiento
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/32.png', alt='')
      .col-lg-9
        p.mb-4 Estos índices permiten evaluar la capacidad de la empresa para saldar todas sus deudas con terceros, además de revelar quiénes controlan realmente el negocio: los propietarios o los acreedores, de la siguiente manera:
          br
          br
          | #[b La solvencia] es el ratio que compara los activos totales con los pasivos totales de la empresa, y se calcula de la siguiente forma:
        .p-4.mb-4(style="background-color: #E5F8F8")
          h4.text-center.mb-0 SOLVENCIA = ACTIVO / PASIVO
    p.mb-4 Este índice refleja cuántas veces los activos de la empresa pueden cubrir sus deudas exigibles. Debe ser siempre superior a 1, porque un valor inferior, sugeriría que la empresa podría estar en riesgo de insolvencia.
      br
      br
      |#[b El endeudamiento general] es el indicador que muestra la relación entre el total de la deuda de la empresa y su patrimonio neto. Se calcula de la siguiente manera:
    .p-4.mb-4(style="background-color: #E5F8F8")
      h4.text-center.mb-0 ENDEUDAMIENTO GENERAL = PASIVO TOTAL / PATRIMONIO NETO
    p.mb-4 El resultado de este índice refleja la proporción de financiación obtenida de terceros en comparación con la financiación propia (patrimonio neto). Lo ideal es que esta ratio se mantenga cercana a 1.
    h4 2.2.1 Indicadores de rentabilidad
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 El principal objetivo de cualquier empresa es generar rentabilidad y crear valor económico a partir de la inversión. Esto se evalúa mediante diversos indicadores, los cuales se detallan a continuación:
        ul.lista-ul
          li.d-flex
            i.fas.fa-circle.fa-xs
            p.mb-0 #[b La rentabilidad económica, o ROI] (Return on Investment), es el ratio que mide la relación entre el beneficio antes de intereses e impuestos (BAII), es decir, la utilidad operativa, y el activo total. Su fórmula es la siguiente:
        .p-4.mb-4(style="background-color: #E5F8F8")
          h4.text-center.mb-0 ROI = BAII / ACTIVOS
      .col-lg-4.col-7: img(src='@/assets/curso/temas/34.png', alt='')
    p.mb-4 El resultado refleja la capacidad de los activos, tanto temporales como permanentes, para generar utilidad operativa. Los intereses no se consideran, puesto que lo que se busca evaluar es la contribución de los activos a la utilidad, sin importar cómo se financian. De igual manera, se excluyen los impuestos para evitar que el análisis se vea afectado por factores externos.
    ul.lista-ul
      li.d-flex
        i.fas.fa-circle.fa-xs
        p.mb-0 #[b La rentabilidad financiera o ROE] (Return on Equity) se calcula a partir de la relación entre los beneficios después de impuestos y los fondos propios, también llamados patrimonio neto. Su fórmula es la siguiente:
    .p-4.mb-4(style="background-color: #E5F8F8")
      h4.text-center.mb-0 ROE = BDI / Fondos Propios
    p.mb-4 En este caso, se analiza el resultado final de la empresa, es decir, lo que realmente recibe la propiedad, en comparación con la inversión realizada por los propietarios. Esta rentabilidad debería ser igual o superior a la rentabilidad mínima que los accionistas esperan. 
      br
      br
      |Para determinar esa rentabilidad mínima, se puede utilizar el modelo CAPM, que vincula variables como la rentabilidad libre de riesgo y una prima de riesgo.
    .row.justify-content-center.mb-5
      .col-lg-10
        .box-shadow.p-4
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/curso/temas/video.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 CÓMO USAR LOS INDICADORES FINANCIEROS DE MANERA EFECTIVA
                  p Para profundizar en los indicadores financieros y su uso para analizar datos históricos, invitamos a ver el siguiente video:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href='https://youtu.be/FwzY-V2olJQ?si=aVuh1-SGLfGAa-I4' target="_blank")
                    span Ver video
                    i.fas.fa-arrow-right
    .bg-full-width.bg-color-2
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Indicadores para hacer proyecciones
            p.mb-4(data-aos="fade-right") El análisis prospectivo en las proyecciones financieras permite anticipar escenarios futuros basados en datos históricos y tendencias clave. Para proyectar ingresos, por ejemplo, se compara el crecimiento de ventas con indicadores como el PIB sectorial, calculando un excedente promedio que se suma al PIB proyectado para estimar el porcentaje de crecimiento de las ventas. Así, las ventas futuras se calculan aplicando este porcentaje al año anterior.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Indicadores para hacer proyecciones.

          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/35.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/servlet/articulo?codigo=9152110" target="_blank" rel="noopener noreferrer") Macías Loor, F. I. & Delgado Suárez, M. (2023). Indicadores financieros y su relación con la toma de decisiones. Dialnet. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/journal/413/41370361003/" target="_blank" rel="noopener noreferrer") Mota Aragón, M. B., Álvarez del Castillo, R. & Núñez Mora, J. A. (2001). Índice de estrés financiero en los mercados emergentes. Realdyc.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/73GTsswNc_0?si=seCYWZdZiPmYb9Hu" target="_blank" rel="noopener noreferrer") Luz Castellanos Duque. (2016). Indicadores Financieros proyectados

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/FwzY-V2olJQ?si=aVuh1-SGLfGAa-I4" target="_blank" rel="noopener noreferrer") Miguel Fernández. (2024). COMO USAR LOS INDICADORES FINANCIEROS DEMANERA EFECTIVA

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')



</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
