<template>
<div>
  <div id="servicios" class="bg-duo">
    <div class="container center">
      <div class="flex flex-wrap justify-between items-center">
        <div class="w-50-l w-100 pr4-l ph4 pv5">
         <div class="pv4-l pv0"> <h2 class="about-title blue-gl" data-aos="fade-up" data-aos-delay="40"><em>DUO</em> está diseñado para proteger a todos los usuarios, dispositivos y
            aplicaciones</h2>

          <p class="lh-global" data-aos="fade-up" data-aos-delay="50" >La autenticación multifactor de Duo protege las aplicaciones mediante el uso de una
            segunda
            fuente de validación. Bloquea el acceso de los dispositivos obsoletos, inseguros o desconocidos a sus
            aplicaciones y dispositivos en la nube.</p>
          <p class="mt4 mb0" data-aos="fade-up" data-aos-delay="60"><a href="mailto:info@aglobal.com.ar" class="link ttu btn br2 tracked blue-gl">solicitar
              trial</a></p>
         </div>
        </div>
        <div class="w-50-l w-100">
          <p class="dn-l db mv0"> <img src="/bg-duo.jpg" class="v-mid" alt="duo"></p>
        </div>
      </div>
    </div>
  </div>
    <div class="container center">
      <div class="flex flex-wrap flex-row-l flex-column-reverse justify-between items-end">
                          <div class="w-50-l w-100 ph0-l ph4 tl-l tc">
                                <p class="blue-cs f3-l f5 normal w-70-l w-100 center tc" data-aos="fade-up" data-aos-delay="70">30 segundos es todo lo que se necesita para proteger a los usuarios en línea</p>
          <img src="/umbrella-graph.jpg" class="v-mid tc  nl4-l nl0" alt="duo">
        </div>
        <div class="w-50-l w-100 pl5-l ph4 pv6-l pv5 ">
          <h2 class="about-title blue-gl" data-aos="fade-up" data-aos-delay="40"><em>Umbrella</em> es la forma más fácil de proteger a los usuarios en cuestión de minutos</h2>

          <p class="lh-global" data-aos="fade-up" data-aos-delay="50">Visibilidad para proteger el acceso a Internet en todos los dispositivos de su red y a los usuarios, en forma remota, en cualquier lugar. Detener las amenazas antes de que lleguen a su red o endpoints.</p>
          <p class="mt4 mb0" data-aos="fade-up" data-aos-delay="60"><a href="mailto:info@aglobal.com.ar" class="link ttu btn br2 tracked blue-gl">solicitar
              trial</a></p>
        </div>
      </div>
    </div>
      <div class="bg-amp">
    <div class="container center">
      <div class="flex flex-wrap justify-between items-center">
        <div class="w-50-l w-100 pr4-l ph4 pv6-l pv5">
          <h2 class="about-title blue-gl mv0" data-aos="fade-up" data-aos-delay="40"><em>Cisco AMP,</em> seguridad eficaz para todas las terminales</h2>

          <p class="lh-global" data-aos="fade-up" data-aos-delay="50">Con el aumento de las amenazas móviles, las empresas necesitan contar con una seguridad eficaz, <strong>Cisco AMP</strong> evita las amenazas en el punto de entrada y realiza un seguimiento continuo de cada archivo que ingresa en su red.</p>
          <p class="mt4 mb0" data-aos="fade-up" data-aos-delay="70"><a href="mailto:info@aglobal.com.ar" class="link ttu btn br2 tracked blue-gl">solicitar
              trial</a></p>
        </div>
         <div class="w-50-l w-100">
            <p class="dn-l db mv0"> <img src="/bg-amp.jpg" class="v-mid" alt="duo"></p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-duo {
    background: #ebf0f7 url("/bg-duo.jpg");
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: right center;
}
.bg-amp {
    background: #ebf0f7 url("/bg-amp.jpg");
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: right center;
}
  .about-title {
    font-size: 2rem;

    @media screen and (max-width: 60em) {
      font-size: 1.2rem;
    }
  }

  .lh-global {
    line-height: 1.7;
  }
      @media screen and (max-width: 60em) {
      .bg-duo, .bg-amp {
           background: #ebf0f7;
      }
    }

</style>