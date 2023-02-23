<template>
  <div v-if="$route.query.register">
    <div class="register-modal">
      <div @click="$router.push({path: localePath($route.path), query: {...$route.query,login: undefined, register: undefined}})" class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center relative x-position cursor-pointer">
        <the-icon src="x" />
      </div>
      <h2 class="text-2xl font-bold text-center text-gray-700">{{ $t('login-account') }}</h2>
      <p class="text-lg text-center text-gray-700 mt-1">{{ $t('have-account') }}
        <span @click="$router.push({path: localePath($route.path), query: {...$route.query,login: 'login', register: undefined}})" class="text-orange-600 cursor-pointer font-semibold">{{ $t('login') }}</span>
      </p>
        <div v-if="$route.query.register == 'register'" class="flex flex-col">
          <ValidationObserver class="w-full" ref="observer" v-slot="{ handleSubmit, invalid }">
          <form novalidate class="sm:w-96 w-full" @submit.prevent="handleSubmit(funcRegister)">
            <ValidationProvider
              v-slot='{ errors }'
              name='first_name'
              rules='required'
              mode='eager'
            >
              <label v-if="errors.length" for="first_name" class="text-red-500">{{$t('first-name')}} <span class="text-xl">*</span></label>
            <input
              class="bg-white text-gray-500 border rounded-2xl border-gray-200
              py-2.5 px-4 text-base h-12 outline-orange-600 sm:w-96 w-full bg-gray-100 mt-4"
              v-model="register.first_name"
              type="text"
              name="first_name"
              placeholder="Ваше имя"
              :class="errors.length > 0 ? 'border-red-400 border-2' : ''"
            />
            </ValidationProvider>
            <ValidationProvider
              v-slot='{ errors }'
              name='last_name'
              rules='required'
              mode='eager'
            >
              <label v-if="errors.length" for="last_name" class="text-red-500">{{$t('last-name')}} <span class="text-xl">*</span></label>
            <input
              v-model="register.last_name"
              type="text"
              :class="errors.length > 0? 'border-red-400' :''"
              class="bg-white text-gray-500 border rounded-2xl border-gray-200
              py-2.5 px-4 text-base h-12 outline-orange-600 sm:w-96 w-full bg-gray-100 my-4"
              placeholder="Ваше фамилия"
            >
            </ValidationProvider>
            <ValidationProvider
              v-slot='{ errors }'
              name='phone'
              mode='eager'
              rules="required|phone"
            >
              <label v-if="errors.length" for="phone" class="text-red-500">{{$t('phone')}} <span class="text-xl">*</span></label>
            <input
              class="bg-white text-gray-500 border rounded-2xl border-gray-200
               py-2.5 px-4 text-base h-12 outline-orange-600 sm:w-96 w-full bg-gray-100 mb-4"
              v-model="register.phone"
              type="text"
              :class="errors.length > 0? 'border-red-400' :''"
              placeholder="Введите номер телефона +998XX XXX XX XX"
            >
            </ValidationProvider>
            <button class="sm:w-96 w-full h-14 rounded-3xl bg-orange-600 text-white font-semibold" type="submit">{{ $t('continue') }}</button>
          </form>
          </ValidationObserver>
        </div>
        <register-confirm :phone="register.phone"></register-confirm>
    </div>
    <div @click="$router.push({path: localePath($route.path), query: {...$route.query, register: undefined}})" class="register-background"></div>
  </div>
</template>

<script>
import registerConfirm from './register/register-confirm.vue'

export default {
  props: ['hide'],
  components: {
    'register-confirm': registerConfirm
  },
  data() {
    return {
      register: {
        first_name: '',
        last_name: '',
        phone: ''
      }
    }
  },
  methods: {
    async funcRegister() {
       try {
         let data = await this.$axios.post('/users-permissions/register_otp', this.register);
         if (data.status) {
           this.$routePush({...this.$route.query, register: 'otp'})
           this.$toast.success('You are success register')
         }
       } catch (err) {
       }
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
@media screen and (max-width: 640px) {
  .register-modal {
    max-width: 440px;
    width: 96%;
  }
}
</style>
