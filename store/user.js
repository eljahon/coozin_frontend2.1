import logout from "@/components/profile/logout";

export const state = () => ({
  user: []
})
export const mutations = {
  SET_USER: (state, payload) => {
    state.user = payload
  }
}
export const actions = {
  async getUser ({ commit, state },payload )  {
    try {
      const data  = await this.$axios.get('user', {
        params: { ...payload }
      }).then(res => {
        commit('SET_USER', res)
      })
    } catch (err) {
    }
  },
  async postUser ({ commit },payload)  {
    try {
      const data  = await this.$axios.post('user', {
        ...payload
      })
    } catch (err) {
    }
  },
  logout() {
    this.$auth.logout()
    this.$axios.post('logout')
  }
}
