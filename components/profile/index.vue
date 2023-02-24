<template>
  <div class="login">
    <div class="p-6 bg-white rounded-2xl flex items-center justify-center w-full h-full">
      <div class="rounded-full bg-gray-50 xl:w-96 w-60 h-60 xl:h-96 flex items-center justify-center flex-col">
        <div v-if="user.avatar.aws_path" class="xl:w-36 w-28 rounded-full overflow-hidden border-4 border-gray-300 mb-5">
          <img class="w-full fit-cover" :src="$img+user.avatar.aws_path" alt="Avatar image">
        </div>
        <div v-else class="xl:w-36 w-28 rounded-full overflow-hidden border-4 border-gray-300 mb-5">
          <img class="w-full fit-cover" src="@/assets/img/user.webp" alt="Avatar image">
        </div>
        <h2 v-if="user && user.first_name" class="text-gray-800 xl:text-2xl text-xl font-semibold mb-3">{{ user.first_name+" "+ user.last_name }}</h2>
        <h3 v-if="user && user.phone" class="text-gray-700 font-medium xl:text-xl text-lg">{{ user.phone }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
    }
  },
  computed: {
    user () {
      return this.$auth.user
    }
  }
}
</script>

<style scoped>

</style>
