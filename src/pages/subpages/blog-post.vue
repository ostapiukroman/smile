<template>
  <div class="post" :class="post.slug">
    <div class="post__header l-mobile-gutter">
      <h1 class="post__title">{{post.title}}</h1>
      <div class="post__data">
        <span class="post__data__author">By: <get-author-link :authorId="post.authors"></get-author-link></span><time id="ember859" class="post__data__date ember-view">{{post.date}} </time>
      </div>
    </div>
    <div class="post__main ember-view">
      {{post.body}}
    </div>
    <div class="categories">
      <get-categories v-for="category in post.categories" :key="category" :categoriesId="category"></get-categories>
    </div>
    <div class="l-email-signup l-mobile-gutter">
      <subscribe :postSlug="post.slug" />
    </div>
  </div>
</template>

<script>
import subscribe from '../../components/subscribe.vue'
import serviceData from '../../resource/blog.json'
import getAuthorLink from '../../components/get-author-link.vue'
import getCategories from '../../components/get-categories.vue'

export default {
  name: 'Design',
  data: function () {
    return {
      posts: serviceData,
      post: null,
      author: 'author'
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
      self.posts.forEach(function (array) {
        if (array.slug === self.$route.params.slug) {
          self.post = array
          return false
        }
      })
    }
  },
  components: {
    subscribe,
    getAuthorLink,
    getCategories
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
