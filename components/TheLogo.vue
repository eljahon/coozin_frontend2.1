<template>
  <div class="cursor-pointer">
    <nuxt-link to="/">
      <div v-if="logo">
        <img src="../assets/svg/footer-logo.svg" alt="">
      </div>
      <div v-else>
        <img src="../assets/svg/logo.svg" alt="">
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['logo']
}
</script>
