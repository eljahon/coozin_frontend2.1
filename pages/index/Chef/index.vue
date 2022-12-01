<template>
  <div class="main-styles">
    <div class="container mx-auto">
      <div class="banner">
        <div class="flex items-center gap-4 pl-7">
          <div class="avatar-styles">
            <img class="w-full fit-cover" src="https://i.pravatar.cc/190" alt="Avatar Chef">
          </div>
          <div class="flex flex-col gap-8">
            <div class="flex gap-4">
              <div class="flex items-center gap-2 py-1 px-2.5 bg-white rounded-full">
                <the-icon src="rate" width="20" height="20" />
                <span class="text-gray-800 text-xl">4.5</span>
              </div>
              <div class="flex items-center justify-center gap-2 py-1 px-2.5 bg-white rounded-full w-48">
                <the-icon src="chef" width="16" height="16" />
                <span class="text-gray-800 text-xl text-sm text-gray-800 font-medium">Вы подписаны</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex gap-5">
                <h2 class="text-2xl	text-gray-800	font-semibold	items-center">Азиза Каримова</h2>
                <the-icon src="information-circle" />
                <the-icon src="share" />
              </div>
              <div class="switch" @click="switchOn = !switchOn">
                <div class="switch-item" :class="{ 'switch-right': switchOn, 'switch-left': !switchOn }"></div>
                <div>
                  <span>Меню</span>
                </div>
                <div>
                  <span>Лента</span>
                </div>
              </div>
            </div>
          </div>
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
  .banner {
    background: url("../../../assets/img/img-4.jpg") no-repeat;
    background-size: cover;
    height: 214px;
  }
  .main-styles {
    background: #F3F4F6;
  }
  .avatar-styles {
    width: 180px;
    height: 180px;
    border: 4px solid #EFEFEF;
    border-radius: 100%;
    overflow: hidden;
  }

  .switch {
    position: relative;
    background: #FFFFFF;
    border-radius: 24px;
    width: 368px;
    height: 40px;
    display: flex;
    cursor: pointer;
  }
  .switch span {
    position: relative;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #6B7280;
    z-index: 4;
  }
  .switch > div {
    width: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
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
