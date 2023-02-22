<template>
    <div v-if="$route.query.register === 'otp'" class="login-modal">
      <div @click="$routePush({register: undefined})" class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center relative x-position cursor-pointer">
        <the-icon src="x" />
      </div>
      <h2 class="text-2xl font-bold text-center text-gray-700">{{ $t('confirm-otp') }}</h2>
      <input
        class="bg-white text-gray-500 border rounded-2xl border-gray-200
         py-2.5 px-4 text-base h-12 outline-orange-600 sm:w-96 w-full bg-gray-100 my-6"
        v-model="otp"
        placeholder="Enter OTP"
        type="text"
      >
      <button
        @click="confirmRegister"
        class="sm:w-96 w-full h-14 rounded-3xl bg-orange-600 text-white font-semibold"
      >Войти</button>
    </div>
</template>


<script>

export default {
    props: ['phone'],
    data() {
        return {
            otp: ''
        }
    },
    methods: {
        confirmRegister() {
            this.$axios.post('/users-permissions/register_confirm_otp', {
                phone: this.phone,
                otp: this.otp
            })
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
  z-index: 5;
  padding: 48px 24px 32px 24px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 16px;
}

@media screen and (max-width: 450px) {
  .login-modal {
    width: 96%;
  }
}
</style>