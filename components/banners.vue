<template>
  <div>
     <client-only>
    <carousel :autoplay="true" :nav="false" :items="1" :dots="false">
          <div class="slider">
            <div class="h-100 flex justify-between items-center">
              <div class="w-50-l w-100 tl-l tc pa0-l pa3">
                <p class="ttu green-gl">servicios</p>
                <h1 class="mv3 blue-gl">Seguridad para redes empresariales</h1>
                <p class="lh-subtitle gray mt0">Buscamos mantener relacionamientos estratégicos con nuestros clientes en base a confianza y lealtad, ayudandolos a mejorar sus negocios a traves de la tecnologia, innovacion y servicios.</p>
              </div>
              <div class="w-50-l w-100"><img src="book-pass.png" class="img-hero" alt="computer security pass"></div>
            </div>
          </div>
          <div class="slider">
            <div class="h-100 flex justify-between items-center">
              <div class="w-50-l w-100 tl-l tc">
                <p class="ttu green-gl">mision</p>
                <h1 class="mv3 blue-gl">Anticipamos las amenazas</h1>
                <p class="lh-subtitle gray mt0">Nuestro principal objetivo es ser los mejores en lo que hacemos a través de tecnología e innovación en servicios.</p>
              </div>
                <div class="w-50-l w-100"><img src="/lock-pass.png" class="img-hero" alt="computer security pass"></div>
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
        font-size: 3.5em;

        @media screen and (max-width: 60em) {
          font-size: 2em;
        }
      }
      .lh-subtitle {
        line-height: 2;
      }
      .img-hero {
        width: 550px;
        height: 450px;
        margin-left: auto;
        @media screen and (max-width: 60em) {
          margin-right: auto;
        }
      }
    }
</style>
