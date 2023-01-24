export  const state = () => ({
  foods: null
})
export const mutations = {
  SET_FOODS(state, payload) {
    state.foods = payload
  }
};
export const actions = {
  async getFoods({ commit }, payload) {
    try {
      const { objects } = await this.$axios.get('foods', {params: payload})
      commit('SET_FOODS', objects)
      return objects
    } catch (e) {}
  }
};
