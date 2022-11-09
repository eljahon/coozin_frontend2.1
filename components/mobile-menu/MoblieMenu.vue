<template>
  <div class="lg:col-span-1 col-span-4 flex overflow-hidden w-full">
    <div class="fixed inset-0 hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-opacity-75" aria-hidden="true" />
      <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4">
        <div class="absolute top-0 right-0 -mr-12 pt-2">
          <button
            class="
              ml-1
              flex
              items-center
              justify-center
              h-10
              w-10
              rounded-full
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
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
                  class="
                    cursor-pointer
                    group
                    flex
                    items-center
                    px-2
                    py-2
                    text-base
                    font-medium
                    rounded-md
                  "
                  @click="menuWithChildClicked(item); closePanel()"
                >
                  <span :class="item.current ? 'text-green-600' : 'text-gray-700'">{{
                      item.title
                    }}</span>
<!--                  <font-awesome-icon-->
<!--                    class="ml-4 flex-shrink-0 h-6 w-6"-->
<!--                    :class="item.current ? 'text-green-600' : 'text-gray-700'"-->
<!--                    :icon="item.current ? 'chevron-up' : 'chevron-down'"-->
<!--                  />-->
                </a>
                <div v-for="(child, k) in item.children" v-show="item.current" :key="k">
                  <a
                    :to="child.route"
                    :class="
                      child.current
                        ? 'cursor-pointer  text-white group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        : 'cursor-pointer text-gray-300  hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md'
                    "
                    @click="menuChildClicked(item, child); closePanel()"
                  >
                    {{ child.title }}
                  </a>
                </div>
              </div>
              <a
                v-else
                :class="
                  item.current
                    ? 'cursor-pointer  text-white group flex items-center px-2 py-2 text-base font-medium rounded-md'
                    : 'cursor-pointer text-gray-300  hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md'
                "
                @click="menuClicked(item); closePanel()"
              >
                {{ item.title }}
                <!-- <font-awesome-icon
                  class="text-gray-400 group-hover:text-gray-300 ml-4 flex-shrink-0 h-6 w-6"
                  :icon="item.icon"
                /> -->
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
                class="
                  cursor-pointer
                  group
                  flex
                  items-center
                  px-2
                  py-2
                  text-sm
                  font-medium
                  rounded-md
                "
                :class="
                  locale.current
                    ? 'text-green-600 hover:text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                "
                @click="menuClicked(locale); closePanel()"
              >
                {{ $t(locale.name[$i18n.locale]) }}
              </div>
              <div v-for="(item, key) in $store.state.sidebar.sidebar" :key="key" class="border-b">
                <div v-if="item.children">
                  <div
                    class="flex cursor-pointer justify-between"
                    @click="menuWithChildClicked(item); closePanel()"
                  >
                    <a
                      class="
                        cursor-pointer
                        group
                        flex
                        items-center
                        px-2
                        py-2
                        text-sm
                        font-medium
                        rounded-md
                      "
                      :class="
                        item.current
                          ? 'text-green-600 hover:text-green-600'
                          : 'text-gray-500 hover:text-gray-700'
                      "
                    >
                      {{ item.title}}
                    </a>
                    <div class="flex cursor-pointer justify-end items-center">
<!--                      <font-awesome-icon-->
<!--                        class="mx-4 h-4 w-4"-->
<!--                        :class="-->
<!--                          item.current-->
<!--                            ? 'text-green-600 hover:text-green-600'-->
<!--                            : 'text-gray-500 hover:text-gray-700'-->
<!--                        "-->
<!--                        :icon="item.current ? 'chevron-up' : 'chevron-down'"-->
<!--                      />-->
                    </div>
                  </div>
                  <div v-for="(child, k) in item.children" v-show="item.current === true" :key="k">
                    <a
                      :to="child.route"
                      class="
                        cursor-pointer
                        ml-10
                        group
                        flex
                        items-center
                        px-2
                        py-2
                        text-sm
                        font-medium
                        rounded-md
                      "
                      :class="
                        child.current
                          ? 'text-green-600 hover:text-green-600'
                          : 'text-gray-500 hover:text-gray-700'
                      "
                      @click="menuChildClicked(item, child); closePanel()"
                    >
                      {{ child.title }}
                    </a>
                  </div>
                </div>
                <div
                  v-else
                  class="
                    cursor-pointer
                    group
                    flex
                    items-center
                    px-2
                    py-2
                    text-sm
                    font-medium
                    rounded-md
                  "
                  :class="
                    item.current
                      ? 'text-green-600 hover:text-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  "
                  @click="menuClicked(item); closePanel()"
                >
                  {{ item.title }}
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
export default {
  name: 'Sidebar',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      locale: {
        created_at: '2021-11-11T23:25:16.744559+05:00',
        id: 'all',
        name: { uz: 'word.all', ru: 'Все', en: 'All' },
        children: [],
        current: true,
        status: true,
        updated_at: '2021-11-11T23:25:16.744646+05:00'
      }
    }
  },
  // mounted () {
  //   if (this.$route.path.length <= (this.name.length + 2) || this.$route.path.search('all') > -1) {
  //     this.menuClicked(this.locale)
  //   }
  // },
  methods: {
    closePanel () {
      this.$emit('closePanel', {})
    },
    menuChildClicked (item, child) {
      const sidebar = [...this.$store.state.sidebar.sidebar]
      sidebar.forEach((el) => {
        if (el.id === item.id) {
          return item.children.forEach((ch) => {
            if (child === ch) {
              ch.current = true
            } else {
              ch.current = false
            }
            this.locale.current = false
          })
        }
      })
      this.$store.dispatch('sidebar/changeSidebar', sidebar)
      this.$router.push({
        path: this.localePath(`${this.$route.path.slice(0, this.name.length + 1)}`),
        query: this.checkQuery(item, child)
      })
    },
    menuWithChildClicked (item) {
      const sidebar = this.$store.state.sidebar.sidebar
      sidebar.forEach((menu) => {
        if (menu.id === item.id) {
          menu.current = !menu.current
          menu.children.forEach((child) => {
            child.current = false
          })
        } else {
          menu.current = false
        }
      })
      this.locale.current = false
      this.$store.dispatch('sidebar/changeSidebar', sidebar)
    },
    menuClicked (item) {
      if (item.id === 'all') {
        this.locale.current = true
      }
     else {
        const sidebar = this.$store.state.sidebar.sidebar;
        this.locale.current = false
        sidebar.forEach((menu) => {
          if (item.id === menu.id) {
            menu.current = true
          } else {
            menu.current = false
          }
        })
        // console.log(sidebar, item)
        this.$store.dispatch('sidebar/changeSidebar', sidebar)
      }
      this.$router.push({
        path: this.localePath(`${this.$route.path.slice(0, this.name.length + 1)}`),
        query: this.checkQuery(item, {})
      })
    },
    checkQuery (parent, child) {
      // if (parent.id === 'all') {
      //   return {
      //     limit: this.$route.query.limit ? this.$route.query.limit : 12,
      //     offset: this.$route.query.offset ? this.$route.query.offset : 1
      //   }
      // }
      if (parent.count === 0) {
        return {
          category_id: parent.id,
          page: 1
        }
      }
      if (Object.keys(child).length > 0) {
        return {
          category_id: child.id,
          page: 1
        }
      }
      return {
        category_id: parent.id,
        page: 1
      }
    }
  }
}
</script>
