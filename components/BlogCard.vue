<template>
  <div class="blog-card group cursor-pointer" :style="{ width: width, height: height }">
    <img v-if="src" class="group-hover:scale-125 duration-200" :src="$img+src" :alt="src + 'jpg'">
    <img v-else class="group-hover:scale-125 duration-200" src="../assets/img/img-3.jpg" :alt="src + 'jpg'">
    <div>
      <div v-if="avatar">
        <img :src="$img+avatar" :alt="avatar + ' image'">
      </div>
      <div v-else>
        <img src="https://i.pravatar.cc/101">
      </div>
      <span v-if="title">{{ title }}</span>
      <span v-else>{{'title none'}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['src', 'avatar', 'title', 'width', 'height'],
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
  @media screen and (max-width: 640px) {
    .blog-card {
      width: 290px;
      height: 250px;
    }
  }
</style>
