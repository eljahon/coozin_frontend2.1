<template>
  <div>
    <div v-if="this.$auth.state.loggedIn" class="burger p-4" :class="{'open':$store.state.burger}">
      <div class="bg-white rounded-2xl flex flex-col gap-2 w-full mb-4">
        <h3 class="text-xl font-semibold text-gray-800">{{ user.full_name }}</h3>
        <h6 class="text-xs text-color-700 font-medium">Coozin кошелёк:</h6>
        <div class="flex gap-2">
          <the-icon src="coin" />
          <h4 class="text-xl text-color-700 font-semibold">{{ user.balance }} сум</h4>
        </div>
      </div>
      <div class="bg-white rounded-2xl flex flex-col gap-6 w-full">
        <div v-for="(item, idx) in profile" :key="idx">
          <div @click="handleRoute(item)">
            <div class="flex gap-4 cursor-pointer">
              <the-icon :src="item.icon" />
              <h4 class="text-color-700 font-normal">{{ item.title }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="burger p-4" :class="{'open':$store.state.burger}">
      <div class="bg-white rounded-2xl flex flex-col gap-2 w-full mb-4">
        <h3 class="text-xl font-semibold text-gray-800">{{ user.full_name }}</h3>
        <h6 class="text-xs text-color-700 font-medium">Coozin кошелёк:</h6>
        <div class="flex gap-2">
          <the-icon src="coin" />
          <h4 class="text-xl text-color-700 font-semibold">{{ user.balance }} сум</h4>
        </div>
      </div>
      <div class="bg-white rounded-2xl flex flex-col gap-6 w-full">
        <div v-for="(item, idx) in profile" :key="idx">
          <div @click="handleRoute(item)">
            <div class="flex gap-4 cursor-pointer">
              <the-icon :src="item.icon" />
              <h4 class="text-color-700 font-normal">{{ item.title }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$store.state.burger" @click="$store.dispatch('burgerOpen', false)" class="burger-background"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: [],
      profile: [
        {
          icon: 'pencil',
          title: 'Редактировать',
          name: 'update',
          link: '/profile'
        },
        {
          icon: 'clipboard',
          title: 'Мои заказы',
          link: '/my-orders'
        },
        {
          icon: 'heart',
          title: 'Мои подписки',
          name: 'subscriptions'
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
      ],
    }
  },
  head () {
    return {
      bodyAttrs: {
        // class: this.$store.state.burger ? 'overflow-hidden' : ''
      }
    }
  },
  mounted() {
    if(this.$auth.state.loggedIn) {
      this.getUser()
    }
  },
  methods: {
    getUser() {
      this.$axios.get('user').then(res => {
        this.user = res
      })
    },
    handleRoute(item) {
      this.$store.dispatch('burgerOpen', false)
      if (item.name) {
        this.$router.push({ path: this.localePath('/profile'), query: {name: item.name}})
      } else {
        this.$router.push({ path: this.localePath(item.link)})
        // return {
        //   path: this.localePath(this.$route.path), query: {
        //     name: item.name
        //   }
        // }
      }
    },
  }
}
</script>

<style scoped>
.burger {
  position: fixed;
  z-index: 12;
  top: 80px;
  bottom: 0;
  left: -350px;
  width: 350px;
  background: #ffffff;
  transition: .3s;
}
.burger-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: #111827;
  opacity: 0.3;
}
.open {
  left: 0;
}
@media screen and (max-width: 640px) {
  .burger {
    top: 72px;
  }
}
</style>
