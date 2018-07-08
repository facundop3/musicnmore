<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
      .container
        nav.nav.has-shadow.level
              .level-left
                .level-item
                 p One place , All music 🎧
              .level-right
                .level-item
                  router-link.nav-item(to="/") Search 
                .level-item
                  router-link.nav-item(to="/about") About us
    .hero-body
      .container.has-text-centered
        h1.title Music N' Moere
        h2.subtitle Vue nisimo
        m-n-m-player
</template>

<script>
import MNMPlayer from '@/components/player.vue'

export default {
  components: { MNMPlayer }
}
</script>
