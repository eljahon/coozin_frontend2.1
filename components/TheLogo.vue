<template>
  <div>
    <div v-if="logo">
      <img src="../assets/svg/footer-logo.svg" alt="">
    </div>
    <div v-else>
      <img src="../assets/svg/logo.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['logo']
}
</script>
