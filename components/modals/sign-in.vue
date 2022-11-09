<template>
  <div>
    <div class="py-8 px-3 relative sm:px-10">
      <div class="absolute right-4 top-4 text-center p-1 rounded-md hover:bg-gray-100 cursor-pointer" @click="onClose('canceled')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(75, 85, 99, 1);transform:;-ms-filter:">
          <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
        </svg>
      </div>
      <div class="flex justify-between">
        <div class="flex justify-between items-center mb-3">
          <div id="signin">
            <button :class="[status === 'sign-in' ? 'border-b border-green-600 text-green-600': 'hover:text-green-600 text-gray-600']" class="text-xl font-medium text-gray-500 focus:outline-none">
              {{ $t('text.signIn') }}
            </button>
          </div>

          <div id="sign-up">
            <button :class="[status === 'sign-up' ? 'border-b border-green-600 text-green-600': 'hover:text-green-600  text-gray-600']" class="text-xl font-medium text-gray-500 ml-6 focus:outline-none" @click="openSignUp()">
              {{ $t('word.register') }}
            </button>
          </div>
        </div>
      </div>
      <div>
        <!-- <socials /> -->
        <ValidationObserver ref="observer" v-slot="{ passes, invalid }">
          <form class="" @submit.prevent="passes(tryToLogIn)">
            <ValidationProvider
              v-slot="{ valid, errors }"
              rules="required|phoneOrEmail"
              name="Username"
            >
              <div class="mt-1">
                <input
                  v-model="auth.identifier"
                  :state="errors[0] ? false : valid ? true : null"
                  name="text"
                  type="text"
                  autocomplete="text"
                  :placeholder="$t('text.phoneNumber')"
                  required
                  :class="valid || authError.length === 0 ? 'border-green-600 focus:ring-green-600 focus:border-green-600' : 'border-red-600 focus:ring-red-600 focus:border-red-600'"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
                >
              </div>
            </ValidationProvider>

            <ValidationProvider
              v-if="isEmail"
              v-slot="{ valid, errors }"
              rules="required|min:6"
              name="Password"
              vid="password"
            >
              <div class="mt-3">
                <input
                  v-model="auth.password"
                  :state="errors[0] ? false : valid ? true : null"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  :placeholder="$t('word.password')"
                  required
                  :class="valid || authError.length === 0 ? 'border-green-600 focus:ring-green-600 focus:border-green-600' : 'border-red-600 focus:ring-red-600 focus:border-red-600'"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 sm:text-sm"
                >
              </div>
            </ValidationProvider>
            <div class="flex items-center justify-between mb-3">
              <div v-if="authError.length > 0" class="text-red-600 text-sm">
                {{ authError }}
              </div>
              <div v-if="isEmail" class="flex items-center mt-2">
                <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-green-600 focus:ring-green-600 border-gray-300 rounded">
                <label for="remember_me" class="ml-2 block text-gray-600 text-sm">
                  {{ $t('word.remember') }}
                </label>
              </div>

              <!-- <div class="text-sm">
                <button type="reset" :class="['border-b border-green-600 text-green-600']" class="font-medium text-green-600 hover:text-green-800 focus:outline-none" @click="openForgotPassword()">
                  Parolni tiklash
                </button>
              </div> -->
            </div>
            <button type="submit" :disabled="invalid" class="w-full flex justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none">
              {{ $t('text.signIn') }}
              <vue-loaders v-if="loading" name="ball-beat" color="white" scale="0.5" />
            </button>
          </form>
        </ValidationObserver>
      </div>
      <div class="flex items-center justify-center mt-2">
        <p class="text-gray-600 text-sm  font-medium">
          {{ $t('text.haveNotAccount') }}
        </p>
        <button class="ml-2 text-light-orange text-sm font-medium focus:outline-none" @click="openSignUp">
          {{ $t('word.register') }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
// import Socials from '~/components/core/Socials.vue'
import signUpModal from '~/components/modals/sign-up'
// import forgotPassword from '~/modals/forgot-password.vue'
// import appConfig from '~/app.config'
// import confirmCodeModal from '~/modals/confirm-code'
export default {
  page: {
    title: 'Log in',
    // meta: [{ name: 'description', content: `Log in to ${appConfig.title}` }]
  },
  components: {
    // Socials
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    status: String
  },
  data () {
    return {
      auth: {
        identifier: '',
        password: ''
      },
      authError: '',
      tryingToLogIn: false,
      isAuthError: false,
      loading: false,
      isEmail: false
    }
  },
  watch: {
    'auth.identifier' () {
      const EMAILREG = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (EMAILREG.test(this.auth.identifier)) {
        this.isEmail = true
      } else {
        this.isEmail = false
      }
    }
  },
  created () {},
  methods: {
    async tryToLogIn () {
      if (this.auth.identifier.includes('+') > 0) {
        this.auth.identifier = this.auth.identifier.substring(1)
      }
      this.authError = ''
      this.loading = true
      if (this.isEmail) {
        this.$snotify.info('Logging in...')
        await this.$auth.loginWith('local', {
          data: this.auth
        }).then(async (res) => {
          localStorage.setItem('local', 'Bearer ' + res.data.jwt)
          await this.$auth.setToken('local', 'Bearer ' + res.data.jwt)
          // await this.$auth.setRefreshToken('local', res.data.refresh)
          await this.$axios.setHeader('Authorization', 'Bearer ' + res.data.jwt)
          await this.$auth.ctx.app.$axios.setHeader('Authorization', 'Bearer ' + res.data.jwt)
          localStorage.setItem('user_info', JSON.stringify(res.data.user))
          await this.$auth.setUser(res.data.user)
          await this.$snotify.success('Successfully Logged In')
          this.loading = false
          this.onClose()
        }).catch((e) => {
          this.authError = e.response.data.data[0].messages[0].message
          this.loading = false
        })
      } else {
        this.$axios
          .post('/users-permissions/login-verify-otp', { phone: this.auth.identifier })
          .then((res) => {
            this.loading = false
            this.confirmCode({ username: this.auth.identifier, isLogin: true, isOtpSuccess: null })
          })
          .catch((e) => {
            this.openSignUp()
            this.authError = e.response.data.data[0].messages[0].message
            this.loading = false
          })
      }
    },
    confirmCode (user) {
      this.$emit('close')
      // this.$modal.show(
      //   confirmCodeModal,
      //   { user },
      //   {
      //     height: 'auto',
      //     maxWidth: 400,
      //     width: window.innerWidth <= 400 ? window.innerWidth - 10 : 400,
      //     acrollable: true
      //   }
      // )
      this.$root.$once('confirm-code', (item) => {})
    },
    openSignUp () {
      this.$emit('close')
      // this.$modal.show(
      //   signUpModal,
      //   { status: 'sign-up' },
      //   {
      //     height: 'auto',
      //     maxWidth: 400,
      //     width: window.innerWidth <= 350 ? window.innerWidth - 10 : 350,
      //     scrollable: true
      //   }
      // )
    },
    openForgotPassword () {
      this.$emit('close')
      this.$modal.show(
        forgotPassword,
        { status: 'Парольни тиклаш' },
        {
          height: 'auto',
          maxWidth: 400,
          width: window.innerWidth <= 350 ? window.innerWidth - 10 : 350,
          scrollable: true
        }
      )
    },
    onClose (e) {
      this.$emit('close')
      this.$root.$emit('sign-in', e)
    }
  }
}
</script>
