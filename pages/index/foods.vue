<template>
<div>
  <h1>hi i am foods pages</h1>
</div>
</template>

<script>
export default {
  name: "foods",
  data: () => ({
    foodsList: [],
    params: {
      search_query: null,
      page: 1,
      limit: 20,
      category_id: null,
      vendor_id: null,
      has_sale_price: null,
      collection_id: null,
      is_favourite: null,
      restaurant_id: null
    }
}),
  async fetch () {
    await this.getAllFoods()
  },
  methods: {
   async  getAllFoods () {
      try {
         const {objects} =await this.$axios.get('foods', {
           params: {
             ...this.params
           }
         });
         // this.foodsList = objects;
      } catch (err) {
      }
    },
  }
}
</script>

<style scoped>

</style>
