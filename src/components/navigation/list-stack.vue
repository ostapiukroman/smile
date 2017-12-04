<template>
	<ul class="list-stack services__list">
	    <li class="list-stack__item"  v-for="service in services" v-if="slugPost !== service.slug">
        <router-link class="l-list-stack__item__link ember-view" :to="{ name: 'subServices', params: { slug: service.slug } }">
        <div class="icon-svg service__icon" v-html="service.icon"></div>
        <h2 class="t-headline-secondary">{{service.title}}</h2>
        <arrowLeft />
      </router-link> </li>
	</ul>
</template>

<script>
import arrowLeft from '@/components/icons/arrowLeft.vue'
import serviceData from '@/resource/services.json'

export default {
  name: 'list-stack',
  data: function () {
    return {
      services: serviceData.services,
      slugPost: null
    }
  },
  created: function () {
    this.fetchSlug()
  },
  watch: {
    '$route': 'fetchSlug'
  },
  methods: {
    fetchSlug () {
      this.slugPost = this.$route.params.slug
    }
  },
  components: {
    arrowLeft
  }
}
</script>

<style>
</style>