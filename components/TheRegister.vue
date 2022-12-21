<template>
  <div v-if="$route.query.register">
    <div class="register-modal">
      <div @click="() => $router.push({path: localePath($route.path), query: {...$route.query,login: undefined, register: undefined}})" class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center relative x-position cursor-pointer">
        <the-icon src="x" />
      </div>
      <h2 class="text-2xl font-bold text-center text-gray-700">Войти в  аккаунт</h2>
      <p class="text-lg text-center text-gray-700 mt-1">У вас есть аккаунт?
        <span @click="() => $router.push({path: localePath($route.path), query: {...$route.query,login: 'login', register: undefined}})" class="text-orange-600 cursor-pointer font-semibold">Войти</span>
      </p>
        <div v-if="$route.query.register" class="flex flex-col">
          <form class="w-96" @submit.prevent="funcRegister">
            <input
              class="bg-white text-gray-500 border rounded-2xl border-gray-200
              py-2.5 px-4 text-base h-12 outline-orange-600 w-96 bg-gray-100 mt-4"
              v-model="first_name"
              type="text"
              placeholder="Ваше имя"
            >
            <input
              v-model="last_name"
              type="text"
              class="bg-white text-gray-500 border rounded-2xl border-gray-200
              py-2.5 px-4 text-base h-12 outline-orange-600 w-96 bg-gray-100 my-4"
              placeholder="Ваше фамилия"
            >
            <input
              class="bg-white text-gray-500 border rounded-2xl border-gray-200
               py-2.5 px-4 text-base h-12 outline-orange-600 w-96 bg-gray-100 mb-4"
              v-model="register.phone"
              type="text"
              placeholder="Введите номер телефона"
            >
            <button class="w-96 h-14 rounded-3xl bg-orange-600 text-white font-semibold" type="submit">Продолжить</button>
          </form>
        </div>
    </div>
    <div @click="$store.dispatch('registerModal', false)" class="register-background"></div>
  </div>
<!--  <div v-if="$store.state.register">-->
<!--    <form @submit.prevent="funcRegister">-->
<!--      <input v-model="first_name" type="text">-->
<!--      <input v-model="last_name" type="text">-->
<!--      <input v-model="register.phone" type="text">-->
<!--      <button type="submit">Register</button>-->
<!--    </form>-->
<!--  </div>-->
</template>

<script>
export default {
  props: ['hide'],
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
       const token = await this.$axios.post('/auth/register', {...this.register});
          await this.$store.dispatch('setUser', token)
      },
    toLogin() {
      this.$store.dispatch('registerModal', false)
      this.$store.dispatch('loginModal', true)
    }
  },
}
</script>

<style scoped>
.register-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: #111827;
  opacity: 0.3;
}
.x-position {
  position: absolute;
  top: 14px;
  right: 14px;
}

.register-modal {
  position: fixed;
  z-index: 3;
  padding: 48px 24px 32px 24px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 16px;
}
</style>
