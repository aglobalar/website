<template>
  <div>
    <tr-header />
    <div>
      <nuxt />
    </div>
    <tr-footer />
  </div>
</template>

<script>
import TrHeader from "~/components/header.vue";
import TrFooter from "~/components/footer.vue";

export default {
  components: { TrHeader, TrFooter}
}
</script>
