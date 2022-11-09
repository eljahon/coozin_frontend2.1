<template>
  <div>
    <div v-if="$fetchState.pending"><MainLoading /></div>
    <div v-else-if="$fetchState.error">
      are you error or intrnal serve error
    </div>
    <div v-else class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 lg:py-6 py-0 sm:px-0">
        <div class="grid grid-cols-3 gap-4">
          <div class="lg:col-span-2 col-span-3">
            <!-- Consultation -->

            <div v-if="$store.state.users.userList">
              <router-link
                :to="localePath('/online-consultation')"
                class="text-2xl leading-8 font-medium text-gray-600"
              >
                {{ $t("word.consultants") }}
              </router-link>

              <div class="mt-3 mb-6 gap-3 relative col-span-2 lg:col-span-3">
                <client-only>
                  <consultantsSwiper :consultation="$store.state.users.userList" />
                </client-only>
              </div>
            </div>

            <!-- Trading floor for desktop -->


            <div
              v-if="$store.state.userFullInfo.userFullInfo.length > 0"
              :class="$store.state.users.userList.length === 0 ? 'mt-0' : 'lg:mt-3 mt-0'"
              class="col-span-3 h-auto"
            >
              <router-link
                :to="localePath('/usefulInformation')"
                class="text-gray-600 font-medium text-2xl"
              >
                {{ $t("text.usefulInformation") }}
              </router-link>
              <div class="mt-3 gap-3 relative col-span-2 lg:col-span-3">
                <client-only>
                <useful-information-swiper
                  :information="$store.state.userFullInfo.userFullInfo"
                />
                </client-only>
              </div>
            </div>

            <!-- Trading floor for mobile -->
            <div
              v-if="$store.state.trading.tradingPosts.length"
              :class="$store.state.users.userList === 0 ? 'mt-0' : 'lg:mt-8 mt-0'"
              class="block md:hidden col-span-1 h-auto"
            >
              <router-link
                :to="localePath('/trading')"
                class="text-gray-600 font-medium text-2xl"
              >
                {{ $t("text.tradingFloor") }}
              </router-link>
              <div class="mt-3 mb-6 gap-3 relative col-span-2 lg:col-span-3">
                <tradingSwiper :products="$store.state.trading.tradingPosts" />
              </div>
            </div>
          </div>

          <!-- News for Desktop -->
          <div>
            <div class="lg:col-span-1 lg:grid hidden">
              <router-link
                :to="localePath('/news')"
                class="text-gray-600 font-medium text-2xl"
              >
                {{ $t("word.news") }}
              </router-link>
              <!--              <img class="relative w-full object-cover rounded-md rounded-b-none mt-3"-->
              <!--                   src="../../assets/images/banner-2.jpg" alt="Banner image">-->
              <div v-if="$store.state.news.newsList.length" class="block mt-3">
                <nuxt-link
                  :to="{
                    path: localePath(
                      `/news/${$store.state.news.newsList[0].id}`
                    ),
                    query: { id: $store.state.news.newsList[0].id },
                  }"
                >
                  <div class="relative cursor-pointer">
                    <div class="">
                      <!--                    <img-->
                      <!--                      :src="-->
                      <!--                        news.length > 0 && news-->
                      <!--                          ? $tools.getFileUrl(-->
                      <!--                              news[0].thumbnail-->
                      <!--                                ? news[0].thumbnail-->
                      <!--                                : news[0].mainphoto-->
                      <!--                            )-->
                      <!--                          : 'https://www.pinupacc.com/images/dummy.png'-->
                      <!--                      "-->
                      <!--                      class="relative w-full xl:h-56 lg:h-36 object-cover rounded-md rounded-b-none"-->
                      <!--                    />-->
                      <!--                    <img class="relative w-full object-cover rounded-md rounded-b-none" src="../../assets/images/banner-2.jpg" alt="Banner image">-->
                    </div>
                    <div
                      class="absolute flex text-xs text-light-orange bg-orange-50 bottom-2 p-1 w-32 justify-center right-2 rounded-md"
                    >
                      <!--                    {{ $tools.getDate(news[0].created_at) }}-->
                    </div>
                  </div>
                </nuxt-link>
                <div
                  v-if="$store.state.news.newsList.length > 1"
                  class="items-center"
                >
                  <div
                    v-for="(item, index) in $store.state.news.newsList"
                    :key="index"
                    class="flex lg:space-y-1 xl:space-y-2 border border-transparent bg-white rounded-md shadow-sm hover:shadow-md mt-2.5 p-2"
                  >
                    <nuxt-link
                      :to="{
                        path: localePath(`/news/${item.id}`),
                        query: { id: item.id, category_id: item.category.id },
                      }"
                      class="grid lg:grid-cols-4 md:grid-cols-6 grid-cols-4 md:gap-4 gap-8"
                    >
                      <div class="w-20 h-20">
                        <img
                          class="w-20 h-20 object-cover rounded-md"
                          :src="
                            $tools.getFileUrl(
                              item.thumbnail ? item.thumbnail : item.mainphoto
                            )
                          "
                        />
                      </div>

                      <div
                        class="lg:col-span-3 md:col-span-5 col-span-3 flex flex-col content-start"
                      >
                        <p
                          class="text-xs font-medium text-gray-600 line-clamp-2 content-center"
                        >
                          {{ item.title }}
                        </p>

                        <div
                          class="flex text-xs mt-6 text-light-orange bg-orange-50 p-1 w-32 justify-center rounded-md"
                        >
                          <time datetime="2020-03-10">
                            {{ $dayjs(item.createdAt).format("DD.MM.YYYY") }}
                          </time>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- News for Mobile -->

          <div
            v-if="$store.state.news.newsList.length > 0"
            :class="$store.state.users.userList === 0 ? 'mt-0' : 'lg:mt-8 mt-0'"
            class="block lg:hidden col-span-3 h-auto"
          >
            <p class="text-gray-600 font-medium text-2xl">
              {{ $t("word.news") }}
            </p>
            <div class="mt-3 mb-6 gap-3 relative col-span-2 lg:col-span-3">
              <client-only>
                <newsSwiper :news="$store.state.news.newsList" />
              </client-only>
            </div>
          </div>

          <!--                   Prices for desktop -->
          <div
            v-if="prices.length > 0"
            :class="$store.state.users.userList=== 0 ? 'mt-0' : 'lg:mt-3 mt-0'"
            class="md:block hidden col-span-3 h-auto"
          >
            <router-link
              :to="localePath('/prices')"
              class="text-gray-600 font-medium text-2xl"
            >
              {{ $t("text.prices") }}
            </router-link>
            <div class="pt-3 gap-3 relative">
              <client-only>
                <prices-swiper :prices="prices" />
              </client-only>
            </div>
          </div>
          <!-- Useful Information -->

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import newsSwiper from "~/components/swiper/newsSwiper";
import pricesSwiper from "~/components/swiper/pricesSwiper";
import consultantsSwiper from "~/components/swiper/consultantsSwiper";
import tradingSwiper from "~/components/swiper/tradingSwiper";
import userFullInfoSwiper from "~/components/swiper/usefulInformationSwiper";
export default {
  components: {
    newsSwiper,
    pricesSwiper,
    consultantsSwiper,
    tradingSwiper,
    "useful-information-swiper": userFullInfoSwiper,
  },
  data() {
    return {
      information: [],
      consultation: [],
      prices: [],
      products: [],
    };
  },
  async fetch() {
    await this.fetchNews();
    // await this.fetchTradingposts();
    await this.fetchPricelists();
    await this.fetchConsultation();
    await this.fetchUserFullInfo();
  },
  methods: {
    async fetchNews() {
      await this.$store.dispatch("news/get_news_list", {
        populate: "*",
        locale: this.$i18n.locale,
        pagination: {
          page: 1,
          pageSize: 5,
        },
        sort: {
          createdAt: "DESC",
        },
      });
    },
    // async fetchTradingposts() {
    //   await this.$store.dispatch("trading/get_trading_posts_list", {
    //     populate: "*",
    //     locale: this.$i18n.locale,
    //     pagination: {
    //       page: 1,
    //       pageSize: 4,
    //     },
    //     sort: {
    //       createdAt: "DESC",
    //     },
    //   });
    // },
    async fetchConsultation() {
      await this.$store
        .dispatch("users/get_users", {
          populate:
            "userinfo, userinfo.localizations, userinfo.consultation_category, userinfo.consultation_category.localizations",
          locale: this.$i18n.locale,
          start: 0,
          limit: 5,
          sort: {
            createdAt: "DESC",
          },
          filters: {
            role: {
              id: 3,
            },
            blocked: false
          },
        })
        .then((res) => {
        });
    },
    async fetchPricelists() {
      await this.$axios
        .get("pricelists", {
          params: {
            populate: "*",
            locale: this.$i18n.locale,
          },
        })
        .then((res) => {
          // console.log('===>>>pricelists', res)
        });
    },
    async fetchUserFullInfo() {
      await this.$store.dispatch("userFullInfo/get_user_full_infor", {
        populate: "*",
        locale: this.$i18n.locale,
        sort: {
          createdAt: "DESC",
        },
        pagination: {
          page: 1,
          pageSize: 5,
        },
      });
    },
  },
};
</script>
