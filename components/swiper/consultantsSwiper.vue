<template>
  <div class="consultation">
    <swiper ref="swiper" class="swiper" :options="consultantOption">
      <swiper-slide
        v-for="(consultant, index) in consultation"
        :key="index"
        class="flex items-center bg-white border rounded-md space-x-3 transition duration-500"
      >
        <div class="group w-full hover:shadow-md shadow-sm">
          <div class="flex justify-center px-2 pt-2 w-full">
            <img v-if="consultant.userinfo.avatar === null " src="https://silkozari.com/web/images/miscellaneous/avatar.jpg" class="w-full md:h-52 h-20 rounded-md object-cover">
            <img v-else class="w-full md:h-56 h-20 rounded-md object-cover" :src="$tools.getFileUrl(consultant.userinfo.avatar)">
          </div>
          <div class="text-center md:text-left relative pt-2.5">
            <h3 class="text-gray-600 font-medium line-clamp-1 m-2 text-sm">
              {{ `${consultant.userinfo.name ? consultant.userinfo.name : ''} ${consultant.userinfo.surname ? consultant.userinfo.surname : ''}` }}
            </h3>
            <p v-if="consultant.userinfo.consultation_category !== null" class="text-gray-600 text-xs md:text-left line-clamp-1 text-center m-2">
              {{ consultant.userinfo.consultation_category.title ? consultant.userinfo.consultation_category.title : '' }}
            </p>
            <button type="button" class="lg:hidden focus:outline-none flex rounded-md rounded-t-none text-sm text-white bg-light-orange w-full justify-center py-3" @click="toNewChatRoom(consultant)">
              {{ $t('text.getConsultation') }}
            </button>
          </div>

          <div
            class="absolute hidden lg:block w-full opacity-0 duration-300 lg:group-hover:opacity-100 z-10 inset-x-0 bottom-0 bg-white h-auto bg-center"
          >
            <div class="p-3">
              <h3 class="text-gray-600 text-base font-medium">
                {{ `${consultant.userinfo.name ? consultant.userinfo.name : ''} ${consultant.userinfo.surname ? consultant.userinfo.surname : ''}` }}
              </h3>
              <p v-if="consultant.userinfo.consultation_category !== null" class="text-sm text-green-600">
                {{ consultant.userinfo.consultation_category.title ? consultant.userinfo.consultation_category.title : '' }}

              </p>
              <div class="lg:flex hidden justify-center">
                <button type="button" class="flex justify-center items-center p-2 mt-3 border border-transparent text-xs leading-4 font-medium rounded-md text-light-orange bg-orange-50 focus:outline-none" @click="toNewChatRoom(consultant)">
                  {{ $t('text.getConsultation') }}
                  <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="absolute group top-1/2 lg:flex hidden justify-between inset-x-0">
      <div
        slot="button-prev"
        class="swiper-button-prev btn shadow-md opacity-0 -left-9"
        @click="prev()"
      />
      <div
        slot="button-next"
        class="swiper-button-next btn shadow-md opacity-0 -right-9"
        @click="next()"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ConsultantsSwiper',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    consultation: Array
  },
  data () {
    return {
      consultantOption: {
        direction: 'horizontal',
        slideToClickedSlide: false,
        breakpoints: {
          1280: {
            slidesPerView: 3,
            spaceBetween: 16
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 6
          },
          410: {
            slidesPerView: 2.5,
            spaceBetween: 10
          },
          350: {
            slidesPerView: 2.5,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 2.3,
            spaceBetween: 10
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    ...mapState({
      currentUser: state => state.auth.user,
      isLoggedIn: state => state.auth.loggedIn
    })
  },

  methods: {
    // toNewChatRoom (data) {
    //   if (this.isLoggedIn) {
    //     this.$store.dispatch('crud/chats/room/getRooms', {
    //       '_where[0][consultantID.id][0]': data.id,
    //       '_where[0][userID.id][0]': this.currentUser.id,
    //       '_where[0][isCompleted]': false
    //     }).then((res) => {
    //       if (res.length > 0) {
    //         this.$bridge.$emit('selected_room', { room_id: res[0].id })
    //         this.$router.push({
    //           path: this.localePath('/chats'),
    //           query: { room_id: res[0].id, consultant_id: data.id }
    //         })
    //       } else {
    //         this.$router.push({
    //           path: this.localePath('/chats'),
    //           query: { room_id: 'new', consultant_id: data.id }
    //         })
    //       }
    //     })
    //   } else {
    //     this.$router.push({
    //       path: this.localePath('/login'),
    //       query: {
    //         consultantID: data.id,
    //         from: 'consultant'
    //       }
    //     })
    //   }
    // },
    prev () {
      this.$refs.swiper.$swiper.slidePrev()
    },
    next () {
      this.$refs.swiper.$swiper.slideNext()
    }
  }
}
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  --swiper-theme-color: #059669;
  background-color: white;
  padding: 22px;
  color: #059669 !important;
  fill: #059669 !important;
  stroke: #059669 !important;
  border-radius: 100%;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 13px;
}
.consultation:hover .btn {
  opacity: 1;
}
</style>
