<template>
  <section class="l-sub-section-no-mobile-gutter l-section--center latest-news">
      <slot name="headline"></slot>  
    <div class="l-latest-news__items">
      <router-link v-for="post in posts" :key="post.slug" :to="{ name: 'blogPosts', params: { slug: post.slug } }" class="latest-news__items__item ember-view">  
        <div class="latest-news__items__item__header">
          <h3 class="t-eyebrow">Blog</h3>
          <h4 class="t-card-heading">{{ post.title }}</h4>
        </div>
        <span class="latest-news__items__item__img" v-html="post.thumbnail"></span>
        <p class="t-link t-link--light t-link--icon-after latest-news__items__item__cta">
          Read more
          <arrowLeft />
        </p>
      </router-link>
    </div>
  </section>
</template>

<script>
import arrowLeft from '@/components/icons/arrowLeft.vue'
import blog from '@/resource/blog.json'

export default {
  name: 'LatestPosts',
  data: function () {
    return {
      blog: blog,
      posts: null
    }
  },
  props: {
    cutId: {
      type: Array,
      default: null
    }
  },
  created: function () {
    // Check if need to use filter for posts
    if (this.cutId !== null) {
      this.filterCut()
    }
    // Set the last 3 posts
    this.posts = this.blog.filter(function (array, index) {
      if (index < 3) {
        return true
      } else {
        return false
      }
    })
  },
  methods: {
    filterCut () {
      const self = this
      self.blog = blog.filter(function (item) {
        if (self.hasCat(item.categories, self.cutId)) {
          return true
        } else {
          return false
        }
      })
    },
    hasCat (array, cutId) {
      for (var i = 0; i < array.length; i++) {
        if (cutId.indexOf(array[i]) !== -1) {
          return true
        }
      }
      return false
    }
  },
  components: {
    arrowLeft
  }
}
</script>

<style>
</style>