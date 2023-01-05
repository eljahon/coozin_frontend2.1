<template>
<div v-if="$route.query.maps">
     <div class="multiple-modal">
       <span class="flex items-center justify-end mb-3">
         <div @click="() => $router.push({path: localePath($route.path), query: {...$route.query, maps: undefined}})">
           <the-icon
             class="cursor-pointer"
             src="x"
             width="20"
             height="20"
           />
         </div>
       </span>
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
  width: 90%;
  position: fixed;
  z-index: 5;
  padding: 16px;
  border-radius: 16px;
  top: 14%;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0);
  background: #ffffff;
}
.multiple-modal > div {
  overflow: hidden;
  height: 94%;
}
.ymaps-2-1-79-map {
  width: 100%;
  height: 100%;
}

</style>
