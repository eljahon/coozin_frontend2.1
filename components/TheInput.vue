<template>
  <div class="relative">
    <input
      class="bg-white text-gray-500 border rounded-2xl border-gray-200 py-2.5 pr-2 pl-11 text-base h-12 outline-orange-600"
      :type="type"
      :placeholder="placeholder"
    />
    <img class="absolute inset-2.5" v-if="icon" :src="require(`../assets/svg/${icon}.svg`)" :alt="icon + 'svg'">
  </div>
</template>

<script>
export default {
  props: ['type', 'placeholder', 'icon']
}
</script>

<style scoped>
input {
  padding-bottom: 12px;
}
</style>
