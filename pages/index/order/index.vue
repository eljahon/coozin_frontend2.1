<template>
  <div class="main-styles py-8 flex flex-col gap-7">
    <div class="container mx-auto flex items-center gap-3 px-4">
      <nuxt-link to="/">
        <the-icon src="home" />
      </nuxt-link>
      <the-icon src="right-arrow-black" />
      <span class="text-sm font-medium text-gray-500 cursor-pointer">Оформление заказа</span>
    </div>
    <div class="container mx-auto flex gap-9">
      <div class="bg-white w-full p-6 rounded-2xl">
        <h1 class="font-semibold text-gray-800 text-2xl">Оформление заказа</h1>
        <div class="px-3 pt-5 flex justify-between">
          <div>
            <div class="flex items-end gap-2.5">
              <the-input
                styles="flex flex-col gap-3 input-styles"
                label-styles="font-medium text-gray-700"
                input-styles="w-80"
                type="text"
                icon="location"
                name="address"
                label="Адрес доставки"
                placeholder="улица Матонат, 35"
              />
              <div class="map-card">
                <the-icon src="map" />
              </div>
            </div>
            <div class="flex flex-col gap-3 input-styles w-96 mt-6">
              <label for="dilevery-time" class="font-medium text-gray-700">Время доставки</label>
              <div class="relative">
                <select
                  class="bg-white w-full text-gray-500 border rounded-2xl border-gray-200 py-2.5 pr-2 pl-11 text-base h-12 outline-orange-600"
                  id="dilevery-time"
                  name="dilevery-time"
                  style="-webkit-appearance: none;"
                >
                  <option value="">13:00 - 14:00</option>
                  <option value="">14:00 - 15:00</option>
                  <option value="">15:00 - 16:00</option>
                  <option value="">16:00 - 17:00</option>
                  <option value="">17:00 - 18:00</option>
                  <option value="">18:00 - 19:00</option>
                  <option value="">19:00 - 20:00</option>
                  <option value="">20:00 - 21:00</option>
                  <option value="">21:00 - 22:00</option>
                </select>
                <img class="absolute position" src="../../../assets/svg/clock-gray.svg" alt="Input icon" >
                <img class="absolute position-rigth" src="../../../assets/svg/arrow-bottom.svg" alt="Arrow icon">
              </div>
            </div>


          </div>
          <div>
            <the-input
              styles="flex flex-col gap-3 w-full"
              label-styles="font-medium text-gray-700"
              input-styles="w-96"
              type="text"
              icon="office"
              name="address"
              label="Ориентир"
              placeholder="улица Матонат, 35"
            />
            <div class="flex flex-col gap-3 input-styles w-96 mt-6">
              <label for="dilevery-time" class="font-medium text-gray-700">Способ оплаты</label>
              <div class="relative">
                <select
                  class="bg-white w-full text-gray-500 border rounded-2xl border-gray-200 py-2.5 pr-2 pl-11 text-base h-12 outline-orange-600"
                  id="dilevery-time"
                  name="dilevery-time"
                  style="-webkit-appearance: none;"
                >
                  <option value="">13:00 - 14:00</option>
                  <option value="">14:00 - 15:00</option>
                  <option value="">15:00 - 16:00</option>
                  <option value="">16:00 - 17:00</option>
                  <option value="">17:00 - 18:00</option>
                  <option value="">18:00 - 19:00</option>
                  <option value="">19:00 - 20:00</option>
                  <option value="">20:00 - 21:00</option>
                  <option value="">21:00 - 22:00</option>
                </select>
                <img class="absolute position" src="../../../assets/svg/cash.svg" alt="Input icon" >
                <img class="absolute position-rigth" src="../../../assets/svg/arrow-bottom.svg" alt="Arrow icon">
              </div>
            </div>
          </div>
        </div>
        <div class="px-3 pt-5 flex justify-between">
          <div class="flex items-center justify-between w-96">
            <div class="flex items-center justify-center gap-3">
              <h3>Повторный заказ</h3>
              <the-icon src="information-circle" width="20" height="20" />
            </div>
            <div class="container-switch">
              <input type="checkbox" name="" id="switch">
              <label for="switch">
                <div class="switch">
                  <div class="bar"></div>
                </div>
              </label>
            </div>
          </div>
          <div class="max-w-sm overflow-x-scroll scroll-style">
            <div class="flex items-center gap-3.5">
              <div v-for="item in $store.state.days_list">
                <menu-card
                  :date="item"
                />
<!--                {{$store.state.days_list}}-->
              </div>
            </div>
          </div>
        </div>
        <div class="w-96">
          <h3 class="text-lg font-semibold text-gray-700">К оплате</h3>
          <div class="flex justify-between">
            <h4 class="text-gray-600">Блюда</h4>
            <h4 class="font-medium text-gray-600">270 000 сум</h4>
          </div>
          <div class="flex justify-between my-2">
            <h4 class="text-gray-600">Доставка</h4>
            <h4 class="font-medium text-gray-600">10 000 сум</h4>
          </div>
          <div class="flex justify-between">
            <h4 class="font-bold text-gray-600">Итого</h4>
            <h4 class="font-bold text-gray-600">280 000 сум</h4>
          </div>
        </div>
        <button class="w-full bg-gray-300 h-12 rounded-3xl text-gray-400 font-semibold mt-12 cursor-pointer">Оплатить</button>
      </div>
      <div class="bg-white w-80 rounded-2xl px-2 py-4 flex flex-col gap-3 shrink-0">
        <h2 class="font-semibold text-gray-800 text-2xl mx-2">Ваш заказ</h2>
        <div class="flex flex-col gap-3 overflow-y-scroll scroll-style pl-2 pr-4" style="max-height: 516px;">
          <div v-for="item in 14">
            <div class="flex gap-4">
              <div class="w-24 h-24 overflow-hidden border border-gray-100 rounded-lg">
                <img class="w-full" src="../../../assets/img/img-1.jpg" alt="Food Image">
              </div>
              <div class="flex flex-col gap-1">
                <h4 class="font-normal text-gray-700">Теплый салат</h4>
                <h4 class="font-bold text-gray-700">2х15,000 сум</h4>
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
      menuCard: [
        {
          date: 26,
          month: "Сен",
          variant: true
        },
        {
          date: 27,
          month: "Сен",
          variant: true
        },
        {
          date: 28,
          month: "Сен",
          variant: true
        },
        {
          date: 29,
          month: "Сен",
          variant: true
        },
        {
          date: 30,
          month: "Сен",
          variant: true
        },
        {
          date: 31,
          month: "Сен",
          variant: true
        },
        {
          date: 1,
          month: "Окт",
          variant: true
        },
        {
          date: 2,
          month: "Окт",
          variant: true
        },
        {
          date: 3,
          month: "Окт",
          variant: true
        },
        {
          date: 4,
          month: "Окт",
          variant: true
        },

      ],
    }
  },
  async fetch () {
    await this.getDate()
  },
  methods: {
    async getDate () {
      return this.$store.dispatch('set_day')
    },
  }
}
</script>

<style scoped>
  .scroll-style::-webkit-scrollbar {
    height: 0;
    width: 3px;
    border-radius: 24px;
  }
  .scroll-style::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  .scroll-style::-webkit-scrollbar-thumb {
    background: #bcbcbc;
  }
  .scroll-style::-webkit-scrollbar-thumb:hover {
    background: #a4a4a4;
  }

  .main-styles {
    background: #F3F4F6;
  }
  .map-card {
    background: #FFFFFF;
    box-shadow: -3px -2px 20px -10px rgba(0, 0, 0, 0.19), 0px 4px 7px -1px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .position {
    top: 50%;
    transform: translate(0, -50%);
    left: 12px;
  }
  .position-rigth {
    top: 50%;
    transform: translate(0, -50%);
    right: 12px;
  }


  .container-switch input[type="checkbox"] {
    display: none;
  }

  .container-switch label .switch {
    background: linear-gradient(90deg, #fd9657 0%, #EA580C 100%);
    width: 36px;
    height: 20px;
    border-radius: 50px;
    padding: 1.5px;
    position: relative;
    border: 2px #fff solid;
  }

  .container-switch input[type="checkbox"] + label .bar {
    background: linear-gradient(90deg, #ffffff 0%, #ffffff 100%);
    height: 14px;
    width: 14px;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
  }
  .container-switch input[type="checkbox"]:checked + label .bar {
    background: linear-gradient(90deg, #ffffff 0%, #ffffff 100%);
    /* margin-left: auto; */
    transform: translateX(16px);
  }

  .container-switch label:active .bar {
    /* background-color: red; */
    box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0.322);
  }

</style>
