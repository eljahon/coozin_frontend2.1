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
            <div class="flex gap-4 cursor-pointer">
              <the-icon :src="item.icon" />
              <h4 class="text-color-700 font-normal">{{ item.title }}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="p-6 bg-white rounded-2xl flex items-center justify-center p-16 w-full">
        <div class="rounded-full bg-gray-50 w-96 h-96 flex items-center justify-center flex-col">
          <div class="w-36 rounded-full overflow-hidden border-4 border-gray-300 mb-5">
            <img class="w-full fit-cover" src="https://i.pravatar.cc/140" alt="Avatar image">
          </div>
          <h2 class="text-gray-800 text-2xl font-semibold mb-3">Азиза Азимова</h2>
          <h3 class="text-gray-700 font-medium text-xl">+998 90 123 45 67</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: [
        {
          icon: 'pencil',
          title: 'Редактировать'
        },
        {
          icon: 'clipboard',
          title: 'Мои заказы'
        },
        {
          icon: 'heart',
          title: 'Мои подписки'
        },
        {
          icon: 'credit-card',
          title: 'Мои карты'
        },
        {
          icon: 'share',
          title: 'Поделиться'
        },
        {
          icon: 'chat',
          title: 'Чат'
        },
        {
          icon: 'logout',
          title: 'Выйти'
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
