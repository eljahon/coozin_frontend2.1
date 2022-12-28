<template>
  <div>
    <yandex-maps @clickPlace="getSelectName">
    </yandex-maps>
  </div>
</template>

<script>
import yandexmaps  from '@/components/yandex-maps/yandex-maps'
export default {
  name: "yandex.map",
  components: {
    yandexmaps
  },
  // data () {
  //   return {
  //     markerIcon: [41.30189519574488,69.28935242760551],
  //     showMap: false,
  //     setting: {
  //       apiKey: '1abe9aa1-66ec-4c7f-8b93-a4e0bc25319e',
  //       // apiKey: '8fb635ed-f033-4166-8286-a5388bb7d9a9',
  //       lang: 'ru_RU',
  //       coordorder: 'latlong',
  //       version: '2.1'
  //     }
  //   }
  // },
  // mounted() {
  //   this.showMap = true
  // },
  methods: {
    getSelectName(name) {
      console.log(name)
    }
  }
}
</script>

<style scoped>

</style>

