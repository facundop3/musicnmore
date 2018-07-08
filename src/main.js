import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import routes from '@/routes'

import EventBus from '@/plugins/event-bus'

import MsToMinutes from '@/filters/msToMinutes'

import Blur from '@/directives/blur'

import store from '@/store'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(MsToMinutes)
Vue.use(Blur)
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
