<template>
  <div>
    <the-header />
    <nuxt-child />
    <the-footer />
  </div>
</template>
<script>
export default  {
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
    // console.log(this.$route)
  },
  methods: {
    showLocations (value) {
      const locations  = {
        latitude: value?.coords?.latitude,
        longitude: value?.coords?.longitude
      };
      this.$store.dispatch('set_location', locations)
      this.$cookies.set('langlot', locations)
      // console.log(value.coords, locations)
    },
    locations () {
     window.navigator.geolocation.getCurrentPosition(this.showLocations)
    },
    LocationModal () {
      this.isModal = !this.isModal
    }
  },
}
</script>

<style></style>
