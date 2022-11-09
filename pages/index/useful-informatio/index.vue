<template>
  <div>
    <div v-if="$fetchState.pending">
      <client-only>
      <MainLoading/>
      </client-only>
    </div>
    <div v-else-if="$fetchState.error"></div>
    <div class="max-w-7xl mx-auto py-6 px-4 lg:px-8">
      <main class="flex-1 relative overflow-y-auto focus:outline-none">
        <div class="max-w-7xl mx-auto">
          <div class="pb-6 flex justify-between sm:px-0">
            <client-only>
            <breadcrumbs :items="items"/>
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
              <client-only>
                <slideout-panel/>
              </client-only>
            </div>
          </div>
          <div class="grid grid-cols-4 gap-4">
            <!-- Vertical menu for mobile and desktop -->
            <div class="lg:block hidden">
              <sidebar :name="'usefulInformation'"/>
            </div>
            <div class="lg:col-span-3 col-span-4">
              <main class="flex-1 relative overflow-y-auto focus:outline-none">
                <min-loading v-if="loading"/>
                <div v-else>
                  <client-only>
                    <useful-information/>
                  </client-only>
                </div>
                <client-only>
                <pagination
                  v-if="$store.state.userFullInfo.userFullInfoPag >= 1"
                  :current-page=" $route.query.page ? parseInt($route.query.page) : 1"
                  :page-count="$store.state.userFullInfo.userFullInfoPag"
                  @callback="pageChanged($event)"
                />
                </client-only>
              </main>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import UsefulInformation from '~/components/usefulInformation/usefulInformation.vue'
import mobileCategory from '~/components/mobile-menu/MoblieMenu'
export default {
  auth: false,
  components: {UsefulInformation},
  data() {
    return {
      loading: false,
      showMenuInMobile: false,
      locale: this.$i18n.locale,
      items: [
        {text: 'text.usefulInformation', link: '/usefulInformation', disabled: false}
      ],
      categories: []
    }
  },
  watch: {
    '$route.query.category_id': function (val) {
      this.loading = true
      this.fetchUsefulInformation()
    },
    '$route.query.page': function (val) {
      this.fetchUsefulInformation()
    }
  },
  async fetch() {
    await this.fetchUsefulInformation()
    await this.fetch_Consultation_Categories()
  },
  methods: {
    pageChanged (offset) {
      this.$router.push({
        path: this.localePath(this.$route.query.path),
        query: {
          ...this.$route.query,
          page: offset
        }
      })
    },
    async fetch_Consultation_Categories() {
      await this.$store.dispatch('consultations/get_consultation_categories', {
        populate: "*",
        locale: this.$i18n.locale,
      })
        .then(res => {
          const _data = res.data.map((el) => {
            return {
              ...el,
              ...this.$tools.checkLocalizations(el.localizations, this.$i18n.locale),
              id: el.locale === 'en' ? el.id : this.$tools.checkLocalizations(el.localizations).id
            }
          })
          this.$store.dispatch('sidebar/setSidebar', _data)
        })
    },
    async fetchUsefulInformation() {
      const _params = {
        populate: "localizations,consultant, consultant.userinfo,consultation_category",
        locale: this.$i18n.locale,
        pagination: {
          page: this.$route.query.page ?? 1,
          pageSize: 12,
        },
        filters: {
          title: {
            $ne: 'None'
          },
          consultation_category: {
            id: {
              $eq: this.$route.query.category_id
            }
          }
        }
      }
      if (!this.$route.query.category_id) delete _params.filters.consultant;
      await this.$store
        .dispatch('userFullInfo/get_user_full_infor', {..._params})
        .finally(() => {
          this.loading = false
        })
    },
    openCategories() {
      this.$showPanel({
        component: mobileCategory,
        openOn: 'right',
        props: {
          name: 'usefulInformation'
        },
        width: (window.innerWidth * 3) / 4
      })
    }
  }
}
</script>
