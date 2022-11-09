<template>
  <div>
    <div class="grid md:grid-cols-2 grid-cols-1 mb-4">
      <div class="md:flex hidden items-center">
        <input
          v-model="query.filter"
          class="
            w-full
            pl-9
            text-base
            font-medium
            text-gray-500
            border-transparent
            bg-gray-100
            rounded-md
          "
          :placeholder="$t('word.search')"
          type="text"
          @input="searching($event.target.value)"
        />
        <div class="absolute m-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            fill="none"
            viewBox="0 0 27 24"
          >
            <path
              stroke="#6b7280"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M23.059 21l-6.334-6m2.111-5c0 3.866-3.308 7-7.388 7-4.081 0-7.39-3.134-7.39-7s3.309-7 7.39-7c4.08 0 7.388 3.134 7.388 7z"
            />
          </svg>
        </div>
      </div>
      <div class="md:flex hidden relative items-center justify-end">
        <div>
          <div
            v-if="$route.query.posttype"
            :class="
              'flex items-center rounded-md cursor-pointer py-1.5 px-2 ' +
              postTypeClass
            "
            @click="postTypeDropdown(!isPostTypeDropdown)"
            @mouseenter="postTypeDropdown(true)"
          >
            <div class="text-lg text-gray-700 mr-2">
              {{
                parseInt(query.posttype) === 1
                  ? $t("word.sell")
                  : $t("word.buy")
              }}
            </div>
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.833 13.333v-10m0 0L2.5 6.666m3.333-3.333 3.334 3.333m5 0v10m0 0 3.333-3.333m-3.333 3.333-3.334-3.333"
                stroke="#374151"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
            v-show="isPostTypeDropdown"
            class="
              z-20
              absolute
              top-12
              right-10
              p-4
              w-40
              text-lg
              rounded-md
              shadow-md
              py-1
              text-gray-700
              bg-white
              ring-1 ring-black ring-opacity-5
              focus:outline-none
            "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabindex="-1"
            @mouseenter="postTypeDropdown(true)"
            @mouseleave="postTypeDropdown(false)"
          >
            <div
              v-for="(type, index) in tradingType"
              :key="index"
              class="col-span-1 flex py-2"
              @click="onFilterSubmit"
            >
              <input
                :id="`posttype-${type.id}`"
                v-model="query.posttype"
                name="postype"
                :value="type.id"
                class="
                  focus:ring-green-500
                  h-4
                  w-4
                  text-green-600
                  border-gray-300
                "
                type="radio"
              />
              <label
                :for="`posttype-${type.id}`"
                class="transform -translate-y-1 ml-1"
              >
                <div class="font-medium text-gray-700 col-span-1 text-base">
                  {{ type.name }}
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="ml-3">
          <button
            aria-expanded="false"
            aria-haspopup="true"
            class="
              bg-gray-100
              hover:bg-gray-200
              rounded-md
              w-10
              h-10
              focus:outline-none
            "
            @click="openFilter(!isFilterOpened)"
            @mouseenter="openFilter(true)"
          >
            <div class="text-lg">
              <i class="flex justify-center items-center bx bx-slider-alt" />
            </div>
          </button>
        </div>
        <div
          v-show="isFilterOpened"
          class="
            z-20
            absolute
            top-12
            p-4
            w-80
            rounded-md
            shadow-lg
            border
            py-1
            bg-white
            ring-1 ring-black ring-opacity-5
            focus:outline-none
          "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabindex="-1"
          @mouseenter="openFilter(true)"
          @mouseleave="openFilter(false)"
        >
          <ValidationObserver v-slot="{ handleSubmit }" slim>
            <form
              class="space-y-4"
              novalidate
              @submit.prevent="handleSubmit(onFilterSubmit)"
            >
              <div class="text-gray-600 font-semibold text-xl">
                {{ $t("word.filter") }}
              </div>
              <div class="text-gray-700 text-sm font-medium">
                {{ $t("text.adType") }}
              </div>
              <div
                v-for="(type, index) in tradingType"
                :key="index"
                class="col-span-1 flex"
              >
                <input
                  :id="`tradingtype-${type.id}`"
                  v-model="query.posttype"
                  name="postype"
                  :value="type.id"
                  class="
                    focus:ring-green-500
                    h-4
                    w-4
                    text-green-600
                    border-gray-300
                  "
                  type="radio"
                />
                <label
                  :for="`tradingtype-${type.id}`"
                  class="transform -translate-y-1 ml-1"
                >
                  <div
                    class="font-medium text-gray-700 col-span-1 text-sm ml-1"
                  >
                    {{ type.name}}
                  </div>
                </label>
              </div>
              <div class="text-gray-700 text-sm font-medium pb-3">
                {{ $t("word.category") }}
              </div>
              <select
                v-model="category"
                class="
                  form-select
                  text-sm
                  w-full
                  border
                  text-gray-900
                  py-2
                  mb-1
                  rounded-md
                  focus:outline-none focus:border-gray-300
                  transition-colors
                  cursor-pointer
                "
                :class="'border-gray-500'"
              >
                <option
                  v-for="(el, index) in categories"
                  :key="index"
                  class="text-sm text-gray-600 font-normal w-36"
                  :value="el"
                >
                  {{ el.title }}
                </option>
              </select>
              <select
                v-if="subcategories.length > 0"
                v-model="subcategory"
                class="
                  form-select
                  text-sm
                  w-full
                  border
                  text-gray-500
                  py-2
                  my-2
                  rounded-md
                  focus:outline-none focus:border-gray-300
                  transition-colors
                  cursor-pointer
                "
                :class="
                  errors.length > 0
                    ? 'border-red-400'
                    : category
                    ? 'border-green-600'
                    : 'border-gray-500'
                "
              >
                <option
                  v-for="(el, index) in subcategories"
                  :key="index"
                  class="text-sm text-gray-600 font-normal w-36"
                  :value="el"
                >
                  {{ el.title }}
                </option>
              </select>
              <div class="text-gray-700 text-sm font-medium">
                {{ $t("word.price") }}
              </div>
              <input
                v-model="query.price_gt"
                type="text"
                name="initial_price"
                :placeholder="$t('text.fromSum')"
                class="w-full text-sm rounded-md border-gray-300"
              />
              <input
                v-model="query.price_lte"
                type="text"
                name="final_price"
                :placeholder="$t('text.toSum')"
                class="my-3 w-full text-sm rounded-md border-gray-300"
              />
              <div class="text-gray-700 text-sm font-medium">
                {{ $t("text.deliveryParam") }}
              </div>
              <div class="block space-y-3">
                <div class="col-span-1 flex">
                  <input
                    id="hasdelivery-true"
                    v-model="query.hasdelivery"
                    name="hasdelivery-true"
                    :value="true"
                    class="
                      focus:ring-green-500
                      h-4
                      w-4
                      text-green-600
                      border-gray-300
                    "
                    type="radio"
                  />
                  <label
                    for="hasdelivery-true"
                    class="transform -translate-y-1 ml-1"
                  >
                    <div class="font-medium text-gray-700 col-span-1 text-sm">
                      {{ $t("word.delivery") }}
                    </div>
                  </label>
                </div>
                <div class="col-span-1 flex">
                  <input
                    id="hasdelivery-false"
                    v-model="query.hasdelivery"
                    name="hasdelivery-false"
                    :value="false"
                    class="
                      focus:ring-green-500
                      h-4
                      w-4
                      text-green-600
                      border-gray-300
                    "
                    type="radio"
                  />
                  <label
                    for="hasdelivery-false"
                    class="transform -translate-y-1 ml-1"
                  >
                    <div class="font-medium text-gray-700 col-span-1 text-sm">
                      {{ $t("text.pickUp") }}
                    </div>
                  </label>
                </div>
                <button
                  type="submit"
                  class="
                    text-sm text-white
                    font-medium
                    bg-green-600
                    p-2
                    my-3
                    rounded-md
                    w-full
                  "
                >
                  {{ $t("word.show") }}
                </button>
                <div
                  class="
                    text-sm text-light-orange
                    font-medium
                    bg-orange-50
                    p-2
                    mb-3
                    rounded-md
                    w-full
                    text-center
                    cursor-pointer
                  "
                  @click="onClearFilter"
                >
                  {{ $t("text.cleanFilter") }}
                </div>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
<!--    min-loading -->
    <div class="leading-3" v-if="loading"><min-loading ></min-loading></div>
    <div v-else class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
      <div v-for="(product, index) in $store.state.trading.tradingPosts" :key="index">
        <div
          v-show="product.title"
          class="col-span-3 flex gap-4 h-auto w-full cursor-pointer"
        >
          <div
            class="
              gap-x-2
              bg-white
              rounded-md
              hover:shadow-lg
              border
              shadow-md
              w-full
            "
          >
            <div class="relative overflow-hidden">
              <nuxt-link
                :to="{
                  path: localePath(`/trading/${product.id}`),
                  query: { id: product.id },
                }"
              >
                <!--  -->
                <img
                  v-if="product.mainimage || product.thumbnail"
                  :src="
                    $tools.getFileUrl(
                      product.thumbnail ? product.thumbnail : product.mainimage
                    )
                  "
                  class="
                    w-full
                    md:h-60
                    h-44
                    object-cover
                    rounded-md rounded-b-none
                  "
                />
                <img
                  v-else-if="products.gallery"
                  :src="$tools.getFileUrl(product.gallery[0])"
                  class="
                    w-full
                    md:h-60
                    h-44
                    object-cover
                    rounded-md rounded-b-none
                  "
                />
                <img
                  v-else
                  class="
                    w-full
                    md:h-60
                    h-44
                    object-cover
                    rounded-md rounded-b-none
                  "
                  src="https://www.pinupacc.com/images/dummy.png"
                />
              </nuxt-link>
              <div v-if="product.typename" class="absolute bottom-3 left-3">
                <p
                  v-if="product.type === '1'"
                  class="
                    text-green-800
                    bg-green-50
                    text-sm
                    px-2
                    py-1
                    text-center
                    rounded-xl
                    w-auto
                  "
                >
                  {{ product.typename }}
                </p>
                <p
                  v-else
                  class="
                    text-light-orange
                    bg-orange-50
                    w-auto
                    rounded-xl
                    px-2
                    font-semibold
                    text-base text-right
                  "
                >
                  {{ product.typename }}
                </p>
              </div>
            </div>
            <div class="p-3">
              <h3 class="text-gray-600 font-medium line-clamp-1 text-base">
                {{ product.title }}
              </h3>
              <!-- <p class="text-sm my-2 text-green-600">
                {{ product.position }}
              </p> -->

              <div class="flex items-center font-medium mt-3">
                <p
                  v-if="product.pricetype === 'contract'"
                  class="
                    text-green-800 text-lg
                    font-medium
                    text-center
                    rounded-xl
                    w-auto
                  "
                >
                  {{ $t("text.byAgreement") }}
                </p>
                <p
                  v-else-if="product.type === '1'"
                  class="text-green-600 w-auto rounded-xl font-semibold text-lg"
                >
                  {{ product.price }}
                </p>
                <p
                  v-else
                  class="
                    text-light-orange
                    w-auto
                    rounded-xl
                    font-semibold
                    text-lg
                  "
                >
                  {{ product.price }}
                </p>
                <div
                  v-if="product.pricetype !== 'contract' && product.unit"
                  class="text-gray-500 lowercase ml-2 text-base"
                >
                  {{ $t("word.sum") }} /
                  {{ product.unit.namejson }}
                </div>
              </div>
              <div class="flex items-end justify-between mt-4">
                <div v-if="product.userid" class="flex items-center gap-4">
                  <div
                    v-if="!product.userid.avatar"
                    class="w-10 h-10 object-cover overflow-hidden rounded-full"
                  >
                    <img
                      src="https://silkozari.com/web/images/miscellaneous/avatar.jpg"
                      alt="Avatar"
                    />
                  </div>
                  <div
                    v-else
                    class="w-12 h-12 object-cover overflow-hidden rounded-full"
                  >
                    <img
                      :src="$tools.getFileUrl(product.userid.avatar)"
                      alt="Avatar"
                    />
                  </div>
                  <div>
                    <h4
                      class="text-base text-gray-600 font-normal line-clamp-1"
                    >
                      {{
                        `${product.userid.name ? product.userid.name : ""} ${
                          product.userid.surname ? product.userid.surname : ""
                        }`
                      }}
                    </h4>
                    <span class="text-xs text-gray-400 font-normal">{{
                        $tools.getDate(product.created_at)
                      }}</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="none"
                    viewBox="0 0 12 12"
                  >
                    <path
                      stroke="#9CA3AF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.5 6c0 .828-.672 1.5-1.5 1.5-.829 0-1.5-.672-1.5-1.5S5.17 4.5 6 4.5c.828 0 1.5.672 1.5 1.5z"
                    />
                    <path
                      stroke="#9CA3AF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M1.229 6C1.866 3.971 3.761 2.5 6 2.5s4.134 1.471 4.771 3.5c-.637 2.029-2.532 3.5-4.77 3.5-2.24 0-4.135-1.471-4.772-3.5z"
                    />
                  </svg>
                  <span class="text-xs text-gray-500">{{ product.seen }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    <pagination-->
<!--      v-if="pagination.pageCount > 1"-->
<!--      :current-page="parseInt($route.query.offset)"-->
<!--      :page-count="pagination.pageCount"-->
<!--      @callback="pageChanged($event)"-->
<!--    />-->
  </div>
</template>

<script>
// import { mapGetters, mapState } from "vuex";
import debounce from "lodash.debounce";
export default {
  name: "Trading",
  // auth: false,
  // directives: {
  //   debounce,
  // },
  data() {
    return {
      query: {},
      products: [],
      isFilterOpened: false,
      isPostTypeDropdown: false,
      categories: [],
      category: {},
      subcategory: {},
      subcategories: [],
      tradingType: [],
      stateQuery: "",
      postTypeClass: "hover:bg-gray-200 bg-gray-100",
    };
  },
  computed: {
    pagination() {
      if (this.$route.query.filter) {
        return this.$store.state.crud.search.pagination;
      }
      return this.$store.state.crud.search.pagination;
    },
  },
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    search: {
      type: Function,
      required: true
    }
  },
  watch: {
    // "$route.query.offset"() {
    //   if (this.stateQuery !== "filter" && this.$route.query.offset) {
    //     this.checkQuery();
    //   }
    // },
    // "$route.query.category_id"() {
    //   if (this.stateQuery !== "filter" && this.$route.query.category_id) {
    //     this.checkQuery();
    //   }
    // },
    // "query.posttype"() {
    //   if (this.query.posttype === 1) {
    //     this.postTypeClass = "hover:bg-green-200 bg-green-100";
    //     return;
    //   }
    //   if (this.query.posttype === 2) {
    //     this.postTypeClass = "hover:bg-yellow-200 bg-yellow-100";
    //     return;
    //   }
    //   return "hover:bg-gray-200 bg-gray-100";
    // },
    // category() {
    //   if (this.category.children && this.category.children.length > 0) {
    //     this.subcategories = this.category.children;
    //   }
    // },
    // "$route.query"() {
    //   this.checkQuery();
    // },
  },
  mounted() {
    // this.query = {
    //   limit: 12,
    //   offset: 1,
    //   category: this.$route.query.category,
    //   posttype: this.$route.query.posttype ? parseInt(this.$route.query.posttype) : null,
    //   hasdelivery: null,
    //   price_lte: this.$route.query.price_lte ? parseInt(this.$route.query.price_lte) : null,
    //   price_gte: this.$route.query.price_gte ? parseInt(this.$route.query.price_gte) : null,
    //   change_from: this.$route.query.change_from,
    //   filter: this.$route.query.filter,
    // }
    // this.fetchDirectories();
    // this.checkQuery();
  },
  methods: {
    searching: debounce(function (e) {
      let _query = { ...this.$route.query };
      if (this.query.filter && this.query.filter.trim().length >= 3) {
        _query.filter = this.query.filter;
      } else {
        delete _query.filter;
      }
      this.routerPusher(
        this.$tools.emptyObject({
          limit: this.$route.query.limit,
          offset: this.$route.query.offset,
          filter: _query.filter,
        })
      );
    }, 5000),
    pageChanged(offset) {
      let _query = { ...this.$route.query };
      _query.offset = offset;
      _query.limit = _query.limit ? _query.limit : this.pagination.limit;
      this.$router.replace({
        query: _query,
      });
    },
    openFilter(bool) {
      this.isFilterOpened = bool;
    },
    postTypeDropdown(bool) {
      this.isPostTypeDropdown = bool;
    },
    onClearFilter() {
      this.query = {
        limit: 12,
        offset: 1,
        category: null,
        posttype: null,
        hasdelivery: null,
        price_lte: null,
        price_gte: null,
        change_from: null,
        filter: "",
      };
      this.routerPusher(
        this.$tools.emptyObject({
          limit: this.$route.query.limit,
          offset: this.$route.query.offset,
          category_id: "all",
        })
      );
    },
    // onFilterSubmit() {
    //   this.stateQuery = "filter";
    //   console.log(
    //     this.query,
    //     this.query.posttype,
    //     this.$tools.emptyObject({
    //       limit: this.$route.query.limit,
    //       offset: this.$route.query.offset,
    //       category_id: this.query.category_id
    //         ? this.query.category_id
    //         : this.$route.query.category_id,
    //       posttype: this.query.posttype,
    //       hasdelivery: this.query.hasdelivery,
    //       price_lte: this.query.price_lte,
    //       price_gt: this.query.price_gt,
    //     })
    //   );
    //   // this.routerPusher(
    //   //   this.$tools.emptyObject({
    //   //     limit: this.$route.query.limit,
    //   //     offset: this.$route.query.offset,
    //   //     category_id: this.query.category_id
    //   //       ? this.query.category_id
    //   //       : this.$route.query.category_id,
    //   //     posttype: this.query.posttype,
    //   //     hasdelivery: this.query.hasdelivery,
    //   //     price_lte: this.query.price_lte,
    //   //     price_gt: this.query.price_gt,
    //   //   })
    //   // );
    // },
    async routerPusher(query) {
      // this.$router.push({
      //   path: this.$route.path,
      //   query: Object.assign({}, query),
      // });
      // .catch((failure) => {
      //   this.$tools.fixDoubleRouting(failure);
      // });
    },
    // checkQuery() {
    //   if (this.$route.query.filter)
    //     this.query.filter = this.$route.query.filter;
    //   if (this.$route.query.category_id)
    //     this.query.category_id = this.$route.query.category_id;
    //   if (this.$route.query.posttype)
    //     this.query.posttype = this.$route.query.posttype;
    //   if (this.$route.query.hasdelivery)
    //     this.query.hasdelivery = this.$route.query.hasdelivery;
    //   if (this.$route.query.price_gt)
    //     this.query.price_gt = this.$route.query.price_gt;
    //   if (this.$route.query.price_lte)
    //     this.query.price_lte = this.$route.query.price_lte;
    //   let _query = {
    //     title_contains: this.$route.query.filter,
    //     "_where[0][category.id]":
    //       this.$route.query.category_id !== "all"
    //         ? this.$route.query.category_id
    //         : null,
    //     "_where[0][tradingposttype.id]": this.$route.query.posttype,
    //     "_where[0][hasdelivery]": this.$route.query.hasdelivery,
    //     "_where[0][isblocked]": false,
    //     "_where[1][price_gt]": this.$route.query.price_gt,
    //     "_where[2][price_lte]": this.$route.query.price_lte,
    //     _sort: "created_at:DESC",
    //     _limit: this.$route.query.limit
    //       ? this.$route.query.limit
    //       : this.pagination.limit,
    //     _start: this.$route.query.offset
    //       ? (parseInt(this.$route.query.offset) - 1) *
    //       parseInt(this.$route.query.limit)
    //       : (parseInt(this.pagination.page) - 1) *
    //       parseInt(this.pagination.limit),
    //   };
    //   this.fetchData(_query);
    // },
    // async fetchData(query) {
    //   await this.$store
    //     .dispatch("crud/search/getSearch", {
    //       type: "trading",
    //       query,
    //     })
    //     .then((res) => {
    //       this.stateQuery = "";
    //       this.products = res;
    //     });
    // },
    // async fetchDirectories() {
    //   await this.$store
    //     .dispatch("crud/trading/category/getTradingCategory")
    //     .then((res) => {
    //       this.categories = res;
    //       this.categories.forEach((category) => {
    //         if (category.children) {
    //           category.children.forEach((child) => {
    //             child.current = false;
    //           });
    //         }
    //         category.current = false;
    //       });
    //       this.$store.dispatch("sidebar/setSidebar", this.categories);
    //     });
    //   await this.$store
    //     .dispatch("crud/trading/type/getTradingType")
    //     .then((res) => {
    //       this.tradingType = res;
    //     });
    // },
  },
};
</script>
