<template>
  <div class="main-styles pb-16">
    <div class="container mx-auto flex items-center gap-3 px-4 py-7">
      <nuxt-link to="/">
        <the-icon src="home" />
      </nuxt-link>
      <the-icon src="right-arrow-black" />
      <span class="text-sm font-medium text-gray-500 cursor-pointer">Профиль</span>
      <the-icon src="right-arrow-black" />
      <span class="text-sm font-medium text-gray-500 cursor-pointer">Мои заказы</span>
    </div>
    <div class="container mx-auto">
      <div class="container mx-auto flex gap-5 xl:px-0 sm:px-4 px-2 md:flex-nowrap flex-wrap">
        <div class="w-96 flex flex-col gap-5 shrink-0 rwd-width mx-auto">
          <div class="switch" @click="switchOn = !switchOn">
            <div class="switch-item delay-300" :class="{ 'switch-right': switchOn, 'switch-left': !switchOn }"></div>
            <div>
              <span :class="{'text-orange-600': !switchOn, 'text-gray-500': switchOn}">Активные</span>
            </div>
            <div>
              <span :class="{'text-orange-600': switchOn, 'text-gray-500': !switchOn}">История</span>
            </div>
          </div>
          <div v-if="!switchOn" class="flex flex-col px-4 gap-3 mt-5 md:h-96 h-48 scroll-style	overflow-y-scroll">
            <div
              v-for="item in orderProgress"
              @click="getOrderDetail(item)"
              class="p-4 cursor-pointer bg-white rounded-lg flex items-center justify-between rwd-card"
            >
              <h4 class="font-medium text-lg text-gray-800">Заказ №{{ item.id }}</h4>
              <the-icon :src="item.status === 'pending' ? 'order-clock' : '' " />
            </div>
<!--            <div class="p-4 cursor-pointer bg-white rounded-lg flex items-center justify-between">-->
<!--              <h4 class="font-medium text-lg text-gray-800">Заказ №1881</h4>-->
<!--              <the-icon src="order-clipboard" />-->
<!--            </div>-->
<!--            <div class="p-4 bg-white cursor-pointer rounded-lg flex items-center justify-between">-->
<!--              <h4 class="font-medium text-lg text-gray-800">Заказ №1881</h4>-->
<!--              <the-icon src="order-cooked" />-->
<!--            </div>-->
<!--            <div class="p-4 bg-white rounded-lg cursor-pointer flex items-center justify-between">-->
<!--              <h4 class="font-medium text-lg text-gray-800">Заказ №1881</h4>-->
<!--              <the-icon src="order-delivery" />-->
<!--            </div>-->
          </div>
          <div v-else class="flex flex-col px-4 gap-3 mt-5 md:h-96 h-48 scroll-style	overflow-y-scroll">
            <div @click="getOrderDetail(item)" v-for="item in orderHistory" class="p-4 cursor-pointer bg-white rounded-lg flex items-center justify-between">
              <h4 class="font-medium text-lg text-gray-800">Заказ №{{ item.id }}</h4>
              <the-icon :src="item.status === 'cancelled' ? 'ban' : 'order-confirmed'" />
            </div>
          </div>
        </div>
        <div
          v-if="orderDetail.status === 'pending'"
          class="p-6 bg-white rounded-2xl flex xl:flex-nowrap flex-wrap gap-4 items-center justify-center w-full"
        >
          <div class="flex flex-col text-center items-center justify-between xl:h-full h-64 xl:w-1/2 w-80">
            <h2 class="font-bold text-2xl text-gray-800">Заказ №{{ orderDetail.id }}</h2>
            <div class="relative">
              <the-icon class="relative z-10" src="order-1" />
              <div class="w-40 h-40 bg-gray-100 rounded-full mx-auto absolute top-0 left-6"></div>
              <p class="font-medium text-gray-800 mt-8 text-center">Заказ ожидает принятия....</p>
            </div>
            <button
              class="w-80 py-3 bg-blue-100 rounded-3xl cursor-pointer
              outline-none font-semibold text-gray-800 w-none-1140"
            >
              Отменить заказ
            </button>
          </div>
          <div class="xl:w-1/2 w-80 bg-white">
            <div class="border border-gray-100 rounded-2xl p-5 gap-5 flex flex-col">
              <div class="flex flex-col gap-2.5">
                <h2 class="text-gray-800 font-semibold text-lg">Детали заказа</h2>
                <p class="text-gray-800">Повар: <span class="font-semibold">{{ orderDetail?.vendor?.user?.full_name }}</span></p>
              </div>
              <div class="flex flex-col">
                <div v-for="item in orderDetail.food" class="border-b border-gray-200 py-2">
                  <h4 class="text-gray-700">{{ item.name }}</h4>
                  <p class="text-gray-800 font-semibold">{{ item.min_amount }}x {{ item.price }} сум /<span class="font-normal">{{ item.unit?.name }}</span></p>
                </div>
              </div>
              <div class="border-b border-gray-200 py-2">
                <div class="flex justify-between">
                  <h5 class="text-gray-700">Блюда</h5>
                  <h5 class="text-gray-700">{{ orderDetail.order_price }} сум</h5>
                </div>
                <div class="flex justify-between">
                  <h5 class="text-gray-700">Доставка</h5>
                  <h5 class="text-gray-700">{{ orderDetail?.delivery_price }} сум</h5>
                </div>
              </div>
              <div class="flex justify-between">
                <h5 class="text-gray-800 font-bold">Итого</h5>
                <h5 class="text-gray-800 font-bold">{{ orderDetail.total_price }} сум</h5>
              </div>
            </div>
            <button
              class="w-80 py-3 bg-blue-100 rounded-3xl cursor-pointer
              outline-none font-semibold text-gray-800 w-block-1140"
            >
              Отменить заказ
            </button>
          </div>
        </div>
        <div
          v-else-if="false"
          class="w-8/12 flex shrink-0 bg-white rounded-2xl justify-center p-12 gap-14"
        >
          <div class="flex flex-col text-center items-center justify-between h-full xl:w-1/2">
            <h2 class="font-bold text-2xl text-gray-800">Заказ №1881</h2>
            <div class="relative">
              <the-icon class="relative z-10" src="order-2" />
              <div class="w-40 h-40 bg-gray-100 rounded-full mx-auto absolute top-0 left-6"></div>
              <p class="font-medium text-gray-800 mt-8 text-center">Ваш заказ принят</p>
            </div>
            <button
              class="w-80 py-3 bg-blue-100 rounded-3xl cursor-pointer
              outline-none font-semibold text-gray-800"
            >
              Отменить заказ
            </button>
          </div>
          <div class="xl:w-1/2 bg-white">
            <div class="border border-gray-100 rounded-2xl p-5 gap-5 flex flex-col">
              <div class="flex flex-col gap-2.5">
                <h2 class="text-gray-800 font-semibold text-lg">Детали заказа</h2>
                <p class="text-gray-800">Повар: <span class="font-semibold">Гульбахор Касымова</span></p>
              </div>
              <div class="flex flex-col">
                <div class="border-b border-gray-200 py-2">
                  <h4 class="text-gray-700">Куриный суп</h4>
                  <p class="text-gray-800 font-semibold">2x 30 000 сум /<span class="font-normal">порция</span></p>
                </div>
                <div class="border-b border-gray-200 py-2">
                  <h4 class="text-gray-700">Куриный суп</h4>
                  <p class="text-gray-800 font-semibold">2x 30 000 сум /<span class="font-normal">порция</span></p>
                </div>
                <div class="border-b border-gray-200 py-2">
                  <h4 class="text-gray-700">Куриный суп</h4>
                  <p class="text-gray-800 font-semibold">2x 30 000 сум /<span class="font-normal">порция</span></p>
                </div>
              </div>
              <div class="border-b border-gray-200 py-2">
                <div class="flex justify-between">
                  <h5 class="text-gray-700">Блюда</h5>
                  <h5 class="text-gray-700">270 000 сум</h5>
                </div>
                <div class="flex justify-between">
                  <h5 class="text-gray-700">Доставка</h5>
                  <h5 class="text-gray-700">10 000 сум</h5>
                </div>
              </div>
              <div class="flex justify-between">
                <h5 class="text-gray-800 font-bold">Итого</h5>
                <h5 class="text-gray-800 font-bold">230 000 сум</h5>
              </div>
            </div>
          </div>
        </div>
        <div
          v-else-if="false"
          class="w-8/12 flex shrink-0 bg-white rounded-2xl justify-center p-12 gap-14"
        >
          <div class="flex flex-col text-center items-center gap-7 h-full xl:w-1/2">
            <h2 class="font-bold text-2xl text-gray-800">Заказ №1881</h2>
            <div class="relative">
              <the-icon class="relative z-10" src="order-3" />
              <div class="w-40 h-40 bg-gray-100 rounded-full mx-auto absolute top-8 left-2"></div>
              <p class="font-medium text-gray-800 mt-8 text-center">Заказ готовится</p>
            </div>
          </div>
          <div class="xl:w-1/2 bg-white">
            <div class="border border-gray-100 rounded-2xl p-5 gap-5 flex flex-col">
              <div class="flex flex-col gap-2.5">
                <h2 class="text-gray-800 font-semibold text-lg">Детали заказа</h2>
                <p class="text-gray-800">Повар: <span class="font-semibold">Гульбахор Касымова</span></p>
              </div>
              <div class="flex flex-col">
                <div class="border-b border-gray-200 py-2">
                  <h4 class="text-gray-700">Куриный суп</h4>
                  <p class="text-gray-800 font-semibold">2x 30 000 сум /<span class="font-normal">порция</span></p>
                </div>
                <div class="border-b border-gray-200 py-2">
                  <h4 class="text-gray-700">Куриный суп</h4>
                  <p class="text-gray-800 font-semibold">2x 30 000 сум /<span class="font-normal">порция</span></p>
                </div>
                <div class="border-b border-gray-200 py-2">
                  <h4 class="text-gray-700">Куриный суп</h4>
                  <p class="text-gray-800 font-semibold">2x 30 000 сум /<span class="font-normal">порция</span></p>
                </div>
              </div>
              <div class="border-b border-gray-200 py-2">
                <div class="flex justify-between">
                  <h5 class="text-gray-700">Блюда</h5>
                  <h5 class="text-gray-700">270 000 сум</h5>
                </div>
                <div class="flex justify-between">
                  <h5 class="text-gray-700">Доставка</h5>
                  <h5 class="text-gray-700">10 000 сум</h5>
                </div>
              </div>
              <div class="flex justify-between">
                <h5 class="text-gray-800 font-bold">Итого</h5>
                <h5 class="text-gray-800 font-bold">230 000 сум</h5>
              </div>
            </div>
          </div>
        </div>
        <div
          v-else-if="false"
          class="w-8/12 flex shrink-0 bg-white rounded-2xl justify-center p-12 gap-14"
        >
          <div class="flex flex-col text-center items-center justify-between h-full xl:w-1/2">
            <h2 class="font-bold text-2xl text-gray-800">Заказ №1881</h2>
            <div class="relative">
              <the-icon class="relative z-10" src="order-4" />
              <div class="w-40 h-40 bg-gray-100 rounded-full mx-auto absolute top-0 left-12"></div>
              <p class="font-medium text-gray-800 mt-2 translate-x-6">Заказ в пути</p>
            </div>
            <div class="w-80 py-4 px-3 bg-gray-100 rounded-2xl flex items-center justify-between">
              <div class="flex items-center gap-2 text-left">
                <div class="avatar">
                  <img class="w-full object-cover" src="https://i.pravatar.cc/101" alt="Avatar">
                </div>
                <div>
                  <h6 class="font-semibold text-xs text-gray-700 leading-3">Азиз Каримов</h6>
                  <span class="text-xs text-gray-700">курьер</span>
                </div>
              </div>
              <div class="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center cursor-pointer">
                <the-icon src="phone" />
              </div>
            </div>
          </div>
          <div class="xl:w-1/2 bg-white">
            <div class="border border-gray-100 rounded-2xl p-5 gap-5 flex flex-col">
              <div class="flex flex-col gap-2.5">
                <h2 class="text-gray-800 font-semibold text-lg">Детали заказа</h2>
                <p class="text-gray-800">Повар: <span class="font-semibold">Гульбахор Касымова</span></p>
              </div>
              <div class="flex flex-col">
                <div class="border-b border-gray-200 py-2">
                  <h4 class="text-gray-700">Куриный суп</h4>
                  <p class="text-gray-800 font-semibold">2x 30 000 сум /<span class="font-normal">порция</span></p>
                </div>
                <div class="border-b border-gray-200 py-2">
                  <h4 class="text-gray-700">Куриный суп</h4>
                  <p class="text-gray-800 font-semibold">2x 30 000 сум /<span class="font-normal">порция</span></p>
                </div>
                <div class="border-b border-gray-200 py-2">
                  <h4 class="text-gray-700">Куриный суп</h4>
                  <p class="text-gray-800 font-semibold">2x 30 000 сум /<span class="font-normal">порция</span></p>
                </div>
              </div>
              <div class="border-b border-gray-200 py-2">
                <div class="flex justify-between">
                  <h5 class="text-gray-700">Блюда</h5>
                  <h5 class="text-gray-700">270 000 сум</h5>
                </div>
                <div class="flex justify-between">
                  <h5 class="text-gray-700">Доставка</h5>
                  <h5 class="text-gray-700">10 000 сум</h5>
                </div>
              </div>
              <div class="flex justify-between">
                <h5 class="text-gray-800 font-bold">Итого</h5>
                <h5 class="text-gray-800 font-bold">230 000 сум</h5>
              </div>
            </div>
          </div>
        </div>
        <div
          v-else-if="false"
          class="w-8/12 flex shrink-0 bg-white rounded-2xl justify-center p-12 gap-14"
        >
          <div class="flex flex-col text-center items-center gap-16 h-full xl:w-1/2">
            <h2 class="font-bold text-2xl text-gray-800">Заказ №1881</h2>
            <div class="relative">
              <the-icon class="relative z-10" src="order-5" />
              <div class="w-40 h-40 bg-gray-100 rounded-full mx-auto absolute top-0 left-6"></div>
              <p class="font-medium text-gray-800 mt-8 text-center">Пожалуйста оцените заказ :)</p>
            </div>
          </div>
          <div class="xl:w-1/2 bg-white flex flex-col gap-4">
            <div class="border border-gray-100 rounded-2xl p-5 gap-5 flex flex-col">
              <h4 class="font-semibold text-gray-700 text-center">Как вам доставка?</h4>
              <div class="flex items-end justify-center gap-12">
                <div class="flex flex-col gap-1 items-center cursor-pointer">
                  <the-icon src="emoj-1" />
                  <h6 class="text-xs text-gray-600">Опоздали(</h6>
                </div>
                <div class="flex flex-col gap-1 items-center cursor-pointer">
                  <the-icon src="emoj-2" />
                  <h6 class="text-xs text-gray-600">Во время!</h6>
                </div>
              </div>
            </div>
            <div class="border border-gray-100 rounded-2xl p-5 gap-5 flex flex-col">
              <h4 class="font-semibold text-gray-700 text-center">Как вам еда?</h4>
              <div class="flex items-end justify-center gap-12">
                <div class="flex flex-col gap-1 items-center cursor-pointer">
                  <the-icon src="emoj-3" />
                  <h6 class="text-xs text-gray-600">Так себе</h6>
                </div>
                <div class="flex flex-col gap-1 items-center cursor-pointer">
                  <the-icon src="emoj-4" />
                  <h6 class="text-xs text-gray-600">Вкусно!</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-else-if="false"
          class="w-8/12 flex shrink-0 bg-white rounded-2xl justify-center p-12 gap-14"
        >
          <div class="flex flex-col text-center items-center gap-12 h-full xl:w-1/2">
            <h2 class="font-bold text-2xl text-gray-800">Заказ №1881</h2>
            <div class="relative">
              <the-icon class="relative z-10" src="order-6" />
              <div class="w-40 h-40 bg-gray-100 rounded-full mx-auto absolute -top-2 left-3"></div>
              <p class="font-medium text-gray-800 mt-8 text-center">Спасибо за ваш отзыв!</p>
            </div>
          </div>
          <div class="xl:w-1/2 bg-white">
            <div class="border border-gray-100 rounded-2xl p-5 gap-5 flex flex-col">
              <div class="flex flex-col gap-2.5">
                <h2 class="text-gray-800 font-semibold text-lg">Детали заказа</h2>
                <p class="text-gray-800">Повар: <span class="font-semibold">Гульбахор Касымова</span></p>
              </div>
              <div class="flex flex-col">
                <div class="border-b border-gray-200 py-2">
                  <h4 class="text-gray-700">Куриный суп</h4>
                  <p class="text-gray-800 font-semibold">2x 30 000 сум /<span class="font-normal">порция</span></p>
                </div>
                <div class="border-b border-gray-200 py-2">
                  <h4 class="text-gray-700">Куриный суп</h4>
                  <p class="text-gray-800 font-semibold">2x 30 000 сум /<span class="font-normal">порция</span></p>
                </div>
                <div class="border-b border-gray-200 py-2">
                  <h4 class="text-gray-700">Куриный суп</h4>
                  <p class="text-gray-800 font-semibold">2x 30 000 сум /<span class="font-normal">порция</span></p>
                </div>
              </div>
              <div class="border-b border-gray-200 py-2">
                <div class="flex justify-between">
                  <h5 class="text-gray-700">Блюда</h5>
                  <h5 class="text-gray-700">270 000 сум</h5>
                </div>
                <div class="flex justify-between">
                  <h5 class="text-gray-700">Доставка</h5>
                  <h5 class="text-gray-700">10 000 сум</h5>
                </div>
              </div>
              <div class="flex justify-between">
                <h5 class="text-gray-800 font-bold">Итого</h5>
                <h5 class="text-gray-800 font-bold">230 000 сум</h5>
              </div>
            </div>
          </div>
        </div>
        <div
          v-else-if="orderDetail.status === 'cancelled'"
          class="p-6 bg-white rounded-2xl flex xl:flex-nowrap flex-wrap gap-4 items-center justify-center w-full"
        >
          <div class="flex flex-col text-center items-center justify-between xl:h-full h-64 xl:w-1/2 w-80">
            <h2 class="font-bold text-2xl text-gray-800">Заказ №{{ orderDetail.id }}</h2>
            <div class="relative">
              <the-icon class="relative z-10" src="order-7" />
              <div class="w-40 h-40 bg-gray-100 rounded-full mx-auto absolute -top-2 left-4"></div>
              <p class="font-medium text-gray-800 mt-8 text-center">Заказ отменён</p>
            </div>
          </div>
          <div class="xl:w-1/2 bg-white">
            <div class="border border-gray-100 rounded-2xl p-5 gap-5 flex flex-col">
              <div class="flex flex-col gap-2.5">
                <h2 class="text-gray-800 font-semibold text-lg">Детали заказа</h2>
                <p class="text-gray-800">Повар: <span class="font-semibold">{{ orderDetail?.vendor?.user?.full_name }}</span></p>
              </div>
              <div class="flex flex-col">
                <div v-for="item in orderDetail.food" class="border-b border-gray-200 py-2">
                  <h4 class="text-gray-700">{{ item.name }}</h4>
                  <p class="text-gray-800 font-semibold">{{ item.min_amount }}x {{ item.price }} сум /<span class="font-normal">{{ item.unit?.name }}</span></p>
                </div>
              </div>
              <div class="border-b border-gray-200 py-2">
                <div class="flex justify-between">
                  <h5 class="text-gray-700">Блюда</h5>
                  <h5 class="text-gray-700">{{ orderDetail.order_price }} сум</h5>
                </div>
                <div class="flex justify-between">
                  <h5 class="text-gray-700">Доставка</h5>
                  <h5 class="text-gray-700">{{ orderDetail?.delivery_price }} сум</h5>
                </div>
              </div>
              <div class="flex justify-between">
                <h5 class="text-gray-800 font-bold">Итого</h5>
                <h5 class="text-gray-800 font-bold">{{ orderDetail.total_price }} сум</h5>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="p-6 w-full flex bg-white rounded-2xl items-center justify-center gap-14">
          <div class="flex flex-col gap-14">
            <the-icon src="order-empty" class="mx-auto" />
            <p class="font-medium	md:text-xl text-lg text-gray-800">Выберите свой заказ чтобы посмотреть</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchOn: false,
      orders: [],
      orderHistory: [],
      orderProgress: [],
      orderDetail: []
    }
  },
  async fetch() {
    await this.getOrders()
  },
  methods: {
    async getOrders() {
      await this.$axios.get('orders').then(res => {
        const { objects } = res
        this.orderProgress = objects.filter(res => res.status === "pending")
        this.orderHistory = objects.filter(res => res.status === "cancelled" || res.status === "finished")
        this.orders = objects
      })
    },
    getOrderDetail(item) {
      this.orderDetail = item
      console.log(this.orderDetail)
    }
  }
}
</script>

<style scoped>
.scroll-style::-webkit-scrollbar {
  width: 4px;
  border-radius: 24px;
}
.scroll-style::-webkit-scrollbar-track {
  background: transparent;
}
.scroll-style::-webkit-scrollbar-thumb {
  background: #E5E7EB;
}
.scroll-style::-webkit-scrollbar-thumb:hover {
  background: transparent;
}
.main-styles {
  background: #F3F4F6;
}
.switch {
  position: relative;
  background: #FFFFFF;
  border-radius: 24px;
  width: 368px;
  height: 48px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.switch span {
  position: relative;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  z-index: 4;
}
.switch > div {
  width: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
}
.switch-item {
  width: 188px;
  height: 32px;
  background: #FFEEE3;
  border-radius: 24px;
  transition: ease-in-out .3s;
}
.switch-left {
  position: absolute;
  top: 4px;
  left: 4px;
  transition: ease-in-out .3s;
}
.switch-right {
  position: absolute;
  right: 4px !important;
  top: 4px;
  transition: ease-in-out .3s;
}
.avatar {
  border: 1.5px solid #EFEFEF;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 100%;
}
.w-block-1140 {
  display: none;
}

@media screen and (max-width: 1140px) {
  .w-none-1140 {
    display: none;
  }
  .w-block-1140 {
    display: block;
    margin-top: 8px;
  }
}
@media screen and (max-width: 800px) {
  .rwd-width {
    width: 320px;
  }
  .rwd-card {
    width: 280px;
  }
  .switch {
    width: 310px;
  }
}
</style>
