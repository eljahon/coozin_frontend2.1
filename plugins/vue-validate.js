/* eslint-disable import/namespace */
import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, length, min } from 'vee-validate/dist/rules'
import * as rules from 'vee-validate/dist/rules'
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})
extend('required', {
  ...required,
  message: 'Vue.prototype.$nuxt.i18n.t(\'text.required\')'
})

extend('length', {
  ...length,
  message: 'Длина поля должна быть {length}'
})

extend('min', {
  ...min,
  message: 'Поле должно быть не менее {length} символов'
})

extend('samePassword', {
  params: ['password'],
  validate: (value, { password }) => {
    return password === value
  },
  message: 'Пароли не совпадают'
})
// Custom regex for a phone number and email
const MOBILEREG = /^([+]?[9]{2}[8][0-9]{2}[0-9]{7})$/
const EMAILREG = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const phoneOrEmailRule = {
  message (field, params, data) {
    if (!MOBILEREG.test(params._value_)) {
      return 'Email is not valid'
    } else if (!EMAILREG.test(params._value_)) {
      return 'Phone is not valid'
    }
  },
  validate (value, args) {
    // Check for either of these to return true
    if (MOBILEREG.test(value)) {
      return true
    }
    if (EMAILREG.test(value)) {
      return true
    }
    return false
  }
}
extend('phoneOrEmail', phoneOrEmailRule)
