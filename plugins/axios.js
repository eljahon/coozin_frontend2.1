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
    console.log(error.response)
    const code = parseInt(error.response.status)
    if (code === 400) {
      return
    }
    if (code === 401) {
      app.$auth.logout()
    }
    if (code === 403) {
      app.$auth.logout()
      return
    }
  })
    $axios.onResponse(data => {
    return data
  })
}

