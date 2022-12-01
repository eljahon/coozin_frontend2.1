<template>
  <div>
    <img v-if="src" :src="require(`../assets/svg/${src}.svg`)" :alt="src + 'svg'">
  </div>
</template>

<script>
export default {
  props: ['src', 'width', 'height'],
}
</script>

<style scoped></style>
