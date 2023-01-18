<template>
  <div v-if="$route.query.maps">
    <div class="multiple-modal 1">
      <span class="flex flex-col mb-2">
        <div class="flex items-center justify-between mb-3">
          <h2>Укажите адрес доставки</h2>
          <span @click="$routePush({...$route.query,maps: undefined})">
            <the-icon
              class="cursor-pointer"
              src="x"
              width="20"
              height="20"
            />
          </span>
        </div>
        <div class="flex items-center justify-between gap-3">
          <button class="sm:flex hidden text-white p-2 rounded-2xl bg-orange-500">Определить</button>
          <input
            class="w-full p-2 rounded-2xl bg-white outline-orange-500 border border-gray-200"
            type="text"
            autocomplete="on"
            placeholder="Выбирайте или найдите свой локация"
            v-model="search"
          >
          <button @click="$routePush({...$route.query,maps: undefined})
" class="text-white p-2 px-4 rounded-2xl bg-orange-500">OK</button>
        </div>
      </span>
     <yandex-maps @clickPlace="locationNames"></yandex-maps>
    </div>
    <div class="modal-background 1"
        @click="$routePush({...$route.query,maps: undefined})">
    </div>
  </div>
</template>

<script>
import yandexMaps from "@/components/yandex-maps/yandex-maps";
export default {
  name: "TheMaps",
  data () {
    return {
      search: ''
    }
  },
  components: {
    yandexMaps
  },
  methods: {
    async locationNames(selectPlaceNames) {
      const {fullName} = selectPlaceNames;
      this.search = fullName;
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
  height: 86%;
}
.ymaps-2-1-79-map {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 600px) {
  .multiple-modal {
    width: 96%;
  }
}

</style>
