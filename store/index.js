export const state = () => ({
  userList: [],
  currentUser: {},
  login: false,
  register: false,
  food: false,
  monthNames: {
    "01": 'Yan',
    "02": 'Fer',
    "03": 'Mar',
    "04": 'Apr',
    "06": 'May',
    "07": 'Inl',
    "08": 'Inn',
    "09": 'Avg',
    "10": 'Sen',
    "11": 'Okt',
    "12": 'Dec',
  },
  days_list: []
});
export const mutations = {
  SET_USER: (state, payload) => {
    state.userList = payload;
  },
  SET_DAY: (state, payload) => {
    state.days_list = payload
  },
  SET_CURRENT_USER: (state, payload) => {
    state.currentUser = payload
  },
  LOGIN_MODAL: (state, payload) => {
    state.login = payload
  },
  REGISTER_MODAL: (state, payload) => {
    state.register = payload
  },
  FOOD_MODAL: (state, payload) => {
    state.food = payload
  },
};
export const actions = {
  set_user_list({ commit }, payload) {
    commit("SET_USER", payload);
  },
  set_day({commit,state}, payload) {
    const day  = this.$dayjs(new Date()).format('YYYY-MM-DD').split('-')
    // const month = payload
    let days = [];
    for (let i=0; i<7; i++) {
    days.push({
      date: this.$dayjs(new Date ()).add(i, 'day').format('YYYY-MM-DD'),
      seeDate: this.$dayjs(new Date ()).add(i, 'day').format('DD'),
      name: state.monthNames[this.$dayjs(new Date ()).add(i, 'day').format('YYYY-MM-DD').split('-')[1]],
    })
    };
    console.log('days', days)
    commit('SET_DAY', days)
  },
  async setUser ({commit}, res) {
    try {
      let token = res.token
      this.$auth.setUserToken(token)
      const info = await this.$axios.get('/auth/user')
      await this.$auth.setUser(info)
      this.$cookies.set('userInfo', info)
      return info;
    } catch (err) {
      console.log(err)
    }
  },
  async Login ({commit, dispatch}, payload) {
   return await dispatch('setUser', payload)
  },
  async nuxtServerInit({ commit }) {
    const userInfo = this.$cookies.get('userInfo')
    this.$auth.setUser(userInfo)
    commit('SET_CURRENT_USER', userInfo)
  },
  loginModal ({ commit }, payload) {
    commit('LOGIN_MODAL', payload)
  },
  registerModal ({ commit }, payload) {
    commit('REGISTER_MODAL', payload)
  },
  foodModal ({ commit }, payload) {
    commit('FOOD_MODAL', payload)
  },
  // nowdate({commit}, payload) {
  //
  //
  // }
};
export const getters = {
  get_user_lit: (state) => state.userList,
  get_days_list: (state) => state.days_list
};
