<template>
  <div>
    <div id="map-wrap" style="height:80vh" class="w-full h-full">
      <!--      <client-only>-->
<!--      <no-ssr>-->
        <yandex-map
          v-if="showMap"
          style="height: 100% !important; width: 100% !important;"
          :settings="setting"
          :coords="lot ? [lot, lang] : markerIcon"
          :zoom="11"
          class="yandexMap"
          map-type="map"
          @click="Location"
          :controls="['zoomControl', 'fullscreenControl', 'trafficControl', 'searchControl', 'smallMapDefaultSet']"
        >
          <ymap-marker
            v-if="lang && lot"
            :coords="[lot, lang]"
            :marker-id="1"
          >

          </ymap-marker>
          <ymap-marker
            v-else
            :coords="markerIcon"
            :marker-id="2"
          >
          </ymap-marker>
        </yandex-map>
    </div>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  name: "yandex.map",
  components: {
    ymapMarker,
    yandexMap
  },
  data () {
    return {
      markerIcon: [41.30189519574488,69.28935242760551],
      showMap: false,
      lang: this.$cookies.get('langlot')?.longitude ?? false,
      lot: this.$cookies.get('langlot')?.latitude ?? false,
      setting: {
        apiKey: '1abe9aa1-66ec-4c7f-8b93-a4e0bc25319e',
        // apiKey: '8fb635ed-f033-4166-8286-a5388bb7d9a9',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
      }
    }
  },
  mounted() {
    this.showMap = true;
  },
  methods: {
   async Location(name) {
     try {
       console.log(name)
       this.markerIcon = name._sourceEvent._cache.coords;
       const sendata = name._sourceEvent._cache.coords.join(',')
      const data=  await  this.$store.dispatch('yandex/pointSearchLotLang', sendata);
       this.$emit('clickPlace', data)
       this.lang =name._sourceEvent._cache.coords[1] ;
       this.lot = name._sourceEvent._cache.coords[0]
       // console.log(data,name._sourceEvent._cache.coords)
     } catch (err){
     }
    }
  }
}
</script>

<style scoped>

</style>


