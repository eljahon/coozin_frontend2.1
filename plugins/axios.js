const qs = require("qs");
function filterNonNull(obj) {
  return Object.fromEntries(Object.entries(obj).find(([k, v]) => v));
}
export default function ({ $axios, redirect, $auth,app }) {
  $axios.setHeader('Access-Control-Allow-Origin', '*')
  $axios.setHeader('Accept', 'application/json')
  $axios.setHeader('Content-Type', 'application/json')
  // $axios.setToken('Authorization', 'Bearer')

  // $axios.setHeader('Authorization', 'Bearer 5800|E9eDAEvkPUh8G1yko5m9bn9wyhIgfwx32544OOhJ')
  if ($auth) {
            const token = app.$auth.strategy.token.get().split(' ')[1]
            $axios.setToken(token, 'Bearer')
          }

  $axios.onError(error => {
    console.log(error)
    const code = error.response.status;
    const message = error.response;
    app.$toast.error(`${code } ${message.data.message}`, {
      duration: 2000,
      position: 'bottom-right',
    })
    console.log('error', error, message, app)
    if (code === 400) {

    };
    return message
  })
  $axios.setBaseURL(process.env.NUXT_APP_BASE_URL);
  // $axios.onRequest((config) => {
  //   config.paramsSerializer = function (params) {
  //     return qs.stringify(filterNonNull(params), { encodeValuesOnly: true });
  //     // return params;
  //   };
  // });
  $axios.onResponse(data => {
    // console.log('onResponse====>>>>', data)
    return data.data
  })
}
