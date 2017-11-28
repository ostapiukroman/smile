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
  watch: {
    '$route': 'countStart'
  },
  created: function () {
    this.countStart()
  },
  methods: {
    countStart: function () {
      if (this.categoryId) { this.getCat() }
      if (this.authorId) { this.getAuth() }
    },
    getCat: function () {
      const self = this
      // reset count
      self.count = 0
      // Set counts for categories
      self.posts.forEach(function (array) {
        for (var i = 0; i < array.categories.length; i++) {
          if (array.categories[i] === self.categoryId) {
            self.count++
          }
        }
      })
      this.addText()
    },
    // Set counts for authors
    getAuth: function () {
      const self = this
      this.posts.forEach(function (array) {
        if (array.authors === self.authorId) {
          self.count++
        }
      })
      this.addText()
    },
    // Function add the text (post or posts)
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
