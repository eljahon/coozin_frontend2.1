<template>
  <div class="sm:p-6 p-2 bg-white rounded-2xl flex flex-col w-full gap-6">
    <h3 class="font-semibold text-xl text-color text-left ">Мои карты</h3>

    <div style="height: 420px;" class="flex flex-wrap scroll-style gap-5 overflow-y-scroll">
      <div v-for="item in cards">
        <div class="card-width border border-gray-200 px-3 py-4 rounded-lg flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div v-if="item.type === 'Uzcard'" class="w-12 h-12 credit-card">
              <the-icon src="uzcard" />
            </div>
            <div v-else>
              <the-icon src="humo" />
            </div>
            <h3 class="text-gray-700 text-base">{{ item.card_number }}</h3>
          </div>
          <the-icon class="cursor-pointer" src="trash-gray" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      cards: []
    }
  },
  mounted() {
    this.getCards()
  },
  methods: {
    getCards() {
      this.$axios.get('cards').then(res => {
        const { objects } = res
        this.cards = objects
      })
    }
  }
}
</script>

<style scoped>
.card-width {
  width: 400px;
}
.credit-card {
  border: 1.5px solid #F3F4F6;
  box-shadow: -3px -2px 20px -10px rgba(0, 0, 0, 0.19), 0px 4px 7px -1px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
}

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
@media screen and (max-width: 500px) {
  .card-width {
    width: 310px;
  }
}
</style>
