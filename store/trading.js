export const state = () => ({
  tradingPosts: [],
  tradingPostsById: []
});
export const mutations = {
  SET_TRADING_POSTS: (state, payload) => {
    state.tradingPosts = payload;
  },
  SET_TRADING_POSTS_BY_ID: (state,payload) => {
    state.tradingPostsById = payload
  }
};
export const actions = {
 async get_trading_posts_list({ commit }, payload) {
   try {
     const {results} = await this.$axios.get('tradingposts', {
       params: {
         ...payload
       }
     });
     // console.log('tradingposts===>>', results)
     commit('SET_TRADING_POSTS', results)
   } catch (err) {
     console.log(err)
   }

    // commit("SET_USER", payload);
  },
  async get_trading_by_id({ commit }, payload) {
   const {params, id} = payload
    try {
      const {data} = await this.$axios.get('tradingposts/'+id, {
        params: {
          ...params
        }
      });
      // console.log('tradingposts===>>', results)
      commit('SET_TRADING_POSTS_BY_ID', data)
    } catch (err) {
      console.log(err)
    }

    // commit("SET_USER", payload);
  },
 async get_trading_category({ commit }, payload) {
   try {
     const {results} = await this.$axios.get('trading-categories', {
       params: {
         ...payload
       }
     });
     // console.log('tradingposts===>>', results)
     commit('SET_TRADING_POSTS', results)
     return results;
   } catch (err) {
     console.log(err)
   }

    // commit("SET_USER", payload);
  },
 async get_trading_nest({ commit }, payload) {
   try {
     const data = await this.$axios.get('/trading-category/nested', {
       params: {
         ...payload
       }
     });
     const categories = data;
     categories.forEach((category) => {
       if (category.children) {
         category.children.forEach((child) => {
           child.current = false
         })
       }
       category.current = false
     })
     console.log('/trading-category/nested===>>', categories)
     // commit('SET_TRADING_POSTS', results)
     return categories;
   } catch (err) {
     console.log(err)
   }

    // commit("SET_USER", payload);
  },
};
