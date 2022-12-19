<template>
  <div class="p-6 bg-white rounded-2xl flex items-center justify-center w-full">
    <div class="rounded-full bg-gray-50 w-96 h-96 flex items-center justify-center flex-col">
      <div v-if="$auth.user.avatar" class="w-36 rounded-full overflow-hidden border-4 border-gray-300 mb-5">
        <img class="w-full fit-cover" :src="$auth.user.avatar" alt="Avatar image">
      </div>
      <div v-else class="w-36 rounded-full overflow-hidden border-4 border-gray-300 mb-5">
        <img class="w-full fit-cover" src="@/assets/img/user.webp" alt="Avatar image">
      </div>
      <h2 class="text-gray-800 text-2xl font-semibold mb-3">{{ $auth?.user?.full_name }}</h2>
      <h3 class="text-gray-700 font-medium text-xl">{{ $auth?.user?.phone }}</h3>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
