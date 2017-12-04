<template>
  <main class="press">
    <section class="l-posts">
      <div class="post">
        <div class="post__header l-mobile-gutter">
          <h1 class="post__title">
            {{post.title}}
          </h1>
        </div>
        <div class="post__main post__main ember-view" v-html="post.body"></div>
      </div>
    </section>
  </main>
</template>

<script>
import serviceData from '@/resource/releases.json'

export default {
  name: 'Design',
  data: function () {
    return {
      posts: serviceData,
      post: null
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
          self.$root.title = 'Press | ' + array.title
          self.post = array
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
