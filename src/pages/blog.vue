<template>
  <div class="blog">
  	<nav>
  		<router-link :to="{ name: 'Categories' }">Categories</router-link>
  		<router-link :to="{ name: 'Authors' }">Authors</router-link>
  	</nav>
    <h2 v-if="!noPosts">Don't have posts</h2>
    <section v-else class="l-posts">
      <postShortTemplate v-for="post in posts" :key="post.slug" :post="post"></postShortTemplate>
      <listPagination :numberPosts="maxPosts" :postsPerPage="postsPerPage" />
    </section>

  </div>
</template>

<script>
// Posts
import posts from '../resource/blog.json'
// Components
import menuBar from '../components/blocks/menu-bar.vue'
import postShortTemplate from '../components/post-short-template.vue'
import listPagination from '../components/list-pagination.vue'

export default {
  name: 'Blog',
  data () {
    return {
      allPosts: posts,
      posts: null,
      postsPerPage: 5,
      currentPage: null,
      noPosts: true,
      maxPosts: null
    }
  },
  components: {
    menuBar,
    postShortTemplate,
    listPagination
  },
  created: function () {
    this.getPage()
  },
  watch: {
    '$route': 'getPage'
  },
  methods: {
    getPage () {
      this.currentPage = this.$route.params.page_id
      this.maxPosts = this.allPosts.length
      var postsPerPage = this.postsPerPage
      var currentPage = this.currentPage
      this.posts = this.allPosts.filter(function (array, index) {
        if (index < (postsPerPage * currentPage) && index >= (postsPerPage * (currentPage - 1))) { return true }
      })
      // eslint-disable-next-line
      this.noPosts = (this.posts.length === 0) ? false : true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
