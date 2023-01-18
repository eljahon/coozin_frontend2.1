<template>
  <nuxt-link :to="{path: localePath('/chef'), query: {vendor_id:id}}">
    <div class="card-width rounded-xl cursor-pointer">
      <div style="height: 148px" class="w-full rounded-xl overflow-hidden fit-cover">
        <img v-if="src" class="w-full" :src="require(`../assets/img/${src}.jpg`)" :alt="src + 'jpg'">
      </div>
      <div class="flex flex-col gap-1 py-2 px-3 relative">
        <h3>{{ title }}</h3>
        <div class="flex gap-3">
          <div v-if="rate !== null && rate !== undefined" class="flex items-center bg-gray-100 gap-1 py-1 px-2 overflow-hidden rounded-full">
            <img width="16" height="16" src="../assets/svg/rate.svg" alt="Rate icon">
            <span class="text-xs text-gray-800 font-medium">{{ rate }}</span>
          </div>
          <div class="flex items-center bg-gray-100 gap-1 py-1 px-2 overflow-hidden rounded-full">
            <img width="16" height="16" src="../assets/svg/car.svg" alt="Car icon">
            <span class="text-xs text-gray-800 font-medium">{{ deliveryPrice === null ? '1000 +' :  deliveryPrice}} сум</span>
          </div>
        </div>
        <div v-if="avatar !== null && avatar !== undefined" class="avatar-styles">
          <img :src="avatar" :alt="'jpg'">
        </div>
        <div v-else class="avatar-styles">
          <img :src="'https://i.pravatar.cc/102'" :alt="'imges not found' + 'jpg'">
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['src', 'title', 'productImg', 'avatar', 'rate', 'deliveryPrice', 'id']
}
</script>

<style scoped>
.card-width {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 328px;
  height: 216px;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  overflow: hidden;
}
.card-width h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #1F2937;
}
.avatar-styles {
  border: 1.5px solid #E5E7EB;
  border-radius: 100%;
  overflow: hidden;
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 18px;
  right: 18px;
}
.avatar-styles img {
  width: 100%;
  object-fit: cover;
}

@media screen and (max-width: 640px) {
  .card-width {
    width: 290px;
    height: 190px;
  }
  .avatar-styles {
    width: 72px;
    height: 72px;
  }
}
</style>
