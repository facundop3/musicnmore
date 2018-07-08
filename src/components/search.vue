<template lang="pug">
  main
    transition(name="move")
      m-n-m-notification(v-show="showNotification" @hideNotification="setShowNotification")
        p(slot="body") No results for your search "{{ searchQuery }}"
      
    section.section
      nav.nav.has-shadow
        .container
          .columns
            .column.is-four-fifths
              input.input.is-large( type="text",
                placeholder="Buscar canciones", 
                v-model="searchQuery" @keyup.enter="search")
            .column
              a.button.is-info.is-large(@click="search") Search
              a.button.is-danger.is-large(@click="clearSearch") &times;
          transition(name="move")
            m-n-m-loader(v-show="isLoading")
          p
            small(v-show="this.tracks.length") {{trackFounded}}
        .container.results(v-show="!isLoading")
          .columns.is-multiline
            .column.is-one-quarter(v-for="track in tracks")
              m-n-m-track(v-blur="track.preview_url" v-bind:track="track" @clickTrack="setClickedTrackId" :class="{'highlight-track':track.id == clickedTrackId}" v-if="!isLoading")    
</template>

<script>
import trackService from '@/services/track'

import MNMTrack from '@/components/track.vue'
import MNMLoader from '@/components/shared/loader.vue'
import MNMNotification from '@/components/shared/notification.vue'

export default {
  name: 'app',
  components: {
    MNMTrack,
    MNMLoader,
    MNMNotification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      clickedTrackId: '',
      showNotification: false,
      tracksCount: 0

    }
  },
  computed: {
    trackFounded () {
      return `Results for your search: ${this.tracksCount}`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => { this.showNotification = false }, 4000)
      }
    }
  },
  methods: {
    search: function () {
      if (!this.searchQuery) return // if searchQuery is empty we don't excecute the request
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then((res) => {
          this.tracksCount = res.tracks.total
          this.tracks = res.tracks.items
          this.isLoading = false
          if (!this.tracks.length) {
            this.setShowNotification(true)
          }
        })
    },
    clearSearch: function () {
      this.tracks = []
      this.searchQuery = ''
    },
    setClickedTrackId (id) {
      this.clickedTrackId = id
    },
    setShowNotification: function (value) {
      this.showNotification = value
    }
  }
}
</script>

<style lang="scss">
.highlight-track{
  border: solid 3px #23d160;
}
</style>
