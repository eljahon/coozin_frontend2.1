<template>
  <div class="main-styles pb-8">
    <div class="container mx-auto">
      <div class="banner">
        <div class="banner__item flex items-center gap-4 pl-7">
          <div class="avatar-styles">
            <img class="w-full fit-cover" src="https://i.pravatar.cc/190" alt="Avatar Chef">
          </div>
          <div class="flex flex-col gap-8 w-full">
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
                <div class="switch-item delay-300" :class="{ 'switch-right': switchOn, 'switch-left': !switchOn }"></div>
                <div>
                  <span :class="{'text-orange-600': !switchOn, 'text-gray-500': switchOn}">Меню</span>
                </div>
                <div>
                  <span :class="{'text-orange-600': switchOn, 'text-gray-500': !switchOn}">Лента</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!switchOn">
      <div class="container mx-auto overflow-x-scroll scroll-style my-7">
        <div class="flex items-center gap-4 w-full">
          <chef-product-card @click="foodModal = true" v-for="(item, idx) in productData" :key="idx" :src="item.src" :title="item.title" :price="item.price" :delay="item.delay" />
        </div>
      </div>
      <div class="container mx-auto overflow-x-scroll scroll-style my-7">
        <div class="flex items-center gap-4 w-full">
          <chef-product-card @click="foodModal = true" v-for="(item, idx) in productData" :key="idx" :src="item.src" :title="item.title" :price="item.price" :delay="item.delay" />
        </div>
      </div>
      <div v-if="more" class="container mx-auto overflow-x-scroll scroll-style my-7">
        <div class="flex items-center gap-4 w-full">
          <chef-product-card @click="foodModal = true" v-for="(item, idx) in productData" :key="idx" :src="item.src" :title="item.title" :price="item.price" :delay="item.delay" />
        </div>
      </div>
    </div>
    <div v-if="switchOn">
      <div class="container mx-auto flex flex-wrap items-center justify-center gap-3 mb-7">
        <div v-for="(item, idx) in blogData" :key="idx">
          <div class="blog-img">
            <img class="w-full object-cover" :src="require(`../../../assets/img/${ item }.jpg`)" alt="Blog Food Image">
          </div>
        </div>
      </div>
    </div>
    <div @click="more = true" v-if="!more" style="width: 384px;" class="mx-auto py-2 bg-white rounded-lg text-center cursor-pointer">
      <span class="text-sm text-gray-700">Показать больше</span>
    </div>
  </div>
</template>

<script>
export default {
 data() {
   return {
     switchOn: false,
     more: false,
     foodModal: false,
     categoryCard: [
       {
         icon: 'category-1',
         title: 'Все категории'
       },
       {
         icon: 'category-2',
         title: 'Первое'
       },
       {
         icon: 'category-3',
         title: 'Второе'
       },
       {
         icon: 'category-4',
         title: 'Завтраки'
       },
       {
         icon: 'category-5',
         title: 'Гарниры'
       },
       {
         icon: 'category-6',
         title: 'Бизнес ланч'
       },
       {
         icon: 'category-7',
         title: 'Скидки'
       },
       {
         icon: 'category-8',
         title: 'Десерты'
       },
       {
         icon: 'category-9',
         title: 'Выпечка'
       },
     ],
     productData: [
       {
         src: 'img-1',
         title: 'Имя Фамилия',
         price: '12000',
         delay: 40
       },
       {
         src: 'img-2',
         title: 'Имя Фамилия',
         price: '12000',
         delay: 40
       },
       {
         src: 'img-3',
         title: 'Имя Фамилия',
         price: '12000',
         delay: 40
       },
       {
         src: 'img-4',
         title: 'Имя Фамилия',
         price: '12000',
         delay: 40
       },
       {
         src: 'img-5',
         title: 'Имя Фамилия',
         price: '12000',
         delay: 40
       },
       {
         src: 'img-1',
         title: 'Имя Фамилия',
         price: '12000',
         delay: 40
       },
       {
         src: 'img-1',
         title: 'Имя Фамилия',
         price: '12000',
         delay: 40
       },
       {
         src: 'img-1',
         title: 'Имя Фамилия',
         price: '12000',
         delay: 40
       },
       {
         src: 'img-1',
         title: 'Имя Фамилия',
         price: '12000',
         delay: 40
       },
       {
         src: 'img-1',
         title: 'Имя Фамилия',
         price: '12000',
         delay: 40
       },
     ],
     blogCard: [
       'img-1',
       'img-2',
       'img-3',
       'img-4',
       'img-5',
       'img-1',
       'img-2',
       'img-3',
       'img-4',
       'img-5',
       'img-1',
       'img-2',
       'img-3',
     ]
   }
 },
  computed: {
   blogData() {
     return !this.more ? this.blogCard.slice(0, 8) : this.blogCard.slice(0, this.blogCard.length - 1)
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

  .banner {
    background: url("../../../assets/img/img-4.jpg") no-repeat;
    background-size: cover;
    height: 214px;
    margin-bottom: 116px;
  }
  .banner .banner__item {
    transform: translate(0, 125px);
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
    display: flex;
    flex-shrink: 0;
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
  .blog-img {
    width: 296px;
    height: 296px;
    border: 2px solid #F3F4F6;
    border-radius: 8px;
    overflow: hidden;
  }
</style>
