<template>
  <span>
    <router-link :to="{ name: 'Category', params: { slug: category.slug } }" class="post__tags__tag t-link" :class="category.slug">{{ category.name }}</router-link>
  </span>
</template>

<script>
import categories from '../resource/categories.json'

export default {
  name: 'AuthorLink',
  data: function () {
    return {
      categories: categories,
      category: null
    }
  },
  props: {
    categoriesId: {
      type: Number,
      default: null
    }
  },
  created: function () {
    this.getData()
  },
  methods: {
    getData: function () {
      const self = this
      self.categories.forEach(function (array) {
        if (array.id === self.categoriesId) {
          self.category = array
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
