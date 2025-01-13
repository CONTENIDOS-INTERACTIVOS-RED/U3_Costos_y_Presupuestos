<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Casos prácticos de control presupuestal y toma de decisiones'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .p-4.h-100(style="background-color: #E5F8F8")
          p.mb-0 A través del análisis de casos prácticos, es posible aplicar estrategias que optimicen recursos, identifiquen oportunidades de mejora y mitiguen riesgos. Este enfoque fortalece las habilidades analíticas y estratégicas, aportando herramientas para enfrentar retos financieros y operativos en escenarios reales.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/36.png', alt='')
    h3 Caso práctico: control presupuestal y toma de decisiones en Tecnofácil S.A.S.
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/37.png', alt='')
      .col-lg-8
        p.mb-0 Empresa: Tecnofácil S.A.S.
          br
          |Sector: Fabricación y venta de accesorios tecnológicos.
          br
          br
          |Tecnofácil S.A.S. desarrolla su presupuesto anual para 2024 con el objetivo de incrementar producción y mejorar ventas. La empresa producirá tres líneas principales: auriculares, teclados y mouse. Para garantizar un control adecuado de los gastos e ingresos proyectados, se establecen indicadores clave de desempeño que facilitan la detección de desviaciones y la toma de decisiones correctivas.
          br
          br
          |A continuación, se presentan las expectativas de ventas para las tres líneas principales de productos de Tecnofácil S.A.S.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 5.
          span Proyección de ingresos
        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr
                th(style="background-color: #EE9865") Producto
                th(style="background-color: #EE9865") Unidades
                th(style="background-color: #EE9865") Valor unitario
                th(style="background-color: #EE9865") Valor total
            tbody(style="background-color: #FBEADF ")
              tr
                td Auriculares
                td 10,000
                td $50
                td $500,000
              tr
                td Teclados
                td 8,000
                td $80
                td $640,000
              tr
                td Mouse
                td 12,000
                td $80
                td $960,000
              tr
                td Totales
                td
                td
                td $2,100,000
    p.mb-4 Se detalla la inversión estimada en insumos y procesos de producción.
    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 6. 
          span Proyección de costos
        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr
                th(style="background-color: #EE9865") Concepto
                th(style="background-color: #EE9865") Monto
            tbody(style="background-color: #FBEADF ")
            
              tr
                td Materia prima
                td $400,000
              tr
                td Mano de obra directa
                td $300,000
              tr
                td Costos indirectos de fabricación
                td $300,000
              tr.fw-bold
                td Total costos
                td $1,000,000
    p.mb-4 Se calculan los beneficios esperados tras la planificación inicial.
    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 7. 
          span Proyección de utilidades.
        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr
                th(style="background-color: #EE9865") Concepto
                th(style="background-color: #EE9865") Monto
            tbody(style="background-color: #FBEADF ")
            
              tr
                td Ingresos totales
                td $2,100,000
              tr
                td Costos totales
                td $1,000,000
              tr
                td Utilidad proyectada
                td $1,100,000
    p.mb-4 Se realizarán reuniones mensuales para comparar los resultados reales con el presupuesto inicial. A continuación, se detallan los datos del primer trimestre:
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 8. 
      span Seguimiento presupuestal
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th(style="background-color: #EE9865") Mes
            th(style="background-color: #EE9865") Ingresos presupuestados
            th(style="background-color: #EE9865") Ingresos reales
            th(style="background-color: #EE9865") Desviación ($)
            th(style="background-color: #EE9865") Costos presupuestados
            th(style="background-color: #EE9865") Costos reales
            th(style="background-color: #EE9865") Desviación ($)
        tbody(style="background-color: #FBEADF ")
      
          tr
            td Enero
            td $175,000
            td $170,000
            td -$5,000
            td $83,334
            td $90,000
            td -$6,666
          tr
            td Febrero
            td $175,000
            td $180,000
            td $5,000
            td $83,334
            td $80,000
            td -$3,334
          tr
            td Marzo
            td $175,000
            td $160,000
            td -$15,000
            td $83,334
            td $70,000
            td $3,334
      p.mb-4 Acciones correctivas, se plantean estrategias específicas para abordar las desviaciones detectadas durante el primer trimestre y optimizar los resultados financieros y operativos de la empresa.
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/38.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Enero
          p.mb-0.text-center Fortalecer la publicidad digital para compensar la disminución de ingresos y renegociar precios con proveedores para reducir costos.
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/39.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Febrero
          p.mb-0.text-center Mantener estrategias de marketing efectivas y realizar un control estricto sobre los costos.

      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/temas/40.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Marzo 
          p.mb-0.text-center Analizar cuellos de botella en la producción y disminuir el desperdicio de materiales.
    h3 Indicadores financieros aplicables
    p.mb-4 A continuación, se presentan herramientas clave para evaluar el desempeño financiero y operativo de la empresa, proporcionando información para la toma de decisiones estratégicas.
    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(style='background-color: #E4F2F4' titulo="Margen bruto")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0.order-2
            h4 Margen bruto
            p Analiza la rentabilidad de las ventas antes de descontar los gastos operativos, identificando si los costos de producción están controlados.
          .col-lg-4.col-7: img(src='@/assets/curso/temas/41.png', alt='')
      .py-4.py-md-5(style='background-color: #E4F2F4' titulo="Margen neto")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0.order-2
            h4 Margen neto
            p Evalúa el beneficio después de todos los costos y gastos, midiendo la salud financiera global.
          .col-lg-4.col-7: img(src='@/assets/curso/temas/42.png', alt='')
      .py-4.py-md-5(style='background-color: #E4F2F4' titulo="Retorno sobre la inversión (ROI)")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0.order-2
            h4 Retorno sobre la inversión (ROI)
            p Mide la rentabilidad de las inversiones realizadas, asegurando el uso adecuado de los recursos.
          .col-lg-4.col-7: img(src='@/assets/curso/temas/43.png', alt='')
      .py-4.py-md-5(style='background-color: #E4F2F4' titulo="Índice de liquidez")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0.order-2
            h4 Índice de liquidez
            p Refleja la capacidad de la empresa para cumplir con sus obligaciones a corto plazo, garantizando estabilidad operativa y evitando problemas de flujo de caja.
          .col-lg-4.col-7: img(src='@/assets/curso/temas/44.png', alt='')
    p.mb-4 La planeación y el control presupuestal son fundamentales para alcanzar los objetivos financieros de Tecnofácil S.A.S. Un monitoreo constante y la aplicación de acciones correctivas oportunas fortalecen la estabilidad y rentabilidad de la empresa.
              
    .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=78253678003" target="_blank" rel="noopener noreferrer") Parra, J. & La Madriz, J. (2017). Presupuesto como instrumento de control financiero en pequeñas empresas de estructura familiar. Realdyc. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/9_C2SDxFWmU?si=PZI1QYC2AE39BdyB" target="_blank" rel="noopener noreferrer") Daniel Granero Sarrión. (2020). Ejemplo Control Presupuestario Reporting 2 (Parte 1) 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/YQKa_gaC0pw?si=bk_82YFHfETGchkG" target="_blank" rel="noopener noreferrer") Daniel Granero Sarrión. (2020). Ejemplo Control Presupuestario Reporting 3 


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Control presupuestal y toma de decisiones',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es la fórmula utilizada para estimar las existencias en función del periodo medio de ventas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Existencias = PMV x Costos de ventas x 365 días.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Existencias = PMV x Costos de ventas / 365 días.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Existencias = Costos de ventas x 365 días / PMV.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Existencias = PMV / Costos de ventas x 365 días.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué indicador mide la capacidad de una empresa para cumplir con obligaciones a corto plazo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Margen bruto.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Retorno sobre la inversión',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Índice de liquidez',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Margen neto.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué proyección inicial puede estimarse usando el ROI promedio y el BAII proyectado?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Costos totales.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Activos totales.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Ventas proyectadas.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Inventarios futuros.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué indicador se utiliza para analizar si los costos de producción están controlados?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Margen bruto.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Margen neto.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'ROI.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Índice de liquidez.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es el beneficio principal de sumar el promedio del excedente al PIB proyectado para ventas futuras?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Ajustar proyecciones a la inflación del sector.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Considerar el impacto de políticas financieras externas.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Reflejar un crecimiento realista basado en tendencias históricas.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Reducir la incertidumbre en los costos fijos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
