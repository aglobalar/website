<template>
  <div>
    <tr-header />
    <div class="bg-gradient">
      <tr-banner />
    </div>
    <tr-nosotros />
    <tr-servicios />
     <tr-cisco />
    <tr-clientes />
    <tr-contacto />
  </div>
</template>

<script>
  import TrHeader from "~/components/header.vue";
  import TrBanner from '~/components/banners.vue'
  import TrNosotros from '~/components/about.vue'
  import TrServicios from '~/components/servicios.vue'
  import TrCisco from '~/components/cta-cisco.vue'
  import TrClientes from '~/components/clientes.vue'
  import TrContacto from '~/components/contact.vue'

  export default {
    components: {
      TrHeader,
      TrBanner,
      TrNosotros,
      TrClientes,
      TrServicios,
      TrCisco,
      TrContacto
    }
  }
</script>
<style lang="scss" scoped>
  .bg-gradient {
    background: linear-gradient(0deg, #0f054c 0%, #162d8c 100%);
  }
</style>
