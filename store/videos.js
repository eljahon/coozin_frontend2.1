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
      const {data, meta: {pagination}} =await this.$axios.get('videos', {
        params: {
          ...payload
        }
      })
      const _data = data.map((el) => {
        return {
          id: el.id,
          ...el.attributes
        }
        }
      )
      commit('SET_VIDEOS', _data)
      if (pagination.total) {
        commit('SET_VIDEOS_PAG',pagination.pageCount)
      }
      return {_data, pagination}
    } catch (err) {
      console.log(err)
    }
    // commit("SET_USER", payload);
  },
};
