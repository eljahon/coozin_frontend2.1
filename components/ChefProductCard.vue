<template>
  <div class="product-card">
    <div class="h-52 w-full overflow-hidden">
      <img v-if="src" class="w-full h-full object-cover" :src="$img+src" :alt="src + ' image'">
      <img v-else class="w-full object-cover" :src="require(`../assets/img/img-1.jpg`)" :alt="' image'">
    </div>
    <div class="p-3 relative flex flex-col gap-2">
      <h4 class="font-semibold text-xl text-gray-800">{{ title | shortTitle }}</h4>
      <h5 class="font-normal text-gray-700">{{ price }} sum</h5>
      <div class="bg-orange-50 cursor-pointer rounded-lg	flex items-center absolute -top-10 right-3 p-1">
        <the-icon src="clock" />
        <span class="text-sm text-gray-700 font-normal">> {{ delay }} min</span>
      </div>
      <div @click.stop="toCarzinca(item)"  class="absolute cursor-pointer right-3 bottom-3 bg-orange-100	h-12 w-12 rounded-full overflow-hidden flex items-center justify-center effect">
        <button class="icon-bnt">
          <the-icon src="shopping-cart" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['src', 'delay', 'title', 'price', 'item', 'user'],
  filters: {
    shortTitle(value) {
      return value.length > 15 ? value.slice(0, 15) + '...' : value
    }
  },
  data () {
    return {
      form: {
        vendor: this.$route.query.vendor_id,
        order_status: "",
        order_items: [],
        user: this.$auth.loggedIn  ? this.$auth?.user?.id : null
      }
    }
  },
  methods: {
    toCarzinca(item) {
    try {
        const newItem = {
          "food_id":item.id,
          "quantity":1
        };
      if (this.$auth.state.loggedIn) {
        this.$store.dispatch('carts', newItem)
      } else {
        this.$routePush({...this.$route.query, login: 'login'})
        // const vendor_id = Number(this.$route.query.vendor_id)
        // this.$store.dispatch('orderCarzina/set_order', {vendor_id, item})
        // this.$toast.success('new order item corzina add')
      }
    }catch (err) {
    }
    }
  }
}
</script>

<style scoped>
  .product-card {
    width: 292px;
    height: 296px;
    background: #FFFFFF;
    border: 2px solid #F3F4F6;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    cursor: pointer;
  }
  .icon-bnt {
    transition: all 0.8s;
  }
  .disable {
    pointer-events: none;
  }
.effect:hover .icon-bnt {
  transition: all 0.8s;
  transform: rotate(360deg);

}
</style>
