export  const state = () => ({
  cartList: null,
  cartItem: null,
  totalPrice: null
})
export const getters = {};
export const mutations = {
  SET_CART_LIST: (state, payload) => {
    state.cartList = payload
  },
  SET_TOTAL_PRICE: (state, payaload) => {
    state.totalPrice = payaload
  },
  SET_CART_ITEM: (state, payload) => {
    state.cartItem = payload
  }
};
export const actions = {
   async getCardList({commit}, payload) {
   const {limit} = payload;
  try {
    if (!limit) payload['limit'] = 10;
    const {objects} = await this.$axios.get('cart', {...payload})
    console.log(objects)
    commit('SET_CART_LIST', objects)
    return objects;
  } catch (err) {
    console.log(err)
    return err;
  }
 },
   async getCardItem({commit}, payload) {
  try {
    const data = await this.$axios.get(`cart/${payload}`)
    // console.log(data)
    commit('SET_CART_ITEM', data)
    if (data.delivery_price === null) {
      commit('SET_TOTAL_PRICE', data.total_price+10000+'+')
    }
    return data;
  } catch (err) {
    console.log(err)
    return err;
  }
 },
   async newOrderCreate ({commit,state, dispatch}, payload) {
    try {
      const data = await this.$axios.post('cart', {...payload})
        await dispatch('getCardList',{limit: 10})
      this.$toast.success('new order item corzina add')
      return data;
    } catch (err) {
      this.$toast.error(err)
    }
  },
   async removeCart({commit,state, dispatch}, payload) {
   try {
     const data = await this.$axios.delete(`cart/${payload}`);
     console.log(data)
     this.$toast.success('order remove corzina ')
     return data;
   } catch (err) {
     this.$toast.error(err)
     console.log(err)
   }
   },
   async removeCartItem({commit,state, dispatch}, payload) {
   const {order_id, id} = payload;
   try {
     const data = await this.$axios.delete(`cart/item/${id}`);
     console.log(data)
     this.$toast.success('order item remove corzina ')
     dispatch('getCardItem', order_id)
     return data;
   } catch (err) {
     this.$toast.error(err)
     console.log(err)
   }
   }
};
