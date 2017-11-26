<template>
  <div>
  	<router-link v-for="author in authors" :key="author.slug" :to="{ name: 'Author', params: { slug: author.slug } }" class="post__tags__tag t-link" :class="author.slug">
  		<h2 class="filter__name t-heading">{{ author.name }}</h2>
		<count :authorId="author.id" />
  	</router-link>
  </div>
</template>

<script>
import authors from '../../resource/authors.json'
import count from '../../components/count.vue'
export default {
  name: 'Categories',
  data: function () {
    return {
      authors: authors
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
