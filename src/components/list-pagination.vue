<template>
  <nav class="l-pagination l-mobile-gutter ember-view" v-if="arrayLinks.length > 1">
    <router-link v-if="currentPage > 1" :to="{ name: pageName, params: { page_id: currentPage - 1 }}" class="arrow posts__previous ember-view"> <arrowLeft class="arrow-reverce" /> </router-link>
    <div class="l-pagination-numbers">
      <router-link v-for="link in arrayLinks" :key="link" :to="{ name: pageName, params: { page_id: link }}" class="pagination-numbers__link ember-view"><span class="pagination-numbers__link__number ">{{ link }}</span></router-link>
    </div>
    <router-link v-if="currentPage < Math.ceil(numberPosts / postsPerPage)" :to="{ name: pageName, params: { page_id: (Number(currentPage) + 1) }}" class="arrow posts__next ember-view"> <arrowLeft /> </router-link>
  </nav>
</template>

<script>
import arrowLeft from './icons/arrowLeft.vue'
export default {
  name: 'listPagination',
  data () {
    return {
      currentPage: null,
      arrayLinks: [],
      pageName: null
    }
  },
  props: {
    numberPosts: {
      type: Number,
      default: null
    },
    postsPerPage: {
      type: Number,
      defoult: null
    }
  },
  components: {
    arrowLeft
  },
  created: function () {
    this.getPageNav()
  },
  watch: {
    '$route': 'getPageNav'
  },
  methods: {
    getPageNav () {
      const self = this
      self.arrayLinks.length = 0
      self.pageName = self.$route.name
      self.currentPage = self.$route.params.page_id
      for (var i = self.currentPage - 2; self.arrayLinks.length < 5 && i <= Math.ceil(self.numberPosts / self.postsPerPage); i++) {
        if (i > 0) {
          self.arrayLinks.push(i)
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
