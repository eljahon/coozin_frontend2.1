<template>
  <div class="lang-switcher">
    <select v-model="locale" class="text-sm p-2 pr-10 text-gray-700 rounded-md focus:outline-none" @change="onChange(locale)">
      <!-- <img
        :src="(`~/assets/images/${$i18n.locale}.png`)"
        alt="locale"
        class="w-8"
      > -->
      <option
        v-for="(lang, index) in $i18n.locales"
        :key="index"
        :value="lang.code"
      >
        {{ lang.name }}
      </option>
    </select>
  </div>
</template>

<script>
/**
 * Lang switcher component to change the language of the website
 */
export default {
  name: 'LangSwitcher',
  data () {
    return {
      locale: this.$i18n.locale
    }
  },
  watch: {},
  created () {},
  methods: {
    onChange (event) {
      this.$router.push(this.switchLocalePath(event))
    }
  }
}
</script>

