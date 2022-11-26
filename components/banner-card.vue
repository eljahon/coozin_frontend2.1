<template>
  <div class="overflow-hidden rounded-2xl relative" :class="addStyle">
    <img
      v-if="src"
      :src="require(`../assets/img/${src}.jpg`)"
      :alt="src + 'svg'"
      class="w-full h-full object-cover cursor-pointer duration-200 hover:scale-125"
    >
    <span
      class="absolute top-3 right-3 py-1 px-3 rounded-3xl"
      :class="statusStyle"
    >
      {{ status }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['src', 'addStyle', 'status', 'statusStyle']
}
</script>

<style scoped></style>
