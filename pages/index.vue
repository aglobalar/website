<template>
  <div>

    <div class="bg-gradient">
      <tr-banner />
    </div>
    <tr-nosotros />
    <tr-servicios />
     <tr-clientes />
      <tr-contacto />
  </div>
</template>

<script>
import TrBanner from '~/components/banners.vue'
import TrNosotros from '~/components/about.vue'
import TrServicios from '~/components/servicios.vue'
import TrClientes from '~/components/clientes.vue'
import TrContacto from '~/components/contact.vue'

export default {
  components: { TrBanner, TrNosotros , TrClientes, TrServicios, TrContacto }
}
</script>
<style lang="scss" scoped>
.bg-gradient {
  background: linear-gradient(0deg, rgb(235, 240, 247) 0%, rgb(255, 255, 255) 100%);
}
</style>


