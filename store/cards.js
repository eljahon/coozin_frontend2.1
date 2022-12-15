export const state = () => ({
  cardList: [],
})
export const mutations = {
  SET_CARDS: (state,payload) => {
    state.cardList = payload
  }
}
export const actions = {
  async getCards ({commit },payload )  {
    try {
      const data  = await this.$axios.get('cards', {
        params: {...payload}
      })
    } catch (err) {
      console.log(err)
    }
},
  async postCards ({commit },payload )  {
    try {
      const data  = await this.$axios.post('cards', {
        data: payload
      })
    } catch (err) {
      console.log(err)
    }
},
  async putCards ({commit },payload )  {
    try {
      const data  = await this.$axios.put(``, {
        params: {...payload}
      })
    } catch (err) {
      console.log(err)
    }
},
  async removeCards ({commit },payload )  {
    try {
      const data  = await this.$axios.delete('cards', {
        params: {...payload}
      })
    } catch (err) {
      console.log(err)
    }
}
}
