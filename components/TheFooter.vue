<template>
  <div class="container mx-auto sm:pb-10 sm:pt-12 py-6 px-4">
    <div class="flex justify-between sm:items-start items-center">
      <div class="sm:block hidden">
        <the-logo logo="true" />
      </div>
      <div class="sm:hidden block w-32">
        <the-logo logo="true" />
      </div>
      <ul class="md:flex flex-col gap-5 hidden">
        <li class="cursor-pointer text-gray-700">Наша история</li>
        <li class="cursor-pointer text-gray-700">Присоединиться</li>
        <li class="cursor-pointer text-gray-700">Блог</li>
      </ul>
      <ul class="sm:flex hidden flex-col gap-5">
        <li class="cursor-pointer text-gray-700 font-semibold">Безопасная оплата</li>
        <li class="flex gap-2 items-center cursor-pointer">
          <the-icon src="apelsin" />
          <span class="text-gray-700">Apelsin</span>
        </li>
      </ul>
      <ul class="sm:flex hidden flex-col gap-5">
        <li class="text-gray-700 font-semibold">При поддержке</li>
        <li class="flex gap-10 items-center">
          <the-icon src="coke" />
          <the-icon src="osce" />
        </li>
      </ul>
      <div class="sm:hidden flex flex-col gap-8">
        <ul class="flex flex-col gap-5">
          <li class="cursor-pointer text-gray-700 font-semibold">Безопасная оплата</li>
          <li class="flex gap-2 items-center cursor-pointer">
            <the-icon src="apelsin" />
            <span class="text-gray-700">Apelsin</span>
          </li>
        </ul>
        <ul class="flex flex-col gap-5">
          <li class="text-gray-700 font-semibold">При поддержке</li>
          <li class="flex gap-4 items-center">
            <the-icon width="64" src="coke" />
            <the-icon width="64" src="osce" />
          </li>
        </ul>
      </div>
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
