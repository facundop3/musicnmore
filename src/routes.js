import Search from '@/components/search.vue'
import About from '@/components/about.vue'
import TrackDetail from '@/components/track-detail.vue'

const routes = [
  {path: '/', component: Search, name: 'search'},
  {path: '/about', component: About, name: 'about'},
  {path: '/track/:id', component: TrackDetail, name: 'track'}
]

export default routes
