export const state = () => ({
  sidebar: []
})
export const mutations = {
  SET_SIDEBAR (state, payload) {
    state.sidebar = payload
  },
  CHANGE_SIDEBAR (state, payload) {
    state.sidebar = payload
  }
}
export const actions = {
  setSidebar ({ commit }, data) {
    commit('SET_SIDEBAR', data)
  },
  changeSidebar ({ commit }, data) {
    commit('CHANGE_SIDEBAR', data)
  }
}
export const getters = {
  getSidebar (state) { return state.sidebar }
}
