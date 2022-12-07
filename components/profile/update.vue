<template>
  <div class="p-6 bg-white rounded-2xl flex flex-col w-full">
    <h3 class="font-semibold text-xl text-color text-left ">Редактировать профиль</h3>
    <div class="flex shrink-0	 w-36 h-36 rounded-full overflow-hidden border-4 border-gray-300 mt-8 mx-auto">
      <img class="w-full fit-cover" src="https://i.pravatar.cc/140" alt="Avatar image">
    </div>
    <div class="flex items-center justify-center gap-3 mt-6">
      <the-icon class="cursor-pointer" src="update" />
      <the-icon class="cursor-pointer" src="trash" />
    </div>

    <form class="mt-8 flex h-full gap-5 w-full">
      <div class="relative">
        <label class="absolute text-xs	font-normal	text-gray-500 left-3 top-2" for="firstname">Имя</label>
        <input class="input-width w-full border border-gray-200	text-gray-700 outline-orange-500 px-3 pt-5 pb-2 h-14 rounded-lg	" type="text" id="firstname">
      </div>
      <div class="relative">
        <label class="absolute text-xs	font-normal	text-gray-500 left-3 top-2" for="lastname">Фамилия</label>
        <input class="input-width  w-full border border-gray-200	text-gray-700 outline-orange-500 px-3 pt-5 pb-2 h-14 rounded-lg" type="text" id="lastname">
      </div>
    </form>

    <div class="flex items-center justify-end gap-5">
      <button class="text-orange-600 font-semibold p-3 rounded-3xl w-40 bg-white border border-orange-600 active:opacity-80 hover:opacity-80">Отменить</button>
      <button class="text-white font-semibold p-3 rounded-3xl w-40 bg-orange-600 active:opacity-80 hover:opacity-80">Сохранить</button>
    </div>
  </div>
</template>

<script>
export default {
name: ""
}
</script>

<style scoped>
  .input-width {
    width: 400px;
  }
</style>
