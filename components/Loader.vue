<template>
  <div v-if="active" class="loader absolute left-0 right-0 bottom-0 z-10 flex items-center justify-center bg-white">
    <img src="@/assets/img/loader.gif" alt="Loader">
  </div>
</template>

<script >
  export default {
    props: ['active']
  }
</script>

<style scoped>
.loader {
  top: 80px;
}
</style>
