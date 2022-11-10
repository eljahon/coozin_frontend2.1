export const state = () => ({
  newsList: [],
  newsById: [],
  newsPag: 1,
});
export const mutations = {
  SET_NEWS: (state, payload) => {
    state.newsList = payload;
  },
  SET_NEWS_BY_ID: (state, payload) => {
    state.newsById = payload
  },
  SET_NEWS_PAG: (state, payload) => {
    state.newsPag = payload
  }
};
export const actions = {
  async get_news_list({ commit }, payload) {
  try {
    const {results,pagination}= await this.$axios.get('news', {params: {...payload}})
    commit("SET_NEWS", results);
    commit('SET_NEWS_PAG', pagination.pageCount)
    return {data: results, pagination: pagination}
  } catch (err) {
    console.log(err)
  }
  },
  checkLocations ({commit}, items) {
  const _item = items.item.find((el)=> el.locale ===items.locale)
},
  async get_news_category({ commit, dispatch }, payload) {
    try {
      const {results,pagination}= await this.$axios.get('news-categories', {params: {...payload}})
      const data = results.map((el) => {
        return {
          ...el,
          id: el.locale === 'en' ? el.id : el.localizations.find((el) => el.locale === 'en').id
        }
      })
      commit("SET_NEWS", data);
      return {data: results, pagination: pagination}
      // console.log(data, 'new data==>>')
    } catch (err) {
      console.log(err)
    }
  },
  async get_news_by_id({ commit, dispatch }, payload) {
    const {params, id} =payload;
    try {
      const data= await this.$axios.get('news/'+id, {params: {...params}})
      console.log(data)
      commit("SET_NEWS_BY_ID", data);
      return {data: data}
      // console.log(data, 'new data==>>')
    } catch (err) {
      console.log(err)
    }
  },
};
