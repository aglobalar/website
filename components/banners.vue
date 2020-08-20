<template>
  <client-only>
    <carousel :autoplay="true" :nav="false" :items="1" :dots="false" :autoplayTimeout="7000">
      <div class="slider">
        <div class="container center ph4 pt6-l pt5">
          <div class="h-100 flex flex-wrap justify-between items-center">
            <div class="w-50-l w-100 tl-l tc pa0-l pv3">
              <p class="ttu green-gl tracked">servicios</p>
              <h1 class="mv3 white">Seguridad para redes empresariales</h1>
              <p class="lh-subtitle moon-gray mt0 mb5-l mb4">Buscamos mantener relacionamientos estratégicos con
                nuestros clientes en base a confianza y lealtad, ayudandolos a mejorar sus negocios a traves de la
                tecnologia, innovacion y servicios.</p>
              <p class="mb0"><a v-scroll-to="'#servicios'" class="link ttu btn br2 tracked white">descubrir más</a></p>
            </div>
            <div class="w-50-l w-100 pt0-l pt4"><img src="/book-pass.png" class="img-hero" alt="cybersecurity"></div>
          </div>
        </div>
      </div>
      <div class="slider">
        <div class="container center ph4 pt6-l pt5">
          <div class="h-100 flex flex-wrap justify-between items-center">
            <div class="w-50-l w-100 tl-l tc pa0-l pv3">
              <p class="ttu green-gl tracked">mision</p>
              <h1 class="mv3 white w-90-l w-100">Innovación, calidad y servicios de excelencia</h1>
              <p class="lh-subtitle moon-gray mt0 mb5-l mb4">Nuestro principal objetivo es ser los mejores en lo que
                hacemos a través de tecnología e innovación en servicios.</p>
              <p class="mb0"><a v-scroll-to="'#nosotros'" class="link ttu btn br2 tracked white">conócenos</a></p>
            </div>
            <div class="w-50-l w-100 pt0-l pt4"><img src="/lock-pass.png" class="img-hero" alt="innovation"></div>
          </div>
        </div>
      </div>
    </carousel>
  </client-only>

</template>

<style lang="scss" scoped>
  .slider {
    height: 650px;
    width: 100%;
    background: url("/back-hero.png");
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: right center;

    @media screen and (max-width: 60em) {
      background: none;
    }

    h1 {
      font-size: 3.2em;

      @media screen and (max-width: 60em) {
        font-size: 1.5em;
      }
    }

    .lh-subtitle {
      line-height: 2;

      @media screen and (max-width: 60em) {
        line-height: 1.7;
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
