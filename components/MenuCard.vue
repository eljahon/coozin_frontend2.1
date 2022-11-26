<template>
  <div
    class="group flex flex-col items-center
    w-40 p-2 rounded-lg bg-gray-200 border
    active:border-orange-600 hover:border-orange-600
    hover:bg-white cursor-pointer"
  >
    <span
      class="font-semibold leading-5 text-xl text-gray-600 group-active:text-orange-600 group-hover:text-orange-600"
    >
      {{ date }}
    </span>
    <span
      class="font-semibold leading-5 text-sm text-gray-600 group-active:text-orange-600 group-hover:text-orange-600"
    >
      {{ month }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['date', 'month']
}
</script>

<style scoped></style>
