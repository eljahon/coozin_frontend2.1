export const state = () => ({
  userList: [],
  currentUser: {},
  login: false,
  register: false,
  burger: false,
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
  days_list: [],
  location: null,
  locatinsName: null
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
  SET_LOCATION_NAME: (state, paylaod) => {
    state.locatinsName = paylaod;
  },
  SET_LOCATION: (state, payload) => {
    state.location = payload
  },
  BURGER_OPEN: (state, payload) => {
    state.burger = payload
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
    // console.log('days', days)
    commit('SET_DAY', days)
  },
  async setUser ({commit}, res) {
    console.log(res);
    try {
      this.$auth.setUserToken(res.token)
      const info = await this.$axios.get('/auth/user')
      console.log(info, 'info ====>>>')
      this.$auth.setUser(info)
      this.$cookies.set('userInfo', info)
      return info;
    } catch (err) {
      console.log(err)
    }
  },
  async Login ({commit, dispatch}, payload) {
   return await dispatch('setUser', payload)
  },
  set_location ({commit}, payload) {
    commit('SET_LOCATION', payload)
    this.$cookies.set('langlot', payload)
  },
  async nuxtServerInit({ commit }) {
    const userInfo = this.$cookies.get('userInfo')
    this.$auth.setUser(userInfo)
    commit('SET_CURRENT_USER', userInfo);
    const loc = {
      latitude: this.$cookies.get('langlot')?.latitude,
      longitude: this?.$cookies.get('langlot')?.longitude ,
    }
    commit('SET_LOCATION', loc)
    if (this.$cookies.get('lacationName')) {
      console.log(this.$cookies.get("lacationName"))
      commit('SET_LOCATION_NAME', this.$cookies.get('lacationName'))
    }

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
  burgerOpen({ commit }, payload) {
    commit('BURGER_OPEN', payload)
  },
  set_location_name ({commit}, payload) {
    commit("SET_LOCATION_NAME", payload)
    this.$cookies.set('lacationName', payload)
  }
};
export const getters = {
  get_user_lit: (state) => state.userList,
  get_days_list: (state) => state.days_list
};
