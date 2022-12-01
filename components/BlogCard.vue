<template>
  <div class="blog-card group cursor-pointer" :style="{ width: width, height: height }">
    <img class="group-hover:scale-125 duration-200" :src="require(`../assets/img/${src}.jpg`)" :alt="src + 'jpg'">
    <div>
      <div>
        <img :src="avatar" :alt="avatar + ' image'">
      </div>
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['src', 'avatar', 'title', 'width', 'height']
}
</script>

<style scoped>
  .blog-card {
    position: relative;
    width: 328px;
    height: 308px;
    border-radius: 16px;
    overflow: hidden;
  }
  .blog-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .blog-card > div > div {
    width: 48px;
    height: 48px;
    border-radius: 100%;
    border: 1.5px solid #FFEEE3;
    overflow: hidden;
  }
  .blog-card > div {
    position: absolute;
    bottom: 16px;
    left: 16px;
    display: flex;
    align-items: center;
    gap: 16px;

  }
  span {
    color: #FFFFFF;
  }
</style>
