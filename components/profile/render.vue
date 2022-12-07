<template>
  <component :is="isRender" />
</template>

<script>
import profile from './index.vue'
import myOrder from './MyOrder.vue'
import update from './update.vue'

export default {
  name: "",
  data() {
    return {
      componentList: {
        profile: profile,
        'my-orders': myOrder,
        update: update
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
