<template>
  <div class="product-card">
    <div class="h-52 w-full overflow-hidden">
      <img class="w-full fit-cover" :src="require(`../assets/img/${src}.jpg`)" :alt="src + 'image'">
    </div>
    <div class="p-3 relative flex flex-col gap-2">
      <h4 class="font-semibold text-xl text-gray-800">{{ title }}</h4>
      <h5 class="font-normal text-gray-700">{{ price }} sum</h5>
      <div class="bg-orange-50 cursor-pointer rounded-lg	flex items-center absolute -top-10 right-3 p-1">
        <the-icon src="clock" />
        <span class="text-sm text-gray-700 font-normal">> {{ delay }} min</span>
      </div>
      <div class="absolute cursor-pointer right-3 bottom-3 bg-orange-100	h-12 w-12 rounded-full overflow-hidden flex items-center justify-center">
        <the-icon src="shopping-cart" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['src', 'delay', 'title', 'price']
}
</script>

<style scoped>
  .product-card {
    width: 292px;
    height: 296px;
    background: #FFFFFF;
    border: 2px solid #F3F4F6;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    cursor: pointer;
  }

</style>
