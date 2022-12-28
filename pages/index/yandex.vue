<template>
  <div>
    <div id="map-wrap" style="height: 100vh">
      <client-only>
        <l-map :zoom=14 :center="[41.30189519574488,69.28935242760551]" @click="localeLocation">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker :lat-lng="markerIcon"></l-marker>
        </l-map>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: "yandex.map",
  data () {
    return {
      markerIcon: [41.30189519574488,69.28935242760551]
    }
  },
  methods: {
    localeLocation(name) {
      this.markerIcon = [name.latlng.lat, name.latlng.lng]
      console.log(name.latlng)
    }
  }
}
</script>

<style scoped>

</style>

