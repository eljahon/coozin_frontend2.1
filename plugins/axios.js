// const qs = require("qs");
// function filterNonNull(obj) {
//   return Object.fromEntries(Object.entries(obj).filter(([k, v]) => v));
// }
// export default function ({ $axios, redirect, $auth,app }) {
//   $axios.setHeader('Access-Control-Allow-Origin', '*')
//   $axios.setHeader('Accept', 'application/json')
//   $axios.setHeader('Content-Type', 'application/json')
//   // $axios.setToken('Authorization', 'Bearer')
//
//   // $axios.setHeader('Authorization', 'Bearer 5800|E9eDAEvkPUh8G1yko5m9bn9wyhIgfwx32544OOhJ')
//   if ($auth) {
//             const token = app.$auth.strategy.token.get().split(' ')[1]
//             $axios.setToken(token, 'Bearer')
//           }
//
//   $axios.onError(error => {
//     const code = error.response.status;
//     const message = error.response;
//     app.$toast.error(`${code } ${message.data.message}`, {
//       duration: 2000,
//       position: 'bottom-right',
//     })
//     if (code === 400) {
//
//     };
//     return message
//   })
//   console.log("process.env.NUXT_APP_BASE_URL", process.env.NUXT_APP_BASE_URL)
//   $axios.setBaseURL(process.env.NUXT_APP_BASE_URL);
//   $axios.onRequest((config) => {
//     config.paramsSerializer = function (params) {
//       return qs.stringify(filterNonNull(params), { encodeValuesOnly: true });
//     };
//   });
// }
import Vue from 'vue'
const qs = require('qs')
function filterNonNull(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => v));
}
export default function ({ $axios, redirect, $auth, app }) {
  if ($auth) {
    // If the user is logged in we can now get the token, we get something like `Bearer yourTokenJ9F0JFODJ` but we only need the string without the word **Bearer**, So we split the string using the space as a separator and we access the second position of the array **[1]**
    const token = app.$auth.strategy.token.get().split(' ')[1]
    $axios.setToken(token, 'Bearer') // Here we specify the token and now it works!!
  }
  $axios.setBaseURL(process.env.VUE_APP_BASE_URL)
  $axios.onRequest((config) => {
    config.paramsSerializer = function (params) {
      return qs.stringify(filterNonNull(params), { encodeValuesOnly: true })
    }
  })
  $axios.onError((error) => {
    const code = parseInt(error.response.status)
    if (code === 400) {
      // console.log(error.response)
      // Vue.prototype.$snotify.error(error.response.data.error.details.length > 0 ? error.response.data.error.details[0].messages[0].message : error.response.data.error.message)
      return
    }
    if (code === 401) {
      // app.$auth.logout()
      // localStorage.removeItem('user_info')
      // localStorage.removeItem('local')
      // redirect(localePath('/login'))
    }
    if (code === 403) {
      // Vue.prototype.$snotify.error("Not Authorized: Sorry, you can't access this!")
      return
    }
    if (error.response && error.response.status === 404) {
      // Vue.prototype.$snotify.error(
      //   "Not Found: We couldn't find what you're looking for. Please refresh and try again, or contact the support team."
      // )
      return
    }
    if (error.response && error.response.status === 422) {
      // Vue.prototype.$snotify.error('Validation Error')
      return
    }
    if (error.response && error.response.status === 500) {
      // Vue.prototype.$snotify.error('Server Error: Please contact the support team.')
      return
    }
    if (error.message === 'Network Error') {
      // Vue.prototype.$snotify.error('Network Error: Check your network')
    }
  })
    $axios.onResponse(data => {
    return data.data
  })
}

