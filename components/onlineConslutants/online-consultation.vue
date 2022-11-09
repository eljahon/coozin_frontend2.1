<template>
  <div>
    <div
      class="
        grid
        xl:grid-cols-3
        lg:grid-cols-2
        md:grid-cols-3
        sm:grid-cols-2
        grid-cols-1
        gap-3
      "
    >
      <div v-for="(consultant, index) in $store.state.users.userList" :key="index">
        <div class="col-span-3 flex gap-4 h-auto w-full md:px-0 px-4">
          <div class="gap-x-2 grid sm:grid-cols-1 grid-cols-3 bg-white rounded-md hover:shadow-lg shadow-md w-full">
            <div class="m-3">
              <img
                v-if="consultant.userinfo.avatar === null"
                :src="require('/assets/images/person/avatar.jpg')"
                class="w-full sm:h-48 h-32 object-cover rounded-md rounded-b-none"
              >
              <img
                v-else
                :src="$tools.getFileUrl(consultant.userinfo.avatar)"
                class="w-full sm:h-48 h-32 object-cover rounded-md rounded-b-none"
              >
            </div>
            <div class="p-3 col-span-2">
              <h3 class="text-gray-600 font-medium text-base">
                {{ `${consultant.userinfo.name ? consultant.userinfo.name : ''} ${consultant.userinfo.surname ? consultant.userinfo.surname : ''}` }}
              </h3>
              <div v-if="consultant.userinfo.consultation_category  !== null" class="text-green-600 text-sm mb-3 mt-2 line-clamp-1">
                {{ consultant.userinfo.consultation_category.title ? consultant.userinfo.consultation_category.title : '' }}
              </div>
              <div class="flex items-center mt-2 sm:justify-center justify-start">
                <button
                  type="button"
                  class="
                    p-2
                    border border-transparent
                    text-xs
                    leading-4
                    font-medium
                    rounded-md
                    text-light-orange
                    bg-orange-50
                    focus:outline-none
                    flex
                  "
                  @click="toNewChatRoom(consultant)"
                >
                  {{ $t('text.getConsultation') }}
                  <svg
                    class="ml-2 -mr-0.5 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </button>
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
// import { mapState } from 'vuex'
// const qs = require('qs')
export default {
  auth: false,
  data () {
    return {
      pageCount: 1,
      query: {
        limit: 12,
        offset: 1
      }
    }
  },
  computed: {
    // pagination () {
    //   return this.$store.state.crud.user.pagination
    // },
    // ...mapState({
    //   currentUser: state => state.auth.user,
    //   isLoggedIn: state => state.auth.loggedIn
    // })
  },
  watch: {
    // '$route.query.offset' () {
    //   if (this.$route.query.offset) { this.fetchData(this.$route.query) }
    // },
    // '$route.query.category_id' () {
    //   if (this.$route.query.category_id) { this.fetchData(this.$route.query) }
    // }
  },
  mounted () {
    // this.fetchData(Object.keys(this.$route.query).length > 0
    //   ? {
    //     category_id: this.$route.query.category_id,
    //     limit: this.$route.query.limit,
    //     offset: this.$route.query.offset
    //   }
    //   : {
    //     category_id: 'all',
    //     limit: this.pagination.limit,
    //     offset: this.pagination.page
    //   })
  },
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
    toNewChatRoom (data) {
      // if (this.isLoggedIn) {
      //   this.$store.dispatch('crud/chats/room/getRooms', {
      //     '_where[0][consultantID.id][0]': data.id,
      //     '_where[0][userID.id][0]': this.currentUser.id,
      //     '_where[0][isCompleted]': false
      //   }).then((res) => {
      //     if (res.length > 0) {
      //       this.$bridge.$emit('selected_room', { room_id: res[0].id })
      //       this.$router.push({
      //         path: this.localePath('/chats'),
      //         query: { room_id: res[0].id, consultant_id: data.id }
      //       })
      //     } else {
      //       this.$router.push({
      //         path: this.localePath('/chats'),
      //         query: { room_id: 'new', consultant_id: data.id }
      //       })
      //     }
      //   })
      //   // this.$store
      //   //   .dispatch('crud/chats/room/postRooms', { data: { consultantID: data.id, userID: this.currentUser.id, isCompleted: false } })
      //   //   .then((res) => {
      //   //     this.$bridge.$emit('selected_room', { room_id: res.id })
      //   //     this.$router.push({
      //   //       path: this.localePath('/chats'),
      //   //       query: { room_id: res.id, consultant_id: data.id }
      //   //     })
      //   //   })
      // } else {
      //   this.$router.push({
      //     path: this.localePath('/login'),
      //     query: {
      //       consultantID: data.id,
      //       from: 'consultant'
      //     }
      //   })
      // }
    },
    // async fetchData (query) {
    //   await this.$store.dispatch('crud/user/getUsers',
    //     {
    //       // _where: [
    //       //   {
    //       //     role: 3,
    //       //     blocked: false,
    //       //     'consultantcategory.id': query.category_id !== 'all' ? query.category_id : null
    //       //   }
    //       // ],
    //       '_where[0][role.id][0]': 3,
    //       '_where[0][role.id][1]': 7,
    //       // eslint-disable-next-line no-dupe-keys
    //       // '_where[_or][1][role.id]': 7,
    //       // '_where[1][role]': 7,
    //       // '_where[role][1]': 7,
    //       '_where[0][blocked]': false,
    //       '_where[0][consultantcategory.id]': query.category_id !== 'all' ? query.category_id : null,
    //       _limit: query.limit,
    //       _start: (query.offset - 1) * query.limit
    //     }
    //   ).then((res) => {
    //     this.consultation = res
    //   })
    // }
  }
}
</script>

