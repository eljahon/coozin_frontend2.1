export const state = ()=> ({
  nameUrl:'https://geocode-maps.yandex.ru/1.x/',
  searchUrl: 'https://search-maps.yandex.ru/v1/',
  params: {
    format: 'json',
    apikey: '1abe9aa1-66ec-4c7f-8b93-a4e0bc25319e',
    sco: 'latlong',
    lang: 'ru-RU',
    results: 5,
    ll: '69.241320,41.292906',
    spn: '6.5,6.5',
    rspn: 1
  },
  isOpen: false
});
export const mutations = {
  SET_MODAL_MAP: (state, paload) => {
    // console.log(paload)
    state.isOpen = paload
  }
};
export const actions = {
  async pointSearchLotLang ({commit,state}, payload) {
    let param = {...state.params};
    param['geocode'] = payload
    try{
  const {response}  = await this.$axios.get(state.nameUrl, {
  params: {...param}

});
  const getNames = response.GeoObjectCollection.featureMember.map((el) => {
    return {
      name: el.GeoObject.name,
      description:el.GeoObject.description,
      latitude: el.GeoObject.Point.pos.split(' ')[1],
      longitude: el.GeoObject.Point.pos.split(' ')[0]
    }
  })
      const fullName = getNames.reduce((summ,el) => summ+ " "+el.name ,'')
      return {getNames, fullName};
    }catch (err) {
    }
  },
  async pointSearch ({commit,state}, payload) {
    try {
      let param = {...state.params};
      param['text'] = payload;
      param.apikey = '5dc6f955-f361-4201-933e-74abe41f8294';
      delete param.sco;
      const {features} =await this.$axios.get(state.searchUrl, {
        params: {...param}
      })
      const formatLocation = features.map((el) => {
        return {
          name: el.properties.description ,
          location: el.geometry.coordinates
        }
      })
return formatLocation
    } catch (err) {
    }
  },
  mapModalOpen({commit}, payload) {
    commit('SET_MODAL_MAP', payload)
  }
}
export const getters = {}
