<template>
  <div class="p-6 bg-white rounded-2xl flex flex-col w-full gap-6">
    <div @click="$router.back()" class="absolute top-0 left-0 -bottom-96 right-0 bg-gray-900 opacity-30"></div>
    <div style="width: 548px; height: 392px" class="absolute gap-9 z-10	p-12 flex flex-col items-center justify-center bg-white position rounded-2xl">
      <the-icon src="logout-photo" />
      <p class="text-xl text-gray-600">Вы действительно хотите выйти?</p>
      <div class="flex items-center justify-end gap-5">
        <button @click="$router.back()" class="text-orange-600 font-semibold p-3 rounded-3xl w-40 bg-white border border-orange-600 active:opacity-80 hover:opacity-80">Нет</button>
        <button @click="logout" class="text-white font-semibold p-3 rounded-3xl w-40 bg-orange-600 active:opacity-80 hover:opacity-80">Да</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
    await this.$axios.post('/auth/logout');
      await this.$auth.logout()
      this.$cookies.remove('userInfo')
      this.$cookies.remove('langlot')
      this.$toast.error('You are now logged out')
      this.$router.push(this.localePath('/'))
      // console.log(this.$auth)
    }
  }
}
</script>

<style scoped>
.position {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
