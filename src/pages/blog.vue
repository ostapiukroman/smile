<template>
  <main class="blog">
    <div class="l-background-wrap-medium blog__header">
      <div class="l-blog-header">
        <h2 class="t-display">ReefPoints</h2>
      </div>
    </div>
    <blogNav :topCat="topCat" />
    <section class="l-posts">
      <filterHeader :filter="filter" v-if="filterSlug"></filterHeader>
      <postShortTemplate v-for="post in posts" :key="post.slug" :post="post"></postShortTemplate>
      <router-view></router-view>
      <listPagination :numberPosts="maxPosts" :postsPerPage="postsPerPage" />
    </section>
  </main>
</template>

<script>
// Data
import posts from '@/resource/blog.json'
import categories from '@/resource/categories.json'
import authors from '@/resource/authors.json'
// Components
import postShortTemplate from '@/components/content/post-short-template.vue'
import listPagination from '@/components/navigation/list-pagination.vue'
import blogNav from '@/components/navigation/blog-nav.vue'
import filterHeader from '@/components/content/filter-header.vue'

export default {
  name: 'Blog',
  data () {
    return {
      allPosts: posts,
      afterFilterPosts: null,
      filters: null,
      filter: null,
      posts: null,
      postsPerPage: 5,
      currentPage: null,
      noPosts: true,
      maxPosts: null,
      filterType: null,
      filterSlug: null,
      topCat: ['design', 'engineering', 'business']
    }
  },
  components: {
    postShortTemplate,
    listPagination,
    blogNav,
    filterHeader
  },
  created: function () {
    this.getPage()
  },
  watch: {
    '$route': 'getPage'
  },
  methods: {
    getPage () {
      const self = this
      self.$root.title = 'Blog'
      self.filterSlug = self.filterType = null
      if (self.$route.params.slug !== undefined) {
        // Set some data for children pages with slug
        self.filterSlug = self.$route.params.slug
        self.filterType = self.$route.name
        // eslint-disable-next-line
        self.filters = (self.filterType === 'Author') ? authors : categories
        self.filters.forEach(function (array) {
          if (array.slug === self.filterSlug) {
            self.$root.title = 'Blog | ' + array.name
            self.filter = array
          }
        })
        // Filter data for authors or categories
        self.afterFilterPosts = self.allPosts.filter(function (array) {
          if (self.filterType === 'Author') {
            // eslint-disable-next-line
            return (array.authors === self.filter.id) ? true : false
          } else {
            for (var i = 0; i < array.categories.length; i++) {
              // eslint-disable-next-line
              if (array.categories[i] === self.filter.id) {
                return true
              }
            }
            return false
          }
        })
      } else {
        self.afterFilterPosts = self.allPosts
      }

      self.currentPage = self.$route.params.page_id
      self.maxPosts = self.afterFilterPosts.length
      self.posts = self.afterFilterPosts.filter(function (array, index) {
        if (index < (self.postsPerPage * self.currentPage) && index >= (self.postsPerPage * (self.currentPage - 1))) { return true }
      })
      // eslint-disable-next-line
      self.noPosts = (self.posts.length === 0) ? false : true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
