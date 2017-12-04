<template>
  <main class="blog" :class="post.slug">
    <section class="l-posts">
      <div class="post">
        <div class="post__header l-mobile-gutter">
          <h1 class="post__title">{{post.title}}</h1>
          <div class="post__data">
            <span class="post__data__author">By: <get-author-link :authorId="post.authors"></get-author-link></span><time id="ember859" class="post__data__date ember-view">{{post.date}} </time>
          </div>
        </div>
        <div class="post__main ember-view" v-html="post.body"></div>
      </div>
      <div class="post__tags l-mobile-gutter">
        <get-categories v-for="category in post.categories" :key="category" :categoriesId="category"></get-categories>
      </div>
      <div class="l-email-signup l-mobile-gutter">
        <subscribe :postSlug="post.slug" />
      </div>
    </section>
  </main>
</template>

<script>
import subscribe from '@/components/form/subscribe.vue'
import serviceData from '@/resource/blog.json'
import getAuthorLink from '@/components/navigation/get-author-link.vue'
import getCategories from '@/components/navigation/get-categories.vue'

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
          self.$root.title = array.title
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
