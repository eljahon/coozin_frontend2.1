<template>
  <div class="main-styles pb-8">
    <!--  Banner  -->
    <div class="container mx-auto py-8">
      <div class="flex justify-center gap-4">
        <banner-card
          :src="collections[0]?.banner?.url"
          add-style="card-1"
          :status="collections[0]?.name"
          status-style="text-cyan-600 bg-teal-50"
        />
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <banner-card
              :src="collections[1]?.banner?.url"
              add-style="card-2"
              :status="collections[1]?.name"
              status-style="text-red-600 bg-red-50"
            />
            <banner-card
              :src="collections[2]?.banner?.url"
              add-style="card-3"
              :status="collections[2]?.name"
              status-style="text-orange-600 bg-orange-50"
            />
          </div>
          <div class="flex items-center gap-4">
            <banner-card
              :src="collections[3]?.banner?.url"
              add-style="card-4"
              :status="collections[3]?.name"
              status-style="text-purple-600 bg-purple-50"
            />
            <banner-card
              :src="collections[4]?.banner?.url"
              add-style="card-5"
              :status="collections[4]?.name"
              status-style="text-green-600 bg-green-50"
            />
          </div>
        </div>
      </div>
    </div>

    <!--  Menu section  -->
    <div class="container mx-auto">
      <div class="flex items-center justify-between mb-5">
        <h2 id="menu" class="text-3xl font-semibold text-gray-800">
          <a href="#menu">Меню</a>
        </h2>
        <div class="flex items-center gap-1">
          <span class="font-normal text-orange-600 cursor-pointer">Посмотреть больше</span>
          <the-icon src="right-arrow" />
        </div>
      </div>
    </div>
    <div class="container mx-auto overflow-x-scroll scroll-style">
      <div class="flex items-center gap-3.5">
        <div v-for="item in $store.state.days_list">
          <menu-card
            :date="item"
            :month="item.month"
            @onDates="onDatesFilter"
          />
          </div>
        </div>
    </div>
    <div class="container mx-auto overflow-x-scroll scroll-style my-7">
      <div class="flex items-center gap-4 w-full">
          <category-card
            v-for="item in categories"
            :key="item.id"
            :title="item.name"
            :id="item.id"
            @clickCategories="categoriesFilter"
          />
      </div>
    </div>

    <div class="container mx-auto overflow-x-scroll scroll-style my-7">
<!--      <span>{{checked(parenIndex)}}</span>-->
      <div class="flex items-center gap-4 w-full">
        <product-card
          v-for="(item, idx) in productData"
          :key="idx"
          :id="item.id"
          :src="item.src"
          :title="item?.user?.full_name"
          :product-img="item.productImg"
          :avatar="item?.avatar"
          :rate="item?.ratings_avg"
          :delivery-price="item.deliveryPrice"
          :count="idx+1"
        />
      </div>
    </div>
      <div @click="more = true" v-if="!more" style="width: 384px;" class="mx-auto py-2 bg-white rounded-lg text-center cursor-pointer">
        <span class="text-sm text-gray-700">Показать больше</span>
      </div>

    <!--  Blog section  -->
    <div class="container mx-auto">
      <div class="flex items-center justify-between mb-5">
        <h2 id="blog" class="text-3xl font-semibold text-gray-800">
          <a href="#menu">Блог</a>
        </h2>
        <div class="flex items-center gap-1">
          <span class="font-normal text-orange-600 cursor-pointer">Посмотреть больше</span>
          <the-icon src="right-arrow" />
        </div>
      </div>
    </div>
    <div class="container mx-auto overflow-x-scroll scroll-style">
      <div class="flex items-center gap-3.5">
        <div v-for="(item, idx) in blogCard" :key="item.id">
          <blog-card
            :src="item?.media[0]?.url"
            :title="item.title"
            :avatar="item.vendor.avatar"
          />
        </div>
        <div v-if="true" class="login">
          <div class="login-modal">
            <div @click="() => $router.push({path: localePath($route.path), query: {...$route.query,login: undefined}})" class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center relative x-position cursor-pointer">
              <the-icon src="x" />
            </div>
            <h2 class="text-2xl font-bold text-center text-gray-700">Войти в  аккаунт</h2>
<!--            <p class="text-lg text-center text-gray-700 mt-1">У вас ещё нет аккаунта?-->
<!--              <span @click="() => $router.push({path: localePath($route.path), query: {...$route.query,login: undefined, register: 'register'}})" class="text-orange-600 cursor-pointer font-semibold	">Регистрация</span>-->
<!--            </p>-->
<!--            <input-->
<!--              class="bg-white text-gray-500 border rounded-2xl border-gray-200-->
<!--         py-2.5 px-4 text-base h-12 outline-orange-600 w-96 bg-gray-100 my-6"-->
<!--              v-model="login.phone"-->
<!--              placeholder="Введите номер телефона"-->
<!--              type="text"-->
<!--            >-->
<!--            <input-->
<!--              class="bg-white text-gray-500 border rounded-2xl border-gray-200-->
<!--         py-2.5 pr-2 pl-11 text-base h-12 outline-orange-600 w-96"-->
<!--              v-model="login.password"-->
<!--              type="text"-->
<!--            >-->
<!--            <button-->
<!--              @click="funcLogin"-->
<!--              class="w-96 h-14 rounded-3xl bg-orange-600 text-white font-semibold"-->
<!--            >Получить пароль</button>-->
          </div>
<!--          <div @click="$store.dispatch('loginModal', false)" class="login-background"></div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
  export default {
    data() {
      return {
        location: false,
        more: false,
        menuCard: [
          {
            date: 26,
            month: "Сен"
          },
          {
            date: 27,
            month: "Сен"
          },
          {
            date: 28,
            month: "Сен"
          },
          {
            date: 29,
            month: "Сен"
          },
          {
            date: 30,
            month: "Сен"
          },
          {
            date: 31,
            month: "Сен"
          },
          {
            date: 1,
            month: "Окт"
          },
          {
            date: 2,
            month: "Окт"
          },
          {
            date: 3,
            month: "Окт"
          },
          {
            date: 4,
            month: "Окт"
          },

        ],
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
            productImg: '',
            avatar: 'https://i.pravatar.cc/101',
            rate: '3.9',
            deliveryPrice: '12000'
          },
          {
            src: 'img-2',
            title: 'Имя Фамилия',
            productImg: '',
            avatar: 'https://i.pravatar.cc/102',
            rate: '4.6',
            deliveryPrice: '9000'
          },
          {
            src: 'img-3',
            title: 'Имя Фамилия',
            productImg: '',
            avatar: 'https://i.pravatar.cc/103',
            rate: '5.0',
            deliveryPrice: '27000'
          },
          {
            src: 'img-4',
            title: 'Имя Фамилия',
            productImg: '',
            avatar: 'https://i.pravatar.cc/104',
            rate: '4.9',
            deliveryPrice: '31000'
          },
          {
            src: 'img-5',
            title: 'Имя Фамилия',
            productImg: '',
            avatar: 'https://i.pravatar.cc/105',
            rate: '4.7',
            deliveryPrice: '17500'
          },
          {
            src: 'img-1',
            title: 'Имя Фамилия',
            productImg: '',
            avatar: 'https://i.pravatar.cc/106',
            rate: '4.2',
            deliveryPrice: '13300'
          },
        ],
        blogCard: [],
        categories: [],
        vendors: [],
        // verndorParams: {
        //   category_id: this.$route.query.category_id ?? null,
        //   limit: 10,
        //   has_cola_combo: null,
        //   search_query: this.$route.query.search_query ?? null,
        //   has_sale_food: null,
        //   date: this.$route.query.date ?? this.$dayjs(new Date()).format('DD:MM:YYYY')
        // },
        collections: [],
        renderCount: 0,
        limit: 20
      }
    },
    watch: {
      '$route.query': function () {
        this.getVendors()
      }
    },
    async fetch() {
      await this.getCategories()
      await this.getCollection()
      await this.getVendors()
      await this.getBlogs()
      await this.getDate()
    },
    methods: {
      async getCategories(){
        try {
          await this.$axios.get('categories').then(res => {
            this.categories = res.objects
          })
        } catch (err) {
          console.log(err)
        }
      },
      async getCollection() {
        try {
          const { objects } = await this.$axios.get('collections')
          this.collections = objects
        } catch (err) {
          console.log(err)
        }
      },
      async getVendors() {
        try {
        const {objects,meta} = await this.$axios.get('vendors', {
            params: {
              limit: 10,
              date: this.$dayjs(new Date()).format('DD:MM:YYYY'),
              ...this.$route.query
            }
          })
        this.productData = objects;
        } catch (e) {

        }
      },
      async getBlogs() {
        try {
          const { objects } =  await this.$axios.get('reels');
          this.blogCard = objects
        } catch (e) {
          console.log(e)
        }
      },
      async onDatesFilter (item) {
        this.setQuery(item)
      },
      setQuery (item) {
        this.$router.push({
          path: this.localePath('/'),
          query: {
            ...this.$route.query,
            ...item
          }
        })

      },
      async getDate () {
        return this.$store.dispatch('set_day')
      },
      categoriesFilter (item) {
        this.setQuery(item)
        console.log(item)
      }
    },
    computed: {
      ...mapGetters(['get_days_list'])
    },
    mounted() {
      this.location  = !this.location;
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
  .card-1 {
    width: 312px;
    height: 330px;
  }
  .card-2 {
    width: 384px;
    height: 154px;
  }
  .card-3 {
    width: 488px;
    height: 154px;
  }
  .card-4 {
    width: 472px;
    height: 160px;
  }
  .card-5 {
    width: 400px;
    height: 160px;
  }
  .main-styles {
    background: #F3F4F6;
  }
</style>
