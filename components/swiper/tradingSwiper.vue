<template>
  <div class="consultants">
    <nuxt-link :to="{ path: localePath(`/trading/${products[0].id}`), query: {id: products[0].id}}">
      <div class="relative">
        <img
          v-if="products[0].mainimage || products[0].thumbnail"
          :src="$tools.getFileUrl(products[0].thumbnail ? products[0].thumbnail : products[0].mainimage)"
          class="w-full rounded-md rounded-b-none relative h-28 object-cover"
        >
        <img
          v-else-if="products[0].gallery.length > 0"
          :src="$tools.getFileUrl(products[0].gallery) "
          class="w-full rounded-md rounded-b-none relative h-28 object-cover"
        >
        <img
          v-else
          class="w-full rounded-md rounded-b-none relative h-28 object-cover"
          src="https://www.pinupacc.com/images/dummy.png"
        >
        <div class="absolute left-0 bottom-0 text-xs p-2 text-white bg-green-600">
          {{ $t('text.topProduct') }}
        </div>
        <div class="flex absolute top-2 right-2 bg-white bg-opacity-60 rounded-md px-2 py-1 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
            <path stroke="#4b5563" stroke-linecap="round" stroke-linejoin="round" d="M7.5 6c0 .828-.672 1.5-1.5 1.5-.829 0-1.5-.672-1.5-1.5S5.17 4.5 6 4.5c.828 0 1.5.672 1.5 1.5z" />
            <path stroke="#4b5563" stroke-linecap="round" stroke-linejoin="round" d="M1.229 6C1.866 3.971 3.761 2.5 6 2.5s4.134 1.471 4.771 3.5c-.637 2.029-2.532 3.5-4.77 3.5-2.24 0-4.135-1.471-4.772-3.5z" />
          </svg>
          <span class="ml-2 text-xs text-gray-600">{{ products[0].seen }}</span>
        </div>
      </div>
      <div class="p-2 mb-4 bg-white rounded-md rounded-t-none">
        <p class="text-gray-600 text-sm font-medium">
          {{ products[0].title }}
        </p>
        <p
          v-if="products[0].type === '1'"
          class="text-green-600 lowercase font-semibold text-base"
        >
          {{ products[0].price }} {{ $t('word.sum') }}  <span v-if="products[0].unit">/ {{ products[0].unit.namejson }}</span>
        </p>
        <p v-else class="text-light-orange lowercase font-semibold text-base">
          {{ products[0].price }} {{ $t('word.sum') }} <span v-if="products[0].unit">/ {{ products[0].unit.namejson }}</span>
        </p>

        <!-- <div class="flex justify-between">
          <p v-if="products[0].unit !== null" class="text-gray-500 lowercase text-xs text-right">
            {{ $t('word.sum') }} / {{ products[0].unit.name }}
          </p>

          <p class="text-gray-500 font-medium text-xs">
            {{ products[0].author.name }} {{ products[0].author.surname }}
          </p>
        </div> -->
      </div>
    </nuxt-link>

    <swiper v-if="products.length > 1" ref="swiper" class="swiper" :options="tradingOption">
      <swiper-slide
        v-for="(product, index) in (products.length <= 4 && products.length >= 2 ? products.slice(1, products.length) : products.slice(1,4))"
        :key="index"
        class="flex items-center relative bg-white rounded-md space-x-3 transition duration-500"
      >
        <nuxt-link
          class="group w-full h-28 shadow-md"
          :to="{ path: localePath(`/trading/${product.id}`), query: {id: product.id}}"
        >
          <div class="grid grid-cols-3 gap-2">
            <div class="rounded-md">
              <img
                v-if="product.mainimage || product.thumbnail"
                :src="$tools.getFileUrl(product.thumbnail ? product.thumbnail : product.mainimage)"
                class="w-full h-28 object-cover rounded-md rounded-r-none"
              >
              <img
                v-else-if="product.gallery.length > 0"
                :src="$tools.getFileUrl(product.gallery) "
                class="w-full h-28 object-cover rounded-md rounded-r-none"
              >
              <img
                v-else
                class="w-full h-28 object-cover rounded-md rounded-r-none"
                src="https://www.pinupacc.com/images/dummy.png"
              >
            </div>
            <div class="col-span-2 block">
              <p class="text-gray-500 pt-2 line-clamp-1 text-sm font-medium">
                {{ product.title }}
              </p>
              <div class="block absolute bottom-3">
                <div class="flex relative items-center">
                  <p
                    v-if="product.pricetype === 'contract'"
                    class="
                              text-green-600 font-semibold text-base
                            "
                  >
                    {{ $t('text.byAgreement') }}
                  </p>
                  <p
                    v-else-if="product.type === '1'"
                    class="text-green-600 lowercase font-semibold text-base"
                  >
                    {{ product.price }} {{ $t('word.sum') }} <span v-if="product.unit">/ {{ product.unit.namejson }}</span>
                  </p>
                  <p v-else class="text-light-orange lowercase font-semibold text-base">
                    {{ product.price }} {{ $t('word.sum') }} <span v-if="product.unit">/ {{ product.unit.namejson }}</span>
                  </p>
                  <!-- <p v-if="products[0].unit !== null" class="text-gray-500 text-sm ml-1 lowercase">
                    {{ $t('word.sum') }} / {{ products[0].unit.name }}
                  </p> -->
                </div>
                <div class="flex items-center space-x-8 justify-between">
                  <!-- <p class="text-gray-500 text-xs">
                    {{ product.author.name }} {{ product.author.surname }}
                  </p> -->
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
                      <path stroke="#4b5563" stroke-linecap="round" stroke-linejoin="round" d="M7.5 6c0 .828-.672 1.5-1.5 1.5-.829 0-1.5-.672-1.5-1.5S5.17 4.5 6 4.5c.828 0 1.5.672 1.5 1.5z" />
                      <path stroke="#4b5563" stroke-linecap="round" stroke-linejoin="round" d="M1.229 6C1.866 3.971 3.761 2.5 6 2.5s4.134 1.471 4.771 3.5c-.637 2.029-2.532 3.5-4.77 3.5-2.24 0-4.135-1.471-4.772-3.5z" />
                    </svg>
                    <span class="ml-1 text-xs text-gray-700">{{ product.seen }}</span>
                  </div>
                </div>
              </div>
            </div>
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
  name: 'TradingSwiper',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    products: Array
  },
  data () {
    return {
      tradingOption: {
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
            slidesPerView: 1.1,
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
