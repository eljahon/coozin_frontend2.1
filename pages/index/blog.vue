<template>
  <div class="main-styles">
    <div class="container mx-auto">
      <div class="flex items-center justify-between mb-5">
        <h2 id="menu" class="text-3xl font-semibold text-gray-800">
          <a href="#menu">Блог</a>
        </h2>
        <div class="flex items-center gap-1">
          <span class="font-normal text-orange-600 cursor-pointer">Посмотреть больше</span>
          <the-icon src="right-arrow" />
        </div>
      </div>
      <div class="container mx-auto flex gap-5">
        <div style="width: 33.333%" class="flex flex-col gap-5">
          <blog-card
            src="img-1"
            title="Имя Фамилия"
            avatar="https://i.pravatar.cc/101"
            width="100%"
            height="600px"
          />
          <blog-card
            src="img-2"
            title="Имя Фамилия"
            avatar="https://i.pravatar.cc/101"
            width="100%"
            height="600px"
          />
        </div>
        <div style="width: 66.666%" class="flex flex-col gap-5">
          <div class="flex gap-5">
            <div style="width: 50%">
              <div class="flex flex-col gap-5 w-full">
                <blog-card
                  src="img-3"
                  title="Имя Фамилия"
                  avatar="https://i.pravatar.cc/101"
                  width="100%"
                  height="410px"
                />
                <blog-card
                  src="img-4"
                  title="Имя Фамилия"
                  avatar="https://i.pravatar.cc/101"
                  width="100%"
                  height="410px"
                />
              </div>
            </div>
            <div style="width: 50%">
              <blog-card
                src="img-3"
                title="Имя Фамилия"
                avatar="https://i.pravatar.cc/105"
                width="100%"
                height="840px"
              />
            </div>
          </div>
          <div style="width: 100%">
            <blog-card
              src="img-3"
              title="Имя Фамилия"
              avatar="https://i.pravatar.cc/105"
              width="100%"
              height="360px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.main-styles {
  background: #F3F4F6;
  padding: 28px 0;
}
</style>
