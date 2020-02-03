<template>
      <div class="container center ph3 pt5">
     <client-only>
    <carousel :autoplay="true" :nav="false" :items="1" :dots="false" :autoplayTimeout="7000">
          <div class="slider">
            <div class="h-100 flex flex-wrap justify-between items-center">
              <div class="w-50-l w-100 tl-l tc pa0-l pa3">
                <p class="ttu green-gl tracked">servicios</p>
                <h1 class="mv3 blue-gl">Seguridad para redes empresariales</h1>
                <p class="lh-subtitle mt0 mb5-l mb4">Buscamos mantener relacionamientos estratégicos con nuestros clientes en base a confianza y lealtad, ayudandolos a mejorar sus negocios a traves de la tecnologia, innovacion y servicios.</p>
               <p class="mb0"><a v-scroll-to="'#servicios'" class="link ttu btn br2 tracked">descubrí mas</a></p>
              </div>
              <div class="w-50-l w-100"><img src="/book-pass.png" class="img-hero" alt="cybersecurity"></div>
            </div>
          </div>
          <div class="slider">
            <div class="h-100 flex flex-wrap justify-between items-center">
              <div class="w-50-l w-100 tl-l tc">
                <p class="ttu green-gl tracked">mision</p>
                <h1 class="mv3 blue-gl">Innovación, calidad y servicios de excelencia</h1>
                <p class="lh-subtitle mt0 mb5-l mb4">Nuestro principal objetivo es ser los mejores en lo que hacemos a través de tecnología e innovación en servicios.</p>
                <p class="mb0"><a v-scroll-to="'#nosotros'" class="link ttu btn br2 tracked">conócenos</a></p>
              </div>
                <div class="w-50-l w-100"><img src="/lock-pass.png" class="img-hero" alt="innovation"></div>
            </div>
          </div>
    </carousel>
     </client-only>

  </div>
</template>

<style lang="scss" scoped>
    .slider {
      height: 600px;
      width: 100%;
      h1 {
        font-size: 3.2em;

        @media screen and (max-width: 60em) {
          font-size: 1.5em;
        }
      }
      .lh-subtitle {
        line-height: 2;
        @media screen and (max-width: 60em) {
          line-height: 1.2;
        }
      }
      .img-hero {
        width: 550px;
        margin-left: auto;
        @media screen and (max-width: 60em) {
          margin-right: auto;
        }
      }
    }
</style>
