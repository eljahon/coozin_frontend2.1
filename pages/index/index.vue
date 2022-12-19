<template>
  <div class="main-styles pb-8">
    <!--  Banner  -->
    <div class="container mx-auto py-8">
      <div class="flex justify-center gap-4">
        <banner-card
          src="img-1"
          add-style="card-1"
          :status="collections[0]?.name"
          status-style="text-cyan-600 bg-teal-50"
        />
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <banner-card
              src="img-2"
              add-style="card-2"
              :status="collections[1]?.name"
              status-style="text-red-600 bg-red-50"
            />
            <banner-card
              src="img-3"
              add-style="card-3"
              :status="collections[2]?.name"
              status-style="text-orange-600 bg-orange-50"
            />
          </div>
          <div class="flex items-center gap-4">
            <banner-card
              src="img-4"
              add-style="card-4"
              :status="collections[3]?.name"
              status-style="text-purple-600 bg-purple-50"
            />
            <banner-card
              src="img-5"
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
<!--        <date-now @changeDate="onDate"/>-->
        <div v-for="item in menuCard">
          <menu-card
            :date="item"
            @onClickDate="onDate(item)"
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
            :item="item"
            @onClick="handelCategoriy"
          />
      </div>
    </div>
    <div class="container mx-auto overflow-x-scroll scroll-style my-7">
<!--      <span>{{checked(parenIndex)}}</span>-->
      <div class="flex items-center gap-4 w-full">
        <product-card
          v-for="(item, idx) in productData"
          :key="idx"
          :src="item?.src"
          :title="item?.user?.full_name"
          :product-img="item?.productImg"
          :avatar="item?.avatar"
          :rate="item?.ratings_avg"
          :delivery-price="item?.deliveryPrice"
          :count="idx+1"
          :id="item.id"
        />
      </div>
    </div>
<!--    <div v-for="(item, index) in renderCount">-->
<!--      <span>{{item}} {{index}}</span>-->
<!--      <div class="container mx-auto overflow-x-scroll scroll-style my-7">-->
<!--        &lt;!&ndash;      <div class="flex items-center gap-4 w-full">&ndash;&gt;-->
<!--        &lt;!&ndash;        <product-card&ndash;&gt;-->
<!--        &lt;!&ndash;          v-for="(item, idx) in productData"&ndash;&gt;-->
<!--        &lt;!&ndash;          :key="idx"&ndash;&gt;-->
<!--        &lt;!&ndash;          :src="item.src"&ndash;&gt;-->
<!--        &lt;!&ndash;          :title="item.title"&ndash;&gt;-->
<!--        &lt;!&ndash;          :product-img="item.productImg"&ndash;&gt;-->
<!--        &lt;!&ndash;          :avatar="item.avatar"&ndash;&gt;-->
<!--        &lt;!&ndash;          :rate="item.rate"&ndash;&gt;-->
<!--        &lt;!&ndash;          :delivery-price="item.deliveryPrice"&ndash;&gt;-->
<!--        &lt;!&ndash;        />&ndash;&gt;-->
<!--        &lt;!&ndash;      </div>&ndash;&gt;-->
<!--      </div>-->
<!--    </div>-->
<!--    <div v-if="more" class="container mx-auto overflow-x-scroll scroll-style my-7">-->
<!--      <div class="flex items-center gap-4 w-full">-->
<!--        <product-card-->
<!--          v-for="(item, idx) in productData"-->
<!--          :key="idx"-->
<!--          :src="item.src"-->
<!--          :title="item.title"-->
<!--          :product-img="item.productImg"-->
<!--          :avatar="item.avatar"-->
<!--          :rate="item.rate"-->
<!--          :delivery-price="item.deliveryPrice"-->
<!--        />-->
<!--      </div>-->
<!--    </div>-->
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
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        more: false,
        menuCard: [],
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
        collections: [],
        renderCount: 0,
        limit: 10,
        verndorParams: {
          category_id: null,
          limit: 10,
          search_query: null,
          has_sale_food: null,
          restaurant_id: null,
          date: this.$dayjs().format('DD:MM:YYYY'),
          locale: this.$i18n.locale
        }
      }
    },
    async fetch() {
      await this.getCategories()
      await this.getCollection()
      await this.getVendors()
      await this.getBlogs()
      await this.date(new Date())
    },
    mounted() {
      // this.date(new Date())
    },
    methods: {
      date (beginDate) {
        const nowDay = this.$dayjs(beginDate).format('DD');
        let allWeekdata = [this.$dayjs(beginDate).format('DD:MM:YYYY')]
        for (let i=1; i<7; i++) {
          allWeekdata.push(this.$dayjs(beginDate).add(i, 'day').format('DD:MM:YYYY'))
        };
        allWeekdata.push()
        this.menuCard = allWeekdata;
      },
      handelCategoriy (item) {
        this.verndorParams.category_id = item.id;
        this.getVendors()
      },
      checked(item) {
      const count = (( item * 10) - 10) + 1;
      return count;
      },
      renderIndex(parantIndex, childIndex) {
        const index  = (((parantIndex * 10) - 10) + 1) + childIndex;
        return index;
      },
      isRenderCount (total) {
        total = parseInt(total)
        let qol = total % 10;
        let allCoun = Math.floor(total / 10 );
        allCoun = qol > 0 ? allCoun++ : allCoun
        return  allCoun;
      },
      async getCategories(){
        try {
          await this.$axios.get('categories').then(res => {
            this.categories = res.objects
            console.log(this.categories, 'Categories')
          })
        } catch (err) {
          console.log(err)
        }
      },
      async getCollection() {
        try {
          const { objects } = await this.$axios.get('front/collections')
          this.collections = objects
        } catch (err) {
          console.log(err)
        }
      },
      async getVendors() {
        try {
        const {objects,meta} = await this.$axios.get('vendors', {
            params: {...this.verndorParams}
          });
        this.productData = objects;
        this.renderCount = this.isRenderCount(this.limit)
          console.log('venders list ', objects, meta)
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
      onDate (item) {
        this.verndorParams.date = item
        this.getVendors()
        // console.log(item, 'item ==>>>')
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
