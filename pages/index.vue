<template>
  <div class="bg-gray-50">
    <header class="lg:static md:bg-transparent bg-white lg:overflow-y-visible">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        <div class="lg:hidden flex items-center h-14 justify-between">
          <div>
            <button
              type="button"
              class="-mx-2 rounded-md p-2 inline-flex items-center justify-center focus:outline-none"
              aria-expanded="false"
              @click="openMobileMenu"
            >
              <i class="bx bx-menu text-green-600 text-3xl" />
            </button>
            <client-only>
                        <slideout-panel />
            </client-only>
          </div>
          <div class="flex-shrink-0 flex items-center">
            <router-link :to="{ path: localePath('/') }">
              <img
                class="block h-10 w-auto"
                src="~/assets/images/logo.png"
                alt="Agromart logo"
              />
            </router-link>
          </div>
          <div class="search-container">
            <form action="/search" method="get">
              <input
                id="searchright"
                v-model="query.filter"
                type="text"
                class="search expandright py-2"
                :placeholder="$t('word.search')"
                @keyup.enter="searching($event.target.value)"
              />
              <label class="serch-button searchbutton" for="searchright"
                ><span class="mglass">&#9906;</span></label
              >
            </form>
          </div>
        </div>
        <div class="lg:block hidden">
          <div class="py-4 w-full flex items-center justify-between">
            <div class="flex-shrink-0 flex items-center">
              <router-link :to="{ path: localePath('/') }">
                <img
                  class="block h-10 mr-4 w-auto"
                  src="~/assets/images/logo.png"
                  alt="Agromart logo"
                />
              </router-link>
            </div>
            <div
              class="relative flex items-between flex-grow focus-within:z-10"
            >
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                v-model="query.filter"
                name="search"
                class="focus:ring-indigo-500 py-2 focus:border-indigo-500 md:border-r-0 block w-full rounded md:rounded-r-none pl-10 sm:text-sm border-gray-300 border"
                :placeholder="$t('text.enterRequest')"
                @keyup.enter="searching($event.target.value)"
              />
            </div>
            <button
              class="-ml-px w-44 relative md:flex hidden items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <div class="inset-y-0 right-3 flex items-center justify-center">
                <select
                  v-model="query.type"
                  name="option"
                  class="h-5 py-0 px-3 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                >
                  <option v-for="(item, index) in routerList" :key="index" :value="item.link">
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </button>
            <button
              type="submit"
              class="bg-green-600 w-20 md:block hidden focus:outline-none rounded rounded-l-none p-1.5 text-white transform -translate-x-1"
              @click="searching($event.target.value)"
            >
              {{ $t("word.search") }}
            </button>
            <client-only>
            <langswitcher class="ml-4 lg:block hidden" />
            </client-only>
            <div v-if="isLoggedIn" class="ml-3 relative">
              <div class="flex items-center justify-end">
                <button
                  id="user-menu-button"
                  type="button"
                  class="justify-end inline-flex items-center py-2 text-sm font-medium focus:outline-none border border-transparent bg-light-gray text-gray-600 lg:rounded-md lg:hover:bg-gray-50"
                  aria-expanded="false"
                  aria-haspopup="true"
                  @click="openProfile"
                >
                  <img
                    class="w-10 flex justify-end rounded-full"
                    alt="Avatar"
                    :src="
                      currentUser.avatar
                        ? $tools.getFileUrl(currentUser.avatar)
                        : require('/assets/images/person/avatar.jpg')
                    "
                    @error="
                      currentUser.avatar = require('/assets/images/person/avatar.jpg')
                    "
                  />
                </button>
              </div>
              <div
                v-show="isProfileOpened"
                class="z-20 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <div
                  class="block font-medium hover:bg-gray-100 px-4 py-2 text-sm text-gray-600 cursor-pointer"
                  @click="toUserWork({ path: localePath('/my-profile') })"
                >
                  {{
                    `${currentUser.name ? currentUser.name : ""} ${
                      currentUser.surname ? currentUser.surname : ""
                    }`
                  }}
                  <br />
                  <span class="text-xs text-gray-500"
                    >ID: {{ currentUser.id }}</span
                  >
                </div>
                <div
                  class="block font-medium px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer"
                  @click="toUserWork({ path: localePath('/my-products') })"
                >
                  {{ $t("word.ads") }}
                </div>
                <div
                  class="block font-medium px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer"
                  @click="toUserWork({ path: localePath('/chats') })"
                >
                  {{ $t("text.myConsultation") }}
                </div>
                <div
                  class="block font-medium px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer"
                  @click="toUserWork({ path: localePath('/my-chats') })"
                >
                  {{ $t("text.myChats") }}
                </div>
                <div
                  class="block font-medium px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer"
                >
                  {{ $t("word.settings") }}
                </div>
                <div
                  class="block font-medium px-4 py-2 text-sm text-red-600 hover:bg-red-100 cursor-pointer"
                  @click="logOut()"
                >
                  {{ $t("word.exit") }}
                </div>
              </div>
            </div>
            <div v-else class="flex items-center justify-end">
              <button
                class="ml-3 md:inline-flex hidden items-center px-4 py-2 text-sm font-medium focus:outline-none border border-transparent rounded-md shadow-sm bg-light-gray text-gray-600"
                @click="signIn()"
              >
                {{ $t("word.login") }}
              </button>
              <button
                type="button"
                class="w-28 ml-6 inline-flex items-center px-3 py-2.5 text-sm font-medium focus:outline-none border border-transparent rounded-md shadow-sm text-white bg-light-orange"
                @click="signUp()"
              >
                {{ $t("word.register") }}
              </button>
            </div>
          </div>
          <div class="grid grid-cols-6 text-gray-600 gap-3">
            <div>
              <nuxt-link
                class="navbar-item"
                :class="
                  $route.path.search('online-consultation') > -1
                    ? 'text-base text-green-600 border-b-2 font-medium border-green-600 pb-1'
                    : 'text-gray-600 hover:text-green-600 font-medium hover:border-b-2 hover:border-green-600 text-base '
                "
                active-class="active"
                :exact="true"
                :to="{ path: localePath('/online-consultation') }"
              >
                {{ $t("text.onlineConsultation") }}
              </nuxt-link>
            </div>
<!--            <div>-->
<!--              <nuxt-link-->
<!--                class="navbar-item flex justify-center"-->
<!--                :class="-->
<!--                  $route.path.search('trading') > -1-->
<!--                    ? 'text-base text-green-600 border-b-2 font-medium border-green-600 pb-1'-->
<!--                    : 'text-gray-600 hover:text-green-600 font-medium hover:border-b-2 hover:border-green-600 text-base '-->
<!--                "-->
<!--                active-class="active"-->
<!--                :exact="true"-->
<!--                :to="{ path: localePath('/trading') }"-->
<!--              >-->
<!--                {{ $t("text.tradingFloor") }}-->
<!--              </nuxt-link>-->
<!--            </div>-->
            <div>
              <nuxt-link
                class="navbar-item flex justify-center"
                :class="
                  $route.path.search('news') > -1
                    ? 'text-base text-green-600 border-b-2 font-medium border-green-600 pb-1'
                    : 'text-gray-600 hover:text-green-600 font-medium hover:border-b-2 hover:border-green-600 text-base '
                "
                active-class="active"
                :exact="true"
                :to="{ path: localePath('/news') }"
              >
                {{ $t("text.lastNews") }}
              </nuxt-link>
            </div>
            <div>
              <nuxt-link
                class="navbar-item flex justify-center"
                :class="
                  $route.path.search('useful-informatio') > -1
                    ? 'text-base text-green-600 border-b-2 font-medium border-green-600 pb-1'
                    : 'text-gray-600 hover:text-green-600 font-medium hover:border-b-2 hover:border-green-600 text-base '
                "
                active-class="active"
                :exact="true"
                :to="{ path: localePath('/useful-informatio') }"
              >
                {{ $t("text.usefulInformation") }}
              </nuxt-link>
            </div>
            <div>
              <router-link
                class="navbar-item flex justify-center"
                :class="
                  $route.path.search('prices') > -1
                    ? 'text-base text-green-600 border-b-2 font-medium border-green-600 pb-1'
                    : 'text-gray-600 hover:text-green-600 font-medium hover:border-b-2 hover:border-green-600 text-base '
                "
                active-class="active"
                :exact="true"
                :to="{ path: localePath('/prices') }"
              >
                {{ $t("text.prices") }}
              </router-link>
            </div>
            <div>
              <router-link
                class="navbar-item flex justify-center"
                :class="
                  $route.path.search('videos') > -1
                    ? 'text-base text-green-600 border-b-2 font-medium border-green-600 pb-1'
                    : 'text-gray-600 hover:text-green-600 font-medium hover:border-b-2 hover:border-green-600 text-base '
                "
                active-class="active"
                :exact="true"
                :to="{ path: localePath('/videos') }"
              >
                {{ $t("text.videoLessons") }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <nuxt-child />
    </main>
    <client-only>
    <v-footer />
    </client-only>
  </div>
</template>
<script>
import Footer from "../components/Footer";
import { mapGetters, mapState } from "vuex";
import langswitcher from "~/components/langSwitcher/langswitcher";
import MobileCategory from "@/components/MobileCategory";
import telegram from "@/components/modals/telegram";
import signIn from "@/components/modals/sign-in";
export default {
  name: "IndexPage",
  components: { "v-footer": Footer, langswitcher },
  data() {
    return {
      showUserMenu: false,
      isProfileOpened: false,
      isLoggedIn: false,
      routerList: [
        {
        name: this.$t("text.allSections"),
        link: '/'
      },
        {
          name: this.$t("text.tradingFloor"),
          link: '/trading'
        },
        {
          name: this.$t("text.lastNews"),
          link: '/news'
        },
        {
          name: this.$t("text.usefulInformation"),
          link: '/useful-informatio'
        },
        ],
      query: {
        filter: "",
        type: "/",
      },
    };
  },
  computed: {
    // ...mapState({
    //   isLoggedIn: (state) => state.auth.loggedIn,
    //   currentUser: (state) => state.auth.user,
    //   userConnection: (state) => state.socket.userConnection,
    //   userConnectionStatus: (state) => state.socket.userConnectionStatus,
    // }),
  },
  mounted () {
    this.openTelegramModal()
  },
  methods: {
    openTelegramModal () {
      this.$modal.show(
        telegram,
        { status: 'telegram' },
        {
          height: 'auto',
          maxWidth: 500,
          width: window.innerWidth <= 450 ? window.innerWidth - 10 : 450,
          scrollable: false
        }
      )
      // this.$root.$once('telegram-modal', (item) => {
      //   // this.fetchSeason()
      // })
    },
    signIn() {
      this.$modal.show(
        signIn,
        { status: "sign-in" },
        {
          height: "auto",
          maxWidth: 400,
          width: window.innerWidth <= 350 ? window.innerWidth - 10 : 350,
          acrollable: true,
        }
      )
    },
      // this.$root.$once('user-change-modal', (item) => {
      //   console.log(item)
      // })
    signUp() {
      // this.$modal.show(
      //   // signUpModal,
      //   { status: "sign-up" },
      //   {
      //     height: "auto",
      //     maxWidth: 400,
      //     width: window.innerWidth <= 350 ? window.innerWidth - 10 : 350,
      //     acrollable: true,
      //   }
      // );
    },
    openMobileMenu() {
        this.$showPanel({
          component: MobileCategory,
          openOn: "left",
          width: (window.innerWidth * 3) / 4,
        });
    },
  },
  watch: {
    'query.type': function (value) {
      this.$router.push({path: this.localePath(value)})
    }
  }
};
</script>
