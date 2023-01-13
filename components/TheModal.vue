<template>
  <div class="h-full overflow-y-scroll">
    <div v-if="$route.query.foodSaw === 'multipleOrder'" @click="closeModal">
      <div class="multiple-modal">
        <div class="flex items-center justify-between">
          <h3 class="text-gray-800 text-xl font-bold">Ваши корзинки</h3>
<!--          <the-icon class="cursor-pointer" src="trash-gray"/>-->
        </div>
        <div class="mt-4 flex flex-col gap-3 hover_class transition-all delay-75" v-for="(item, index) in $store.state.cart.cartList" :key="index">
          <div @click.stop="orderDetail(item.id, index+1)" class="product">
            <div class="cart-bg">
              <the-icon src="big-shopping-cart" class="flex shrink-0 w-14	h-14"/>
            </div>
            <div class="flex flex-col gap-1">
              <h3 class="font-bold text-gray-800">Корзинка № {{ index + 1 }}</h3>
              <div class="flex items-center gap-2">
                <the-icon src="chef-ligth"/>
                <span
                  class="font-medium text-gray-700 text-sm">{{vendorNameFormat(item)}}</span>
              </div>
              <div class="flex items-center gap-2">
                <the-icon src="cash"/>
                <span class="font-semibold text-sm">{{ item.total_price }} сум</span>
              </div>
            </div>
            <button @click.stop="deleteOrder(item)" class="delete_button"><the-icon class="cursor-pointer" src="trash-gray"/></button>
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
      <div class="modal-background"
           @click="() => $router.push({path: localePath($route.path), query: {...$route.query, order: undefined}})"></div>
    </div>
    <div v-if="$route.query.foodSaw === 'detailOrder'">
      <div class="multiple-modal">
        <div class="flex items-center justify-between">
          <div @click.stop="back">
            <the-icon src="arrow-left" class="cursor-pointer"/>
          </div>
          <h3 class="text-gray-800 text-xl font-bold">Корзинка №{{ ' ' + $route.query.carNumber }}</h3>
          <button @click.stop="deleteOrder($store.state.cart.cartItem.id)">
            <the-icon class="cursor-pointer" src="trash-gray"/>
          </button>
        </div>
        <div class="flex items-center justify-between mt-3">
          <h4 class="font-medium text-sm text-gray-800">
            Ваш заказ от повара
            <br>
            <span class="text-orange-600">{{ $store.state.orderCarzina.vendorName }}</span>
          </h4>
          <div class="w-14 h-14 rounded-full overflow-hidden border-2 border-orange-100">
            <img class="w-full object-cover" src="https://i.pravatar.cc/140" alt="Avatar Chef">
          </div>
        </div>
        <div class="mt-4 flex flex-col gap-4" v-for="(item, index) in $store.state.cart.cartItem.items">
          <div class="flex gap-5">
            <div class="w-24 h-24 rounded-lg overflow-hidden flex shrink-0">
              <img class="w-full object-cover" src="https://picsum.photos/100" alt="Food Photo">
            </div>
            <div class="flex items-center justify-between w-full">
              <div class="flex flex-col justify-between gap-4">
                <div>
                  <h4 class="text-gray-700">{{ item.food.name }}</h4>
                  <h4 class="font-bold text-gray-700">{{ item.food.price }} сум</h4>

                </div>
                <div class="flex gap-3 items-center">
                  <button :disabled="isDisbale" @click.stop="increment(item)"
                       class="w-7	h-7 rounded bg-gray-200 flex items-center justify-center cursor-pointer">
                    <span class="line"></span>
                  </button>
                  <span class="font-semibold text-gray-700">{{ item.quantity }}</span>
                  <button :disabled="isDisbale" @click.stop="decrement(item)"
                       class="w-7	h-7 rounded bg-gray-200 flex items-center justify-center cursor-pointer">
                    <span class="text-gray-700 text-3xl leading-none -translate-y-1">+</span>
                  </button>
                </div>
              </div>
              <div @click.stop="itemOrderRemove(item.id)">
                <the-icon class="flex shrink-0 cursor-pointer" src="dark-x"/>
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
            <div class="flex gap-2 items-center">
              <the-icon src="document"/>
              <h3 class="text-sm font-medium text-gray-700">Комментарий к заказу</h3>
            </div>
            <div class="cursor-pointer" v-if="comment" @click.stop="comment = false">
              <the-icon src="dark-x"/>
            </div>
          </div>
          <textarea ref="input_text" v-show="comment" v-model="comment_text" class="w-full bg-gray-100 rounded-lg outline-orange-600 p-1"
                    rows="4"></textarea>
        </div>
        <div class="flex items-center justify-between mt-5">
          <div class="flex items-center gap-2">
            <h3 class="text-gray-700 font-semibold">Столовые приборы</h3>
            <the-icon src="information-circle"/>
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
              <the-icon class="flex shrink-0 cursor-pointer" src="dark-x"/>
            </div>
          </div>
        </div>
        <button @click.stop="orderListSee" class="w-full text-white bg-orange-600 py-3 rounded-3xl font-semibold mt-8">
          {{ formatPrice($store.state.cart.cartItem) }} сум перейти к оплате
        </button>
      </div>
      <div class="modal-background" @click="closeModal"></div>
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
      comment_text: '',
      priceCount: 0,
      isDisbale: false,
      lang: {
        longitude:this.$store.state.location.longitude,
        latitude: this.$store.state.location.latitude
      }
    }
  },
  mounted() {
  },
  async fetch() {
    if (this.$route.query.foodSaw === 'multipleOrder') {
      await this.getCartList()
    } else if (this.$route.query.foodSaw === 'detailOrder') {
      await this.getCartItem()
    }
  },
  computed: {
    // fullPrice() {
    //   return this.$store.state.orderCarzina.orderList[0].foods.reduce((sum, el) => sum + el.add.price, 0)
    // }
  },
  methods: {
    formatPrice(item) {
    const data=   item.delivery_price ?
       item.total_price+item.delivery_price :
        item.total_price+10000+'+';
    return data
    },
    async getCartList() {
      return await this.$store.dispatch('cart/getCardList', {
        limit: 100,
        longitude: this.$store.state.location.longitude ?? undefined,
        latitude: this.$store.state.location.latitude?? undefined
      })
    },
    async getCartItem() {
      await this.getCartItemList(this.$route.query.order_id)
    },
    orderListSee() {
      if (this.comment_text) {
        this.$router.push({path: this.localePath('/order'),
          query: {comment_text: this.comment_text , order_id: this.$route.query.order_id}})
      } else {
        this.comment = !this.comment;
        // console.log()
        setTimeout(() => {
          this.$refs.input_text.focus()
        },0)
      }
    },
    closeModal() {
      if(this.$route.path === '/order') {
        this.$router.push({
          path: this.localePath(this.$route.path),
          query: {...this.$route.query, foodSaw: undefined}
        })
      } else {
        this.$router.push({
          path: this.localePath(this.$route.path),
          query: {...this.$route.query, foodSaw: undefined, order_id: undefined}
        })
      }
    },
    isComment () {
      this.comment = !this.comment
    },
    itemOrderRemove(item) {
      const orderRemove = {
        order_id: this.$route.query.order_id,
        id: item
      }
      console.log(item)
      this.$store.dispatch('cart/removeCartItem', orderRemove)
      console.log(item)
    },
    async decrement(item) {
      this.isDisbale = !this.isDisbale
      await this.$store.dispatch('cart/newOrderCreate', this.dataFormat({data: item, method: 'dec'}))
      await this.getCartItemList(this.$route.query.order_id)
      this.isDisbale = !this.isDisbale
      // await this.$store.dispatch('cart/getCardItem', {id: this.$route.query.order_id, })
    },
    async increment(item) {
      this.isDisbale = true
      await this.$store.dispatch('cart/newOrderCreate', this.dataFormat({data: item, method: 'inc'}))
      await this.getCartItemList(this.$route.query.order_id)
      this.isDisbale = false;

    },
    async  getCartItemList (id) {
  const data = await this.$store.dispatch('cart/getCardItem', {id:id, ...this.lang});
  return data;

  },
    dataFormat(item) {
      const data = {...item.data};
      let quantity = Number(data.quantity);
      if (item.method === 'dec') {
        quantity++;
      } else {
        quantity--;
      }
      return {
        food_id: data.food.id,
        quantity
      }
    },
    async deleteOrder(item) {
      const {id} =item;
      try {
        if (id) {
          await this.$store.dispatch('cart/removeCart', id)
          await this.getCartList()
        } else {
          await this.$store.dispatch('cart/removeCart', item)
          await this.back()
        }
      } catch (err) {
        console.log(err)
      }
    },
    async orderDetail(item, carNumber) {
      await this.$store.dispatch('cart/getCardItem', {id: item, longitude: this.$store.state.location.longitude, latitude: this.$store.state.location.latitude})
      await this.$router.push({
        path: this.localePath(this.$route.path),
        query: {...this.$route.query, foodSaw: 'detailOrder', order_id: item, carNumber: carNumber}
      })


    },
    async back() {
      await this.getCartList()
      await this.$router.push({
        path: this.localePath(this.$route.path),
        query: {...this.$route.query, foodSaw: 'multipleOrder', carNumber: undefined}
      })
    },
    vendorNameFormat (item) {
      const full_name= item.vendor.about_me.split('.');
      return full_name[0] + full_name[1]
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
  justify-content: space-around;
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
.hover_class:hover {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 8px;
  transition: all 0.8s;
}
.delete_button:hover .delete_img{
  background-color: black;
}
</style>
