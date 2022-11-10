export const state = () => ({
  videosList: [],
  pagTotal: 1
});
export const mutations = {
  SET_VIDEOS: (state, payload) => {
    state.videosList = payload;
  },
  SET_VIDEOS_PAG: (state, payload) => {
    state.pagTotal = payload
  }
};
export const actions = {
 async  get_videos_list({ commit }, payload) {
    try {
      const {results, pagination} =await this.$axios.get('videos', {
        params: {
          ...payload
        }
      })
      commit('SET_VIDEOS', results)
      if (pagination.total) {
        commit('SET_VIDEOS_PAG',pagination.pageCount)
      }
      return {results, pagination}
    } catch (err) {
      console.log(err)
    }
    // commit("SET_USER", payload);
  },
};
