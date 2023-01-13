export const state = () => ({
  orderList:  [],
  oldPrice: 0,
  vendorName:null
});
export const mutations = {
  SET_PRICE: (state, payload) => {
    state.oldPrice = payload
  },
  SET_ORDER: (state, payload) => {
    const {add, count} = payload
    state.orderList =  payload ;
  },
  REMOVE_ITEM: (state, payload) => {
    const {id, commit} = payload
    const list  = state.orderList[0].foods.filter(el => el.add.id !== id)
    state.orderList[0].foods = list;
    const price  = list.reduce((summ, el) => summ+el.add.price*el.count,0)
    commit('SET_PRICE', price)
  },
  SET_ITEM_REMOVE_COUNT (state, payload) {
    const {id, commit} = payload
    const list  = state.orderList[0].foods.map(el => {
      if (el.add.id === id && el.count > 1) {
        el.count-=1;
        return el;
      }
      return el;
    })
    state.orderList[0].foods = list;
    const price  = state.orderList[0].foods.reduce((summ, el) => summ+el.add.price*el.count, 0)
    console.log(price)
    commit('SET_PRICE', price)
  },
  SET_ITEM_ADD_COUNT (state, payload){
    const {id, commit} =payload
    const list  = state.orderList[0].foods.map(el => {
      if (el.add.id === id) {
        el.count+=1;
        return el;
      }
      return el;
    })
    state.orderList[0].foods = list;
    const price  = state.orderList[0].foods.reduce((summ, el) => summ+el.add.price*el.count,0)
    console.log(price)
    commit('SET_PRICE', price)
  },
  SET_VENDOR_NAME: (state, payload) => {
    console.log('name =>', payload)
    state.vendorName = payload
  },
  SET_OLD_PRICE: (state, payload) => {
    state.oldPrice = payload;
},
  SET_ITEM_ORDER (state, payload){
    const {item, add, commit} = payload
    item[0].foods = [...item[0].foods, {count: 1, add}]
    state.orderList = state.orderList.map(el => {
      if (el.vendor_id === item[0].vendor_id) {
        el.foods = item[0].foods;
        return  el;
      }
      return el;
    });
    const price  = state.orderList[0].foods.reduce((summ, el) => summ+el.add.price*el.count, 0)
    commit('SET_PRICE', price)
  },
};
export const actions = {
  set_vendor_name ({commit}, payload) {
    commit('SET_VENDOR_NAME', payload)
  },
async  set_order({ commit,state }, payload) {
    const {vendor_id, item} = payload;
    let list = state.orderList;
    let idList = state.orderList.map(el=>el.vendor_id);
    let changesList  = list.filter(el => el.vendor_id === vendor_id)
    if(changesList.length) {
      const isHaveId = changesList[0].foods.filter(el => el.add.id === item.id)
      if (!isHaveId.length) {
       await commit('SET_ITEM_ORDER', {item: changesList, add: item, commit})
       await commit('SET_OLD_PRICE', state.orderList[0].foods.reduce((sum, el) => sum+el.add.price*el.count, 0))
      }
    }
    else {
       await commit('SET_ORDER', [{vendor_id, foods: [{count: 1, add: item}]}])
       await commit('SET_OLD_PRICE', state.orderList[0].foods.reduce((sum, el) => sum+el.add.price*el.count, 0))
      }
    console.log(changesList)
  },
  remove_order ({commit}, paylaod) {
    commit('REMOVE_ITEM', {id:paylaod, commit})
  },
  item_order_remove ({commit}, payload) {
    commit('SET_ITEM_REMOVE_COUNT', {id: payload, commit: commit})
  },
  item_order_add ({commit}, payload) {
    commit('SET_ITEM_ADD_COUNT', {id: payload, commit: commit})
  },
  async order_deleveriy_time ({commit}, payload) {
    const date = await this.$axios.post('/orders/calc', {...payload})
    return date;
  }
};
export const getters = {
  get_order_list: (state) => state.orderList
};
