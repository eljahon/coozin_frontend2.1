<template>
  <div v-if="$route.query.login" class="login">
    <div v-if="$route.query.login === 'login'" class="login-modal">
      <div @click="$router.push({path: localePath($route.path), query: {...$route.query,login: undefined}})" class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center relative x-position cursor-pointer">
        <the-icon src="x" />
      </div>
      <h2 class="text-2xl font-bold text-center text-gray-700">Войти в  аккаунт</h2>
      <p class="text-lg text-center text-gray-700 mt-1">У вас ещё нет аккаунта?
        <span @click="$router.push({path: localePath($route.path), query: {...$route.query,login: undefined, register: 'register'}})" class="text-orange-600 cursor-pointer font-semibold	">Регистрация</span>
      </p>
      <input
        class="bg-white text-gray-500 border rounded-2xl border-gray-200
         py-2.5 px-4 text-base h-12 outline-orange-600 w-96 bg-gray-100 my-6"
        v-model="login.phone"
        placeholder="Введите номер телефона"
        type="text"
      >
      <button
        @click="$router.push({path: localePath($route.path), query: {...$route.query, login: 'otp'}})"
        class="w-96 h-14 rounded-3xl bg-orange-600 text-white font-semibold"
      >Получить пароль</button>
    </div>
    <div v-else-if="$route.query.login === 'otp'" class="login-modal">
      <div @click="$router.push({path: localePath($route.path), query: {...$route.query,login: undefined}})" class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center relative x-position cursor-pointer">
        <the-icon src="x" />
      </div>
      <h2 class="text-2xl font-bold text-center text-gray-700">Войти в  аккаунт</h2>
      <input
        class="bg-white text-gray-500 border rounded-2xl border-gray-200
         py-2.5 px-4 text-base h-12 outline-orange-600 w-96 bg-gray-100 my-6"
        v-model="login.password"
        placeholder="Enter OTP"
        type="text"
      >
      <button
        @click="funcLogin"
        class="w-96 h-14 rounded-3xl bg-orange-600 text-white font-semibold"
      >Войти</button>
    </div>
    <div @click="$router.push({path: localePath($route.path), query: {...$route.query, login: undefined}})" class="login-background"></div>
  </div>
</template>

<script>
export default {
  props: ['hide'],
  data() {
    return {
      login: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    async funcLogin() {
      try {
        await this.$auth.loginWith('local', { data: this.login }).then(async (res) => {
          await this.$toast.info('Login in ....', {
            duration: 2000,
            position: 'bottom-right',
          })
          await this.$store.dispatch('Login', res)
            .then(async (response) => {
              console.log(response)
             await this.$router.push({path: this.localePath(this.$route.path), query: {...this.$route.query, login: undefined}})
             await this.$toast.success('success Login')
              await this.$store.dispatch('cart/getCardList')

            })
        })
      } catch (e) {
        this.$toast.error(e, {
          duration: 2000,
          position: 'bottom-right',
        })
      }
    },
    toRegister() {
      this.$store.dispatch('loginModal', false)
      this.$store.dispatch('registerModal', true)
    }
  }
}
</script>

<style scoped>
.login-background {
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

.login-modal {
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
