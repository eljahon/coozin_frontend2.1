<template>
  <div>
    <the-header />
    <nuxt-child />
    <the-footer />
  </div>
</template>
<script>
export default  {
  auth:false,
  data () {
    return {
      isModal: false

    }
  },
  head () {
    return {
      bodyAttrs: {
        class: this.$route.query?.foodSaw || this.$store.state.burger ? 'overflow-hidden' : ''
      }
    }
  },
  mounted() {
  },
  methods: {
    showLocations (value) {
      const locations  = {
        latitude: value?.coords?.latitude,
        longitude: value?.coords?.longitude
      };
      this.$store.dispatch('set_location', locations)
      this.$cookies.set('langlot', locations)
    },
    locations () {
     window.navigator.geolocation.getCurrentPosition(this.showLocations)
    },
  },
}
</script>

<style></style>
