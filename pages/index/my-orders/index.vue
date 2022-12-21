<template>
  <div class="main-styles">
    <div class="container mx-auto flex items-center gap-3 px-4 py-7">
      <nuxt-link to="/">
        <the-icon src="home" />
      </nuxt-link>
      <the-icon src="right-arrow-black" />
      <span class="text-sm font-medium text-gray-500 cursor-pointer">Профиль</span>
      <the-icon src="right-arrow-black" />
      <span class="text-sm font-medium text-gray-500 cursor-pointer">Мои заказы</span>
    </div>
    <div class="container">
      <div class="flex">
        <div class="w-96">
          <div class="switch" @click="switchOn = !switchOn">
            <div class="switch-item delay-300" :class="{ 'switch-right': switchOn, 'switch-left': !switchOn }"></div>
            <div>
              <span :class="{'text-orange-600': !switchOn, 'text-gray-500': switchOn}">Активные</span>
            </div>
            <div>
              <span :class="{'text-orange-600': switchOn, 'text-gray-500': !switchOn}">История</span>
            </div>
          </div>
        </div>
        <div class="w-full flex shrink-0 gap-12 bg-white">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchOn: false
    }
  }
}
</script>

<style scoped>
.scroll-style::-webkit-scrollbar {
  height: 0;
  border-radius: 24px;
}
.scroll-style::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.scroll-style::-webkit-scrollbar-thumb {
  background: #888;
}
.scroll-style::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.main-styles {
  background: #F3F4F6;
}
.switch {
  position: relative;
  background: #FFFFFF;
  border-radius: 24px;
  width: 368px;
  height: 48px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.switch span {
  position: relative;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  z-index: 4;
}
.switch > div {
  width: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
}
.switch-item {
  width: 188px;
  height: 32px;
  background: #FFEEE3;
  border-radius: 24px;
  transition: ease-in-out .3s;
}
.switch-left {
  position: absolute;
  top: 4px;
  left: 4px;
  transition: ease-in-out .3s;
}
.switch-right {
  position: absolute;
  right: 4px !important;
  top: 4px;
  transition: ease-in-out .3s;
}
</style>
