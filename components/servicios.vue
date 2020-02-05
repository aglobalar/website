<template>
  <div id="servicios">
    <div class="container center pv6-l pv4 ph3">
        <p class="f5 ttu green-gl normal tracked mt0">servicios</p>
      <div class="flex flex-wrap nl2 nr2 blue-gl">
        <article v-for="s in servicios" :key="s.name" class="w-third-l ph2 z-1 relative mv2" data-aos="fade-up" data-aos-delay="50" >
          <span class="absolute top-1-l top-2 right-2"><img :src="`/${s.icon}.svg`" :alt="s.name"></span>
          <div class="h-services pa4 lh-copy h5 dtc v-btm">
            <p class="green-gl ttu f4">{{s.name}}</p>
            <p class="mb0 b f5-l f6">{{s.subtitle}}</p>
            <p class="mv0 f6">{{s.content}}</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      servicios: [
        {
          icon: 'shield',
          name: 'Seguridad',
          subtitle: 'Aumentar las medidas de protección',
          content: 'Conjunto integrado de soluciones para la mitigación de riesgos, que abarcan desde el análisis y al abordaje de las mejores prácticas hasta la elaboración e implementación de políticas y procesos de seguridad de la información.'
        },
        {
          icon: 'cloud-computing',
          name: 'Redes',
          subtitle: 'Plataforma de comunicación',
          content: 'Diseño de red corporativa Migraciones e implementaciones de red Sistemas de seguridad de red Implementación y diseño de redes inalámbricas VoIP Integración de correo de voz/correo electrónico Integración móvil'
        },
        {
          icon: 'server',
          name: 'Servicios avanzados',
          subtitle: 'Soporte y mantenimiento',
          content: 'Infraestructura tecnologica, outsourcing, capacitación, servicios profesionales, operaciones on-site y remotas; agregando valor a las organizaciones al permitir que las mismas se focalicen en su negocio.'
        },
        {
          icon: 'phone',
          name: 'Colaboracion voz y video',
          subtitle: 'Conectados en cada lugar',
          content: 'Una de las formas de comunicación convergente que incorporan los conceptos de voz datos y video en una misma familia emergente de aplicaciones para el uso organizacional.'
        },
        {
          icon: 'vpn',
          name: 'Soporte de fabricantes',
          subtitle: 'Mantenimiento extensos y consolidados',
          content: 'Dispositivos de usuario hasta plataformas de centros de datos, lo que nos otorga más simplicidad, mejor calidad de servicio y economías de escala.'
        },
        {
          icon: 'eye',
          name: 'Servicios Gestionados',
          subtitle: 'Concentre sus recursos de TI en iniciativas específicas de su negocio',
          content: 'Los sistemas y procesos de infraestructura existentes deben ser monitoreados, gerenciados y soportados continuamente sin fallas.'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#servicios {
    background-color: #ebf0f7
}

article {
  .h-services { 
    height: 18rem;
    background: white;
    @media screen and (max-width: 60em) {
          height: auto¸;
        }
  }
    span {
        width: 40px;
        @media screen and (max-width: 60em) {
          width: 30px;
        }
    }
}
</style>