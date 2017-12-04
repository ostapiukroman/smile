<template>
  <nav class="blog__nav">
    <div class="l-blog-wrap">
      <div id="ember826" class="nav-dropdown ember-view"><button class="nav-dropdown__mobile-toggle" :class="status ? 'active' : 'hide'" v-on:click="status = !status">
        All Posts
      <svg viewBox="0 0 53 32" class="icon-svg icon-chevron-down" aria-label="Arrow pointing down"><path stroke-width="4.5714" stroke-miterlimit="4" stroke-linecap="butt" stroke-linejoin="miter" d="M50.286 2.286l-25.033 25.143-22.967-23.069"></path></svg>
    </button>
    <div class="nav-dropdown__options">
        <router-link :to="{ name: 'Blog', params: { page_id: 1 } }" class="nav-dropdown__options__option t-sub-nav ember-view">All Posts</router-link>
        <router-link v-for="cat in categories" :key="cat.slug" :to="{ name: 'Category', params: { slug: cat.slug,  page_id: 1 } }" class="nav-dropdown__options__option t-sub-nav ember-view">{{ cat.name }}</router-link>
    </div>
    </div>
      <router-link :to="{ name: 'Categories' }" class="blog__nav__link t-sub-nav ember-view">Categories</router-link>
      <router-link :to="{ name: 'Authors' }" class="blog__nav__link t-sub-nav ember-view">Authors</router-link>
    </div>
  </nav>
</template>

<script>
import categories from '@/resource/categories.json'
export default {
  name: 'Blog',
  data () {
    return {
      categories: [],
      status: false
    }
  },
  props: {
    topCat: {
      type: Array,
      defoult: null
    }
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
      // hide menu on mobile
      self.status = false
      // Set categories info for slugs from array (topCat)
      categories.forEach(function (array) {
        if (self.topCat.indexOf(array.slug) >= 0) {
          self.categories[self.topCat.indexOf(array.slug)] = array
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
