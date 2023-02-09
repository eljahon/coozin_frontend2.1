<template>
  <div class="bg-gray-100 cursor-pointer rounded-2xl p-3 h-12 flex items-center justify-center" :class="addStyle">
    <slot>no content</slot>
  </div>
</template>

<script>
export default {
  props: ['addStyle']
}
</script>

<style scoped>

</style>
