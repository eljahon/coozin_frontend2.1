<template>
  <div>
    <ValidationObserver class="w-full" ref="observer" v-slot="{ passes, invalid }">
      <form @submit.prevent="passes(onSubmit)"  class="w-full flex flex-col justify-center items-center">
        <ValidationProvider
          v-slot="{ valid, errors }"
          rules="required"
          name="Username"
        >
          <input
            class="bg-white text-gray-500 border rounded-2xl border-gray-200 py-2.5 px-4 text-base h-12 outline-orange-600 w-96 bg-gray-100 my-6"
            v-model="otp"
            required
            placeholder="00 000"
            :state="errors[0] ? false : valid ? true : null"
            :class="errors.length > 0 ? 'border-red-400' : ''"
            type="text"
          >
        </ValidationProvider>
        <button
          type="submit"
          class="w-96 h-14 rounded-3xl bg-orange-600 text-white font-semibold"
        >Получить пароль</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "login-phone",
  data () {
    return {
      otp: ''
    }
  },
  methods: {
    onSubmit() {
      console.log(this.otp)
      this.$emit('handelOtp', this.otp)
    }
  }
}
</script>

<style scoped>

</style>
