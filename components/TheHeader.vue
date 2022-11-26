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
      <ul class="flex items-center gap-12">
        <li><a href="">Наша история</a></li>
        <li><a href="">Присоединиться</a></li>
        <li><a href="">Блог</a></li>
      </ul>
      <div class="flex items-center gap-4">
        <header-card add-style="bg-orange-50">
          <the-icon src="shopping-cart" />
        </header-card>
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

<style></style>
