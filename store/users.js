export const state = () => ({
  userList: [],
  userCategoriy: []
});
export const mutations = {
  SET_USER_LIST: (state, payload) => {
    state.userList = payload;
  },
  SET_USER_CATEGORIY (state, paylaod) {
    state.userCategoriy = paylaod
  }
};
export const actions = {
 async get_users({ commit }, payload) {
    try {
      const {users, count} = await this.$axios.get('users', {
        params: {
          ...payload
        }
      });
      commit('SET_USER_LIST', users)
      // console.log('users ===>.', users)
      return {users, count}
    } catch (err) {
      console.log(err)
    }
  },
  async get_users_categoriy({ commit,dispatch }, payload) {
   try {
     const data = await this.$axios.get('consultation-categories', {
       params: {
         ...payload
       }
     });
     commit('SET_USER_CATEGORIY', data.results)
     return data.results

   } catch (err) {
     console.log(err)
   }
    // commit('SET_USER_LIST', data.results)
    // commit("SET_USER_FULL_INFO", payload);
  },
};
