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
            :src="blogData[0]?.media[0]?.url"
            :title="blogData[0]?.title"
            :avatar="blogData[0]?.vendor?.avatar"
            width="100%"
            height="600px"
          />
          <blog-card
            :src="blogData[1]?.media[0]?.url"
            :title="blogData[1]?.title"
            :avatar="blogData[1]?.vendor?.avatar"
            width="100%"
            height="600px"
          />
        </div>
        <div style="width: 66.666%" class="lg:flex hidden flex-col gap-5">
          <div class="flex gap-5">
            <div style="width: 50%">
              <div class="flex flex-col gap-5 w-full">
                <blog-card
                  :src="blogData[2]?.media[0]?.url"
                  :title="blogData[2]?.title"
                  :avatar="blogData[2]?.vendor?.avatar"
                  width="100%"
                  height="410px"
                />
                <blog-card
                  :src="blogData[3]?.media[0]?.url"
                  :title="blogData[3]?.title"
                  :avatar="blogData[3]?.vendor?.avatar"
                  width="100%"
                  height="410px"
                />
              </div>
            </div>
            <div style="width: 50%">
              <blog-card
                :src="false"
                title="Имя Фамилия"
                :avatar="false"
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
              :src="item?.media[0]?.url"
              :title="item.title"
              :avatar="item?.vendor?.avatar"
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
        const { objects } =  await this.$axios.get('reels');
        this.blogData = objects
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
