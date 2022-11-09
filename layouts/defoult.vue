<template>
  <div>
    <nuxt></nuxt>
  </div>
</template>

<script>

export default {
   mounted () {
    this.openTelegramModal()
  },
  methods: {
    openTelegramModal () {
      this.$modal.show(
        telegram,
        { status: 'telegram' },
        {
          height: 'auto',
          maxWidth: 500,
          width: window.innerWidth <= 450 ? window.innerWidth - 10 : 450,
          scrollable: false
        }
      )
      // this.$root.$once('telegram-modal', (item) => {
      //   // this.fetchSeason()
      // })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
