<template>
  <div>
    <header @click="$store.dispatch('loginModal', false)" class="header">
      <nav class="container mx-auto py-4 flex items-center justify-between">
        <the-logo />
        <div class="flex items-center gap-3">
          <header-card>
            <the-icon src="search" />
          </header-card>
          <the-input type="text" placeholder="Можно узнать где ты?" icon="address" />
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
          <nuxt-link to="order">
            <header-card add-style="bg-orange-50">
              <the-icon src="shopping-cart" />
            </header-card>
          </nuxt-link>
          <div @click="lang = true">
            <header-card add-style="text-gray-800	font-medium relative">
              <span class="flex shrink-0">uz</span>
              <div v-if="lang" @mouseleave="lang = false" class="absolute w-40 bg-white cursor-pointer rounded-2xl p-2 top-16 flex flex-col text-center gap-1">
                <span class="w-full hover:bg-gray-100 rounded">UZ</span>
                <span class="w-full hover:bg-gray-100 rounded">RU</span>
                <span class="w-full hover:bg-gray-100 rounded">EN</span>
              </div>
            </header-card>
          </div>
          <header-card>
            <nuxt-link to="profile">
              <the-icon src="user" />
            </nuxt-link>
          </header-card>
          <span @click.stop="$store.dispatch('loginModal', true)">login</span>
        </div>
      </nav>
    </header>

    <!--  Login  -->
    <the-login :hide="$store.state.login" />

    <!--  Register  -->
    <the-register :hide="$store.state.register" />
  </div>
</template>

<script>
import HeaderCard from "~/components/header/header-card";

export default {
  data() {
    return {
      lang: false
    }
  },
  components: {
    'header-card': HeaderCard
  },
  mounted() {
    console.log(this.$auth)
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
