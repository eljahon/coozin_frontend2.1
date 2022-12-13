export const state = () => ({
  userList: [],
  currentUser: {}
});
export const mutations = {
  SET_USER: (state, payload) => {
    state.userList = payload;
  },
  SET_CURRENT_USER: (state, payload) => {
    state.currentUser = payload
  }
};
export const actions = {
  set_user_list({ commit }, payload) {
    commit("SET_USER", payload);
  },
  async nuxtServerInit({ commit }) {
    const userInfo = this.$cookies.get('userInfo')
    this.$auth.setUser(userInfo)
    commit('SET_CURRENT_USER', userInfo)
  }
};
export const getters = {
  get_user_lit: (state) => state.userList,
};
