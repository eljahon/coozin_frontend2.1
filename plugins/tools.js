import Vue from 'vue'
import VueRouter from "vue-router";
const { isNavigationFailure, NavigationFailureType } = VueRouter;
const imgUrl  = 'https://imageproxy.cookzy.uz/200/'
const tools = {
  fixDoubleRouting(err) {
    if (isNavigationFailure(err, NavigationFailureType.redirected)) {
      err.to.path;
      err.from.path;
    }
  },
  removeLangPath(str) {
    return str.slice(3, str.length)
  },
  camelize (str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    }).replace(/\s+/g, '')
  },
  getFileUrl(name) {
    if (name) {
      if (name && name.includes("https://")) {
        return name;
      } else {
        return `${process.env.NUXT_APP_BASE_URL_IMG}uploads${name}`;
      }
    }
  },
  cropUrl (url, word) {
    if (word && word.length > 0) {
      return url.substring(word.length)
    }
    return url.substring('/uploads'.length)
  },
  getDateTime (stringdate) {
    const date = new Date(stringdate)
    const year = date.getFullYear()
    const month = this.getNol((1 + date.getMonth()).toString())
    const day = this.getNol(date.getDate().toString())
    const hours = this.getNol(date.getHours().toString())
    const minutes = this.getNol(date.getMinutes().toString())
    return `${day}.${month}.${year} ${hours}:${minutes}`
  },
  token () {
    const header = {
      headers: {
        "Authorization": 'Bearer 5800|E9eDAEvkPUh8G1yko5m9bn9wyhIgfwx32544OOhJ'

      }
    }

    return header;
  },
  getDate (stringdate) {
    const date = new Date(stringdate)
    const year = date.getFullYear()
    const month = this.getNol((1 + date.getMonth()).toString())
    const day = this.getNol(date.getDate().toString())
    return `${day}.${month}.${year}`
  },
  getNol (e) {
    return e.length > 1 ? e : '0' + e
  },
  focusI (a) {
    document.getElementById(a).focus()
  },
  emptyObject (obj) {
    return Object.entries(obj).reduce(
      (a, [k, v]) => (v === null || v === '' ? a : ((a[k] = v), a)),
      {}
    )
  },
  phoneFormatter (phone) {
    phone = phone.includes('+') > 0 ? phone.substring(1) : phone
    let match = phone.match(/^(\d{3})(\d{2})(\d{3})(\d{4})$/)
    return `+(${match[1]})${match[2]} ${match[3]}-${match[4]}`
  },
  checkLocalizations (item, locale) {
    const _locate = locale ?? 'en'
    const _item = item.find((el) => el.locale === _locate);
    return _item;
  }
}
export default tools
Vue.prototype.$tools = tools
