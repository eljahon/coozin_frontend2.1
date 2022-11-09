<template>
 <div>
   <div v-if="$fetchState.pending"><MainLoading /></div>
   <div v-else-if="$fetchState.error"></div>
     <div v-else class="max-w-7xl mx-auto py-6 px-4 lg:px-8">
       <div class="pb-5 flex justify-between">
         <breadcrumbs :items="items" />

         <div class="md:flex hidden justify-end">
           <button
             v-if="isLoggedIn"
             type="button"
             class="
            mr-4
            inline-flex
            items-center
            px-4
            py-2
            border border-gray-300
            shadow-md
            text-base
            font-medium
            rounded-md
            text-gray-700
            bg-white
            focus:outline-none
          "
             @click="$router.push(localePath('/my-products'))"
           >
             {{ $t('text.myAds') }}
           </button>
           <button
             type="button"
             class="
            inline-flex
            items-center
            px-4
            py-2
            border border-transparent
            shadow-sm
            text-base
            font-medium
            rounded-md
            text-white
            bg-green-600
            focus:outline-none
          "
             @click="toNewTrading()"
           >
             <!-- @click="$router.push(localePath('/my-products/new'))" -->
             {{ $t('word.announcement') }} <span class="ml-2">+</span>
           </button>
         </div>
       </div>
       <div class="md:hidden gap-4 grid" :class="isLoggedIn ? 'grid-cols-2' : 'grid-cols-1'">
         <div>
           <button
             class="
          border
          flex
          items-center
          py-2
          w-full
          justify-center
          rounded-md
          bg-gray-100
          font-medium
          text-gray-700
          border-transparent
        "
             @click="openCategories()"
           >
             {{ $t('text.allSections') }}
           </button>
           <slideout-panel />
         </div>
         <button
           v-if="isLoggedIn"
           type="button"
           class="
          inline-flex
          items-center
          justify-center
          px-4
          py-2
          border border-gray-300
          text-base
          font-medium
          rounded-md
          text-gray-700
          bg-white
          focus:outline-none
        "
           @click="$router.push(localePath('/my-products'))"
         >
           {{ $t('text.myAds') }}
         </button>
       </div>
       <div class="md:hidden flex mt-5">
         <filter-swiper />
       </div>
       <div class="grid grid-cols-4 gap-4">
         <!-- Vertical menu for desktop -->
         <div class="lg:block hidden">
           <sidebar :name="'trading'" />
         </div>
         <div class="lg:col-span-3 col-span-4">
           <main class="flex-1 relative focus:outline-none">
             <trading :loading="loadnig"/>
           </main>
         </div>
       </div>
     </div>
 </div>
</template>
<script>
// import { mapState } from 'vuex'
// import Sidebar from '~/components/core/Sidebar.vue'
// import Breadcrumbs from '~/components/ui/Breadcrumbs.vue'
// import Trading from '~/components/lists/trading.vue'
// import FilterSwiper from '~/components/main/filter-swiper.vue'
import mobileCategory from '~/components/mobile-menu/MoblieMenu.vue'
export default {
  auth: false,
  // components: {
  //   Trading,
  //   FilterSwiper
  // },
  data () {
    return {
      items: [{ text: 'text.tradingFloor', link: '/trading', disabled: false }],
      loadnig: false,
      query: {
        posttype: null,
        hasdelivery: null,
        price_lte: null,
        price_gte: null
      }
    }
  },
  computed: {

  },
  watch: {
    '$route.query.category_id': function (value) {
      this.fetTradingList()
    }
  },
  async fetch () {
   // await this.fetchTradingCategoriy()
    await this.fetchTradingNest()
   await this.fetTradingList()

  },
  methods: {
    async fetTradingList () {
      this.loadnig = true;
      const _filters = {
        trading_category: this.$route.category_id
      }
      if (!this.$route.query.category_id || this.$route.query.category_id === 'all') delete _filters.trading_category;
      try {
        await this.$store.dispatch('trading/get_trading_posts_list', {
          populate: "*",
          locale: this.$i18n.locale,
          filters: _filters
        })

      } catch (err) {
        console.log(err)
      } finally {
        this.loadnig = false
      }
    },
    async fetchTradingCategoriy() {
      await this.$store.dispatch('trading/get_trading_category', {
        populate: "*",
        locale: this.$i18n.locale
      }).then((res) => {
        this.$store.dispatch('sidebar/setSidebar', res)
      })
    },
    async fetchTradingNest () {
     try {
       await this.$store.dispatch('trading/get_trading_nest', {
         populate: "*",
         locale: this.$i18n.locale,
       })
         .then(res => {
           this.$store.dispatch('sidebar/setSidebar', res)

         })
     } catch (err) {

     }
    },
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
    openCategories () {
      this.$showPanel({
        component: mobileCategory,
        openOn: 'right',
        props: {
          name: 'trading'
        },
        width: (window.innerWidth * 3) / 4
      })
    },

    openFilter () {
      this.isFilterOpened = !this.isFilterOpened
    },
    postTypeDropdown (bool) {
      this.isPostTypeDropdown = bool
    },
    close () {
      this.isFilterOpened = false
    }
  }
}
</script>
