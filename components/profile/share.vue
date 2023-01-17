<template>
  <div class="p-6 bg-white rounded-2xl flex flex-col items-center justify-center w-full">
    <the-icon src="chef-share" />
    <h2 class="text-gray-800 text-2xl font-semibold mb-3">Поделиться с друзьями</h2>
    <p class="text-gray-700 text-base mb-8">Поделись со ссылкой с другом и получи 10%  от его первого заказа в свой Coozin кошелёк</p>
    <div class="input-styles">
      <input class="input-styles" disabled type="text" value="https://coozin.uz...">
      <div @click="copy">
        <the-icon src="copy" />
      </div>
    </div>
    <div class="flex items-center justify-center gap-6 mt-12">
      <the-icon src="instagram" />
      <the-icon src="facebook" />
      <the-icon src="youtube" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    copy() {
      navigator.clipboard.writeText('https://coozin.uz/').then(() => {
      }, function() {
      });
    }
  }
}
</script>

<style scoped>
.input-styles {
  position: relative;
  height: 56px;
  width: 390px;
}
.input-styles input {
  width: 390px;
  height: 56px;
  background: #F3F4F6;
  border-radius: 80px;
  padding: 14px 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.input-styles > div {
  cursor: pointer;
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translate(0, -50%);
  right: 10px;
  background: #FF6600;
  border-radius: 100%;
}
@media screen and (max-width: 420px) {
  .input-styles {
    width: 90%;
    /*margin: 0 auto;*/
  }
  .input-styles input {
    width: 100%;
  }
}
</style>
