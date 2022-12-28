export const actions = {
  async pointSearchLotLang ({commit}, payload) {
    const url ='https://geocode-maps.yandex.ru/1.x/';
    const {key, coords, value} = payload;
    const param = {
        format: 'json',
        apikey: key,
        geocode: coords,
        sco: 'latlong',
        lang: 'ru-RU',
        results: 5,
        ll: '69.241320,41.292906',
        spn: '6.5,6.5',
        rspn: 1
      }
    try{
  const {response}  = await this.$axios.get(url, {
  params: {...param}

});
      console.log(response)
    }catch (err) {
      console.log(err);
    }
  }
}
export const mutations = {};
export const state = ()=> ({
});
export const getters = {

}
