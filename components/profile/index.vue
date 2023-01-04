<template>
  <div class="p-6 bg-white rounded-2xl flex items-center justify-center w-full">
    <div class="rounded-full bg-gray-50 xl:w-96 w-60 h-60 xl:h-96 flex items-center justify-center flex-col">
      <div v-if="user.avatar" class="xl:w-36 w-28 rounded-full overflow-hidden border-4 border-gray-300 mb-5">
        <img class="w-full fit-cover" :src="user.avatar" alt="Avatar image">
      </div>
      <div v-else class="xl:w-36 w-28 rounded-full overflow-hidden border-4 border-gray-300 mb-5">
        <img class="w-full fit-cover" src="@/assets/img/user.webp" alt="Avatar image">
      </div>
      <h2 class="text-gray-800 xl:text-2xl text-xl font-semibold mb-3">{{ user.full_name }}</h2>
      <h3 class="text-gray-700 font-medium xl:text-xl text-lg">{{ user.phone }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getUser()
  },
  data() {
    return {
      user: []
    }
  },
  methods: {
    getUser() {
      this.$axios.get('user').then(res => {
        this.user = res
      })
    }
  }
}
</script>

<style scoped>

</style>
