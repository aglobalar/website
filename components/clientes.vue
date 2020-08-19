<template>
<div class="container center ph4 dn-ms">
  <div class="clients pv5-l pv4">
    <div class="tc pb4">
      <p class="f5 ttu tag normal tracked">experiencia</p>
      <h2 class="f2-l f4 blue-gl mt0">Marcas lideres en el mercado</h2>
    </div>
    <ul class="flex flex-wrap justify-center items-center pa0 list clients">
      <li v-for="c in clients" :key="c.name" class="ph4 pv3" data-aos="fade-up">
        <a :href="c.link" target="_blank" rel="noopener">
          <img :src="`/clients/${c.name}.png`" class="dib" :alt="c.name">
        </a>
      </li>
    </ul>
  </div>
</div>
</template>
<script>

export default {

  data () {
    return {
      clients: [
        {
          link: '/cisco',
          name: 'cisco',
        },
        {
          link: 'http://www1.la.dell.com/content/default.aspx?c=ar&l=es&s=&s=gen&~ck=cr',
          name: 'dell',
        },
        {
          link: 'http://www.apc.com/ar/es/',
          name: 'apc',
        },
        {
          link: 'https://www.fortinet.com/',
          name: 'fortinet',
        },
               {
          link: 'https://meraki.cisco.com/',
          name: 'meraki',
        },
        {
          link: 'https://es.arbornetworks.com/',
          name: 'arbor',
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
    li a {
      height: 90px;
      cursor: pointer;
    }
  }
</style>