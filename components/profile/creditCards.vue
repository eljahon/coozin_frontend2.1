<template>
  <div class="sm:p-6 p-2 bg-white rounded-2xl flex flex-col w-full gap-6">
    <div class="flex items-center justify-between">
      <h3 class="font-semibold text-xl text-color text-left">Мои карты</h3>
      <button @click="addCardModalOpen" class="text-white font-semibold p-3 rounded-3xl sm:w-40 w-36 bg-orange-600 active:opacity-80 hover:opacity-80">
        Добавить карту
      </button>
    </div>

    <div class="flex flex-wrap scroll-style gap-5 overflow-y-scroll">
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
          <div @click="deleteCard(item.id)">
            <the-icon class="cursor-pointer" src="trash-gray" />
          </div>
        </div>
      </div>
    </div>
    <cards-form-modal :fetach="getCards"/>
  </div>
</template>

<script>
import cardsFormModal from "@/components/card-modal/cards-form-modal";
export default {
  components: {cardsFormModal},
  data() {
    return {
      cards: [],
      modal: false,
      card: {
        card_number: '',
        expiry: '',
        name: '',
        color: "blue"
      }
    }
  },
  mounted() {
    this.getCards()
  },
  methods: {
   async getCards() {
      try{
        await this.$store.dispatch('cards/getCards')
          .then(res => {
            console.log(res)
            this.cards = res;
          })
      } catch (err) {}
    },
    checkValueCard() {
      const data = Object.keys(this.card);
      for (let i=0; i<data.length; i++) {
        const elemen = document.getElementById(`${data[i]}`);
        if (this.card[data[i]] === '') {
         return  elemen.focus();
        }
      }
      return true
    },
   async  addCard()  {
     try {
         await this.$store.dispatch('cards/postCards', this.card)
           .then(res=> {
             if(res.id) {
               this.addCardModalClose()
               this.$toast.success('new card create now')
               this.getCards()
             }
           })

       }
     catch (err) {}
     },
    async deleteCard(id) {
      try {
        await this.$store.dispatch('cards/removeCards', id)
          .then(res => {
            if(res.status === 204) {
                  this.$toast.success('card item delete')
                  this.getCards()
                }
          })
      } catch (err) {
      }
    },
    addCardModalOpen () {
      this.$routePush({...this.$route.query, cardAdd: 'cardAdd'})
    },
    addCardModalClose() {
      this.$routePush({...this.$route.query, cardAdd: undefined})
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
.modal-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: #111827;
  opacity: 0.3;
}
.modal {
  position: absolute;
  width: 320px;
  left: 50%;
  top: 50%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  z-index: 5;
  transform: translate(-50%, -50%);
  border-radius: 16px;
}

@media screen and (max-width: 500px) {
  .card-width {
    width: 310px;
  }
}
</style>
