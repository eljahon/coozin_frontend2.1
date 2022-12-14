<template>
  <div>
    <input v-model="login.phone" type="text">
    <input v-model="login.password" type="text">

    <button @click="funcLogin">Login</button>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      login: {
        phone: '',
        password: ''
      }
    }
  },
  mounted() {
    console.log(this.$auth)
  },
  methods: {
    async funcLogin() {
      await this.$auth.loginWith('local', { data: this.login }).then(async (res) => {
        this.$store.dispatch('Login', res)
      })
    }
  }
}
</script>

<style scoped>

</style>
