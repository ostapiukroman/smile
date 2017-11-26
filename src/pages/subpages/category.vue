<template>
  <div>
  	<header class="filter__header l-mobile-gutter">
	  <h1 class="filter__heading t-display">{{ category.name }}</h1>
	  <span class="filter__header__count t-sub-display-secondary"><count :categoryId="category.id" :showText="countText" /></span>
	</header>
	<postShortTemplate v-for="post in posts" :key="post.slug" :post="post"></postShortTemplate>
  </div>
</template>

<script>
import categories from '../../resource/categories.json'
import blog from '../../resource/blog.json'
import count from '../../components/count.vue'
import postShortTemplate from '../../components/post-short-template.vue'

export default {
  name: 'category',
  data: function () {
    return {
      categories: categories,
      category: null,
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
      self.categories.forEach(function (array) {
        if (array.slug === self.$route.params.slug) {
          self.category = array
          return false
        }
      })

      self.posts = []
      self.blog.forEach(function (post) {
        function checkPost (array) {
          for (var i = 0; i < array.categories.length; i++) {
            if (array.categories[i] === self.category.id) { return true }
          }
          return true
        }
        if (checkPost(post)) {
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
