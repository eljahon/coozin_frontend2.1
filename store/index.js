export const state = () => ({
  userList: [],
});
export const mutations = {
  SET_USER: (state, payload) => {
    state.userList = payload;
  },
};
export const actions = {
  set_user_list({ commit }, payload) {
    commit("SET_USER", payload);
  },
};
export const getters = {
  get_user_lit: (state) => state.userList,
};
