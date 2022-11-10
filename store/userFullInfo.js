export const state = () => ({
  userFullInfo: [],
  userFullInfoPag: 1,
});
export const mutations = {
  SET_USER_FULL_INFO: (state, payload) => {
    state.userFullInfo = payload;
  },
  SET_USER_FULL_INFO_PAG: (state, paylaod) => {
    state.userFullInfoPag = paylaod
  }
};
export const actions = {
  async get_user_full_infor({commit}, payload) {
    try {
      const data = await this.$axios.get('usefullinfos', {
        params: {
          ...payload
        }
      });
      commit('SET_USER_FULL_INFO', data.results)
      commit('SET_USER_FULL_INFO_PAG', data.pagination.pageCount)
    } catch (err) {
      console.log(err)
    }
    // commit("SET_USER_FULL_INFO", payload);
  },
  async get_user_full_by_id({commit}, payload) {
    const {params, id} = payload;
    try {
      const data = await this.$axios.get('usefullinfos/' + id, {
        params: {
          ...params
        }
      });
      return {...data}
      commit('SET_USER_FULL_BY_ID', data)
    } catch (err) {
      console.log(err)
    }
    // commit("SET_USER_FULL_INFO", payload);
  },
};
export const getters = {
  get_user_lit: (state) => state.userList,
};
