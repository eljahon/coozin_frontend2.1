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
            <button
              :class="[
                status === 'sign-in'
                  ? 'border-b border-green-600 text-green-600'
                  : 'hover:text-green-600 text-gray-600',
              ]"
              class="text-xl font-medium text-gray-500 focus:outline-none"
              @click="openSignIn()"
            >
              {{ $t('text.signIn') }}
            </button>
          </div>

          <div id="register">
            <button
              :class="[
                status === 'sign-up'
                  ? 'border-b border-green-600 text-green-600'
                  : 'hover:text-green-600  text-gray-600',
              ]"
              class="text-xl font-medium text-gray-500 ml-6 focus:outline-none"
            >
              {{ $t('word.register') }}
            </button>
          </div>
        </div>
      </div>
      <div>
        <!-- <socials /> -->
        <ValidationObserver v-slot="{ handleSubmit }" slim>
          <form class="" novalidate @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider
              v-slot="{ errors }"
              name="first_name"
              rules="required"
              mode="eager"
            >
              <input
                v-model="user.name"
                name="first name"
                type="text"
                :placeholder="$t('word.name')"
                required
                :class="
                  errors.length > 0
                    ? 'border-red-400 focus:ring-red-600 focus:border-red-600'
                    : 'border-gray-300 focus:ring-green-600 focus:border-green-600'
                "
                class="
                  appearance-none
                  mt-3
                  block
                  w-full
                  px-3
                  py-2
                  border
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  sm:text-sm
                "
              >
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ errors }"
              name="last_name"
              rules="required"
              mode="eager"
            >
              <input
                v-model="user.surname"
                name="last name"
                type="text"
                :placeholder="$t('word.surname')"
                required
                :class="
                  errors.length > 0
                    ? 'border-red-400 focus:ring-red-600 focus:border-red-600'
                    : 'border-gray-300 focus:ring-green-600 focus:border-green-600'
                "
                class="
                  appearance-none
                  mt-3
                  block
                  w-full
                  px-3
                  py-2
                  border
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  sm:text-sm
                "
              >
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="Phone or email"
              rules="required|phoneOrEmail"
              mode="eager"
            >
              <input
                v-model="phoneOrEmail"
                name="phone or email"
                type="text"
                :placeholder="$t('text.mailOrPhone')"
                required
                :class="
                  errors.length > 0
                    ? 'border-red-400 focus:ring-red-600 focus:border-red-600'
                    : 'border-gray-300 focus:ring-green-600 focus:border-green-600'
                "
                class="
                  appearance-none
                  mt-3
                  block
                  w-full
                  px-3
                  py-2
                  border
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  sm:text-sm
                "
              >
            </ValidationProvider>
            <ValidationProvider
              v-if="isEmail"
              v-slot="{ errors }"
              name="password"
              :rules="{ required: true, min: 6 }"
              mode="eager"
            >
              <div class="relative flex mt-3">
                <input
                  v-model="user.password"
                  name="password"
                  :type="hidden.password ? 'password' : 'text'"
                  :placeholder="$t('word.password')"
                  required
                  :class="
                    errors.length > 0
                      ? 'border-red-400 focus:ring-red-600 focus:border-red-600'
                      : 'border-gray-300 focus:ring-green-600 focus:border-green-600'
                  "
                  class="
                    appearance-none
                    block
                    w-full
                    px-3
                    py-2
                    border
                    rounded-md
                    shadow-sm
                    placeholder-gray-400
                    focus:outline-none
                    sm:text-sm
                  "
                >
                <div class="absolute right-2 top-2 text-xl text-gray-500 cursor-pointer">
                  <i
                    :class="[hidden.password ? 'bx-show' : 'bx-hide']"
                    class="bx"
                    @click="hidden.password = !hidden.password"
                  />
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider
              v-if="isEmail"
              v-slot="{ errors}"
              name="confirm_password"
              :rules="{ required: true, samePassword: user.password }"
              mode="eager"
            >
              <div class="relative flex mt-3">
                <input
                  v-model="confirm_password"
                  name="confirm_password"
                  :type="hidden.confirm_password ? 'password' : 'text'"
                  :placeholder="$t('text.confirmPassword')"
                  required
                  :class="
                    errors.length > 0
                      ? 'border-red-400 focus:ring-red-600 focus:border-red-600'
                      : 'border-gray-300 focus:ring-green-600 focus:border-green-600'
                  "
                  class="
                    appearance-none
                    block
                    w-full
                    px-3
                    py-2
                    border
                    rounded-md
                    shadow-sm
                    placeholder-gray-400
                    focus:outline-none
                    sm:text-sm
                  "
                >
                <div class="absolute right-2 top-2 text-xl text-gray-500 cursor-pointer">
                  <i
                    :class="[hidden.confirm_password ? 'bx-show' : 'bx-hide']"
                    class="bx"
                    @click="hidden.confirm_password = !hidden.confirm_password"
                  />
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="terms"
              rules="required"
              mode="eager"
            >
              <div class="flex items-center mt-4">
                <input
                  v-model="isAgree"
                  name="termsOfUse"
                  type="checkbox"
                  :error-messages="errors"
                  :value="true"
                  class="h-4 w-4 text-green-600 focus:ring-green-600 border-gray-300 rounded"
                >
                <label for="termsOfUse" class="ml-2 block text-gray-600 text-sm">
                  <span class="text-green-600 border-b border-green-600" @click="toTermsOfService()">
                    Фойдаланиш қоидалари
                  </span>
                  га розиман
                </label>
              </div>
            </ValidationProvider>
            <div>
              <button
                type="submit"
                class="
                  w-full
                  mt-4
                  py-2
                  px-4
                  border border-transparent
                  rounded-md
                  shadow-sm
                  text-sm
                  font-medium
                  text-white
                  bg-green-600
                  hover:bg-green-700
                  focus:outline-none
                "
              >
                {{ $t('word.register') }}
              </button>
            </div>
          </form>
        </ValidationObserver>
        <div class="flex items-center justify-center mt-2">
          <p class="text-gray-600 text-sm font-medium">
            {{ $t('text.haveAccount') }}
          </p>
          <button
            class="ml-2 text-light-orange text-sm font-medium focus:outline-none"
            @click="openSignIn()"
          >
            {{ $t('text.signIn') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import termsOfService from './terms-of-service.vue'
// import Socials from '~/components/core/Socials.vue'
import signInModal from '~/components/modals/sign-in'
// import confirmCodeModal from '~/modals/confirm-code'
export default {
  components: {
    // Socials
  },
  props: {
    status: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      phoneOrEmail: '',
      isEmail: false,
      user: {
        name: '',
        surname: '',
        password: ''
      },
      confirm_password: '',
      isAgree: false,
      hidden: {
        password: true,
        confirm_password: true
      }
    }
  },
  watch: {
    phoneOrEmail () {
      const EMAILREG = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (EMAILREG.test(this.phoneOrEmail)) {
        this.isEmail = true
      } else {
        this.isEmail = false
      }
    }
  },
  methods: {
    ...mapActions({
      signUp: 'register'
    }),
    async onSubmit () {
      const _user = { ...this.user }
      if (this.phoneOrEmail.includes('@') > 0) {
        _user.email = this.phoneOrEmail
        _user.username = this.phoneOrEmail
        delete _user.phone
      } else if (this.phoneOrEmail.includes('+') > 0) {
        _user.phone = this.phoneOrEmail.substring(1)
        _user.username = this.phoneOrEmail.substring(1)
        delete _user.email
        delete _user.password
      } else {
        _user.phone = this.phoneOrEmail.substring(1)
        _user.username = this.phoneOrEmail.substring(1)
        delete _user.email
        delete _user.password
      }
      await this.$axios.post('/auth/local/register', _user).then(async (data) => {
        if (this.isEmail) {
          this.$snotify.info('Logging in...')
          console.log(this.user, _user)
          await this.$auth.loginWith('local', {
            data: { identifier: _user.email, password: _user.password }
          }).then(async (res) => {
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
            this.authError = e.response.data.detail
            this.loading = false
            this.$snotify.error(e.response.data.detail)
          })
          return
        }
        if (data.data === false) {
          this.confirmCode({ username: this.user.phone, isOtpSuccess: false, isLogin: null })
          return
        }
        this.confirmCode({ username: data.data.user.phone, isOtpSuccess: null, isLogin: null })
        // eslint-disable-next-line no-console
      }).catch((e) => { console.error(e) })
    },
    toTermsOfService () {
      this.$modal.show(
        termsOfService,
        { status: 'terms-of-service' },
        {
          height: 700,
          maxWidth: 700,
          width: window.innerWidth <= 700 ? window.innerWidth - 10 : 700,
          acrollable: true
        }
      )
    },
    confirmCode (user) {
      this.$emit('close')
      this.$modal.show(
        confirmCodeModal,
        { user },
        {
          height: 'auto',
          maxWidth: 400,
          width: window.innerWidth <= 400 ? window.innerWidth - 10 : 400,
          acrollable: true
        }
      )
    },
    openSignIn () {
      this.$emit('close')
      this.$modal.show(
        signInModal,
        { status: 'sign-in' },
        {
          height: 'auto',
          maxWidth: 400,
          width: window.innerWidth <= 350 ? window.innerWidth - 10 : 350,
          acrollable: true
        }
      )
    },
    onClose (e) {
      this.$emit('close')
      this.$root.$emit('sign-up', e)
    }
  }
}
</script>
