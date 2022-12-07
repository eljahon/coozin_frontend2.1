<template>
  <div class="p-6 bg-white rounded-2xl flex flex-col w-full gap-6">
    <h3 class="font-semibold text-xl text-color text-left ">Мои подписки</h3>

    <div style="height: 420px;" class="flex flex-wrap scroll-style gap-5 overflow-y-scroll">
      <div v-for="item in 16">
        <div class="card-width border border-gray-200 px-3 py-4 rounded-lg flex items-center gap-3">
          <div class="rounded-full border border-gray-200 overflow-hidden w-14 h-14">
            <img class="w-full fit-cover" src="https://i.pravatar.cc/70" alt="Avatar image">
          </div>
          <div class="flex flex-col gap-2">
            <h4 class="font-bold text-gray-800">Малика Каримова</h4>
            <div class="flex gap-3">
              <div class="flex items-center bg-gray-100 gap-1 py-1 px-2 overflow-hidden rounded-full">
                <img width="16" height="16" src="~/assets/svg/rate.svg" alt="Rate icon">
                <span class="text-xs text-gray-800 font-medium">3.9</span>
              </div>
              <div class="flex items-center bg-gray-100 gap-1 py-1 px-2 overflow-hidden rounded-full">
                <img width="16" height="16" src="~/assets/svg/car.svg" alt="Car icon">
                <span class="text-xs text-gray-800 font-medium">15 000 сум</span>
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
  name: ""
}
</script>

<style scoped>
.card-width {
  width: 400px;
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
</style>
