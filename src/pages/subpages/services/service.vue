<template>
  <div class="services services-design">
     <section class="l-section">
      <header class="section__thin section__thin--align-top l-masthead">
        <h2 class="t-sub-page-display divider-accent">{{ post.title }}</h2>
        <p class="t-body">{{ post.desc }}</p>
        <router-link class="t-link-cta ember-view" :to="{ name: 'Contact' }">Let’s build together</router-link>
      </header>
      <div class="section__wide section__wide--align-top" v-html="post.body"></div>
    </section>
    <section class="l-section-no-mobile-gutter">
      <div class="section__wide section__wide--align-right">
        <h3 class="t-list-heading l-mobile-gutter">More services</h3>
        <list-stack />
      </div>
    </section> 
  </div>
</template>

<script>
import listStack from '@/components/navigation/list-stack.vue'
import serviceData from '@/resource/services.json'

export default {
  name: 'Design',
  data: function () {
    return {
      posts: serviceData.services,
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
      this.posts.forEach(function (array) {
        if (array.slug === self.$route.params.slug) {
          self.$root.title = array.title
          self.post = array
          return false
        }
      })
    }
  },
  components: {
    listStack
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
