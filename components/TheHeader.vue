<template>
  <header class="header">
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
        <header-card add-style="text-gray-800	font-medium">UZ</header-card>
        <header-card>
          <the-icon src="user" />
        </header-card>
      </div>
    </nav>
  </header>
</template>

<script>
import HeaderCard from "~/components/header/header-card";

export default {
  name: "",
  components: {
    'header-card': HeaderCard
  }
}
</script>

<style scoped>
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
