<template>
  <div class="p-6 bg-white rounded-2xl flex flex-col w-full gap-6 lg:h-auto h-96">
    <h3 class="font-semibold text-xl text-color text-left ">Оставьте свой вопрос</h3>
    <div class="h-full w-full bg-gray-50 rounded-2xl px-8 py-5 relative">
      <h4 class="text-center text-sm text-gray-600">Октябрь 16</h4>
      <div class="absolute bottom-5 right-8 left-8">
        <div class="relative">
          <input class="w-full bg-white h-14 pl-8 pr-14 rounded-full outline-orange-600" type="text" placeholder="Написать сообщение">
          <div class="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center absolute top-2 right-2 cursor-pointer">
            <the-icon src="send" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {WS} from "@/utils/socket";
export default {
name: "",
  data () {
  return {
    socket: null
  }
  },
  methods: {
    async creatRoom () {

  },
    async getOperator () {
      const {data} = await this.$axios.get('users', {
        params: {
        }
      })
    },
    async sendMesage () {},
    async joinRoom () {},
    async joined  () {},
    async leftRoom () {},
  },
  mounted() {
  if(this.$route.query.name === 'chat') {
    this.socket = WS.socket(WS.url);
    this.socket.on('message', (req, res) => {
    })
  }
  },
  beforeDestroy () {
  this.socket.disconnect()
    this.socket.emit('hi')
  }
}
</script>

<style scoped>

</style>
