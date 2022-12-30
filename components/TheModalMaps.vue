<template>
<div v-if="$route.query.maps">
     <div class="multiple-modal">
       <yandex-maps class="" @clickPlace="locationNames"></yandex-maps>
     </div>
     <div class="modal-background"
          @click="() => $router.push({path: localePath($route.path), query: {...$route.query, maps: undefined}})">
     </div>
  </div>
</template>

<script>
import yandexMaps from "@/components/yandex-maps/yandex-maps";
export default {
  name: "TheMaps",
  components: {
    yandexMaps
  },
  methods: {
    async locationNames(selectPlaceNames) {
      await this.$router.push({path: this.localePath(this.$route.path), query: {...this.$route.query, maps: undefined}})
      await  this.$emit('changePlice', selectPlaceNames)

    }
  }
}
</script>

<style scoped>
.modal-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: #111827;
  opacity: 0.3;
}

.multiple-modal {
  width: 600px;
  position: fixed;
  z-index: 5;
  /*display: flex;*/
  /*flex-direction: column;*/
  /*top: 80px;*/
  /*right: auto;*/
  /*bottom: auto;*/
  padding: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
}

</style>
