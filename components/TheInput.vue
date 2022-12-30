<template>
  <div :class="styles">
    <label v-if="label" :for="name" :class="labelStyles">{{ label }}</label>
    <div class="relative">
      <input
        class="bg-white text-gray-500 border rounded-2xl border-gray-200 py-2.5 pr-2 pl-11 text-base h-12 outline-orange-600"
        :type="type"
        :placeholder="placeholder"
        :name="name"
        :id="name"
        :class="inputStyles"
        :readonly="readonly"
      />
      <img class="absolute position" v-if="icon" :src="require(`../assets/svg/${icon}.svg`)" :alt="icon + 'svg'" >
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'placeholder', 'icon', 'name', 'label', 'styles', 'labelStyles', 'inputStyles', 'readonly', 'value']
}
</script>

<style scoped>
input {
  padding-bottom: 12px;
}
.position {
  top: 50%;
  transform: translate(0, -50%);
  left: 12px;
}
</style>
