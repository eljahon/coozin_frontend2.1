<template>
  <div @click="handelClick" class="rounded-2xl cursor-pointer group flex items-center gap-1 p-2 pr-4 bg-white">
    <img v-if="src" class="flex shrink-0" :src="require(`../assets/svg/${src}.svg`)" :alt="src + 'svg'">
    <span class="text-gray-700 whitespace-nowrap group-hover:text-white">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: ['src', 'title', "item"],
  methods: {
    handelClick () {
      this.$emit('onClick', this.item)
    }
  }
}
</script>

<style scoped>
span {
  letter-spacing: 0.15px;
}
div:hover {
  background: #001E37;
}
</style>
