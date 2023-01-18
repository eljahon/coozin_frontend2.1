<template>
  <div class="main-styles pb-8">
    <div class="container mx-auto">
      <div class="banner">
        <div class="banner__item flex items-center sm:gap-4 gap-2 pl-7">
          <div class="avatar-styles">
            <img class="w-full fit-cover" :src="vendor.avatar ? vendor.avatar : 'https://i.pravatar.cc/190'" alt="Avatar Chef">
          </div>
          <div class="flex flex-col md:gap-8 sm:gap-4 gap-2 w-full">
            <div class="flex sm:gap-4 gap-3">
              <div class="flex items-center gap-2 md:px-4 px-3 bg-white rounded-full">
                <the-icon class="md:block hidden" src="rate" width="20" height="20"/>
                <the-icon class="md:hidden block" src="rate" width="16" height="16"/>
                <span class="text-gray-800 md:text-xl sm:text-lg text-base">{{ vendor.ratings_avg ? vendor.ratings_avg : '0' }}</span>
              </div>
              <div v-if="vendor.subscribe" class="flex items-center justify-center gap-2 md:py-2 md:px-5 px-3 bg-white rounded-full cursor-pointer">
                <the-icon src="chef" width="16" height="16"/>
                <span class="text-gray-800 md:text-xl sm:text-lg text-base text-gray-800 font-medium">Вы подписаны</span>
              </div>
              <div v-else class="flex items-center justify-center gap-2 md:py-2 py-1 px-5 bg-white rounded-full cursor-pointer">
                <the-icon src="chef-hat" width="16" height="16"/>
                <span class="text-gray-800 md:text-xl sm:text-lg text-base text-gray-800 font-medium">Подписаться</span>
              </div>
            </div>
            <div class="flex lg:flex-row flex-col lg:gap-0 lg:items-center lg:justify-between xl:px-0 lg:gap-0 sm:gap-6 gap-4">
              <div class="flex items-center sm:gap-5 gap-2">
                <h2 class="md:text-2xl sm:text-xl text-sm text-gray-800 font-semibold	items-center">{{ vendor?.user?.full_name ? vendor.user.full_name : 'No name'}}</h2>
                <the-icon class="md:block hidden" src="information-circle"/>
                <the-icon class="md:hidden block" width="22" src="information-circle"/>
                <the-icon class="cursor-pointer md:block hidden" src="share"/>
                <the-icon class="cursor-pointer md:hidden block" width="22" src="share"/>
              </div>
              <div class="switch switch-additinal" @click="switchOn = !switchOn">
                <div class="switch-item delay-300"
                     :class="{ 'switch-right': switchOn, 'switch-left': !switchOn }"></div>
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
    <div class="container mx-auto xl:px-0 sm:px-4 px-3">
      <div class="switch switch-rwd" @click="switchOn = !switchOn">
        <div class="switch-item delay-300"
             :class="{ 'switch-right': switchOn, 'switch-left': !switchOn }"></div>
        <div>
          <span :class="{'text-orange-600': !switchOn, 'text-gray-500': switchOn}">Меню</span>
        </div>
        <div>
          <span :class="{'text-orange-600': switchOn, 'text-gray-500': !switchOn}">Лента</span>
        </div>
      </div>
    </div>
    <div v-if="!switchOn">
      <div class="container mx-auto overflow-x-scroll scroll-style xl:px-0 sm:px-4 px-3 sm:my-7 my-4 lg:py-0 pt-4">
        <div class="flex items-center gap-4 w-full">
          <div v-for="(item, idx) in foods" :key="idx" @click="showFood(item)">
            <chef-product-card
              :src="item.src"
              :title="item.name"
              :price="item.price"
              :delay="item.preparation_time"
              :item="item"
            />
          </div>
        </div>
      </div>
<!--      <div class="container mx-auto overflow-x-scroll scroll-style my-7">-->
<!--        <div class="flex items-center gap-4 w-full">-->
<!--          <chef-product-card v-for="(item, idx) in productData" :key="idx" :src="item.src" :title="item.title"-->
<!--                             :price="item.price" :delay="item.delay"/>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div v-if="more" class="container mx-auto overflow-x-scroll scroll-style my-7">-->
<!--        <div class="flex items-center gap-4 w-full">-->
<!--          <chef-product-card v-for="(item, idx) in productData" :key="idx" :src="item.src" :title="item.title"-->
<!--                             :price="item.price" :delay="item.delay"/>-->
<!--        </div>-->
<!--      </div>-->
    </div>
<!--    <div v-if="switchOn">-->
<!--      <div class="container mx-auto flex flex-wrap items-center justify-center gap-3 mb-7">-->
<!--        <div v-if="vendor?.reels[0]?.length > 0 && vendor.reels[0]?.media[0]?.length > 0">-->
<!--          <div v-for="(item, idx) in vendor.reels[0].media" :key="item.id ? item.id : idx">-->
<!--            <div class="blog-img">-->
<!--              <img class="w-full object-cover" :src="item.url" :alt="item.title">-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div-->
<!--      v-if="vendor?.reels[0]?.length > 0 && vendor.reels[0]?.media[0]?.length > 0 && !more"-->
<!--      @click="more = true"-->
<!--      style="width: 384px;"-->
<!--      class="mx-auto py-2 bg-white rounded-lg text-center cursor-pointer"-->
<!--    >-->
<!--      <span class="text-sm text-gray-700">Показать больше</span>-->
<!--    </div>-->
    <the-food :item="foodDetail" ></the-food>
  </div>
</template>;

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
     foodDetail: {},
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
     ],
     vendor: [],
     foods: []
   }
 },
  async fetch () {
    await this.getItem()
  },
  methods: {
    showFood(item) {
      this.foodDetail = item;
      this.$routePush({...this.$route.query, foodSaw: 'foodSaw'})
    },
    async getItem() {
      try {
        await this.$axios.get(`vendors/${this.$route.query.vendor_id}`).then(res => {
          this.vendor = res;
          this.$store.dispatch('orderCarzina/set_vendor_name', res.user.full_name)
        })
        await this.$axios.get('foods', {
          params: {
            limit: 10,
            vendor_id: this.$route.query.vendor_id
          }
        }).then(res => {
          const { objects } = res
          this.foods = objects
        })
      } catch (err) {
      }
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
.switch-rwd {
  display: none;
}
@media screen and (max-width: 1024px) {
  .banner .banner__item {
    transform: translate(0, 140px);
  }
}

@media screen and (max-width: 768px) {
  .banner .banner__item {
    transform: translate(0, 150px);
  }
}

@media screen and (max-width: 640px) {
  .product-card {
    height: 260px;
  }
  .banner .banner__item {
    transform: translate(0, 170px);
  }
  .avatar-styles {
    width: 120px;
    height: 120px;
  }
  .switch {
    width: 350px;
  }
}
@media screen and (max-width: 540px) {
  .switch-additinal {
    display: none;
  }
  .banner .banner__item {
    transform: translate(0, 150px);
  }
  .switch-rwd {
    display: flex;
    width: 90%;
    margin: 0 auto;
  }
  .banner {
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 450px) {
  .avatar-styles {
    width: 95px;
    height: 95px;
  }
  .banner .banner__item {
    transform: translate(0, 160px);
    padding: 0 12px;
  }
}
@media screen and (max-width: 400px) {
  .avatar-styles {
    width: 85px;
    height: 85px;
  }
  .banner {
    margin-bottom: 55px;
  }
  .banner .banner__item {
    transform: translate(0, 167px);
    padding: 0 12px;
  }
}
</style>
