<template lang="pug">
  .container.notification-style
    .columns
      .column.is-3.is-offset-10
        .notification.is-danger
          button.delete(@click="emitHideNotification")
          slot(name="body") Something went wrong 😓
  
</template>

<script>
export default {
  methods: {
    emitHideNotification () {
      this.$emit('hideNotification', false)
    }
  }
}
</script>
