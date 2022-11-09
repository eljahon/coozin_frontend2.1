<template>
  <div>
    <nav class="border-t border-gray-200 px-4 mt-20 flex items-center justify-between sm:px-0">
      <div class="-mt-px w-0 flex-1 items-center flex cursor-pointer">
        <a
          class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          @click="previousPage"
        >
          <i class="bx bx-left-arrow-alt text-xl mr-2" />
          <!-- {{ $t('word.prev') }} -->
        </a>
      </div>
      <div v-if="pageCount <= 5" class="-mt-px flex">
        <div v-for="(pagination, index) in pageCount" :key="index">
          <a
            :class="
              pagination === currentPage
                ? 'border-green-600 text-green-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium cursor-pointer'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium cursor-pointer'
            "
            @click="$emit('callback', pagination)"
          >
            {{ pagination }}
          </a>
        </div>
      </div>
      <div v-else class="-mt-px flex">
        <a
          v-if="beginningPages.first > 1"
          :class="
            1 === currentPage
              ? 'border-green-600 text-green-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium cursor-pointer'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium cursor-pointer'
          "
          @click="$emit('callback', 1)"
        >
          {{ 1 }}
        </a>
        <div v-if="beginningPages.first > 2">
          ...
        </div>
        <a
          :class="
            beginningPages.first === currentPage
              ? 'border-green-600 text-green-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium cursor-pointer'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium cursor-pointer'
          "
          @click="changePage(beginningPages.first)"
        >
          {{ beginningPages.first }}
        </a>
        <a
          :class="
            beginningPages.second === currentPage
              ? 'border-green-600 text-green-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium cursor-pointer'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium cursor-pointer'
          "
          @click="changePage(beginningPages.second)"
        >
          {{ beginningPages.second }}
        </a>
        <a
          :class="
            beginningPages.third === currentPage
              ? 'border-green-600 text-green-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium cursor-pointer'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium cursor-pointer'
          "
          @click="changePage(beginningPages.third)"
        >
          {{ beginningPages.third }}
        </a>
        <div v-if="beginningPages.third < pageCount">
          ...
        </div>
        <a
          v-if="beginningPages.third < pageCount"
          :class="
            pageCount === currentPage
              ? 'border-green-600 text-green-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium cursor-pointer'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium cursor-pointer'
          "
          @click="changePage(pageCount)"
        >
          {{ pageCount }}
        </a>
      </div>
      <div class="-mt-px w-0 flex-1 flex justify-end cursor-pointer">
        <a
          class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          @click="nextPage"
        >
          <!-- {{ $t('word.nextPage') }} -->
          <i class="bx bx-right-arrow-alt text-xl ml-2" />
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true,
    },

    pageCount: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      current: 10,
      beginningPages: {
        first: 2,
        second: 3,
        third: 4
      }
    }
  },
  created () {},
  methods: {
    changePage (page) {
      if (page === this.pageCount) {
        this.beginningPages.first = page - 2
        this.beginningPages.second = page - 1
        this.beginningPages.third = page
      } else if (page === 1) {
        this.beginningPages.first = page
        this.beginningPages.second = page + 1
        this.beginningPages.third = page + 2
      } else {
        this.beginningPages.first = page - 1
        this.beginningPages.second = page
        this.beginningPages.third = page + 1
      }
      this.$emit('callback', page)
    },
    previousPage () {
      if (this.currentPage - 1 >= 1) { this.changePage(this.currentPage - 1) }
    },
    nextPage () {
      if (this.currentPage + 1 <= this.pageCount) { this.changePage(this.currentPage + 1) }
    }
  }
}
</script>
