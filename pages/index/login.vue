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
        let token = res.token
        this.$auth.setUserToken(token)
        const info = await this.$axios.get('/front/auth/user')
        await this.$auth.setUser(info)
        this.$cookies.set('userInfo', info)

        console.log(this.$auth)
      })
    }
  }
}
</script>

<style scoped>

</style>
