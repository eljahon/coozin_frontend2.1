<template>
<div>
  <div v-if="$fetchState.pending">
    <client-only>
    <MainLoading/>
    </client-only>
  </div>
  <div v-else-if="$fetchState.error">are you error or intrnal serve error</div>
  <div v-else class="max-w-7xl mx-auto py-6 px-4 lg:px-8">
    <main class="flex-1 relative overflow-y-auto focus:outline-none">
  <div  class="max-w-7xl mx-auto">
    <div class="pb-6 flex justify-between sm:px-0">
      <client-only>
      <breadcrumbs :items="items" />
      </client-only>
    </div>
    <div class="md:hidden mb-6 grid grid-cols-1">
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
        <!--          <slideout-panel />-->
      </div>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <!-- Vertical menu for mobile and desktop -->
      <div class="lg:block hidden">
        <client-only>
        <sidebar :name="'news'" />
        </client-only>
      </div>
      <div class="lg:col-span-3 col-span-4">

        <min-loading v-if="loading"/>
        <main v-else class="flex-1 relative focus:outline-none">
          <client-only>
                      <news />
          </client-only>
        </main>
        <client-only>
            <pagination
              v-if="$store.state.news.newsPag >=1"
              :current-page="$route.query.page ? parseInt($route.query.page): 1"
              :page-count="$store.state.news.newsPag"
              @callback="pageChanged($event)"
            />
        </client-only>
      </div>
    </div>
  </div>
    </main>
  </div>
</div>
  </template>

  <script>
    import News from '~/components/news/news.vue'
    import mobileCategory from "@/components/mobile-menu/MoblieMenu";
    export default {
      // auth: false,
      components: {
        News
      },
      data () {
        return {
          // news,
          loading: false,
          items: [
            { text: 'text.lastNews', link: '/news', disabled: true }
          ],
          categories: []
        }
      },
      watch: {
        '$route.query.category_id': function (val) {
          this.loading = true;
          this.fetNews()
        },
        '$route.query.page': function (value) {
          this.fetNews()
        }
      },
    async fetch () {
       await this.fetchNewsCategories()
      await this.fetNews()
      },
      methods: {
       async fetchNewsCategories () {
        try {
          await  this.$store.dispatch('news/get_news_category', {
            populate: '*',
            locale: this.$i18n.locale,
            pagination: {
              page: 1,
              pageSize: 10
            },
            sort: {
              createdAt:'DESC'
            },

          })
            .then(res=> {
              const _data = res.data.map((el)=> {
                return {
                  ...el,
                  id: el.locale === 'en' ? el.id : this.$tools.checkLocalizations(el.localizations).id
                }
              })
              this.$store.dispatch('sidebar/setSidebar', _data)
            })
        } catch (err) {
          console.log(err)
        }
        },
        async fetNews () {
         const _filter = {
           category: this.$route.query.category_id,
             title: {
               $ne: 'None'
             }

         }
         if(!this.$route.query.category_id || this.$route.query.category_id === 'all') delete _filter.category;
         try {
           await this.$store.dispatch('news/get_news_list',
             {
               populate: '*',
               locale: this.$i18n.locale,
               pagination: {
                 page: this.$route.query.page ?? 1,
                 pageSize: 12,
               },
               filters: _filter
             })
         }catch (err) {
           console.log(err)
         }
         finally {
           this.loading = false
         }
        },
        pageChanged (evemt) {
          this.$router.push({
            path: this.localePath(this.$route.query.path),
            query: {
              ...this.$route.query,
              page: evemt
            }
          })
        },
        openCategories () {
          this.$showPanel({
            component: mobileCategory,
            openOn: 'right',
            props: {
              name: 'news'
            },
            width: (window.innerWidth * 3) / 4
          })
        }
      }
    }
  </script>

<style scoped>

</style>
