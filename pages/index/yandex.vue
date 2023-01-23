<template>
  <div>
    <yandex-maps v-if="isMapRender" @clickPlace="getSelectName">
    </yandex-maps>
<!--    <the-modal-maps v-if="isMapRender"/>-->
  </div>
</template>

<script>
import yandexmaps  from '@/components/yandex-maps/yandex-maps'
// import theModalMaps from "~/components/TheModalMaps";
export default {
  name: "yandex.map",
  components: {
    yandexmaps,
    // theModalMaps
  },
  data () {
    return {
  //     markerIcon: [41.30189519574488,69.28935242760551],
      isMapRender: false,
  //     setting: {
  //       apiKey: '1abe9aa1-66ec-4c7f-8b93-a4e0bc25319e',
  //       // apiKey: '8fb635ed-f033-4166-8286-a5388bb7d9a9',
  //       lang: 'ru_RU',
  //       coordorder: 'latlong',
  //       version: '2.1'
  //     }
    }
  },
  mounted() {
    this.isMapRender = true
  },
  methods: {
    getSelectName(name) {
    }
  }
}
</script>

<style scoped>

</style>

