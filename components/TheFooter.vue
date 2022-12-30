<template>
  <div class="container mx-auto pb-10 pt-12 lg:px-0 sm:px-4 px-2">
    <div class="flex justify-between">
      <the-logo logo="true" />
      <ul class="flex flex-col gap-5">
        <li class="cursor-pointer text-gray-700">Наша история</li>
        <li class="cursor-pointer text-gray-700">Присоединиться</li>
        <li class="cursor-pointer text-gray-700">Блог</li>
      </ul>
      <ul class="flex flex-col gap-5">
        <li class="cursor-pointer text-gray-700 font-semibold">Безопасная оплата</li>
        <li class="flex gap-2 items-center cursor-pointer">
          <the-icon src="apelsin" />
          <span class="text-gray-700">Apelsin</span>
        </li>
      </ul>
      <ul class="flex flex-col gap-5">
        <li class="text-gray-700 font-semibold">При поддержке</li>
        <li class="flex gap-10 items-center">
          <the-icon src="coke" />
          <the-icon src="osce" />
        </li>
      </ul>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
name: ""
}
</script>

<style scoped>
</style>
