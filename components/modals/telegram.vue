<template>
  <div class="p-4">
    <div class="block absolute top-0 right-0 pt-4 pr-4">
      <div class="absolute right-4 top-4 text-center p-1 rounded-md hover:bg-gray-100 cursor-pointer" @click="onClose('canceled')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(75, 85, 99, 1);transform:;-ms-filter:">
          <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
        </svg>
      </div>
    </div>
    <div class="sm:flex sm:items-start">
      <div class="grid place-items-center w-screen">
        <img class="block h-10 w-auto" src="~/assets/images/logo.png" alt="Agromart logo">
      </div>
    </div>
    <div class="text-center">
      <i>{{ $t('text.telegramText') }}</i>
    </div>
    <div class="sm:flex sm:items-start">
      <div class="grid place-items-center w-screen">
        <img src="~/assets/images/telegram_design.png" alt="Agromart Telegram design">
      </div>
    </div>
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
        @click="toTelegram()"
      >
        {{ $t('text.accessToTelegram') }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},

  data () {
    return {}
  },

  watch: {},

  created () {},
  methods: {
    toTelegram () {
      window.open('https://t.me/uzagromart', '_blank')
    },
    onClose (e) {
      this.$emit('close')
      this.$root.$emit('telegram-modal', e)
    }
  }
}
</script>
<style scoped></style>
