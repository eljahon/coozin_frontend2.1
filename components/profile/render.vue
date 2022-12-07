<template>
  <component :is="isRender" />
</template>

<script>
import profile from './index.vue'
import myOrder from './MyOrder.vue'
import update from './update.vue'
import subscriptions from './subscriptions.vue'

export default {
  name: "",
  data() {
    return {
      componentList: {
        profile,
        'my-orders': myOrder,
        update,
        subscriptions,
      }
    }
  },
  computed: {
    isRender() {
      return this.componentList[this.$route.query.name ?? 'profile']
    }
  }
}
</script>

<style scoped>

</style>
