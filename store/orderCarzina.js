export const state = () => ({
});
export const mutations = {
};
export const actions = {
  async order_deleveriy_time ({commit}, payload) {
    const date = await this.$axios.post('/orders/calc', {...payload})
    return date;
  }
};
