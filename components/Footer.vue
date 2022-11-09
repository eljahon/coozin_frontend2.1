<template>
  <div class="bg-gray-800 lg:mt-10 mt-6">
    <div class="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-3 border-b-2 border-gray-300 py-5">
        <div class="text-gray-200 col-span-2">
          <div class="font-semibold text-lg mb-3  text-white">
            {{ $t('text.portalAgromart') }}
          </div>
          <div class="grid grid-cols-2">
            <div class="col-span-1 leading-10">
              <div v-for="(info, index) in footer" :key="index">
                <router-link :to="{path: localePath(info.route)}">
                  {{ $t(info.name) }}
                </router-link>
              </div>
            </div>
            <div>
              <div class="leading-9">
                <router-link :to="{path: localePath('/terms-of-service')}">
                  {{ $t('text.termsOfUse') }}
                </router-link>
              </div>
              <div class="mt-3">
                <div class="font-semibold text-lg text-white">
                  {{ $t('text.mobileApp') }}
                </div>
                <div class="">
                  <img src="~/assets/images/app_store.png" class="w-36 my-3">
                  <img src="~/assets/images/google_play.png" class="w-36" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <div class="font-semibold text-lg  text-white">
            {{ $t('text.ourPartners') }}
          </div>
          <!-- <div class="flex items-center my-3">
            <img src="~/assets/images/john_deere.png" class="w-16">
            <p class="text-xs text-gray-100 ml-3 w-48">
              Qishloq xo'jaligi sohasida texnika
              ishlab chiqarish bo'yicha yetakchi korxona
            </p>
          </div> -->
          <div class="flex items-center my-3">
            <img src="~/assets/images/osce.png" class="w-16">
            <p class="text-xs text-gray-100 ml-3 w-48">
              {{ $t('text.obce') }}
            </p>
          </div>
          <div class="font-semibold text-lg py-6 text-white">
            {{ $t('text.cooperation') }}
          </div>
          <a href="mailto:info@agromart.uz" target="_blank" class="flex items-center text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z" /></svg>
            <p class="underline ml-2">
              {{'info@agromart.uz'}}
            </p>
          </a>
          <a href="mailto:https://manager@agromart.uz" target="_blank" class="flex items-center text-gray-200 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z" /></svg>
            <p class="underline ml-2">
              {{'manager@agromart.uz'}}
            </p>
          </a>
        </div>
      </div>
      <div class="grid grid-cols-11 gap-4 py-6 border-b-2 border-gray-300">
        <router-link :to="{path: localePath('/chats')}" class="bg-light-orange flex items-center justify-center text-white col-span-2 focus:outline-none rounded-md text-center">
          {{ $t('text.getConsultation') }}
        </router-link>
        <div class="text-xs col-span-2 text-gray-100">
          {{ $t('text.getAdvice') }}
        </div>
        <button type="button" class="bg-green-600 col-span-2 flex items-center justify-center text-white focus:outline-none rounded-md text-center" @click="toNewTrading()">
          {{ $t('word.announcement') }}
        </button>
        <div class="text-xs col-span-2 w-48 text-gray-100">
          {{ $t('text.announceContent') }}
        </div>
        <div class="block">
          <div class="text-xl font-semibold text-white">
            {{ statistics.user }}
          </div>
          <div class="text-sm text-gray-300">
            {{ $t('word.user') }}
          </div>
        </div>
        <div class="block">
          <div class="text-xl font-semibold text-white">
            {{ statistics.adds }}
          </div>
          <div class="text-sm text-gray-300">
            {{ $t('word.ad') }}
          </div>
        </div>
        <div class="block">
          <div class="text-xl font-semibold text-white">
            {{ statistics.advice }}
          </div>
          <div class="text-sm text-gray-300">
            {{ $t('word.tips') }}
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 py-8">
        <div class="text-lg font-semibold text-white">
          © 2017-2022 Agromart.uz
        </div>
        <div class="flex items-center justify-end">
          <div class="text-lg font-semibold text-white">
            {{ $t('text.socialNetwork') }}:
          </div>
          <div class="space-x-6 flex ml-10">
            <a href="https://t.me/uzagromart" target="_blank">
              <img src="~/assets/images/telegram.png" class="w-6">
            </a>
            <a href="https://www.instagram.com/agromart_uz/" target="_blank">
              <img src="~/assets/images/instagram.png" class="w-6">
            </a>
            <a href="https://www.facebook.com/agromart.uz" target="_blank">
              <img src="~/assets/images/facebook.png" class="w-6">
            </a>
            <a href="https://www.youtube.com/channel/UCZruaJzsCquRut061tqMzDQ" target="_blank">
              <img src="~/assets/images/youtube.png" class="w-6">
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile view -->

    <div class="block w-full max-w-7xl lg:pl-10 lg:pr-5 mx-auto lg:hidden">
      <div class="grid grid-cols-1 mx-3">
        <nav class="">
          <div v-for="(item, key) in footerMobile" :key="key">
            <div v-if="item.children">
              <div class="flex border-b border-gray-300">
                <a
                  :class="
                    item.current
                      ? 'cursor-pointer bg-gray-700 w-full text-white justify-between flex items-center px-2 py-3 text-base font-medium rounded-md'
                      : 'cursor-pointer text-white w-full justify-between flex items-center px-2 py-3 text-base font-medium rounded-md'
                  "
                  @click="menuWithChildClicked(item)"
                >
                  {{ $t(item.name) }}
                  <i
                    class="text-white text-xl"
                    :class="[item.current ? item.iconUp : item.iconDown]"
                  />
                </a>
              </div>
              <div v-for="(child, k) in item.children" v-show="item.current" :key="k">
                <router-link
                  v-if="child.route"
                  :to="{path: localePath(child.route)}"
                  :class="
                    child.current
                      ? ''
                      : 'cursor-pointer text-white group ml-2 flex items-center px-2 py-3 text-sm font-medium rounded-md'
                  "
                  @click="menuChildClicked(item, child)"
                >
                  {{ item.id === 3 ? child.name : $t(child.name) }}
                </router-link>
                <router-link
                  v-else-if="child.isImages"
                  :to="{path: localePath(child.route)}"
                  @click="menuChildClicked(item, child)"
                >
                  <img :src="child.isImages" class="w-24 h-24 ml-2">
                  {{ item.id === 3 ? child.name : $t(child.name) }}
                </router-link>
                <a
                  v-else
                  :class="
                    child.current
                      ? 'cursor-pointer bg-gray-200 ml-2 text-gray-700 group flex items-center px-2 py-3 text-sm font-medium rounded-md'
                      : 'cursor-pointer text-gray-600 ml-2 group flex items-center px-2 py-3 text-sm font-medium rounded-md'
                  "
                  :href="child.callback"
                  @click="menuChildClicked(item, child)"
                >
                  {{ $t(child.name) }}</a>
              </div>
            </div>
          </div>
        </nav>
        <div class="grid grid-cols-2 my-4 gap-3">
          <router-link :to="{path: localePath('/chats')}">
            <button class="bg-light-orange text-white p-2 w-full focus:outline-none rounded-md text-center">
              {{ $t('text.getConsultation') }}
            </button>
          </router-link>

          <button class="bg-green-600 w-full p-2 text-white focus:outline-none rounded-md text-center" @click="toNewTrading()">
            {{ $t('word.announcement') }}
          </button>
        </div>
        <div class="grid grid-cols-3 gap-3 mb-3">
          <div class="block">
            <div class="text-xl font-semibold text-white">
              {{ statistics.user }}
            </div>
            <div class="text-sm text-gray-300">
              {{ $t('word.user') }}
            </div>
          </div>
          <div class="block">
            <div class="text-xl font-semibold text-white">
              {{ statistics.adds }}
            </div>
            <div class="text-sm text-gray-300">
              {{ $t('word.ad') }}
            </div>
          </div>
          <div class="block">
            <div class="text-xl font-semibold text-white">
              {{ statistics.advice }}
            </div>
            <div class="text-sm text-gray-300">
              {{ $t('word.tips') }}
            </div>
          </div>
        </div>
        <div>
          <div class="font-semibold text-lg mt-4 text-white">
            {{ $t('text.mobileApp') }}
          </div>
          <div class="grid md:grid-cols-5 grid-cols-2 gap-3 my-3">
            <img src="~/assets/images/app_store.png" class="w-full">
            <img src="~/assets/images/google_play.png" class="w-full" alt="">
          </div>
          <div class="text-lg font-semibold text-white my-4">
            {{ $t('text.socialNetwork') }}:
          </div>
          <div class="space-x-6 flex border-b pb-5">
            <a href="https://t.me/uzagromart" target="_blank">
              <img src="~/assets/images/telegram.png" class="w-6">
            </a>
            <a href="https://www.instagram.com/agromart_uz/" target="_blank">
              <img src="~/assets/images/instagram.png" class="w-6">
            </a>
            <a href="https://www.facebook.com/agromart.uz" target="_blank">
              <img src="~/assets/images/facebook.png" class="w-6">
            </a>
            <a href="https://www.youtube.com/channel/UCZruaJzsCquRut061tqMzDQ" target="_blank">
              <img src="~/assets/images/youtube.png" class="w-6">
            </a>
          </div>
          <div class="text-lg font-semibold my-3 text-white">
            © 2017-2022 Agromart.uz
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import termsOfService from '~/modals/terms-of-service.vue'
export default {
  name: 'Footer',
  data () {
    return {
      footer: [
        { name: 'text.onlineConsultation', active: false, route: '/online-consultation' },
        { name: 'text.tradingFloor', active: false, route: '/trading' },
        { name: 'text.lastNews', active: false, route: '/news' },
        { name: 'text.usefulInformation', active: false, route: '/usefulInformation' },
        { name: 'text.prices', active: false, route: '/prices' },
        { name: 'text.videoLessons', active: false, route: '/videos' }
      ],
      statistics: {
        user: '20,000',
        adds: '200,000',
        advice: '54,000'
      },
      footerMobile: [
        {
          id: 1,
          name: 'text.portalAgromart',
          iconDown: 'bx bx-chevron-down',
          iconUp: 'bx bx-chevron-up',
          children: [
            { name: 'text.onlineConsultation', route: '/consultancy', current: false },
            { name: 'text.tradingFloor', route: '/trading', current: false },
            { name: 'text.lastNews', route: '/news', current: false },
            { name: 'text.usefulInformation', route: '/usefulInformation', current: false },
            { name: 'text.prices', route: '/prices', current: false },
            { name: 'text.videoLessons', route: '/videos', current: false }
          ],
          current: false
        },
        {
          id: 2,
          name: 'text.ourPartners',
          iconDown: 'bx bx-chevron-down',
          iconUp: 'bx bx-chevron-up',
          children: [
            { name: 'word.osce', route: '/', current: false }
          ],
          current: false
        },
        {
          id: 3,
          name: 'text.cooperation',
          iconDown: 'bx bx-chevron-down',
          iconUp: 'bx bx-chevron-up',
          children: [
            { name: 'info@agromart.uz', callback: 'mailto:info@agromart.uz', current: false },
            { name: 'manager@agromart.uz', callback: 'mailto:manager@agromart.uz', current: false }
          ],
          current: false
        }
      ],
      isLoggedIn: false
    }
  },
  // computed: {
  //   ...mapState({
  //     isLoggedIn: state => state.auth.loggedIn
  //   })
  // },
  methods: {
    toNewTrading () {
      if (this.isLoggedIn) {
        this.$router.push({
          path: this.localePath('/my-products/new')
        })
      } else {
        this.$router.push({
          path: this.localePath('/login'),
          query: {
            from: 'newTrading'
          }
        })
      }
    },
    toTermsOfService () {
      this.$emit('close')
      // this.$modal.show(
      //   termsOfService,
      //   { status: 'terms-of-service' },
      //   {
      //     height: 700,
      //     maxWidth: 700,
      //     width: window.innerWidth <= 800 ? window.innerWidth - 10 : 800,
      //     acrollable: true
      //   }
      // )
    },
    menuChildClicked (item, child) {
      item.children.forEach((ch) => {
        if (child === ch) {
          ch.current = true
        } else {
          ch.current = false
        }
      })
      this.$router.push(this.localePath(child.route))
      this.showMenuInMobile = !this.showMenuInMobile
      return child
    },
    menuWithChildClicked (item) {
      this.footerMobile.forEach((footerMobile) => {
        if (item === footerMobile) {
          footerMobile.current = !footerMobile.current
          footerMobile.children.forEach((child) => {
            child.current = false
          })
        } else {
          footerMobile.current = false
        }
      })
      return item
    }
  }
}
</script>
