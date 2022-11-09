<template>
  <div class="lg:col-span-1 col-span-4 flex overflow-hidden w-full">
    <div class="fixed inset-0 hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-opacity-75" aria-hidden="true" />
      <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4">
        <div class="absolute top-0 right-0 -mr-12 pt-2">
          <button
            class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            @click="showHideMenu"
          >
            <span class="sr-only">Close sidebar</span>
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div class="mt-5 flex-1 h-0 overflow-y-auto">
          <nav class="flex-1 px-2 py-4 b space-y-1">
            <div v-for="(item, key) in $store.state.sidebar.sidebar" :key="key">
              <div v-if="item.children">
                <a
                  class="cursor-pointer group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  @click="menuWithChildClicked(item)"
                >
                  <span
                    :class="item.current ? 'text-green-500' : 'text-gray-700'"
                    >{{ item.title ? item.title : "--" }}</span
                  >
                  <svg
                    v-if="!item.current"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-down"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="mx-4 h-4 w-4 svg-inline--fa fa-chevron-down text-gray-500 hover:text-gray-700 'text-green-500'"
                  >
                    <path
                      fill="currentColor"
                      d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357
                              24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335
                              24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0
                              33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                      class=""
                    ></path>
                  </svg>
                  <svg v-else
                       aria-hidden="true"
                       focusable="false"
                       data-prefix="fas"
                       data-icon="chevron-up"
                       role="img"
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 448 512"
                       class="text-gray-700 mx-4 h-4 w-4 svg-inline--fa fa-chevron-up text-green-600 hover:text-green-600"
                  >
                    <path
                      fill="currentColor"
                      d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
                      class=""
                    ></path>
                  </svg>
                </a>
                <div
                  v-for="(child, k) in item.children"
                  v-show="item.current"
                  :key="k"
                >
                  <div v-if="!child.hide || child.hide == null">
                    <a
                      :to="child.route"
                      :class="
                        child.current
                          ? 'cursor-pointer  text-white group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          : 'cursor-pointer text-gray-300  hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      "
                      @click="menuChildClicked(item, child)"
                    >
                      {{
                        child.title
                          ? child.title
                          : "-"
                      }}
                    </a>
                  </div>
                </div>
              </div>
              <a
                v-else-if="!item.hide || item.hide === null"
                :class="
                  item.current
                    ? 'cursor-pointer  text-white group flex items-center px-2 py-2 text-base font-medium rounded-md'
                    : 'cursor-pointer text-gray-300  hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md'
                "
                @click="menuClicked(item)"
              >
                {{ item.title ? item.title : "-" }}
<!--                <font-awesome-icon-->
<!--                  class="text-gray-400 group-hover:text-gray-300 ml-4 flex-shrink-0 h-6 w-6"-->
<!--                  :icon="item.icon"-->
<!--                />-->
              </a>
            </div>
          </nav>
        </div>
      </div>

      <div class="flex-shrink-0 w-14" aria-hidden="true" />
    </div>

    <!-- Static sidebar for desktop -->
    <div class="flex flex-shrink-0 border shadow-md w-full">
      <div class="flex flex-col w-full">
        <div class="flex flex-col h-0 flex-1">
          <div class="flex-1 flex flex-col overflow-y-auto w-full">
            <nav class="flex-1 bg-white px-2">
              <div
                class="cursor-pointer group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                :class="
                  locale.current
                    ? 'text-green-600 hover:text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                "
                @click="menuClicked(locale)"
              >
                {{ $t(locale.name[$i18n.locale]) }}
              </div>
              <div
                v-for="(item, key) in $store.state.sidebar.sidebar"
                :key="key"
                class="border-b"
              >
                <div v-if="item.children">
                  <div
                    class="flex cursor-pointer justify-between"
                    @click="menuWithChildClicked(item)"
                  >
                    <a
                      class="cursor-pointer group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      :class="
                        item.current
                          ? 'text-green-600 hover:text-green-600'
                          : 'text-gray-500 hover:text-gray-700'
                      "
                    >
                      {{ item.title ? item.title : "-" }}
                    </a>
                    <div class="flex cursor-pointer justify-end items-center">
                      <svg
                        v-if="!item.current"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-down"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        class="mx-4 h-4 w-4 svg-inline--fa fa-chevron-down text-gray-500 hover:text-gray-700"
                      >
                        <path
                          fill="currentColor"
                          d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357
                              24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335
                              24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0
                              33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                          class=""
                        ></path>
                      </svg>
                      <svg v-else
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-up"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        class="mx-4 h-4 w-4 svg-inline--fa fa-chevron-up text-green-600 hover:text-green-600"
                      >
                        <path
                          fill="currentColor"
                          d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
                          class=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    v-for="(child, k) in item.children"
                    v-show="item.current === true"
                    :key="k"
                  >
                    <div v-if="!child.hide || child.hide === null">
                      <a
                        :to="child.route"
                        class="cursor-pointer ml-10 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        :class="
                          child.id ===
                          ($route.query.category_id !== 'all'
                            ? parseInt($route.query.category_id)
                            : $route.query.category_id)
                            ? 'text-green-600 hover:text-green-600'
                            : 'text-gray-500 hover:text-gray-700'
                        "
                        @click="menuChildClicked(item, child)"
                      >
                        {{ child.title ? child.title : "-" }}
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  v-else-if="!item.hide || item.hide === null"
                  class="cursor-pointer group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  :class="
                    item.id ===
                    ($route.query.category_id !== 'all'
                      ? parseInt($route.query.category_id)
                      : $route.query.category_id)
                      ? 'text-green-600 hover:text-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  "
                  @click="menuClicked(item)"
                >
                  {{ item.title ? item.title : "-" }}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Sidebar",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      locale: {
        created_at: "2021-11-11T23:25:16.744559+05:00",
        id: "all",
        name: { uz: "word.all", ru: "Все", en: "All" },
        children: [],
        current: this.$route.query.category_id === 'all' || this.$route.query.category_id === undefined ? true : false,
        status: true,
        updated_at: "2021-11-11T23:25:16.744646+05:00",
      },
    };
  },
  computed: {
    ...mapState({
      sidebar: (state) => state.sidebar.sidebar,
    }),
    // ...mapGetters({
    //   sidebar: 'sidebar/getSidebar'
    // }),
  },
  mounted() {
    // if (
    //   this.$route.path.length <= this.name.length + 4 ||
    //   this.$route.path.search("all") > -1
    // ) {
    //   this.menuClicked(this.locale);
    // }
  },
  methods: {
    showHideMenu() {
      this.showMenuInMobile = !this.showMenuInMobile;
    },
    menuChildClicked(item, child) {
      const sidebar = JSON.parse(JSON.stringify(this.sidebar));
      sidebar.forEach((el) => {
        if (el.id === item.id) {
          return item.children.forEach((ch) => {
            if (child === ch) {
              ch.current = true;
            } else {
              ch.current = false;
            }
            this.locale.current = false;
          });
        }
      });
      this.$store.dispatch("sidebar/changeSidebar", sidebar);
      this.$router.push({
        path: this.localePath(
          `${this.$route.path.slice(0, this.name.length + 4)}`
        ),
        query: this.checkQuery(item, child),
      });
    },
    menuWithChildClicked(item) {
      // debugger
      let sidebar = JSON.parse(JSON.stringify(this.sidebar));
      sidebar.forEach((menu) => {
        if (menu.id === item.id) {
          menu.current = !menu.current;
          menu.children.forEach((child) => {
            child.current = false;
          });
        } else {
          menu.current = false;
        }
      });
      this.locale.current = false;
      this.$store.dispatch("sidebar/changeSidebar", sidebar);
    },
    menuClicked(item) {
      const sidebar = JSON.parse(JSON.stringify(this.sidebar));
      if (item.id === "all") {
        this.locale.current = true
      }
       else {
        this.locale.current = false
        sidebar.forEach((menu) => {
          if (item.id === menu.id) {
            menu.current = true
          } else {
            menu.current = false;
          }
        });
        this.$store.dispatch("sidebar/changeSidebar", sidebar);
      }
      this.$router.push({
        path: this.localePath(
          `${this.$route.path.slice(0, this.name.length + 4)}`
        ),
        query: this.checkQuery(item, {}),
      });
    },
    checkQuery(parent, child) {
      if (parent.id === 'all') {
        return {
          page: this.$route.query.page ? this.$route.query.page : 1
        }
      }
      if (parent.count === 0) {
        return {
          category_id: parent.id,
          page: 1,
        };
      }
      if (Object.keys(child).length > 0) {
        return {
          category_id: child.id,
          page: 1,
        };
      }
      return {
        category_id: parent.id,
        page: 1,
      };
    },
  },
};
</script>
