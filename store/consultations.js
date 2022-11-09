// consultation-categories
export const state = () => ({
  consultationList: [],
  consultationCategories: [],
});
export const mutations = {
  SET_CONSULTATION_CATEGORIES: (state, payload) => {
    state.consultationCategories = payload;
  },
  SET_CONSULTATION_LIST: (state, payload) => {
    state.consultationList = payload
  }
};
export const actions = {
  async get_consultation_list({ commit }, payload) {
    try {
      const {results,pagination}= await this.$axios.get('news', {params: {...payload}})
      commit("SET_CONSULTATION_LIST", results);
      return {data: results, pagination: pagination}
    } catch (err) {
      console.log(err)
    }
  },
  async get_consultation_categories({ commit }, payload) {
    try {
      const {results,pagination}= await this.$axios.get('consultation-categories', {params: {...payload}})
      commit("SET_CONSULTATION_CATEGORIES", results);
      return {data: results, pagination: pagination}
      // console.log(data, 'new data==>>')
    } catch (err) {
      console.log(err)
    }
  },
};
