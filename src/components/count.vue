<template>
  <span>
    {{ count }}
  </span>
</template>

<script>
import posts from '../resource/blog.json'

export default {
  name: 'CategoryCount',
  data: function () {
    return {
      posts: posts,
      count: 0
    }
  },
  props: {
    categoryId: {
      type: Number,
      default: null
    },
    authorId: {
      type: Number,
      defoult: null
    },
    showText: {
      type: Array,
      defoult: null
    }
  },
  created: function () {
    if (this.categoryId) { this.getCat() }
    if (this.authorId) { this.getAuth() }
  },
  methods: {
    getCat: function () {
      const self = this
      this.posts.forEach(function (array) {
        for (var i = 0; i < array.categories.length; i++) {
          if (array.categories[i] === self.categoryId) {
            self.count++
          }
        }
      })
      this.addText()
    },
    getAuth: function () {
      const self = this
      this.posts.forEach(function (array) {
        if (array.authors === self.authorId) {
          self.count++
        }
      })
      this.addText()
    },
    addText: function () {
      if (!this.showText) { return }
      this.count += ' '
      this.count += (this.count > 1) ? this.showText[1] : this.showText[0]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
