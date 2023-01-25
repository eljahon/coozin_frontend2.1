<template>
  <div>
    <Loader :active="$fetchState.pending" />
    <div class="bg-gray-100">
      <div class="container mx-auto my-3 xl:px-0 sm:px-4 px-2 py-3">
        <div class="flex flex-wrap items-center sm:gap-4 gap-2 w-full">
          <div v-for="(item, idx) in $store.state.foods.foods" :key="idx" @click="showFood(item)">
            <chef-product-card
              :src="item.src"
              :title="item.name"
              :price="item.price"
              :delay="item.preparation_time"
              :item="item"
            />
          </div>
        </div>
        <button :disabled="isPageCount" @click="pageCount" class="mx-auto block py-2 bg-white rounded-lg text-center cursor-pointer sm:w-96 w-72">
          <span class="text-sm text-gray-700">{{ $t('see-more') }}</span>
        </button>
      </div>
      <the-food :item="foodDetail" ></the-food>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      isPageCount: false,
      foodDetail: null
    }
  },
  async fetch() {
    await this.getFoods(1)
  },
  methods: {
    showFood (item) {
      this.foodDetail = item;
      this.$routePush({...this.$route.query, foodSaw: 'foodSaw'})
    },
    async getFoods(page) {
      try {
        await this.$store.dispatch('foods/getFoods', {
          ...this.$route.query,
          limit: 8,
          page: page
        });
        // console.log(data)
      } catch (e) {}
    },
    async pageCount () {
      this.isPageCount = true;
      let  limit  = this.page;
      limit++;
      await this.getFoods(limit)
      await this.page++
      this.isPageCount = false;
    }
  },
  watch: {
    '$route.query': '$fetch'
  }
}
</script>

<style scoped>

</style>
