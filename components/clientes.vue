<template>
<div class="mw9 center ph3 dn-ms">
  <div class="clients pv5-l pv4">
    <div class="tc pb4">
      <p class="f5 ttu green-gl normal tracked">experiencia</p>
      <h2 class="f2-l f4 blue-gl mt0">Marcas lideres en el mercado</h2>
    </div>
    <client-only>
    <carousel :autoplay="true" :nav="false" :items="5" :responsive="{0:{items:1},600:{items:3}}" :autoplayTimeout="8000">
        <div class="carousel-cell flex justify-center items-center" v-for="c in clients" :key="c.name">
        <a :href="c.link" target="_blank" rel="noopener">
          <img :src="`/clients/${c.name}.png`" class="dib" :alt="c.name">
        </a>
        </div>
    </carousel>
    </client-only>
  </div>
</div>
</template>
<script>

export default {

  data () {
    return {
      clients: [
        {
          link: 'https://www.cisco.com/c/en/us/index.html',
          name: 'cisco',
        },
        {
          link: 'http://www.apc.com/ar/es/',
          name: 'apc',
        },
        {
          link: 'http://www1.la.dell.com/content/default.aspx?c=ar&l=es&s=&s=gen&~ck=cr',
          name: 'dell',
        },
        {
          link: 'https://www.fortinet.com/',
          name: 'fortinet',
        },
        {
          link: 'https://es.arbornetworks.com/',
          name: 'arbor',
        },
       {
          link: 'https://meraki.cisco.com/',
          name: 'meraki',
        },
        {
          link: 'https://www.vmware.com/ar.html',
          name: 'vmware',
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .clients {
    .carousel-cell {
      height: 90px;
      margin: 0 20px;
      counter-increment: carousel-cell;
      cursor: pointer;
    }
  }
</style>