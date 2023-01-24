import Vue from 'vue'
const bridge = new Vue()
export default bridge
Vue.prototype.$bridge = bridge
