<template>
  <div>
  	<router-link v-for="category in categories" :key="category.slug" :to="{ name: 'Category', params: { slug: category.slug } }" class="post__tags__tag t-link" :class="category.slug">
  		<h2 class="filter__name t-heading">{{ category.name }}</h2>
		<count :categoryId="category.id" />
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
  components: {
    count
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
