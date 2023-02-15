// export const tools =  {
//   getImgUrl: function (item) {
//     return process.env.VUE_APP_BASE_IMG+item
//   }
// }
import Vue from "vue";
const Url = process.env.VUE_APP_BASE_IMG;
Vue.prototype.$img=Url;
