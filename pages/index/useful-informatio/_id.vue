<template>
  <div class="max-w-7xl mx-auto py-6 lg:px-8">
    <div class="pb-6 flex justify-between sm:px-0">
      <breadcrumbs :items="items" />
    </div>
    <div>
      <div v-if="$fetchState.pending"><MainLoading /></div>
      <div v-else-if="$fetchState.error"></div>
      <div v-else class="max-w-3xl mx-auto">
        <h3 class="text-gray-700 font-medium md:text-4xl text-lg">
          {{ informationDetail.title === 'None' ? $t('none-translate') : informationDetail.title }}
        </h3>
        <p class="text-green-500 md:text-base text-sm pt-3">
          {{ informationDetail.description === 'None' ? $t('none-translate') :
          informationDetail.description  }}
        </p>
        <div class="mt-4 flex items-center justify-between">
          <div class="flex">
<!--            <img v-if="informationDetail.consultant !== null" class="h-10 w-10 object-cover rounded-full" :src="$tools.getFileUrl(informationDetail.consultant.data.attributes.userinfo.data.attributes.avatar)">-->
<!--            <img v-else class="h-10 w-10 object-cover rounded-full" src="https://silkozari.com/web/images/miscellaneous/avatar.jpg">-->
            <div class="block ml-4">
              <p v-if="informationDetail.consultant !== null" class="text-sm text-gray-600">
                {{ `${informationDetail.consultant.data.attributes.userinfo.data.attributes.name ?informationDetail.consultant.data.attributes.userinfo.data.attributes.name : ''} ${informationDetail.consultant.data.attributes.userinfo.data.attributes.surname ? informationDetail.consultant.data.attributes.userinfo.data.attributes.surname : ''}` }}
              </p>
              <div class="flex justify-between space-x-1 text-xs text-gray-500 pt-2">
                <div>
                  <time datetime="2020-03-16">
                    {{ $dayjs(informationDetail.createdAt).format('MM.DD.YYYY') }}
                  </time>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-end ">
            <div class="flex content-end gap-2 mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill:rgba(171, 162, 162, 1);transform:;-ms-filter:"><path d="M20.665,3.717l-17.73,6.837c-1.21,0.486-1.203,1.161-0.222,1.462l4.552,1.42l10.532-6.645 c0.498-0.303,0.953-0.14,0.579,0.192l-8.533,7.701l0,0l0,0H9.841l0.002,0.001l-0.314,4.692c0.46,0,0.663-0.211,0.921-0.46 l2.211-2.15l4.599,3.397c0.848,0.467,1.457,0.227,1.668-0.785l3.019-14.228C22.256,3.912,21.474,3.351,20.665,3.717z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill:rgba(171, 162, 162, 1);transform:;-ms-filter:"><path d="M12.001,2.002c-5.522,0-9.999,4.477-9.999,9.999c0,4.99,3.656,9.126,8.437,9.879v-6.988h-2.54v-2.891h2.54V9.798 c0-2.508,1.493-3.891,3.776-3.891c1.094,0,2.24,0.195,2.24,0.195v2.459h-1.264c-1.24,0-1.628,0.772-1.628,1.563v1.875h2.771 l-0.443,2.891h-2.328v6.988C18.344,21.129,22,16.992,22,12.001C22,6.479,17.523,2.002,12.001,2.002z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill:rgba(171, 162, 162, 1);transform:;-ms-filter:"><path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z" /><circle cx="11.994" cy="11.979" r="3.003" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill:rgba(171, 162, 162, 1);transform:;-ms-filter:"><path d="M3,12c0,1.654,1.346,3,3,3c0.794,0,1.512-0.315,2.049-0.82l5.991,3.424C14.022,17.734,14,17.864,14,18c0,1.654,1.346,3,3,3 s3-1.346,3-3s-1.346-3-3-3c-0.794,0-1.512,0.315-2.049,0.82L8.96,12.397C8.978,12.266,9,12.136,9,12s-0.022-0.266-0.04-0.397 l5.991-3.423C15.488,8.685,16.206,9,17,9c1.654,0,3-1.346,3-3s-1.346-3-3-3s-3,1.346-3,3c0,0.136,0.022,0.266,0.04,0.397 L8.049,9.82C7.512,9.315,6.794,9,6,9C4.346,9,3,10.346,3,12z" /></svg>
            </div>
          </div>
        </div>

        <img v-if="informationDetail.mainphoto" :src="$tools.getFileUrl(informationDetail.mainphoto)" class="w-full h-96 object-cover mt-6">
        <img v-else-if="informationDetail.gallery.length > 0" :src="$tools.getFileUrl(informationDetail.gallery[0].url)" class="w-full h-96 object-cover mt-6">
        <img v-else src="https://www.pinupacc.com/images/dummy.png" class="w-full h-96 object-cover mt-6">
        <p v-if="informationDetail.content !== 'None'" class="my-3 text-base text-gray-700" v-html="informationDetail.content" />
        <div v-if="informationDetail.attachment && informationDetail.attachment !== 'None'" class="py-5">
          <div class="mt-2 sm:flex sm:items-start sm:justify-between">
            <div class="max-w-xl text-base text-gray-700">
              <p>{{ informationDetail.title }}</p>
            </div>
            <div class="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center" v-if="informationDetail && informationDetail.attachment">
              <a  :href="$tools.getFileUrl(informationDetail.attachment[this.$i18n.locale])" target="_blank">
                <button type="button" class="text-center cursor-pointer inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm">
                  {{ $t('word.download') }}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- <div>
        <p class="md:text-xl text-base text-gray-700 font-medium mt-6">
          Boshqa maqolalar
        </p>
      </div> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'UsefulInformationById',
  auth: false,
  data () {
    return {
      loading: true,
      informationDetail: {},
      information: [],
      items: [
        { text: 'text.usefulInformation', link: '/useful-information', disabled: 'true' }
      ]
    }
  },
  // mounted () {
  //   this.$nextTick(() => {
  //     this.fetchDetail().then(() => {
  //       this.loading = false
  //     })
  //   })
  // },
  async fetch() {
    await this.fetchDetail()
  },
  methods: {

    async fetchDetail () {
      const _query = {
        id: this.$route.query.id,
        params: {
          populate: "localizations,consultant, consultant.userinfo,consultation_category",
          locale: this.$i18n.locale,
        }
      }
      await this.$store.dispatch('userFullInfo/get_user_full_by_id', {..._query}).then((res) => {
        this.informationDetail = res;
        console.log('then res', res)
      })
    }
  }
}
</script>
