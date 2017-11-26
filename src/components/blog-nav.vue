<template>
  <nav class="blog__nav">
    <div class="l-blog-wrap">
      <div id="ember826" class="nav-dropdown ember-view"><button class="nav-dropdown__mobile-toggle" data-ember-action="" data-ember-action-827="827">
        All Posts
      <svg viewBox="0 0 53 32" class="icon-svg icon-chevron-down" aria-label="Arrow pointing down"><path stroke-width="4.5714" stroke-miterlimit="4" stroke-linecap="butt" stroke-linejoin="miter" d="M50.286 2.286l-25.033 25.143-22.967-23.069"></path></svg>
    </button>
    <div class="nav-dropdown__options">
        <router-link :to="{ name: 'Blog' }" class="nav-dropdown__options__option t-sub-nav active ember-view">All Posts</router-link>
        <a href="/blog?filter=design" id="ember838" class="nav-dropdown__options__option t-sub-nav ember-view">Design</a>
        <a href="/blog?filter=engineering" id="ember840" class="nav-dropdown__options__option t-sub-nav ember-view">Engineering</a>
        <a href="/blog?filter=business" id="ember842" class="nav-dropdown__options__option t-sub-nav ember-view">Business</a>
    </div>
    </div>
      <router-link :to="{ name: 'Categories' }" class="blog__nav__link t-sub-nav ember-view">Categories</router-link>
      <router-link :to="{ name: 'Authors' }" class="blog__nav__link t-sub-nav ember-view">Authors</router-link>
    </div>
  </nav>
</template>

<script>
// Posts
import posts from '../resource/blog.json'

export default {
  name: 'Blog',
  data () {
    return {
      allPosts: posts
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
