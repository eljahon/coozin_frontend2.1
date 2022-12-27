<template>
  <div>
    <header @click="$store.dispatch('loginModal', false)" class="header">
      <nav class="container mx-auto py-4 flex items-center justify-between">
        <the-logo/>
        <div class="flex items-center gap-3">
          <header-card>
            <the-icon src="search"/>
          </header-card>
          <div @click="modal = true">
            <the-input
              type="text"
              placeholder="Можно узнать где ты?"
              icon="address"
              :readonly="true"
              inputStyles="cursor-pointer"
            />
          </div>
          <div class="relative">
            <div v-if="modal" class="absolute z-10 top-12 bg-white p-3 rounded-2xl border border-gray-300 flex flex-col gap-3">
              <h3 class="text-gray-800 font-semibold">Вы в г.Ташкент</h3>
              <p class="font-medium text-gray-700">Правильный выбор региона влияет на отображение акций и товаров</p>
              <div class="flex items-center gap-3 mx-auto">
                <button @click="modal = false" class="bg-orange-600 p-3 text-white w-40 rounded-3xl">Да, верно</button>
                <button @click="modal = false" class="bg-gray-300 p-3 text-gray-600 w-40 rounded-3xl">Вы ошиблись</button>
              </div>
            </div>
          </div>
        </div>
        <ul class="header-nav flex items-center gap-12">
          <li>
            <a href="">Наша история</a>
          </li>
          <li>
            <a href="">Присоединиться</a>
          </li>
          <li>
            <nuxt-link to="/blog">Блог</nuxt-link>
          </li>
        </ul>
        <div class="flex items-center gap-4">
          <button @click="checkLogin">
            <header-card add-style="bg-orange-50">
              <the-icon src="shopping-cart"/>
            </header-card>
          </button>
          <div @click="lang = true">
            <header-card add-style="text-gray-800	font-medium relative">
              <span class="flex shrink-0">{{ actionLang.name }}</span>
              <div v-if="lang" @mouseleave="lang = false"
                   class="absolute w-40 bg-white cursor-pointer rounded-2xl p-2 top-16 flex flex-col text-center gap-1">
                <span
                  v-for="
                  (item, index)
                  in
                  $i18n.locales.filter(el=> el.code !== $i18n.locale)"
                  class="w-full hover:bg-gray-100 rounded"
                  @click="handleLang(item.code)">
                  {{ item.name }}
                </span>
              </div>
            </header-card>
          </div>
          <header-card>
            <nuxt-link to="profile">
              <the-icon src="user"/>
            </nuxt-link>
          </header-card>
          <span @click.stop="
          () => $router.push({
          path: localePath($route.path),
          query: {...$route.query,
          login: 'login'}})">login</span>
        </div>
      </nav>
    </header>

    <!--  Login  -->
    <the-login :hide="$store.state.login"/>

    <!--  Register  -->
    <the-register :hide="$store.state.register"/>

    <!--  Order Modal  -->
    <the-modal />
  </div>
</template>

<script>
import HeaderCard from "~/components/header/header-card";

export default {
  data() {
    return {
      lang: false,
      modal: false
    }
  },
  components: {
    'header-card': HeaderCard
  },
  computed: {
    actionLang() {
      return this.$i18n.locales.find((el) => el.code === this.$i18n.locale)
    }
  },
  mounted() {
    console.log(this.$auth)
  },
  methods: {
    checkLogin () {
      // to="order"?
      if (this.$auth.state.loggedIn) {
        this.$router.push({path: this.localePath(this.$route.paht), query: {login: 'login'}})
      } else {
        if (this.$store.state.orderCarzina.orderList.length) {
          this.$router.push({path: this.localePath('/order')})
        }
      }
      // console.log()
    },
    handleLang(item) {
      console.log(item)
      this.$router.push(this.switchLocalePath(item))
    }
  }
}
</script>

<style scoped>
.header {
  position: relative;
  z-index: 10;
  background: #ffffff;
}

.header-nav li a {
  position: relative;
}

.header-nav li a:after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: -3px;
  width: 0;
  height: 2px;
  border-radius: 24px;
  background: #ea580c;
  transition: ease-in-out .3s;
}

.header-nav li a:hover:after {
  width: 90%;
}
</style>
