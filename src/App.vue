<template lang="pug">
  #app
    m-n-m-header
    router-view
    m-n-m-footer
</template>

<script>

import MNMFooter from '@/components/layout/footer.vue'
import MNMHeader from '@/components/layout/header.vue'

export default {
  name: 'app',
  components: {
    MNMFooter,
    MNMHeader
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
