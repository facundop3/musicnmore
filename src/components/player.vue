<template lang="pug">
  .content(v-if="track && track.album")
    p
      img(:src="track.album.images[0].url")
    p
      strong {{ track.name }}
      small {{ track.duration_ms | ms-to-minutes}}
    p
      audio(v-if="track.preview_url",controls, :src="track.preview_url" ref="playIt")
</template>

<script>
import { mapState } from 'vuex'

export default {
  created () {
    this.$bus.$on('play-demo', () => {
      this.$refs['playIt'].play()
    })
  },
  computed: {
    ...mapState(['track'])
  }
}
</script>

<style lang="scss" scoped>
img{
  width: 124px;
  border-radius: 50%;
}
.content{
  margin-bottom: 1em;
}
</style>
