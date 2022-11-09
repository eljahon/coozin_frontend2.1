const qs = require("qs");
function filterNonNull(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => v));
}
export default function ({ $axios, redirect, $auth }) {
  if ($auth) {
            const token = app.$auth.strategy.token.get().split(' ')[1]
            $axios.setToken(token, 'Bearer')
          }

  $axios.onError(error => {
    const code = error.response.status;
    console.log('error', error)
    if (code === 400) {

    }
  })
  $axios.setBaseURL(process.env.NUXT_APP_BASE_URL);
  $axios.onRequest((config) => {
    config.paramsSerializer = function (params) {
      return qs.stringify(filterNonNull(params), { encodeValuesOnly: true });
    };
  });
  $axios.onResponse(data => {
    // console.log('onResponse====>>>>', data)
    return data.data
  })
}
