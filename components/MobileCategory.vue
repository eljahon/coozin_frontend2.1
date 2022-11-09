<template>
  <div class="relative h-full">
    <div class="flex justify-between relative">
      <div v-if="isLoggedIn" class="bg-gray-50 rounded-md m-4 py-4 w-full">
        <div class="ml-3">
          <div
            class="flex items-center"
            @click="
              closePanel()
            "
          >
            <!-- toUserWork({ path: '/my-profile' }) -->
            <button
              type="button"
              class="
                inline-flex
                items-center
                text-sm
                font-medium
                focus:outline-none
                border border-transparent
                bg-light-gray
                text-gray-600
              "
              aria-expanded="false"
              aria-haspopup="true"
            >
              <img
                class="w-14 flex justify-end rounded-full"
                alt="Avatar"
                :src="require('/assets/images/person/avatar.jpg')"
                @error="currentUser.avatar = require('/assets/images/person/avatar.jpg')"
              >
            </button>
            <div class="block hover:bg-gray-100 px-3 py-2 text-sm text-gray-600 cursor-pointer">
              {{ `${currentUser.name ? currentUser.name : ''} ${currentUser.surname ? currentUser.surname : ''}` }} <br>
              <span class="text-xs text-gray-500">ID: {{ currentUser.id }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="flex items-center justify-center w-full m-3">
        <button
          class="
            items-center
            px-4
            py-2
            text-sm
            font-medium
            focus:outline-none
            border border-transparent
            rounded-md
            shadow-sm
            w-full
            bg-light-orange
            text-white
          "
          @click="
            closePanel()
            signIn()
          "
        >
          {{ $t('word.login') }}
        </button>
      </div>
      <!-- <button class="flex absolute right-0 top-9 focus:outline-none items-center bg-gray-100 rounded-md py-1 px-2" @click="closePanel()">
        <i class="bx bx-x text-gray-700 text-3xl" />
      </button> -->
    </div>
    <div class="">
      <div v-for="(menu, index) in headerMobile" :key="index">
        <div v-if="menu.children">
          <div class="flex border-b border-gray-300">
            <a
              :class="
                menu.current
                  ? 'cursor-pointer w-full bg-gray-100 text-gray-700 justify-between flex items-center px-5 py-4 text-base font-medium rounded-md'
                  : 'cursor-pointer text-gray-700 w-full justify-between flex items-center px-5 py-4 text-base font-medium rounded-md'
              "
              @click="menuWithChildClicked(menu)"
            >
              <div class="flex items-center">
                <i :class="menu.icon" class="text-2xl" />
                <span class="ml-4"> {{ $t(menu.name) }} </span>
              </div>
              <i
                class="text-gray-700 text-xl"
                :class="[menu.current ? menu.iconUp : menu.iconDown]"
              />
            </a>
          </div>
          <div v-for="(child, k) in menu.children" v-show="menu.current" :key="k">
            <div v-if="child.route" @click="closePanel()">
              <router-link
                :to="{path: localePath(child.route)}"
                :class="
                  child.current
                    ? ''
                    : 'cursor-pointer text-gray-700 group ml-16 flex items-center py-3 text-base font-medium rounded-md'
                "
                @click="menuChildClicked(menu, child)"
              >
                {{ $t(child.name) }}
              </router-link>
            </div>
            <div v-else @click="closePanel()">
              <a
                :class="
                  child.current
                    ? 'cursor-pointer bg-gray-200 ml-16 text-gray-700 group flex items-center py-3 text-base font-medium rounded-md'
                    : 'cursor-pointer text-gray-600 ml-16 group flex items-center py-3 text-base font-medium rounded-md'
                "
                @click="menuChildClicked(menu, child)"
                @click.stop.prevent="child.callback"
              >
                {{ $t(child.name) }}</a>
            </div>
          </div>
        </div>
        <div v-else @click="closePanel()">
          <router-link
            :to="{path: localePath(menu.route)}"
            class="
              flex
              focus:bg-gray-100
              px-5
              border-b border-gray-300
              py-4
              text-gray-700
              items-center
              space-x-4
            "
          >
            <i :class="menu.icon" class="text-2xl" />
            <span class="font-medium">
              {{ $t(menu.name) }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
    <lang-switcher class="m-5" />
    <div v-show="isLoggedIn" class="flex items-center md:hidden font-medium py-2 px-5 mt-3 text-red-600" @click="logOut()">
      <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m14.167 13.334 3.333-3.333m0 0-3.333-3.334m3.333 3.334H5.833m5 3.333v.833a2.5 2.5 0 0 1-2.5 2.5H5a2.5 2.5 0 0 1-2.5-2.5V5.834a2.5 2.5 0 0 1 2.5-2.5h3.333a2.5 2.5 0 0 1 2.5 2.5v.833" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <p class="ml-3">
        {{ $t('word.exit') }}
      </p>
    </div>
    <div class="absolute bottom-4 font-medium inset-x-5 text-gray-500">
      <div class="text-lg">
        {{ $t('text.socialNetwork') }}:
      </div>
      <div class="space-x-6 flex border-b border-gray-300 pt-3 pb-5">
        <i class="bx bxl-telegram text-2xl text-gray-500" />
        <i class="bx bxl-instagram-alt text-2xl text-gray-500" />
        <i class="bx bxl-facebook-circle text-2xl text-gray-500" />
        <i class="bx bxl-youtube text-2xl text-gray-500" />
      </div>
      <div class="text-lg text-gray-600 font-semibold mt-4">
        © 2017-2022 Agromart.uz
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapState } from 'vuex'
import signIn from "@/components/modals/sign-in";
export default {
  name: 'MobileMenu',
  components: {},
  data () {
    return {
      locale: this.$i18n.locale,
      headerMobile: [
        {
          id: 1,
          icon: 'bx bx-chat',
          name: 'text.onlineConsultation',
          route: '/online-consultation',
          current: false
        },
        {
          id: 2,
          icon: 'bx bx-trending-up',
          name: 'text.tradingFloor',
          route: '/trading',
          current: false
        },
        { id: 3, icon: 'bx bx-news', name: 'text.lastNews', route: '/news', current: false },
        { id: 4, icon: 'bx bx-world', name: 'text.usefulInformation', route: '/useful-informatio', current: false },
        { id: 5, icon: 'bx bx-money', name: 'text.prices', route: '/prices', current: false },
        {
          id: 6,
          icon: 'bx bx-video',
          name: 'text.videoLessons',
          route: '/videos',
          current: false
        }
      ]
    }
  },
  computed: {
    // ...mapState({
    //   isLoggedIn: state => state.auth.loggedIn,
    //   currentUser: state => state.auth.user
    // }),
    // ...mapGetters({})
  },
  methods: {
    closePanel () {
      this.$emit('closePanel', {})
    },
    async logOut () {
      await localStorage.removeItem('local')
      await localStorage.removeItem('user_info')
      await this.$auth.logout()
    },
    signIn () {
      this.$modal.show(
        signIn,
        { status: 'sign-in' },
        {
          height: 'auto',
          maxWidth: 400,
          width: window.innerWidth <= 350 ? window.innerWidth - 10 : 350,
          acrollable: true
        }
      )
    },
    toUserWork (data) {
      this.$router.push({
        path: this.localePath(data.path)
      })
    },
    menuChildClicked (menu, child) {
      menu.children.forEach((ch) => {
        if (child === ch) {
          ch.current = true
        } else {
          ch.current = false
        }
      })
      this.$router.push(this.localePath(child.route))
      return child
    },
    menuWithChildClicked (menu) {
      this.headerMobile.forEach((headerMobile) => {
        if (menu === headerMobile) {
          headerMobile.current = !headerMobile.current
          headerMobile.children.forEach((child) => {
            child.current = false
          })
        } else {
          headerMobile.current = false
        }
      })
      return menu
    }
  }
}
</script>
