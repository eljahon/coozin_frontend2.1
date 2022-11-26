<template>
  <div>
    <div class="container mx-auto py-8">
      <div class="flex gap-4">
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
  </div>
</template>


<style scoped>
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
