<template>
  <div class="l-mobile-gutter">
  	<router-link v-for="author in authors" :key="author.slug" :to="{ name: 'Author', params: { slug: author.slug, page_id: 1 } }" class="filter ember-view" :class="author.slug">
      <img src="~@/assets/img/default.jpg" class="filter__image">
  		<h2 class="filter__name t-heading">{{ author.name }}</h2>
		<count :authorId="author.id" class="filter__count t-body-large" />
  	</router-link>
  </div>
</template>

<script>
import authors from '@/resource/authors.json'
import count from '@/components/content/count.vue'
export default {
  name: 'Categories',
  data: function () {
    return {
      authors: authors
    }
  },
  created: function () {
    this.$root.title = 'Blog | Authors'
  },
  components: {
    count
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
