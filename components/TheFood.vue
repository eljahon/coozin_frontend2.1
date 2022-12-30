<template>
  <div v-if="$route.query.foodSaw === 'foodSaw'" class="food">
    <div class="food-modal">
      <div class="flex p-4 rounded-t-2xl overflow-hidden gap-5">
        <div class="flex flex-col gap-3">
          <div class="img">
            <img class="w-full object-cover" src="@/assets/img/img-1.jpg" alt="Phone">
          </div>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <img class="w-full object-cover" src="https://i.pravatar.cc/101" alt="Avatar">
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="font-medium text-gray-700 text-xl">{{ item?.vendor?.user?.full_name }}</h3>
              <div class="flex gap-3">
                <div class="flex items-center bg-gray-100 gap-1 py-1 px-2 overflow-hidden rounded-full">
                  <img width="16" height="16" src="@/assets/svg/rate.svg" alt="Rate icon">
                  <span class="text-xs text-gray-800 font-medium">{{item.ratings_avg}}</span>
                </div>
                <div class="flex items-center bg-gray-100 gap-1 py-1 px-2 overflow-hidden rounded-full">
                  <img width="16" height="16" src="../assets/svg/car.svg" alt="Car icon">
                  <span class="text-xs text-gray-800 font-medium">15 000 сум</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex flex-col gap-2">
            <h2 class="font-normal text-xl text-gray-800">{{item.name}}</h2>
            <h4 class="text-xl font-semibold text-gray-700">{{item.price}} сум <span class="font-normal">/порция</span></h4>
            <div class="bg-orange-50 rounded-lg p-1.5 flex gap-2 items-center">
              <the-icon src="orange-clock" />
              <p class="text-orange-600 text-sm font-medium">Вам придётся подождать чуть дольше</p>
            </div>
            <h2 class="font-semibold text-gray-700 mt-1">Описание</h2>
            <p class="font-normal text-gray-700 text-sm">{{item.description}}</p>
            <h2 class="font-semibold text-gray-700 mt-1">Состав</h2>
            <div v-for="data in item.ingredients" class="flex flex-wrap gap-2">
              <div class="border-2 rounded-2xl px-2 pt-0 pb-1 border-gray-100" v-for="item in data.split(',')">
                <span class="text-xs text-gray-600">{{ item }}</span>
              </div>
            </div>
          </div>
          <div class="flex gap-16	">
            <div class="flex gap-6 items-center">
              <div @click.stop="increment"> <the-icon  class="cursor-pointer w-8" src="minus" /></div>

              <span class="text-gray-700 font-semibold">{{count}}</span>
              <div @click.stop="decrement">
                <the-icon  class="cursor-pointer w-8" src="plus" />
              </div>
            </div>
            <button
              @click="addCazinaOrder"
              class="bg-orange-600 py-2.5 text-center w-56 text-white rounded-3xl"
            >
              В корзинку
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="food-background" @click="() => $router.push({path: localePath($route.path), query: {...$route.query, foodSaw: undefined}})"></div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      count: 1,
      login: {
        phone: '',
        password: ''
      }
    }
  },
  mounted() {
  },
  methods: {
    increment()
    {
      if (this.count > 1) {
        this.count--;
        this.$store.dispatch('orderCarzina/item_order_remove', this.item.id)
      }
    },
    decrement(){
      const id  = this.$store?.state?.orderCarzina.orderList[0]?.foods?.map(el => el.add.id) ?.includes(this.item.id) ?? false;
      if (!id) {
        this.count++;
        this.$store.dispatch('orderCarzina/set_order', {vendor_id: parseInt(this.$route.query.vendor_id), item: this.item})
        this.$store.dispatch('orderCarzina/item_order_add', this.item.id)
      } else {
        this.count++;
        this.$store.dispatch('orderCarzina/item_order_add', this.item.id)
      }


    },
   async addCazinaOrder () {
    await this.order()
       .then(res => {
         this.$store.dispatch('orderCarzina/set_order', {vendor_id: parseInt(this.$route.query.vendor_id), item: this.item})
       })
    },
    async order() {
     return  await this.$router.push({path: this.localePath(this.$route.path), query: {...this.$route.query, foodSaw: undefined}})
    }
  }
}
</script>

<style scoped>
.food-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: #111827;
  opacity: 0.3;
}
.x-position {
  position: absolute;
  top: 14px;
  right: 14px;
}
.img {
  width: 400px;
  height: 370px;
  border-radius: 16px;
  overflow: hidden;
  background: #ffffff;
}
.avatar {
  border: 3px solid #EFEFEF;
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 100%;
}
.food-modal {
  position: fixed;
  z-index: 3;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 16px;
}
</style>
