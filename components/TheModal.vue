<template>
  <div class="h-full overflow-y-scroll">
    <div v-if="$route.query.foodSaw === 'multipleOrder'">
      <div class="multiple-modal">
        <div class="flex items-center justify-between">
          <h3 class="text-gray-800 text-xl font-bold">Ваши корзинки</h3>
          <the-icon class="cursor-pointer" src="trash-gray" />
        </div>
        <div class="mt-4 flex flex-col gap-3">
          <div @click="orderDetail" class="product">
            <div class="cart-bg">
              <the-icon src="big-shopping-cart" class="flex shrink-0 w-14	h-14" />
            </div>
            <div class="flex flex-col gap-1">
              <h3 class="font-bold text-gray-800">Корзинка №1</h3>
              <div class="flex items-center gap-2">
                <the-icon src="chef-ligth" />
                <span class="font-medium text-gray-700 text-sm">{{$store.state.orderCarzina.vendorName ? $store.state.orderCarzina.vendorName : 'salom'}}</span>
              </div>
              <div class="flex items-center gap-2">
                <the-icon src="cash" />
                <span class="font-semibold text-sm">{{$store.state.orderCarzina.oldPrice}} сум</span>
              </div>
            </div>
          </div>
<!--          <div @click="orderDetail" class="product">-->
<!--            <div class="cart-bg">-->
<!--              <the-icon src="big-shopping-cart" class="flex shrink-0 w-14	h-14" />-->
<!--            </div>-->
<!--            <div class="flex flex-col gap-1">-->
<!--              <h3 class="font-bold text-gray-800">Корзинка №1</h3>-->
<!--              <div class="flex items-center gap-2">-->
<!--                <the-icon src="chef-ligth" />-->
<!--                <span class="font-medium text-gray-700 text-sm">Татьяна Ракитина</span>-->
<!--              </div>-->
<!--              <div class="flex items-center gap-2">-->
<!--                <the-icon src="cash" />-->
<!--                <span class="font-semibold text-sm">75 000 сум</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div @click="orderDetail" class="product">-->
<!--            <div class="cart-bg">-->
<!--              <the-icon src="big-shopping-cart" class="flex shrink-0 w-14	h-14" />-->
<!--            </div>-->
<!--            <div class="flex flex-col gap-1">-->
<!--              <h3 class="font-bold text-gray-800">Корзинка №1</h3>-->
<!--              <div class="flex items-center gap-2">-->
<!--                <the-icon src="chef-ligth" />-->
<!--                <span class="font-medium text-gray-700 text-sm">Татьяна Ракитина</span>-->
<!--              </div>-->
<!--              <div class="flex items-center gap-2">-->
<!--                <the-icon src="cash" />-->
<!--                <span class="font-semibold text-sm">75 000 сум</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
      <div class="modal-background" @click="() => $router.push({path: localePath($route.path), query: {...$route.query, order: undefined}})"></div>
    </div>
    <div v-if="$route.query.foodSaw === 'detailOrder'">
      <div class="multiple-modal">
        <div class="flex items-center justify-between">
          <div @click="back">
            <the-icon src="arrow-left" class="cursor-pointer" />
          </div>
          <h3 class="text-gray-800 text-xl font-bold">Корзинка №1</h3>
          <the-icon class="cursor-pointer" src="trash-gray" />
        </div>
        <div class="flex items-center justify-between mt-3">
          <h4 class="font-medium text-sm text-gray-800">
            Ваш заказ от повара
            <br>
            <span class="text-orange-600">{{$store.state.orderCarzina.vendorName}}</span>
          </h4>
          <div class="w-14 h-14 rounded-full overflow-hidden border-2 border-orange-100">
            <img class="w-full object-cover" src="https://i.pravatar.cc/140" alt="Avatar Chef">
          </div>
        </div>
        <div class="mt-4 flex flex-col gap-4" v-for="(item, index) in $store.state.orderCarzina.orderList[0].foods">
          <div class="flex gap-5">
            <div class="w-24 h-24 rounded-lg overflow-hidden flex shrink-0">
              <img class="w-full object-cover" src="https://picsum.photos/100" alt="Food Photo">
            </div>
            <div class="flex items-center justify-between w-full" >
              <div class="flex flex-col justify-between gap-4">
                <div>
                  <h4 class="text-gray-700">{{item.add.name}}</h4>
                  <h4 class="font-bold text-gray-700">{{item.add.price}} сум</h4>

                </div>
                <div class="flex gap-3 items-center">
                  <div @click.stop="itemOrderRemove(item)" class="w-7	h-7 rounded bg-gray-200 flex items-center justify-center cursor-pointer">
                    <span class="line"></span>
                  </div>
                  <span class="font-semibold text-gray-700">{{item.count}}</span>
                  <div @click.stop="itemOrderAdd(item)" class="w-7	h-7 rounded bg-gray-200 flex items-center justify-center cursor-pointer">
                    <span class="text-gray-700 text-3xl leading-none -translate-y-1">+</span>
                  </div>
                </div>
              </div>
              <div @click.stop="deleteOrder(item)">
                <the-icon class="flex shrink-0 cursor-pointer" src="dark-x"  />
              </div>
            </div>
          </div>
        </div>
        <div
          @click="comment = true"
          style="box-shadow: -5px 2px 20px -11px rgba(0, 0, 0, 0.14);"
          class="mt-8 px-4 py-2.5 border border-gray-200 rounded-md flex flex-col gap-3"
        >
          <div
            class="flex items-center justify-between"
          >
            <div class="flex gap-2 items-center"            >
              <the-icon src="document" />
              <h3 class="text-sm font-medium text-gray-700">Комментарий к заказу</h3>
            </div>
            <div class="cursor-pointer" v-if="comment" @click.stop="comment = false">
              <the-icon src="dark-x" />
            </div>
          </div>
          <textarea v-if="comment" class="w-full bg-gray-100 rounded-lg outline-orange-600 p-1" rows="4"></textarea>
        </div>
        <div class="flex items-center justify-between mt-5">
          <div class="flex items-center gap-2">
            <h3 class="text-gray-700 font-semibold">Столовые приборы</h3>
            <the-icon src="information-circle" />
          </div>
          <div class="container-switch">
            <input v-model="choose" type="checkbox" id="switch">
            <label for="switch">
              <div class="switch">
                <div class="bar"></div>
              </div>
            </label>
          </div>
        </div>
        <div v-if="choose" class="mt-4 flex flex-col gap-4">
          <div class="flex gap-5">
            <div class="w-24 h-24 rounded-lg overflow-hidden flex shrink-0">
              <img class="w-full object-cover" src="https://picsum.photos/100" alt="Food Photo">
            </div>
            <div class="flex items-center justify-between w-full">
              <div class="flex flex-col justify-between gap-4">
                <div>
                  <h4 class="text-gray-700">Теплый салат</h4>
                  <h4 class="font-bold text-gray-700">15,000 сум</h4>
                </div>
                <div class="flex gap-3 items-center">
                  <div class="w-7	h-7 rounded bg-gray-200 flex items-center justify-center cursor-pointer">
                    <span class="line"></span>
                  </div>
                  <span class="font-semibold text-gray-700">1</span>
                  <div class="w-7	h-7 rounded bg-gray-200 flex items-center justify-center cursor-pointer">
                    <span class="text-gray-700 text-3xl leading-none -translate-y-1">+</span>
                  </div>
                </div>
              </div>
              <the-icon class="flex shrink-0 cursor-pointer" src="dark-x" />
            </div>
          </div>
        </div>

        <button @click.stop="orderListSee" class="w-full text-white bg-orange-600 py-3 rounded-3xl font-semibold mt-8">{{$store.state.orderCarzina.oldPrice}} сум перейти к оплате</button>
      </div>
      <div class="modal-background" @click="() => $router.push({path: localePath($route.path), query: {...$route.query, order: undefined}})"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['foodDetail'],
  data() {
    return {
      comment: false,
      choose: false,
      priceCount: 0
    }
  },
  mounted() {
  },
  computed: {
    fullPrice () {
      return this.$store.state.orderCarzina.orderList[0].foods.reduce((sum, el) => sum+el.add.price, 0)
    }
  },
  methods: {
    orderListSee () {
      this.$router.push({path: this.localePath('/order')})
    },
    itemOrderRemove (item) {
      this.$store.dispatch('orderCarzina/item_order_remove', item.add.id)
      console.log(item)
    },
    itemOrderAdd (item) {
      this.$store.dispatch('orderCarzina/item_order_add', item.add.id)
      console.log(item)
    },
    deleteOrder (item) {
      console.log(item)
      this.$store.dispatch('orderCarzina/remove_order', item.add.id)
    },
    orderDetail() {
      this.$router.push({path: this.localePath(this.$route.path), query: {...this.$route.query, foodSaw: 'detailOrder'}})
    },
    back() {
      this.$router.push({path: this.localePath(this.$route.path), query: {...this.$route.query, foodSaw: 'multipleOrder'}})
    }
  }
}
</script>

<style scoped>
.modal-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: #111827;
  opacity: 0.3;
}
.multiple-modal {
  width: 400px;
  position: fixed;
  z-index: 3;
  display: flex;
  flex-direction: column;
  top: 80px;
  right: 0;
  bottom: 0;
  padding: 24px;
  background: #ffffff;
}
.cart-bg {
  background: #FFFFFF;
  box-shadow: -3px -2px 20px -10px rgba(0, 0, 0, 0.19), 0px 4px 7px -1px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 80px;
  height: 80px;
}
.product {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #FFFFFF;
  box-shadow: -6px 2px 28px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  cursor: pointer;
}
.line {
  width: 14px;
  height: 1.75px;
  background: #374151;
  border-radius: 4px;
  cursor: pointer;
}

.container-switch input[type="checkbox"] {
  display: none;
}

.container-switch label .switch {
  background: linear-gradient(90deg, #fd9657 0%, #EA580C 100%);
  width: 36px;
  height: 20px;
  border-radius: 50px;
  padding: 1.5px;
  position: relative;
  border: 2px #fff solid;
  cursor: pointer;
}

.container-switch input[type="checkbox"] + label .bar {
  background: linear-gradient(90deg, #ffffff 0%, #ffffff 100%);
  height: 14px;
  width: 14px;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}
.container-switch input[type="checkbox"]:checked + label .bar {
  background: linear-gradient(90deg, #ffffff 0%, #ffffff 100%);
  transform: translateX(16px);
}

.container-switch label:active .bar {
  box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0.322);
}
</style>
