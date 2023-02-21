<template>
  <div class="dm:p-6 p-3 bg-white rounded-2xl flex flex-col w-full sm:gap-6 gap-4">
    <div @click="$router.back()" class="absolute top-0 left-0 xl:-bottom-96 lg:-bottom-24 -bottom-14 right-0 bg-gray-900 opacity-30"></div>
    <div class="width absolute md:gap-9 gap-5 z-10 md:p-12 p-6 flex flex-col items-center justify-center bg-white position rounded-2xl">
      <the-icon src="logout-photo" />
      <p class="text-xl text-gray-600">Вы действительно хотите выйти?</p>
      <div class="flex items-center justify-end sm:gap-5 gap-2">
        <button @click="$router.back()" class="text-orange-600 font-semibold p-3 rounded-3xl sm:w-40 w-36 bg-white border border-orange-600 active:opacity-80 hover:opacity-80">Нет</button>
        <button @click="logout" class="text-white font-semibold p-3 rounded-3xl sm:w-40 w-36 bg-orange-600 active:opacity-80 hover:opacity-80">Да</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
    await this.$auth.logout()
      this.$cookies.remove('userInfo')
      this.$cookies.remove('langlot')
      this.$toast.error('You are now logged out')
      this.$router.push(this.localePath('/'))
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
.width {
  width: 548px;
  height: 392px;
}
@media screen and (max-width: 768px) {
  .width {
    width: 80%;
    height: 320px;
  }
}

@media screen and (max-width: 640px) {
  .width {
    width: 90%;
    height: 320px;
  }
}
</style>
