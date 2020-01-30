<template>
  <div id="servicios">
    <div class="container center pv6-l pv4 ph3">
        <p class="f5 ttu white normal tracked mt0">servicios</p>
      <div class="flex flex-wrap nl2 nr2 white">
        <article class="w-third-l ph2 z-1 relative mv2">
          <span class="absolute top-1-l top-2 right-2"><img src="/cloud-computing.svg" alt="redes"></span>
          <div class="bg-blue-gl pa4 lh-copy h5 dtc v-btm">
            <p class="green-gl ttu">Redes</p>
            <p class="mb0 b f5-l f6">Plataforma de comunicación</p>
            <p class="mv0 f6"> Diseño de red corporativa Migraciones e implementaciones de red Sistemas de seguridad de red Implementación y diseño de redes inalámbricas VoIP Integración de correo de voz/correo electrónico Integración móvil</p>
          </div>
        </article>
        <article class="w-third-l ph2 z-1 relative mv2">
          <span class="absolute top-1-l top-2 right-2"><img src="/shield.svg" alt="redes"></span>
          <div class="bg-blue-gl pa4 lh-copy h5 dtc v-btm">
            <p class="green-gl ttu">Seguridad</p>
            <p class="mb0 b f5-l f6">Aumentar las medidas de protección</p>
            <p class="mv0 f6">Conjunto integrado de soluciones para la mitigación de riesgos, que abarcan desde el análisis y al abordaje de las mejores prácticas hasta la elaboración e implementación de políticas y procesos de seguridad de la información.</p>
          </div>
        </article>
        <article class="w-third-l ph2 z-1 relative mv2">
          <span class="absolute top-1-l top-2 right-2"><img src="/server.svg" alt="redes"></span>
          <div class="bg-blue-gl pa4 lh-copy h5 dtc v-btm">
            <p class="green-gl ttu">Infraestrucutra TI</p>
            <p class="mb0 b f5-l f6">Soporte y mantenimiento</p>
            <p class="mv0 f6">Virtualización de Servidores / Desktops Migraciones de Versiones y Sistemas Operativos Configuración de servidores de archivos. Instalación e implementación de servidores de dominio Servicios de red (DNS, DHCP)</p>
          </div>
        </article>
         <article class="w-third-l ph2 z-1 relative mv2">
          <span class="absolute top-1-l top-2 right-2"><img src="/phone.svg" alt="redes"></span>
          <div class="bg-blue-gl pa4 lh-copy h5 dtc v-btm">
            <p class="green-gl ttu">Colaboracion voz y video</p>
            <p class="mb0 b f5-l f6">Conectados en cada lugar</p>
            <p class="mv0 f6"> Una de las formas de comunicación convergente que incorporan los conceptos de voz datos y video en una misma familia emergente de aplicaciones para el uso organizacional.</p>
          </div>
        </article>
        <article class="w-third-l ph2 z-1 relative mv2">
          <span class="absolute top-1-l top-2 right-2"><img src="/vpn.svg" alt="redes"></span>
          <div class="bg-blue-gl pa4 lh-copy h5 dtc v-btm">
            <p class="green-gl ttu">Soporte de fabricantes</p>
            <p class="mb0 b f5-l f6">Mantenimiento extensos y consolidados</p>
            <p class="mv0 f6"> Dispositivos de usuario hasta plataformas de centros de datos, lo que nos otorga más simplicidad, mejor calidad de servicio y economías de escala.</p>
          </div>
        </article>
         <article class="w-third-l ph2 z-1 relative mv2">
          <span class="absolute top-1-l top-2 right-2"><img src="/eye.svg" alt="redes"></span>
          <div class="bg-blue-gl pa4 lh-copy h5 dtc v-btm">
            <p class="green-gl ttu">Monitoreo</p>
            <p class="mb0 b f5-l f6">Concentre sus recursos de TI en iniciativas específicas de su negocio</p>
            <p class="mv0 f6">Los sistemas y procesos de infraestructura existentes deben ser monitoreados, gerenciados y soportados continuamente sin fallas.</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#servicios {
    background-color: #000068
}

article {
    span {
        width: 50px;
        @media screen and (max-width: 60em) {
          width: 40px;
        }
    }
}
</style>