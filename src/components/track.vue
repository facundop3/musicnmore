<template lang="pug">
  .card(@click="emitClickTrack(track.id)" v-if="track && track.album")
    .card-image
      figure.image.is-4by3
        img(:src="track.album.images[0].url")
    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img(:src="track.album.images[0].url")
        .media-content
          p.title.is-4 {{ track.artists[0].name }}
          p.subtitle.is-6
      .content
        p Play a demo of : {{track.name}}
        small Duration: {{track.duration_ms | ms-to-minutes}}
        nav.level
          .level-left
            .level-item
              button(@click="playTrackDemo").button.is-primary Play 🎶
            .level-item
             button.button.is-info
              span.is-6(@click="goToTrack(track.id)") Get details 🤟
</template>

<script>
import trackMixin from '@/mixins/track'
export default {
  mixins: [ trackMixin ],
  props: {
    track: { type: Object, required: true }
  },
  methods: {
    goToTrack: function (id) {
      if (!this.track.preview_url) return
      this.$router.push({name: 'track', params: {id: id}})
    }
  }
}
</script>

<style lang="scss">

</style>
