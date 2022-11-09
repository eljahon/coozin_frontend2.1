<template>
  <div class="relative information">
    <swiper ref="swiper" class="swiper" :options="informationOption">
      <swiper-slide
        v-for="(info, index) in information"
        :key="index"
        class="flex items-center bg-white rounded-md space-x-3 transition duration-500"
      >
        <!-- <span>{{info.id}}</span> -->
        <!-- <div v-if="info.mainphoto || info.thumbnail || info.gallery.length > 0 "> -->
        <nuxt-link :to="{ path: localePath(`/useful-informatio/${info.id}`), query: {id: info.id}}" :style="info.mainphoto || info.thumbnail || info.gallery.length > 0 ? `background-image: url(${$tools.getFileUrl(info.thumbnail ? info.thumbnail : info.mainphoto)})` : 'background-image: url(https://www.pinupacc.com/images/dummy.png);'" class="relative group cursor-pointer h-24 w-full rounded-md bg-cover">
          <div class="absolute inset-0 bg-gray-700 opacity-70 w-full rounded-md">
            <div class="absolute top-3 left-3 right-3 flex line-clamp-3 text-xs text-white font-medium">
              {{ info.title }}
            </div>
          </div>
        </nuxt-link>
        <!-- </div> -->
        <!-- <div v-else> -->
        <!-- user full data inside null or undefined have  -->
        <!-- </div> -->
      </swiper-slide>
    </swiper>
    <div class="absolute group top-1/2 lg:flex hidden justify-between inset-x-0">
      <div
        slot="button-prev"
        class="swiper-button-prev btn shadow-md group-hover:opacity-100 opacity-0 -left-9"
        @click="prev()"
      />
      <div
        slot="button-next"
        class="swiper-button-next btn shadow-md group-hover:opacity-100 opacity-0 -right-9"
        @click="next()"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsSwiper',
  props: {
    information: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data () {
    return {
      informationOption: {
        direction: 'horizontal',
        slideToClickedSlide: false,
        breakpoints: {
          1280: {
            slidesPerView: 4.2,
            spaceBetween: 16
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3.5,
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
            slidesPerView: 2.5,
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

  methods: {
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
</style>
