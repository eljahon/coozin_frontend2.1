export const state = () => ({
  cardList: [],
})
export const mutations = {
  GET_CARDS: (state,payload) => {
    state.cardList = payload
  }
}
export const actions = {
  async getCards ({commit },payload )  {
    try {
      const { results }  = await this.$axios.get('cards', {
        params: {...payload}
      })
      return results;
    } catch (err) {
    }
},
  async postCards ({commit },payload )  {
    try {
      const data  = await this.$axios.post('cards', {...payload})
      return data;
    } catch (err) {
    }
},
  async putCards ({commit },payload )  {
    try {
      const data  = await this.$axios.put(``, {
        params: {...payload}
      })
    } catch (err) {
    }
},
  async removeCards ({commit },payload )  {
    try {
      const data = await this.$axios.delete(`cards/${payload}`);
      return data;
    } catch (err) {}
}
}
