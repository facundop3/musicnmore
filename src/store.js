import Vue from 'vue'
import Vuex from 'vuex'
import trackService from '@/services/track'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    track: {}
  },
  mutations: {
    clickTrack: function (state, track) {
      state.track = track
    }
  },
  actions: {
    getTrackById (context, payload) {
      return trackService.getById(payload.id)
        .then(res => {
          context.commit('clickTrack', res)
          return res
        })
    }
  },
  getters: {
    trackTitle (state) {
      if (!state.track.name) return ''
      return `${state.track.name} - ${state.track.artists[0].name}`
    }
  }
})

export default store
