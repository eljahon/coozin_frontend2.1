<template>
<div>
  <div v-if="$route.query.cardAdd" class="modal">
<ValidationObserver ref="observer" v-slot="{ handleSubmit, invalid }">
  <form novalidate @submit.prevent="handleSubmit(addCard)">
    <ValidationProvider
     v-slot='{ errors }'
              name='card_number'
              rules='required'
              mode='eager'
    >
                    <label for="card_number" :class="errors.length ? 'text-red-500' : ''">{{$t('card_number')}} <span v-if="errors.length" class="text-xl">*</span></label>
      <input
        id="card_number"
        class="bg-white text-gray-500 border rounded-2xl border-gray-200
         py-2.5 px-4 text-base h-12 outline-orange-600 w-full bg-gray-100 my-2"
        v-model="card.card_number"
        placeholder="0000 0000 0000 0000"
        type="number"
        :class="errors.length > 0? 'border-red-400 border-2' :''"

      >
    </ValidationProvider>
    <div class="flex gap-2">
    <ValidationProvider
     v-slot='{ errors }'
              name='name'
              rules='required'
              mode='eager'
    >
      <label  for="name" :class="errors.length ? 'text-red-500' : ''">{{$t('card_type_name')}} <span v-if="errors.length" class="text-xl">*</span></label>
      <input
        class="bg-white text-gray-500 border rounded-2xl border-gray-200
         py-2.5 px-4 text-base h-12 outline-orange-600 w-full bg-gray-100 my-2"
        id="name"
        ref="name"
        v-model="card.name"
        placeholder="uzCard, Humo"
        type="text"
        :class="errors.length > 0? 'border-red-400 border-2' :''"
      >
    </ValidationProvider>

    <ValidationProvider
     v-slot='{ errors }'
              name='expiry'
              rules='required'
              mode='eager'
    >
      <label  for="expiry" :class="errors.length ? 'text-red-500' : ''">{{$t('expiry')}} <span v-if="errors.length" class="text-xl">*</span></label>
      <input
        id="expiry"
        class="bg-white text-gray-500 border rounded-2xl border-gray-200
         py-2.5 px-4 text-base h-12 outline-orange-600 w-full bg-gray-100 my-2"
        v-model="card.expiry"
        placeholder="Expiry 0325"
        type='number'
        :class="errors.length > 0? 'border-red-400 border-2' :''"

      >

    </ValidationProvider>
    </div>
    <button
     type="submit"
     :disabled="disibaled"
      class="w-full h-12 rounded-3xl bg-orange-600 text-white font-semibold"
    >
      Добавить карту
    </button>
  </form>
</ValidationObserver>

  </div>
  <div @click="addCardModalClose" v-if="$route.query.cardAdd" class="modal-background 4"></div>
</div>
</template>

<script>
export default {
  name: "cards-form-modal",
  props: {
    fetach: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      disibaled: false,
      card: {
        card_number: '',
        expiry: '',
        name: '',
        color: "blue"
      }
    }
  },
  methods: {
    addCardModalOpen () {
      this.$routePush({...this.$route.query, cardAdd: 'cardAdd'})
    },
    addCardModalClose() {
      this.$routePush({...this.$route.query, cardAdd: undefined})
    },
    async addCard()  {
      try {
        this.disibaled = true;
        await this.$store.dispatch('cards/postCards', this.card)
          .then(res=> {
            if(res.id) {
              this.addCardModalClose()
              this.$toast.success('new card create now')
              this.fetach()
              this.card = {}
            }
          })
          .finally(()=> {
            this.disibaled = false
          })

      }
      catch (err) {}
    },
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
