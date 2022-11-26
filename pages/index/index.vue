<template>
  <div>
    <!--  Banner  -->
    <div class="container mx-auto py-8">
      <div class="flex justify-center gap-4">
        <banner-card
          src="img-1"
          add-style="card-1"
          status="Посуда"
          status-style="text-cyan-600 bg-teal-50"
        />
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <banner-card
              src="img-2"
              add-style="card-2"
              status="Кондитерская"
              status-style="text-red-600 bg-red-50"
            />
            <banner-card
              src="img-3"
              add-style="card-3"
              status="Домашняя еда"
              status-style="text-orange-600 bg-orange-50"
            />
          </div>
          <div class="flex items-center gap-4">
            <banner-card
              src="img-4"
              add-style="card-4"
              status="Ручные изделия"
              status-style="text-purple-600 bg-purple-50"
            />
            <banner-card
              src="img-5"
              add-style="card-5"
              status="Цветы"
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
        <div v-for="item in menuCard">
          <menu-card
            :date="item.date"
            :month="item.month"
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

        ]
      }
    }
  }
</script>


<style scoped>
  .scroll-style::-webkit-scrollbar {
    height: 6px;
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
</style>
