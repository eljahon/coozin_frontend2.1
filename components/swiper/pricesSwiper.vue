<template>
  <div class="consultants">
    <swiper ref="swiper" class="swiper" :options="priceOption">
      <swiper-slide
        v-for="(price, index) in prices"
        :key="index"
        :class="(price.min && price.max) < 0 ? 'hidden' : 'block'"
        class="flex items-center bg-white rounded-md  shadow-sm hover:shadow-md space-x-3 transition duration-500"
      >
        <div class="group w-full p-2 shadow-sm">
          <div class="flex">
            <div v-if="price.product.mainimage || price.product.thumbnail" class="rounded-md">
              <img :src="$tools.getFileUrl(price.product.thumbnail ? price.product.thumbnail : price.product.mainimage)" class="w-11 h-11 object-cover rounded-md">
            </div>
            <div v-else class="bg-gray-50 p-2 rounded-md">
              <img src="https://www.pinupacc.com/images/dummy.png" class="w-11 h-11 bg-gray-50 p-2 object-cover rounded-md">
            </div>
            <div class="ml-2">
              <div class="text-base text-gray-600">
                {{ price.product.name }}
              </div>
              <div class="text-gray-500 text-sm">
                {{ price.product.productcategory }}
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 space-y-1.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <p class="text-gray-600 text-sm mr-4">
                  min
                </p>
                <p class="text-base text-light-orange font-semibold">
                  {{ price.min }} <span class="text-sm text-gray-600 font-medium ml-2">UZS</span>
                </p>
              </div>

              <div
                v-if="price.minchange < 0"
                :class="price.minchange === 0 ? 'hidden' : ''"
                class="
                    inline-flex
                    items-center
                    h-5
                    px-1.5
                    py-0.5
                    rounded-full
                    text-sm
                    font-medium
                    bg-red-100
                    text-red-800
                    md:mt-2
                    lg:mt-0
                  "
              >
                <i class="bx bx-down-arrow-alt text-red-800 text-base mr-1" />
                {{ Math.round(price.minchange * 100) }} %
              </div>
              <div
                v-else-if="price.minchange === 0"
                class="
                    items-center
                    flex
                    h-5
                    px-2
                    py-0.5
                    rounded-full
                    text-sm
                    font-medium
                    bg-gray-100
                    text-gray-800
                    md:mt-2
                    lg:mt-0
                  "
              >
                {{ Math.round(price.minchange * 100) }} %
              </div>
              <div
                v-else
                class="
                    inline-flex
                    items-center
                    h-5
                    px-1.5
                    py-0.5
                    rounded-full
                    text-sm
                    font-medium
                    bg-green-100
                    text-green-800
                    md:mt-2
                    lg:mt-0
                  "
              >
                <i class="bx bx-up-arrow-alt text-green-800 text-base mr-1" />
                {{ Math.round(price.minchange * 100) }} %
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <p class="text-gray-600 text-sm mr-3.5">
                  max
                </p>
                <p class="text-base text-red-600 font-semibold">
                  {{ price.max }} <span class="text-sm text-gray-600 font-medium ml-2">UZS</span>
                </p>
              </div>
              <div
                v-if="price.maxchange < 0"
                class="
                    inline-flex
                    items-center
                    h-5
                    px-1.5
                    py-0.5
                    rounded-full
                    text-sm
                    font-medium
                    bg-red-100
                    text-red-800
                    md:mt-2
                    lg:mt-0
                  "
              >
                <i class="bx bx-down-arrow-alt text-red-800 text-base mr-1" />
                {{ Math.round(price.maxchange * 100) }} %
              </div>
              <div
                v-else-if="price.maxchange === 0"
                class="
                    items-center
                    flex
                    h-5
                    px-2
                    py-0.5
                    rounded-full
                    text-sm
                    font-medium
                    bg-gray-100
                    text-gray-800
                    md:mt-2
                    lg:mt-0
                  "
              >
                {{ Math.round(price.maxchange * 100) }} %
              </div>
              <div
                v-else
                class="
                    inline-flex
                    items-center
                    h-5
                    px-1.5
                    py-0.5
                    rounded-full
                    text-sm
                    font-medium
                    bg-green-100
                    text-green-800
                    md:mt-2
                    lg:mt-0
                  "
              >
                <i class="bx bx-up-arrow-alt text-green-800 text-base mr-1" />
                {{ Math.round(price.maxchange * 100) }} %
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <router-link :to="{path: localePath('/prices')}">
      <button class="text-white bg-green-600 text-base md:hidden flex justify-center rounded-md w-full mt-3 py-2">
        {{ $t('text.seePrices') }}
      </button>
    </router-link>
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
  name: 'PricesSwiper',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    prices: Array
  },
  data () {
    return {
      priceOption: {
        direction: 'horizontal',
        slideToClickedSlide: false,
        breakpoints: {
          1440: {
            slidesPerView: 3.7,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 10
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
            slidesPerView: 1.3,
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
