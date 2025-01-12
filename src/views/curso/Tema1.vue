<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Concepto de costos y su importancia en las organizaciones'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    p.mb-4 La evaluación de costos y presupuestos, según Polo García (2017), es esencial para la toma de decisiones en la alta gerencia. Permite planificar las utilidades y optimizar los recursos empresariales. A continuación, se desglosan los aspectos claves:
      br
      br
      | #[b La relación entre volumen de producción, costos y utilidades, es:]
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/2.svg', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones.p-3(x="19.5%" y="77%" numero="+")
        .h5.mb-2 Volumen de producción
        p A medida que aumenta, los costos fijos unitarios disminuyen, incrementando la rentabilidad por producto.
      .tarjeta.color-acento-botones.p-3(x="50%" y="77%" numero="+")
        .h5.mb-2 Relación costo-utilidad
        p Un aumento en los costos fijos puede reducir las ganancias, mientras que un incremento en el volumen de producción, tiende a aumentar las utilidades.
      .tarjeta.color-acento-botones.p-3(x="80.6%" y="77%" numero="+")
        .h5.mb-2 Precio y volumen
        p Un precio más alto suele reducir la demanda, afectando negativamente el volumen de ventas, siendo esencial equilibrar precio, costos, volumen y utilidad.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .p-5(style="background-color: #E4F2F4 ")
          p.mb-0 El #[b punto de equilibrio] permite determinar el nivel de producción y ventas, necesario para cubrir costos sin generar pérdidas ni ganancias.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/3.png', alt='')
    h3 Análisis costo-volumen-utilidad (CVU)
    p.mb-4 Este análisis evalúa la relación entre:
      br
      | * Precios de venta
      br
      | * Ingresos
      br
      | * Capacidad de producción
      br
      | * Costos y utilidades
      br
      br
      | Proveer información para decisiones financieras y administrativas, ayudando a alcanzar metas de ingresos y costos. La herramienta base es el cálculo del punto de equilibrio.
    .mb-5(data-aos="fade-up" style="background-color: #ECFCF6")
      .row.justify-content-center.align-items-center
        .col-lg.order-2
          .p-4
            ul.lista-ul
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Es el punto donde los ingresos totales igualan los costos totales (producción + operativos).
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Permite identificar el nivel mínimo de producción y ventas, para no generar pérdidas.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Si los ingresos > punto de equilibrio = utilidades. Si los ingresos < punto de equilibrio = pérdidas.
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/4.png', alt='')
    h3 Cálculo del punto de equilibrio
    p.mb-4 El cálculo implica determinar las unidades que deben producirse y venderse para cubrir los costos totales. Este método permite:
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/5.png" alt="")
          .custom-image-card__text.p-5
            h4.mb-2 Evitar pérdidas
            p.mb-0 Identificar el nivel mínimo necesario de ingresos.
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/6.png" alt="")
          .custom-image-card__text.p-5
            h4.mb-2 Planificación estratégica
            p.mb-0 Ayuda a gestionar los recursos y costos operativos, para alcanzar l balance financiero.
    p.mb-4 Esta metodología asegura un análisis integral para la toma de decisiones estratégicas en la gestión empresarial, enfocándose en el control eficiente de costos y la maximización de utilidades.
    .row.justify-content-center.mb-5
      .col-lg-8
        .box-shadow.p-3.tarjeta
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/bg-icono-pdf.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Ejemplo
                  p Invitamos a revisar este ejemplo práctico sobre el cálculo del punto de equilibrio, donde se detalla cómo una empresa puede determinar el nivel de ventas necesario, para cubrir sus costos totales. Este análisis es fundamental para la toma de decisiones estratégicas, asegurando la sostenibilidad financiera.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-arrow-right
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  Margen de seguridad
    p.mb-4 El margen de seguridad se refiere a la cantidad de unidades vendidas que exceden el punto de equilibrio. Un margen amplio indica que la empresa tiene mayor capacidad para afrontar riesgos en sus ventas, sin incurrir en pérdidas. Por el contrario, un margen reducido implica un alto riesgo de sufrir pérdidas.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .p-5(style="background-color: #E4F2F4 ")
          p.mb-0 Para mejorar este indicador, la administración debe enfocarse en estrategias como incrementar el volumen de ventas, reducir los costos fijos o aumentar el margen de contribución, disminuyendo los costos variables. Estas acciones buscan asegurar un margen de seguridad óptimo para la estabilidad financiera de la empresa.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/7.png', alt='')
    p.mb-4 El margen de seguridad se calcula utilizando la siguiente fórmula:
    .p-4(style="background-color: #FDF4EE")
      p.text-center.fw-bold.mb-0 #[span.color-azul Margen de seguridad] = Número de unidades vendidas - Punto de equilibrio en unidades.
    h3 Ejemplo:
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/8.png', alt='')
      .col-lg-8
        p.mb-4 Calcule el margen de seguridad si el número de unidades presupuestadas para vender, es de 18,500 y el punto de equilibrio en unidades, es de 9,750.
        .p-4(style="background-color: #E5F8F8 ")
          h4 Solución
          ul.lista-ul
            li.d-flex.align-items-center
              i.fas.fa-circle.fa-xs
              p.mb-0 Margen de seguridad = # unidades presupuestadas - punto de equilibrio en unidades.
            li.d-flex.align-items-center
              i.fas.fa-circle.fa-xs
              p.mb-0 Sustituyendo los valores:
            li.d-flex.align-items-center
              i.fas.fa-circle.fa-xs
              p.mb-0 Margen de seguridad = 18,500 − 9,750.
            li.d-flex.align-items-center
              i.fas.fa-circle.fa-xs
              p.mb-0 Margen de seguridad = 8,750 unidades.
            li.d-flex.align-items-center
              i.fas.fa-circle.fa-xs
              p.mb-0 Esto significa que la empresa puede vender 8,750 unidades adicionales por encima del punto de equilibrio antes de incurrir en pérdidas.
  
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Planeación de utilidades
    p.mb-4 Desde una perspectiva financiera, las empresas buscan generar un beneficio, comúnmente denominado utilidad. Con base en el cálculo del punto de equilibrio, es posible proyectar la utilidad que la organización pretende alcanzar para cumplir con los objetivos financieros definidos por la gerencia.
    .bg-full-width.p-5.mb-5(style="background-color: #FDF4EE")
      h4 Ejercicio.
      p.mb-4 La empresa ABC Ltda. busca determinar el nivel de producción necesario para alcanzar una utilidad bruta de $30,000,000. Los costos fijos de la compañía son $1,500,000, el precio de venta unitario es $15,000, y el costo variable unitario es $5,000.
      h4 Cálculo:
      h5 Unidades necesarias =
      <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mn>1</mn><mo>&#x2019;</mo><mn>500.0000</mn><mo>&#xA0;</mo><mo>+</mo><mo>&#xA0;</mo><mn>30</mn><mo>&#x2019;</mo><mn>000.000</mn></mrow><mrow><mn>15.000</mn><mo>&#xA0;</mo><mi>&#x2013;</mi><mo>&#xA0;</mo><mn>5.000</mn></mrow></mfrac></math>
      h5 Unidades necesarias =
      <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mn>31</mn><mo>&#x2019;</mo><mn>500.000</mn></mrow><mrow><mn>10</mn><mo>&#x2019;</mo><mn>000</mn></mrow></mfrac><mo>=</mo><mn>3.150</mn><mo>&#xA0;</mo><mi>u</mi><mi>n</mi><mi>i</mi><mi>d</mi><mi>a</mi><mi>d</mi><mi>e</mi><mi>s</mi><mi>
      </mi><mi>
      </mi></math>
      p.mb-4 La empresa debe producir y vender 3.150 unidades para obtener la utilidad deseada.
      h3 Validación.
      ul.lista-ul
        li.d-flex.align-items-center
          i.fas.fa-circle.fa-xs
          p.mb-0 Ventas: 3.150 * 15.000 = 47.250.000
        li.d-flex.align-items-center
          i.fas.fa-circle.fa-xs
          p.mb-0 Costos variables: 3.150 * 5.000 = 15.750.000
        li.d-flex.align-items-center
          i.fas.fa-circle.fa-xs
          p.mb-0 Costos fijos: 1’500.000
        li.d-flex.align-items-center
          i.fas.fa-circle.fa-xs
          p.mb-0 Utilidad bruta: 47’250.000 – (15’750.000 + 1’500.000) = 30’000.000
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Punto de equilibrio ponderado o de varios productos
    p.mb-4 Consiste en realizar el cálculo del punto de equilibrio, para empresas que manejan varias referencias, o productos. Para aplicar lo anterior, se utilizará la siguiente información:
      br
      br
      |La empresa CLEO S.A., quien produce y comercializa 3 productos (A, B, y C), presenta para un periodo un valor de $4.000.000, correspondientes a los costos fijos de producción, y el valor de los costos variables, y de ventas unitarios, que se relacionan a continuación:
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1. 
      span Punto de equilibrio ponderado
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th(style="background-color: #EE9865") Producto
            th(style="background-color: #EE9865") Unidades presupuestadas
            th(style="background-color: #EE9865") Precio venta unitario
            th(style="background-color: #EE9865") Costo variable unitario
            th(style="background-color: #EE9865") Margen contribución unitario
        tbody(style="background-color: #FBEADF ")
          tr
            td A
            td 500
            td $18.000
            td $14.600
            td $3.400
          tr
            td B
            td 300
            td $19.000
            td $14.000
            td $5.000
          tr
            td C
            td 200
            td $24.000
            td $20.000
            td $4.000
    .p-4.mb-4(style="background-color: #E5F8F8 ")
      p.mb-0 El cálculo del punto de equilibrio ponderado se realiza dividiendo el total de los costos fijos entre el margen de contribución ponderado, que representa la ganancia de la empresa antes de considerar los costos fijos.
    p.mb-5 Cuando únicamente se dispone del margen de contribución unitario, es necesario calcular el margen de contribución ponderado siguiendo este procedimiento:
      br
      br
      |Como la empresa presupuesta elaborar y vender 1.000 unidades del total de sus referencias, lo que representa una participación del producto A del 50 % (500 unidades que presupuesta elaborar de esa referencia dividido 1.000 que es el total de los productos elaborar), ese porcentaje de participación se multiplica por el margen de contribución unitario (para el producto A es $3.400), lo que genera un valor de $1.700, al realizar los mismos calculados para los otros 2 productos tenemos que el margen de contribución ponderado es de $4.000. Lo anterior se resume, en la tabla 2. Información resumen.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 2.
      span Punto de equilibrio ponderado
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th(style="background-color: #EE9865") Producto
            th(style="background-color: #EE9865") Unidades presupuestadas
            th(style="background-color: #EE9865") Porcentaje participación
            th(style="background-color: #EE9865") Margen contribución unitario
            th(style="background-color: #EE9865") Margen de contribución ponderado
        tbody(style="background-color: #FBEADF ")
          tr
            td.fw-bold A
            td 500
            td 50 %
            td $3.400
            td $1.700
          tr
            td.fw-bold B
            td 300
            td 30 %
            td $5.000
            td $1.500
          tr
            td.fw-bold C
            td 200
            td 20 %
            td $4.000
            td $800
          tr
            td.fw-bold TOTAL
            td 1.000
            td 100 %
            td 
            td $4.000
    .p-4.mb-4(style="background-color: #E5F8F8 ")
      p.mb-0 #[b Remplazando los resultados se presenta:] total costos fijos/margen de contribución ponderado = $4.000.000 / $4.000 = 1.000 unidades, significa que la empresa deberá elaborar y vender 1.000 unidades del total de sus productos para para llegar al punto donde financieramente los ingresos recibidos por las ventas son iguales a los costos de producción.      
    p.mb-4 También se puede determinar, la cantidad a elaborar y vender por cada una de las referencias para establecer el aporte que tienen en el punto de equilibrio, de la siguiente manera: El producto A que tiene un porcentaje de participación en la producción del 50 % al multiplicarlo por el punto de equilibrio calculado, es decir, 1.000 unidades, tenemos que del producto A se deben elaborar y vender 500 unidades, del producto B 300 unidades y del producto C 200 unidades. Al validar esta información se observa:
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 3.
          span Punto de equilibrio ponderado
        table
          thead
            tr
              th(style="background-color: #EE9865" colspan='3') VENTAS NETAS
              th(style="background-color: #EE9865") $19´500.000
          tbody(style="background-color: #FBEADF ")
            tr
              td.fw-bold Producto A
              td 500 unidades x $18.000
              td $9.000.000
              td
            tr
              td.fw-bold Producto B
              td 300 unidades x $19.000
              td $5.700.000
              td 
            tr
              td.fw-bold Producto C
              td 200 unidades x $24.000
              td $4.800.000
              td 
            tr
              td.fw-bold(colspan='3') (-) COSTO VARIABLE
              td $15’500.000
            tr
              td.fw-bold Producto A
              td 500 unidades x $14.600
              td $7.300.000
              td
            tr
              td.fw-bold Producto B
              td 300 unidades x $14.000
              td $4.200.000
              td 
            tr
              td.fw-bold Producto C
              td 200 unidades x $20.000
              td $4.000.000
              td 
            tr
              td.fw-bold(colspan='3') (=) MARGEN CONTRIBUCIÓN
              td $4.000.000
            tr
              td.fw-bold(colspan='3') (-) COSTOS FIJOS
              td $4.000.000
            tr
              td.fw-bold(colspan='3') (=) RESULTADO DEL EJERCICIO
              td 0
    p.mb-4 Teniendo en cuenta la misma información que, la compañía desea conocer el nivel de producción que requiere, sabiendo que la gerencia ha establecido, obtener una utilidad bruta de $50.000.000, al finalizar el periodo. Para realizar dicha proyección, se toma el total de los costos fijos, más el valor de la utilidad que se espera obtener, y se divide entre el margen de contribución ponderado.
    h3 Remplazando se tiene:
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>U</mi><mi>n</mi><mi>i</mi><mi>d</mi><mi>a</mi><mi>d</mi><mi>e</mi><mi>s</mi><mo>&#xA0;</mo><mi>p</mi><mi>r</mi><mi>o</mi><mi>y</mi><mi>e</mi><mi>c</mi><mi>c</mi><mi>i</mi><mi>&#xf3;</mi><mi>n</mi><mo>&#xA0;</mo><mi>u</mi><mi>t</mi><mi>i</mi><mi>l</mi><mi>i</mi><mi>d</mi><mi>a</mi><mi>d</mi><mo>&#xa0;</mo><mo>=</mo><mfrac><mrow><mi>$</mi><mn>4.000</mn><mo>.</mo><mn>000</mn><mo>&#xA0;</mo><mo>+</mo><mo>&#xA0;</mo><mi>$</mi><mn>50.000</mn><mo>.</mo><mn>000</mn><mo>&#xa0;</mo></mrow><mrow><mi>$</mi><mn>4.000</mn></mrow></mfrac><mo>=</mo><mn>13.500</mn><mo>&#xA0;</mo><mi>u</mi><mi>n</mi><mi>i</mi><mi>d</mi><mi>a</mi><mi>d</mi><mi>e</mi><mi>s</mi><mo>&#xa0;</mo></math>
        p.mb-4 Esto significa que la empresa deberá elaborar y vender 13.500 unidades del total de sus productos, para obtener una utilidad bruta de $50.000.000.
          br
          br
          |Para determinar, la cantidad a elaborar y vender por cada una de las referencias da como resultado: el producto A que tiene un porcentaje de participación en la producción del 50 %, que, al multiplicarlo por las cantidades a elaborar y vender, para obtener la utilidad proyectada, es decir, 13.500 unidades, se obtiene que del producto A, se deben elaborar y vender 6.750 unidades, del producto B, 4.050 unidades y del producto C, 2.700 unidades.
          br
          br
          |Al validar esta información se obtendrá:
      .col-lg-4.col-7: img(src='@/assets/curso/temas/9.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 4.
          span Punto de equilibrio ponderado
        table
          thead
            tr
              th(style="background-color: #EE9865" colspan='3') VENTAS NETAS
              th(style="background-color: #EE9865") $263.250.000
          tbody(style="background-color: #FBEADF ")
            tr
              td.fw-bold Producto A
              td 6.750 unidades x $18.000
              td $121.500.000
              td
            tr
              td.fw-bold Producto B
              td 4.050 unidades x $19.000
              td $76.950.000
              td 
            tr
              td.fw-bold Producto C
              td 2700 unidades x $24.000
              td $64.800.000
              td 
            tr
              td.fw-bold(colspan='3') (-) COSTO VARIABLE
              td $ 209.250.000
            tr
              td.fw-bold Producto A
              td 6.750 unidades x $14.600
              td $98.550.000
              td
            tr
              td.fw-bold Producto B
              td 4.050 unidades x $14.000
              td $56.700.000
              td 
            tr
              td.fw-bold Producto C
              td 2.700 unidades x $20.000
              td $54.000.000
              td 
            tr
              td.fw-bold(colspan='3') (=) MARGEN CONTRIBUCIÓN
              td $54.000.000
            tr
              td.fw-bold(colspan='3') (-) COSTOS FIJOS
              td $4.000.000
            tr
              td.fw-bold(colspan='3') (=) RESULTADO DEL EJERCICIO
              td $ 50.000.000
    .row.justify-content-center.mb-5
      .col-lg-8
        .box-shadow.p-3.tarjeta
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/curso/temas/video.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 El modelo CVU y la fijación de precios
                  p Para profundizar los conocimientos sobre CVU, se sugiere ver el siguiente video: 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href='https://youtu.be/19HwworSeWc?si=rZzVjD7w6OmRpQws ' target="_blank")
                    span Ver video
                    i.fas.fa-arrow-right
    









</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
