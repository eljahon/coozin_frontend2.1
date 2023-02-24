<template>
  <div class="p-6 bg-white rounded-2xl flex flex-col w-full">
    <h3 class="font-semibold text-xl text-color text-left ">{{$t('editing_profile')}}</h3>
    <div class="flex shrink-0	 w-36 h-36 rounded-full overflow-hidden border-4 border-gray-300 mt-8 mx-auto">
      <img v-if="user && user.avatar && user.avatar.aws_path" class="w-full fit-cover" :src="$img+user.avatar.aws_path" alt="Avatar image">
      <img v-else class="w-full fit-cover" src="https://i.pravatar.cc/140" alt="Avatar image">
    </div>
    <div class="flex items-center justify-center gap-3 mt-6">
      <the-icon class="cursor-pointer" src="update"/>
      <the-icon class="cursor-pointer" src="trash"/>
    </div>
    <ValidationObserver class="w-full" ref="observer" v-slot="{ passes, invalid }">
    <form @submit.pre.prevent="passes(updateUser)" class="lg:mt-8 my-8 flex justify-center h-full gap-5 w-full flex-wrap">
      <ValidationProvider
        v-slot="{ valid, errors }"
        rules="required"
        name="first_name"
        class="relative"
      >
<!--      <div class="relative">-->
        <label class="absolute text-xs	font-normal	text-gray-500 left-3 top-2" for="first_name" :class="errors.length ? 'text-red-500' : ''">{{$t('first_name')}} <span v-if="errors.length" class="text-xl">*</span></label>
        <input
          class="input-width w-full border border-gray-200	text-gray-700 outline-orange-500 px-3 pt-5 pb-2 h-14 rounded-lg	"
          type="text"
          id="first_name"
          :state="errors[0] ? false : valid ? true : null"
          :class="errors.length > 0 ? 'border-red-700': ''"
          v-model="form.first_name"
        >
<!--      </div>-->
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ valid, errors }"
        rules="required"
        name="last_name"
        class="relative"
      >
<!--      <div class="relative">-->
        <label class="absolute text-xs	font-normal	text-gray-500 left-3 top-2" for="last_name">{{$t('last_name')}}</label>
        <input
          class="input-width  w-full border border-gray-200	text-gray-700 outline-orange-500 px-3 pt-5 pb-2 h-14 rounded-lg"
          type="text"
          id="lastname"
          v-model="form.last_name"
        >
<!--      </div>-->
      </ValidationProvider>
      <div class="flex items-center lg:justify-end justify-center gap-5">
        <button
          class="text-orange-600 font-semibold p-3 rounded-3xl w-40 bg-white border border-orange-600 active:opacity-80 hover:opacity-80">
          {{$t('cancel')}}
        </button>
        <button class="text-white font-semibold p-3 rounded-3xl w-40 bg-orange-600 active:opacity-80 hover:opacity-80"
        type="submit">{{$t('save')}}
        </button>
      </div>
    </form>
    </ValidationObserver>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        first_name: this.$auth.user.first_name,
        last_name:  this.$auth.user.last_name
      },
    }
  },
  computed: {
    user () {
      return this.$auth.user
    }
  },
  methods: {

    async updateUser() {
      try {
        const {data} = await this.$axios.put(`users/${this.user.id}`, {...this.form});
        if (data.id) {
          const myData =  await this.$axios.get('users/me')
          this.$toast.success(this.$t('user_upadate'))
          this.$auth.setUser(myData.data)
          // this.$router.push({path: this.localePath(this.$route.path)})
        }
      } catch (err) {
      }
    },
  }
}
</script>

<style scoped>
.input-width {
  width: 400px;
}

@media screen and (max-width: 420px) {
  .input-width {
    width: 350px;
  }
}

@media screen and (max-width: 375px) {
  .input-width {
    width: 300px;
  }
}
</style>
