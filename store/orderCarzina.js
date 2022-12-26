export const state = () => ({
  orderList:  [],
  oldPrice: null,
  vendorName:null
});
export const mutations = {
  SET_ORDER: (state, payload) => {
    state.orderList =  payload;
  },
  SET_VENDOR_NAME: (stata, payload) => {
    state.vendorName = payload
  },
  SET_OLD_PRICE: (state, payload) => {
    state.oldPrice = payload
},
  SET_ITEM_ORDER: (state, payload) => {
    const {item, add} = payload
    item[0].foods = [...item[0].foods, add]
    state.orderList = state.orderList.map(el => {
      if (el.vendor_id === item[0].vendor_id) {
        el.foods = item[0].foods;
        return  el;
      }
      return el;
    });
    // this.$cookies.set('foods', state.orderList)
  },
};
export const actions = {
  set_vendor_name ({commit}, payload) {
    commit('SET_VENDOR_NAME', payload)
  },
  set_order({ commit,state }, payload) {
    const {vendor_id, item} = payload;
    let list = state.orderList;
    let idList = state.orderList.map(el=>el.vendor_id);
    let changesList  = list.filter(el => el.vendor_id === vendor_id)
    if(changesList.length) {
      const isHaveId = changesList[0].foods.filter(el => el.id === item.id)
      if (!isHaveId.length) {
        commit('SET_ITEM_ORDER', {item: changesList, add: item})
      }

    }
    else {
        commit('SET_ORDER', [{vendor_id, foods: [item]}])
      }
    console.log(changesList)
    // if (idList.includes(vendor_id)) {
    //   // console.log('list==>>', list)
    //   list = list.map(el => {
    //     if(el.vendor_id === vendor_id) {
    //       console.log(el.foods)
    //       // el.foods.push(item)
    //       return el;
    //     }
    //     return el;
    //   })
    //   console.log('list==>>', list)
    // }
    // console.log('list', list, state.orderList)
    // commit("SET_ORDER", payload);
  },
};
export const getters = {
  get_order_list: (state) => state.orderList
};
