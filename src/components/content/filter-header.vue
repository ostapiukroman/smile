<template>
  <div>
    <header class="filter__header author l-mobile-gutter" v-if="$route.name === 'Author'">
      <img src="~@/assets/img/default.jpg" class="filter__image">
      <div class="filter__author">
        <h1 class="filter__heading t-headline-primary">{{ filter.name }}</h1>
        <span class="filter__header__count"><count :authorId="filter.id" :showText="countText" /></span>
        <span class="filter__position t-sub-headline">Developer</span>
      </div>
    </header>
    <header class="filter__header category l-mobile-gutter" v-else>
      <h1 class="filter__heading t-display">{{ filter.name }}</h1>
      <span class="filter__header__count t-sub-display-secondary"><count :categoryId="filter.id" :showText="countText" /></span>
    </header>
  </div>
</template>

<script>
import count from '@/components/content/count.vue'
export default {
  name: 'Categories',
  data: function () {
    return {
      countText: ['post', 'posts']
    }
  },
  props: {
    filter: {
      type: Object,
      default: null
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
