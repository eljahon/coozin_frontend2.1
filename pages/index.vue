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
  methods: {
    showLocations (value) {
      console.log(value)
    },
    locations () {
     window.navigator.geolocation.getCurrentPosition(this.showLocations)
    },
    LocationModal () {
this.isModal = !this.isModal
    }
  },
  mounted() {
    this.locations()
  }
}
</script>
