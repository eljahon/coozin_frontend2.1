<template>
  <div class="news">
    <swiper ref="swiper" class="swiper" :options="newsOption">
      <swiper-slide
        v-for="(info, index) in news"
        :key="index"
        class="flex items-center bg-white rounded-md space-x-3 transition duration-500"
      >
        <nuxt-link :to="{ path: localePath(`/news/${info.id}`), query: {id: info.id, category_id: info.category.id}}" :style="`background-image: linear-gradient(to bottom, rgba(232, 246, 234, 0.3) -9%, rgba(5, 150, 105, 0.9) 90%), url(${$tools.getFileUrl(info.thumbnail ? info.thumbnail : info.thumbnail)})`" class="relative cursor-pointer h-36 w-full rounded-md bg-cover">
          <div class="absolute flex text-xs top-2 bg-white rounded-md p-1 bg-opacity-80 right-2">
            {{ $dayjs(info.createdAt).format('DD.MM.YYYY') }}
          </div>
          <div class="absolute flex line-clamp-2 text-xs text-white font-medium bottom-2 left-2">
            {{ info.title }}
          </div>
        </nuxt-link>
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
export default {
  name: 'NewsSwiper',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    news: Array
  },
  data () {
    return {
      newsOption: {
        direction: 'horizontal',
        slideToClickedSlide: false,
        breakpoints: {
          640: {
            slidesPerView: 2.5,
            spaceBetween: 6
          },
          410: {
            slidesPerView: 1.3,
            spaceBetween: 10
          },
          350: {
            slidesPerView: 1.3,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1.2,
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
  mounted () {},

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
.consultants:hover .btn {
  opacity: 1;
}
</style>

