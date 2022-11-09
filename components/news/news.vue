<template>
  <div class="">
    <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      <div v-for="(info, index) in $store.state.news.newsList" :key="index">
        <nuxt-link :to="{ path: localePath(`/news/${info.id}`), query: {id: info.id, category_id: info.category.id}}">
<!--          <span>{{info}}</span>-->
          <div class="col-span-3 bg-white flex">
            <div class="rounded-md border hover:shadow-lg shadow-md w-full">
              <div class="relative ">
                <div class="">
                  <img
                    v-if="!info.mainphoto && !info.thumbnail"
                    class="w-full h-60 object-cover rounded-md rounded-b-none"
                    src="https://www.pinupacc.com/images/dummy.png"
                  >
                  <img
                    v-else
                    class="w-full h-60 object-cover rounded-md rounded-b-none"
                    :src="$tools.getFileUrl(info.thumbnail ? info.thumbnail : info.mainphoto)"
                  >
                </div>
                <div class="absolute flex text-xs text-light-orange bg-orange-50 bottom-2 p-1 justify-center right-3 rounded-md">
                  <time datetime="2020-03-10">
                    {{ $dayjs(info.createdAt).format('DD.MM.YYYY') }}
                  </time>
                </div>
              </div>
              <div class="p-2">
                <h3 class="text-gray-600 line-clamp-1 font-medium text-sm">
                  {{ info.title ?  info.title :'-' }}
                </h3>
                <p v-if="info && info.category && info.category.title" class="text-xs pt-2 line-clamp-2 text-green-500">
                  {{ info.category.title ? info.category.title :'-'  }}
                </p>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'NewsById',
  auth: false,
  data () {
    return {
      news: [],
      pageCount: 1,
      query: {
        limit: 12,
        offset: 1
      }
    }
  },
  computed: {
    pagination () {
      return this.$store.state.crud.news.pagination
    }
  },
  // async fetch () {
  //   await this.fetchNews()
  // },
  // watch: {
  //   '$route.query.offset' () {
  //     if (this.$route.query.offset) { this.fetchData(this.$route.query) }
  //   },
  //   '$route.query.category_id' () {
  //     if (this.$route.query.category_id) { this.fetchData(this.$route.query) }
  //   },
  //   '$i18n.locale' () {
  //     this.fetchData(this.$route.query)
  //   }
  // },

  // mounted () {
  //   this.fetchData(Object.keys(this.$route.query).length > 0
  //     ? {
  //       category_id: this.$route.query.category_id,
  //       limit: this.$route.query.limit,
  //       offset: this.$route.query.offset
  //     }
  //     : {
  //       category_id: 'all',
  //       limit: this.pagination.limit,
  //       offset: this.pagination.page
  //     })
  // },
  methods: {
    pageChanged (offset) {
      this.$router.push({
        path: this.localePath(this.$route.query.path),
        query: this.setQuery(this.$route.query, offset)
      })
    },
    setQuery (query, offset) {
      if (query.category_id) {
        return {
          category_id: query.category_id,
          limit: query.limit ? query.limit : this.pagination.limit,
          offset
        }
      }
      return {
        limit: query.limit ? query.limit : this.pagination.limit,
        offset
      }
    },
  }
}
</script>

