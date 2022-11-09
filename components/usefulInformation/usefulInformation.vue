<template>
  <div>
    <div>
<!--      <min-loading v-if="loading"/>-->
      <div class="grid md:grid-cols-2 grid-cols-1 gap-4" v-if="$store.state.userFullInfo.userFullInfo.length > 0">
        <div v-for="(info, index) in $store.state.userFullInfo.userFullInfo" :key="index">
          <div v-show="info.title" class="col-span-3 h-auto p-2 bg-white rounded-md hover:shadow-lg shadow-md border">
            <nuxt-link :to="{ path: localePath(`/useful-informatio/${info.id}`), query: {id: info.id}}">
              <div class="grid grid-cols-3">
                <div class="">
                  <img v-if="info.thumbnail || info.mainphoto" :src="$tools.getFileUrl(info.thumbnail ? info.thumbnail : info.mainphoto)" class="w-40 h-28 object-cover shadow-lg rounded-md">
                  <img v-else-if="info.gallery.length > 0" :src="$tools.getFileUrl(info.gallery[0].url)" class="w-40 h-28 object-cover shadow-lg rounded-md">
                  <img
                    v-else
                    class="w-40 h-28 object-cover shadow-lg rounded-md"
                    src="https://www.pinupacc.com/images/dummy.png"
                  >
                </div>
                <div class="col-span-2 px-3">
                  <h3 class="text-gray-600 line-clamp-2 font-medium text-sm">
                    {{ info.title }}
                  </h3>
                  <div v-if="info.consultant !== null" class="mt-4 flex items-center">
                    <div class="flex-shrink-0">
                      <img v-if="info.consultant.userinfo.avatar === null || info.consultant.userinfo.avatar===undefined" src="https://silkozari.com/web/images/miscellaneous/avatar.jpg" class="h-10 w-10 rounded-full">
                      <img v-else class="h-10 w-10 object-cover rounded-full" :src="$tools.getFileUrl(info.consultant.userinfo.avatar)">
                    </div>
                    <div class="ml-3">
                      <p v-if="info.consultant.userinfo !== null" class="text-sm text-gray-600">
                        {{ `${info.consultant.userinfo.name ? info.consultant.userinfo.name : ''} ${info.consultant.surname ? info.consultant.surname : ''}` }}
                      </p>
                      <div class="flex space-x-1 text-xs text-gray-500">
                        <time datetime="2020-03-16">
                          {{ $dayjs(info.createdAt).format('MM.DD.YYYY') }}
                        </time>
                      </div>
                    </div>
                  </div>
                  <p v-if="info.consultation_category" class="text-green-500 line-clamp-1 text-xs pt-1">
                    {{ info.consultation_category.title }}
                  </p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
<!--    <pagination-->
<!--      v-if="$store.state.userFullInfo.userFullInfoPag >= 1"-->
<!--      :current-page=" $route.query.page ? parseInt($route.query.page) : 1"-->
<!--      :page-count="$store.state.userFullInfo.userFullInfoPag"-->
<!--      @callback="pageChanged($event)"-->
<!--    />-->
  </div>
</template>
<script>
export default {
  // auth: false,
  data () {
    return {
      // information: [],
      query: {
        limit: 12,
        offset: 1
      }
    }
  },

  methods: {

  }
}
</script>
