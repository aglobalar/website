<template>
  <div>

    <div class="bg-gradient">
    <div class="container center ph3 pt5-l pt4">
      <tr-banner />
    </div>
    </div>
  </div>
</template>

<script>
import TrBanner from '~/components/banners.vue'

export default {
  components: { TrBanner }
}
</script>
<style lang="scss" scoped>
.bg-gradient {
  background: linear-gradient(0deg, rgb(241, 246, 253) 0%, rgb(255, 255, 255) 100%);
}
</style>


