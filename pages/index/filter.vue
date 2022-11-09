<template>
  <div><h1>dfsdfsdf</h1></div>
<!--  <div class="max-w-7xl mx-auto py-6 px-4 lg:px-8">-->
<!--    <main class="flex-1 relative overflow-y-auto focus:outline-none">-->
<!--      <div v-if="data.trading.length > 0" class="mt-3 mb-2">-->
<!--        <router-link-->
<!--          :to="localePath('/trading')"-->
<!--          class="md:flex hidden text-gray-600 font-medium text-2xl"-->
<!--        >-->
<!--          {{ $t("text.tradingFloor") }}-->
<!--        </router-link>-->
<!--        <div id="trading">-->
<!--          <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">-->
<!--            <div v-for="(product, index) in data.trading" :key="index">-->
<!--              <div-->
<!--                v-if="product.title !== 'None'"-->
<!--                class="col-span-3 flex gap-4 h-auto w-full cursor-pointer"-->
<!--              >-->
<!--                <div-->
<!--                  class="gap-x-2 bg-white rounded-md hover:shadow-lg border shadow-md w-full"-->
<!--                >-->
<!--                  <div class="relative overflow-hidden">-->
<!--                    <nuxt-link-->
<!--                      :to="{-->
<!--                        path: localePath(`/trading/${product.id}`),-->
<!--                        query: { id: product.id },-->
<!--                      }"-->
<!--                    >-->
<!--                      &lt;!&ndash;  &ndash;&gt;-->
<!--                      <img-->
<!--                        v-if="product.mainimage || product.thumbnail"-->
<!--                        :src="-->
<!--                          $tools.getFileUrl(-->
<!--                            product.thumbnail-->
<!--                              ? product.thumbnail-->
<!--                              : product.mainimage-->
<!--                          )-->
<!--                        "-->
<!--                        class="w-full md:h-60 h-44 object-cover rounded-md rounded-b-none"-->
<!--                      />-->
<!--                      <img-->
<!--                        v-else-if="product.gallery"-->
<!--                        :src="$tools.getFileUrl(product.gallery[0])"-->
<!--                        class="w-full md:h-60 h-44 object-cover rounded-md rounded-b-none"-->
<!--                      />-->
<!--                      <img-->
<!--                        v-else-->
<!--                        class="w-full md:h-60 h-44 object-cover rounded-md rounded-b-none"-->
<!--                        src="https://www.pinupacc.com/images/dummy.png"-->
<!--                      />-->
<!--                    </nuxt-link>-->
<!--                    <div-->
<!--                      v-if="product.typename"-->
<!--                      class="absolute bottom-3 left-3"-->
<!--                    >-->
<!--                      <p-->
<!--                        v-if="product.type === '1'"-->
<!--                        class="text-green-800 bg-green-50 text-sm px-2 py-1 text-center rounded-xl w-auto"-->
<!--                      >-->
<!--                        {{ product.typename }}-->
<!--                      </p>-->
<!--                      <p-->
<!--                        v-else-->
<!--                        class="text-light-orange bg-orange-50 w-auto rounded-xl px-2 font-semibold text-base text-right"-->
<!--                      >-->
<!--                        {{ product.typename }}-->
<!--                      </p>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="p-3">-->
<!--                    <h3-->
<!--                      class="text-gray-600 font-medium line-clamp-1 text-base"-->
<!--                    >-->
<!--                      {{ product.title }}-->
<!--                    </h3>-->
<!--                    &lt;!&ndash; <p class="text-sm my-2 text-green-600">-->
<!--                    {{ product.position }}-->
<!--                </p> &ndash;&gt;-->

<!--                    <div class="flex items-center font-medium mt-3">-->
<!--                      <p-->
<!--                        v-if="product.pricetype === 'contract'"-->
<!--                        class="text-green-800 text-lg font-medium text-center rounded-xl w-auto"-->
<!--                      >-->
<!--                        {{ $t("text.byAgreement") }}-->
<!--                      </p>-->
<!--                      <p-->
<!--                        v-else-if="product.type === '1'"-->
<!--                        class="text-green-600 w-auto rounded-xl font-semibold text-lg"-->
<!--                      >-->
<!--                        {{ product.price }}-->
<!--                      </p>-->
<!--                      <p-->
<!--                        v-else-->
<!--                        class="text-light-orange w-auto rounded-xl font-semibold text-lg"-->
<!--                      >-->
<!--                        {{ product.price }}-->
<!--                      </p>-->
<!--                      <div-->
<!--                        v-if="product.pricetype !== 'contract' && product.unit"-->
<!--                        class="text-gray-500 lowercase ml-2 text-base"-->
<!--                      >-->
<!--                        {{ $t("word.sum") }} /-->
<!--                        {{ product.unit.namejson }}-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="flex items-end justify-between mt-4">-->
<!--                      <div-->
<!--                        v-if="product.userid"-->
<!--                        class="flex items-center gap-4"-->
<!--                      >-->
<!--                        <div-->
<!--                          v-if="!product.userid.avatar"-->
<!--                          class="w-10 h-10 object-cover overflow-hidden rounded-full"-->
<!--                        >-->
<!--                          <img-->
<!--                            src="https://silkozari.com/web/images/miscellaneous/avatar.jpg"-->
<!--                            alt="Avatar"-->
<!--                          />-->
<!--                        </div>-->
<!--                        <div-->
<!--                          v-else-->
<!--                          class="w-12 h-12 object-cover overflow-hidden rounded-full"-->
<!--                        >-->
<!--                          <img-->
<!--                            :src="$tools.getFileUrl(product.userid.avatar)"-->
<!--                            alt="Avatar"-->
<!--                          />-->
<!--                        </div>-->
<!--                        <div>-->
<!--                          <h4-->
<!--                            class="text-base text-gray-600 font-normal line-clamp-1"-->
<!--                          >-->
<!--                            {{-->
<!--                              `${-->
<!--                                product.userid.name ? product.userid.name : ""-->
<!--                              } ${-->
<!--                                product.userid.surname-->
<!--                                  ? product.userid.surname-->
<!--                                  : ""-->
<!--                              }`-->
<!--                            }}-->
<!--                          </h4>-->
<!--                          <span class="text-xs text-gray-400 font-normal">{{-->
<!--                              $tools.getDate(product.created_at)-->
<!--                            }}</span>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <div class="flex items-center gap-2">-->
<!--                        <svg-->
<!--                          xmlns="http://www.w3.org/2000/svg"-->
<!--                          width="12"-->
<!--                          height="12"-->
<!--                          fill="none"-->
<!--                          viewBox="0 0 12 12"-->
<!--                        >-->
<!--                          <path-->
<!--                            stroke="#9CA3AF"-->
<!--                            stroke-linecap="round"-->
<!--                            stroke-linejoin="round"-->
<!--                            d="M7.5 6c0 .828-.672 1.5-1.5 1.5-.829 0-1.5-.672-1.5-1.5S5.17 4.5 6 4.5c.828 0 1.5.672 1.5 1.5z"-->
<!--                          />-->
<!--                          <path-->
<!--                            stroke="#9CA3AF"-->
<!--                            stroke-linecap="round"-->
<!--                            stroke-linejoin="round"-->
<!--                            d="M1.229 6C1.866 3.971 3.761 2.5 6 2.5s4.134 1.471 4.771 3.5c-.637 2.029-2.532 3.5-4.77 3.5-2.24 0-4.135-1.471-4.772-3.5z"-->
<!--                          />-->
<!--                        </svg>-->
<!--                        <span class="text-xs text-gray-500">{{-->
<!--                            product.seen-->
<!--                          }}</span>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div v-if="data.news.length > 0" class="mt-5 mb-2">-->
<!--        <router-link-->
<!--          :to="localePath('/news')"-->
<!--          class="md:flex hidden text-gray-600 font-medium text-2xl"-->
<!--        >-->
<!--          {{ $t("text.lastNews") }}-->
<!--        </router-link>-->
<!--        <div id="news">-->
<!--          <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">-->
<!--            <div v-for="(info, index) in data.news" :key="index">-->
<!--              <nuxt-link-->
<!--                v-if="info.title !== 'None'"-->
<!--                :to="{-->
<!--                  path: localePath(`/news/${info.id}`),-->
<!--                  query: { id: info.id },-->
<!--                }"-->
<!--              >-->
<!--                <div class="col-span-3 bg-white flex">-->
<!--                  <div-->
<!--                    class="rounded-md border hover:shadow-lg shadow-md w-full"-->
<!--                  >-->
<!--                    <div class="relative">-->
<!--                      <div class="">-->
<!--                        <img-->
<!--                          v-if="!info.mainphoto || !info.thumbnail"-->
<!--                          class="w-full h-60 object-cover rounded-md rounded-b-none"-->
<!--                          src="https://www.pinupacc.com/images/dummy.png"-->
<!--                        />-->
<!--                        <img-->
<!--                          v-else-->
<!--                          class="w-full h-60 object-cover rounded-md rounded-b-none"-->
<!--                          :src="-->
<!--                            $tools.getFileUrl(-->
<!--                              info.thumbnail ? info.thumbnail : info.mainphoto-->
<!--                            )-->
<!--                          "-->
<!--                        />-->
<!--                      </div>-->
<!--                      <div-->
<!--                        class="absolute flex text-xs text-light-orange bg-orange-50 bottom-2 p-1 justify-center right-3 rounded-md"-->
<!--                      >-->
<!--                        <time datetime="2020-03-10">-->
<!--                          {{ $tools.getDate(info.created_at) }}-->
<!--                        </time>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="p-2">-->
<!--                      <h3-->
<!--                        class="text-gray-600 line-clamp-1 font-medium text-sm"-->
<!--                      >-->
<!--                        {{ info.title }}-->
<!--                      </h3>-->
<!--                      <p-->
<!--                        v-if="info.category"-->
<!--                        class="text-xs pt-2 line-clamp-2 text-green-500"-->
<!--                      >-->
<!--                        {{ info.category.title }}-->
<!--                      </p>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </nuxt-link>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div v-if="data.useful.length > 0" class="mt-5 mb-2">-->
<!--        <router-link-->
<!--          :to="localePath('/usefulInformation')"-->
<!--          class="md:flex hidden text-gray-600 font-medium text-2xl"-->
<!--        >-->
<!--          {{ $t("text.usefulInformation") }}-->
<!--        </router-link>-->
<!--        <div id="useful">-->
<!--          <div class="grid md:grid-cols-3 grid-cols-1 gap-4">-->
<!--            <div v-for="(info, index) in data.useful" :key="index">-->
<!--              <div-->
<!--                v-if="info.title !== 'None'"-->
<!--                class="col-span-3 h-auto p-2 bg-white rounded-md hover:shadow-lg shadow-md border"-->
<!--              >-->
<!--                <router-link-->
<!--                  :to="{-->
<!--                    path: localePath(`/usefulInformation/${info.id}`),-->
<!--                    query: { id: info.id },-->
<!--                  }"-->
<!--                >-->
<!--                  <div class="grid grid-cols-3">-->
<!--                    <div class="">-->
<!--                      <img-->
<!--                        v-if="info.mainphoto || info.thumbnail"-->
<!--                        :src="-->
<!--                          $tools.getFileUrl(-->
<!--                            info.thumbnail ? info.thumbnail : info.mainphoto-->
<!--                          )-->
<!--                        "-->
<!--                        class="w-40 h-28 object-cover shadow-lg rounded-md"-->
<!--                      />-->
<!--                      &lt;!&ndash; <img v-else-if="info.gallery.length > 0" :src="$tools.getFileUrl(info.gallery[0].url)" class="w-40 h-28 object-cover shadow-lg rounded-md"> &ndash;&gt;-->
<!--                      <img-->
<!--                        v-else-->
<!--                        class="w-40 h-28 object-cover shadow-lg rounded-md"-->
<!--                        src="https://www.pinupacc.com/images/dummy.png"-->
<!--                      />-->
<!--                    </div>-->
<!--                    <div class="col-span-2 px-3">-->
<!--                      <h3-->
<!--                        class="text-gray-600 line-clamp-2 font-medium text-sm"-->
<!--                      >-->
<!--                        {{ info.title }}-->
<!--                      </h3>-->
<!--                      <div-->
<!--                        v-if="info.consultantid !== null"-->
<!--                        class="mt-4 flex items-center"-->
<!--                      >-->
<!--                        <div class="flex-shrink-0">-->
<!--                          <img-->
<!--                            v-if="info.consultantid.avatar === null"-->
<!--                            src="https://silkozari.com/web/images/miscellaneous/avatar.jpg"-->
<!--                            class="h-10 w-10 rounded-full"-->
<!--                          />-->
<!--                          <img-->
<!--                            v-else-->
<!--                            class="h-10 w-10 object-cover rounded-full"-->
<!--                            :src="$tools.getFileUrl(info.consultantid.avatar)"-->
<!--                          />-->
<!--                        </div>-->
<!--                        <div class="ml-3">-->
<!--                          <p-->
<!--                            v-if="info.consultantid !== null"-->
<!--                            class="text-sm text-gray-600"-->
<!--                          >-->
<!--                            {{-->
<!--                              `${-->
<!--                                info.consultantid.name-->
<!--                                  ? info.consultantid.name-->
<!--                                  : ""-->
<!--                              } ${-->
<!--                                info.consultantid.surname-->
<!--                                  ? info.consultantid.surname-->
<!--                                  : ""-->
<!--                              }`-->
<!--                            }}-->
<!--                          </p>-->
<!--                          <div class="flex space-x-1 text-xs text-gray-500">-->
<!--                            <time datetime="2020-03-16">-->
<!--                              {{ $tools.getDate(info.created_at) }}-->
<!--                            </time>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <p-->
<!--                        v-if="info.categoryid"-->
<!--                        class="text-green-500 line-clamp-1 text-xs pt-1"-->
<!--                      >-->
<!--                        {{ info.categoryid.title }}-->
<!--                      </p>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </router-link>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </main>-->
<!--  </div>-->
</template>
<script>
export default {
  auth: false,
  data() {
    return {
      query: {
        type: "all",
        filter: "",
      },
      data: {
        trading: [],
        useful: [],
        news: [],
      },
    };
  },
  watch: {
    "$route.query.filter"() {
      this.fetchDataFromQuery(this.$route.query);
    },
    "$route.query.type"() {
      this.fetchDataFromQuery(this.$route.query);
    },
  },
  mounted() {
    if (!this.$route.query.filter || !this.$route.query.type) {
      this.$route.push(this.localePath("/"));
    }
    this.fetchDataFromQuery(this.$route.query);
  },
  methods: {
    async fetchDataFromQuery(query) {
      if (query.filter && query.filter.length > 0) {
        await this.$store
          .dispatch("crud/search/getSearch", {
            type: query.type,
            query: {
              title_contains: query.filter,
            },
          })
          .then((res) => {
            this.data = {
              useful: [],
              news: [],
              trading: []
            }
            if (query.type !== "all") {
              if (query.type === "useful") {
                this.data.useful = [...res];
              } else if (query.type === "trading") {
                this.data.trading = [...res];
              } else if (query.type === "news") {
                this.data.news = [...res];
              }
            } else {
              this.data = { ...res[0] };
            }
            // console.log("Filter: ", this.data);
          });
      }
    },
  },
};
</script>
