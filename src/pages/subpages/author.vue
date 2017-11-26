<template>
  <div>
  	<header class="filter__header l-mobile-gutter">
	  <h1 class="filter__heading t-display">{{ author.name }}</h1>
	  <span class="filter__header__count t-sub-display-secondary"><count :authorId="author.id" :showText="countText" /></span>
	</header>
	<postShortTemplate v-for="post in posts" :key="post.slug" :post="post"></postShortTemplate>
  </div>
</template>

<script>
import authors from '../../resource/authors.json'
import blog from '../../resource/blog.json'
import count from '../../components/count.vue'
import postShortTemplate from '../../components/post-short-template.vue'

export default {
  name: 'Author',
  data: function () {
    return {
      authors: authors,
      author: null,
      countText: ['post', 'posts'],
      blog: blog,
      posts: {
        type: Array,
        defoult: null
      }
    }
  },
  created: function () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      const self = this
      self.authors.filter(function (array) {
        if (array.slug === self.$route.params.slug) {
          self.author = array
          return false
        }
      })

      self.posts = []
      self.blog.forEach(function (post) {
        if (post.authors === self.author.id) {
          self.posts.push(post)
        }
      })
    }
  },
  components: {
    count,
    postShortTemplate
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
