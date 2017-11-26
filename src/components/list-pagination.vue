<template>
  <div class="pageNavi">
    <router-link v-if="currentPage > 1" :to="{ name: pageName, params: { page_id: currentPage - 1 }}"> < </router-link>
    <div class="l-pagination-numbers">
      <router-link v-for="link in arrayLinks" :key="link" :to="{ name: pageName, params: { page_id: link }}">{{ link }}</router-link>
    </div>
    <router-link v-if="currentPage < Math.ceil(numberPosts / postsPerPage)" :to="{ name: pageName, params: { page_id: (Number(currentPage) + 1) }}"> > </router-link>
  </div>
</template>

<script>
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
.pageNavi .router-link-active{
  color:red;
}
</style>
