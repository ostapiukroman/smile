<template>
  <span>
    <router-link :to="{ name: 'Author', params: { slug: author.slug, page_id: 1 } }">{{ author.name }}</router-link>
  </span>
</template>

<script>
import authors from '@/resource/authors.json'

export default {
  name: 'AuthorLink',
  data: function () {
    return {
      authors: authors,
      author: null
    }
  },
  props: {
    authorId: {
      type: Number,
      default: 1
    }
  },
  created: function () {
    this.getData()
  },
  methods: {
    getData: function () {
      const self = this
      // set author info with author id
      self.authors.forEach(function (array) {
        if (array.id === self.authorId) {
          self.author = array
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
