<template>
  <div>
    <tr-headerc />
         <tr-hero />
    <tr-about />
    <tr-productos />
    <tr-contacto />
  </div>
</template>

<script>
  import TrHeaderc from "~/components/headerc.vue";
  import TrHero from "~/components/hero.vue";
  import TrAbout from "~/components/about-cisco.vue";
  import TrProductos from "~/components/productos-cisco.vue";
  import TrContacto from '~/components/contact.vue'

  export default {
    components: {
      TrHeaderc,
      TrHero,
       TrAbout,
        TrProductos,
      TrContacto
    }
  }
</script>