<template>
  <div class="main-styles">
    <div class="container px-4 mx-auto">
      <div class="flex items-center justify-between mb-5">
        <h2 id="menu" class="text-3xl font-semibold text-gray-800">
          <a href="#menu">Блог</a>
        </h2>
        <div class="flex items-center gap-1">
          <span class="font-normal text-orange-600 cursor-pointer">Посмотреть больше</span>
          <the-icon src="right-arrow" />
        </div>
      </div>
      <div class="container px-4 mx-auto overflow-x-scroll scroll-style lg:flex lg:gap-5">
        <div style="width: 33.333%" class="lg:flex hidden flex-col gap-5">
          <blog-card
            :src="blogData[0]?.image?.aws_path"
            :title="blogData[0]?.vendor?.user?.first_name+blogData[0]?.vendor?.user?.last_name"
            :avatar="blogData[0]?.vendor?.user.avatar?.aws_path"
            width="100%"
            height="600px"
          />
          <blog-card
            :src="blogData[1]?.image?.aws_path"
            :title="blogData[1]?.vendor?.user?.first_name+blogData[1]?.vendor?.user?.last_name"
            :avatar="blogData[1]?.vendor?.user.avatar?.aws_path"
            width="100%"
            height="600px"
          />
        </div>
        <div style="width: 66.666%" class="lg:flex hidden flex-col gap-5">
          <div class="flex gap-5">
            <div style="width: 50%">
              <div class="flex flex-col gap-5 w-full">
                <blog-card
                  :src="blogData[2]?.image?.aws_path"
                  :title="blogData[2]?.vendor?.user?.first_name+' '+blogData[2]?.vendor?.user?.last_name"
                  :avatar="blogData[2]?.vendor?.user.avatar?.aws_path"
                  width="100%"
                  height="410px"
                />
                <blog-card
                  :src="blogData[3]?.image?.aws_path"
                  :title="blogData[3]?.vendor?.user?.first_name+' '+blogData[3]?.vendor?.user?.last_name"
                  :avatar="blogData[3]?.vendor?.user.avatar?.aws_path"
                  width="100%"
                  height="410px"
                />
              </div>
            </div>
            <div style="width: 50%">
              <blog-card
                :src="blogData[4]?.image?.aws_path"
                :title="blogData[4]?.vendor?.user?.first_name+' '+blogData[4]?.vendor?.user?.last_name"
                :avatar="blogData[4]?.vendor?.user.avatar?.aws_path"
                width="100%"
                height="840px"
              />
            </div>
          </div>
          <div style="width: 100%">
            <blog-card
              :src="false"
              title="Имя Фамилия"
              :avatar="false"
              width="100%"
              height="360px"
            />
          </div>
        </div>
        <div class="lg:hidden flex items-center gap-3.5">
          <div v-for="(item, idx) in blogData" :key="item.id">
            <blog-card
              :title="`${item?.vendor?.user?.first_name}' ' ${item?.vendor?.user?.last_name}`"
              :avatar="item?.vendor?.user?.avatar?.aws_path"
              :src="item?.image?.aws_path"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth:false,
  data() {
    return {
      blogData: []
    }
  },
  methods: {
    async getBlogs() {
      try {
        const {data: {results, pagination}}  =  await this.$axios.get('reels',{
          params: {
            populate: 'image, vendor, background, vendor.user, vendor.background, vendor.user.avatar',
            locale: this.$i18n.locale
          }
        });
        this.blogData = results
      } catch (e) {
      }
    }
  },
  async fetch() {
    await this.getBlogs()
  }
}
</script>

<style scoped>
.main-styles {
  background: #F3F4F6;
  padding: 28px 0;
}
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
</style>
