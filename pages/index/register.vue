<template>
  <form @submit.prevent="funcRegister">
    <input v-model="first_name" type="text">
    <input v-model="last_name" type="text">
    <input v-model="register.phone" type="text">
    <button type="submit">Register</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      first_name: '',
      last_name: '',
      register: {
        full_name: '',
        phone: ''
      }
    }
  },
  methods: {
   async funcRegister() {
      this.register.full_name = `${ this.first_name } ${ this.last_name }`;
     const token = await this.$axios.post('front/auth/register', {...this.register});
      this.$store.dispatch('setUser', token)
    }
  }
}
</script>

<style scoped>

</style>
