<template>
    <div>
      <router-link v-for="category in categories" :key="category.slug" :to="{ name: 'Category', params: { slug: category.slug, page_id: 1 } }" class="filter ember-view" :class="category.slug">
        <h2 class="filter__name t-heading">{{ category.name }}</h2>
      <count :categoryId="category.id" class="filter__count t-body-large" />
      </router-link>
    </div>
</template>

<script>
import categories from '../../resource/categories.json'
import count from '../../components/count.vue'
export default {
  name: 'Categories',
  data: function () {
    return {
      categories: categories
    }
  },
  created: function () {
    this.$root.title = 'Blog | Categories'
  },
  components: {
    count
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
