<template>
      <div class="slider">
        <div class="container center ph4 pt6">
          <div class="h-100 flex flex-wrap justify-between items-center">
            <div class="w-50-l w-100 tl-l tc pa0-l pv3">
              <h1 class="mv3 blue-gl">Su empresa merece la mejor seguridad</h1>
              <p class="lh-subtitle mt0 mb4">Somos expertos en todo el portfolio de soluciones de <strong>Seguridad de Cisco</strong>. Elaboramos e implementamos políticas y procesos de seguridad de la información.</p>
              <p><a v-scroll-to="'#servicios'" class="link ttu btn br2 tracked blue-gl">conocelos</a></p>
            </div>
            <div class="w-50-l w-100 pt0-l pt4 tr-l tc nr4-l nr0"><img src="/book-pass-cisco.png" class="img-hero" alt="cybersecurity"></div>
          </div>
        </div>
      </div>

</template>

<style lang="scss" scoped>
  .slider {
    width: 100%;
    background: url("/back-hero-cisco.png");
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
