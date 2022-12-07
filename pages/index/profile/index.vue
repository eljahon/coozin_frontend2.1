<template>
  <div class="main-styles py-8 flex flex-col gap-7">
    <div class="container mx-auto flex items-center gap-3 px-4">
      <nuxt-link to="/">
        <the-icon src="home" />
      </nuxt-link>
      <the-icon src="right-arrow-black" />
      <span class="text-sm font-medium text-gray-500 cursor-pointer">Профиль</span>
    </div>

    <div class="container mx-auto flex gap-5">
      <div class="w-80 flex flex-col gap-5 shrink-0">
        <div class="p-6 bg-white rounded-2xl flex flex-col gap-2 w-full">
          <h3 class="text-xl font-semibold text-gray-800">Азиза Азимова</h3>
          <h6 class="text-xs text-color-700 font-medium">Coozin кошелёк:</h6>
          <div class="flex gap-2">
            <the-icon src="coin" />
            <h4 class="text-xl text-color-700 font-semibold">1 000 000 сум</h4>
          </div>
        </div>
        <div class="p-6 bg-white rounded-2xl flex flex-col gap-6 w-full">
          <div v-for="(item, idx) in profile" :key="idx">
            <nuxt-link :to="{
              path: localePath($route.path), query: {
                name: item.name
              }
             }">
              <div class="flex gap-4 cursor-pointer">
                <the-icon :src="item.icon" />
                <h4 class="text-color-700 font-normal">{{ item.title }}</h4>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>

      <render />
    </div>
  </div>
</template>

<script>
import render from '../../../components/profile/render.vue'

export default {
  components: {
    'render': render
  },
  data() {
    return {
      profile: [
        {
          icon: 'pencil',
          title: 'Редактировать',
          name: 'update'
        },
        {
          icon: 'clipboard',
          title: 'Мои заказы',
          name: 'my-orders'
        },
        {
          icon: 'heart',
          title: 'Мои подписки',
          name: 'heart'
        },
        {
          icon: 'credit-card',
          title: 'Мои карты',
          name: 'credit-cards'
        },
        {
          icon: 'share',
          title: 'Поделиться',
          name: 'share'
        },
        {
          icon: 'chat',
          title: 'Чат',
          name: 'chat'
        },
        {
          icon: 'logout',
          title: 'Выйти',
          name: 'logout'
        },
      ]
    }
  }
}
</script>

<style scoped>
  .main-styles {
    background: #F3F4F6;
  }
</style>
