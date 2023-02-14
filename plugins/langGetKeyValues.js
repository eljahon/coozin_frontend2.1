export default function ({app, $axios, i18n},inject) {
  async  function getLangKeyValues(locale) {
    try {
      const {results} = await $axios.get('language-items', {
        params: {
          populate: "*",
          sort: ['key'],
          filters: {
            language:
              {
                keyword: {
                  $eq: locale?.keyword ?? i18n.locale
                }
              }
          },
          pagination: {
            page:1,
            pageSize: 1000
          }
        }
      })
      const messageList = results.reduce((obj, item) => Object.assign(obj, { [item.key]: item.value }), {})
      i18n.mergeLocaleMessage( locale?.keyword ??i18n.locale, {...messageList})
      i18n.setLocale(locale?.keyword)
      i18n.defaultLocale = locale?.keyword ?? i18n.locale;
      app.router.push(app.switchLocalePath(locale?.keyword ?? i18n.locale))
      return messageList;
    } catch (err) {
         throw err;
    }
  }
  getLangKeyValues()
  inject('getLangKeyValues', getLangKeyValues)
}
