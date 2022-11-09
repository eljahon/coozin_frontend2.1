<template>
  <div>
    <div v-if="$fetchState.pending">
      <client-only>
      <MainLoading />
      </client-only>
    </div>
    <div v-else-if="$fetchState.error">
      are you error or intrnal serve error
    </div>
    <div v-else class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div
        class="px-4 lg:py-6 pb-6 md:flex block space-y-3 justify-between gap-6 sm:px-0"
      >
        <client-only>
          <breadcrumbs :items="items" />
        </client-only>
        <!-- <div class="md:flex hidden justify-end">
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
                bg-light-orange
                focus:outline-none
              "
            @click="newConsultation()"
          >
            {{ $t('text.newConsultation') }} <span class="ml-2">+</span>
          </button>
        </div> -->
        <div class="md:hidden grid grid-cols-1 gap-2">
          <button
            class="text-light-orange py-2 bg-white col-span-6 font-medium shadow-sm rounded-md"
          >
            {{ $t("word.myConsultation") }}
          </button>
          <!-- <button class="bg-light-orange text-3xl w-11 h-11 flex justify-center text-white rounded-md">
            +
          </button> -->
        </div>
        <div class="md:hidden gap-4 grid grid-cols-2 mt-4">
          <div>
            <button
              class="border flex items-center py-2 w-full justify-center rounded-md bg-gray-100 font-medium text-gray-700 border-transparent"
              @click="openCategories()"
            >
              {{ $t("text.allSections") }}
            </button>
            <!--          <slideout-panel />-->
          </div>
        </div>
      </div>

      <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4">
        <div class="lg:block hidden">
          <client-only>
          <sidebar :name="'online-consultation'" />
        </client-only>
        </div>
        <div class="xl:col-span-3 col-span-2">
          <div v-if="loading">
            <client-only>
              <min-loading />
            </client-only>
          </div>
          <main v-else class="flex-1 relative focus:outline-none">
            <client-only>
              <online-consultation />
            </client-only>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import NewConsultation from '~/modals/new-consultation.vue'
import OnlineConsultation from "~/components/onlineConslutants/online-consultation.vue";
import mobileCategory from '~/components/mobile-menu/MoblieMenu'
export default {
  auth: false,
  components: {
    OnlineConsultation,
  },
  data() {
    return {
      showMenuInMobile: false,
      loading: false,
      items: [
        {
          text: "text.onlineConsultation",
          link: "/online-consultation",
          disabled: false,
        },
      ],
    };
  },
  watch: {
    '$route.query.category_id': function (value) {
      this.fetchConsultation();
    },
  },
  async fetch() {
    await this.fetchConsultation();
    await this.fetchConsultandCategoriy();
  },
  methods: {
    async fetchConsultation() {
      this.loading = true;
      const _filters = {
        role: {
          id: 3,
        },
        userinfo: {
          consultation_category: this.$route.query.category_id,

        },
        blocked: false
      };
      if (
        !this.$route.query.category_id ||
        this.$route.query.category_id === "all"
      )
        delete _filters.userinfo;
      await this.$store
        .dispatch("users/get_users", {
          populate:
            "userinfo," +
            "userinfo.localizations," +
            "userinfo.consultation_category," +
            " userinfo.consultation_category.localizations",
          locale: this.$i18n.locale,
          start: 0,
          limit: 15,
          sort: {
            createdAt: "DESC",
          },
          filters: _filters,
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async fetchConsultandCategoriy() {
      await this.$store
        .dispatch("users/get_users_categoriy", {
          populate: "*",
          locale: this.$i18n.locale,
        })
        .then((res) => {
          const _sidebar = res.map((el) => {
            return {
              ...el,
              id:
                el.locale === "en"
                  ? el.id
                  : this.$tools.checkLocalizations(el.localizations, "en").id,
            };
          });
          this.$store.dispatch("sidebar/setSidebar", _sidebar);
        });
    },
    newConsultation() {
      // this.$modal.show(
      //   NewConsultation,
      //   { status: 'new-consultation' },
      //   {
      //     height: '600',
      //     maxWidth: 400,
      //     width: window.innerWidth <= 400 ? window.innerWidth - 10 : 400,
      //     scrollable: true
      //   }
      // )
    },
    fetchConsultationCategories() {
      // this.$store.dispatch('crud/consultation/category/getCategoryConsultation').then((res) => {
      //   this.categories = res
      //   this.categories.forEach((category) => {
      //     category.current = false
      //   })
      //   this.$store.dispatch('sidebar/setSidebar', this.categories)
      // })
    },
    openCategories() {
      this.$showPanel({
        component: mobileCategory,
        openOn: 'right',
        props: {
          name: 'online-consultation'
        },
        width: (window.innerWidth * 3) / 4
      })
    },
  },
};
</script>
