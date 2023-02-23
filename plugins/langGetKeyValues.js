export default function ({app, $axios, i18n},inject) {
  async  function getLangKeyValues(locale) {
    try {
      const {data: {results, pagination}} = await $axios.get('language-items', {
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
      i18n.mergeLocaleMessage( locale?.keyword ??i18n.locale, {...results.reduce((obj, item) => Object.assign(obj, { [item.key]: item.value }), {})})
      i18n.setLocale(locale?.keyword)
      i18n.defaultLocale = locale?.keyword ?? i18n.locale;
     await app.router.push(app.switchLocalePath(locale?.keyword ?? i18n.locale))
    } catch (err) {
         return err;
    }
  }
  getLangKeyValues()
  inject('getLangKeyValues', getLangKeyValues)
}
