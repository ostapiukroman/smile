<template>
  <div class="case-study">
    <section class="l-section flywheel">
      <div class="section__thin l-mobile-gutter l-masthead">
        <h1 class="t-display">{{post.title}}</h1>
        <h2 class="t-sub-display-secondary">{{post.desc}}</h2>
      </div>
      <div class="section__wide">
        <img :src="'https://dockyard.com/assets/images/work/' + post.img" :alt="post.img" class="case-study__banner">
      </div>
    </section>
    <div v-html="post.body"></div>
    <section class="l-section--center case-study__cta">
      <can-help />
    </section>
  </div>
</template>

<script>
import serviceData from '../../resource/services.json'
import canHelp from '../../components/can-help.vue'

export default {
  name: 'subWork',
  data: function () {
    return {
      posts: serviceData.work,
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
      self.posts.filter(function (array) {
        if (array.slug === self.$route.params.slug) {
          self.$root.title = array.title
          self.post = array
          return false
        }
      })
    }
  },
  components: {
    canHelp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
