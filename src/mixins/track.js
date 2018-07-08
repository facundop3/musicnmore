const trackMixin = {
  methods: {
    emitClickTrack: function (id) {
      if (!this.track.preview_url) return
      this.$store.commit('clickTrack', this.track)
      // this.$emit('clickTrack', this.track.id)
      // this.$bus.$emit('set-track', this.track)
    },
    playTrackDemo: function (id) {
      this.emitClickTrack(id)
      setTimeout(() => this.$bus.$emit('play-demo'))
    }
  }
}

export default trackMixin
