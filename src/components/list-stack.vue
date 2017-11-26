<template>
	<ul class="list-stack services__list">
	    <li class="list-stack__item"  v-for="service in services" v-if="slugPost !== service.slug">
        <router-link class="l-list-stack__item__link ember-view" :to="{ name: 'subServices', params: { slug: service.slug } }">
        <div class="icon-svg" v-html="service.icon"></div>
        <h2 class="t-headline-secondary">{{service.title}}</h2>
        <arrowLeft />
      </router-link> </li>
	</ul>
</template>

<script>
import arrowLeft from './icons/arrowLeft.vue'
import serviceData from '../resource/services.json'

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
.list-stack .t-headline-secondary{
    margin-left: 20px;
}
.list-stack__item {
    border-bottom: 1px solid #343434;
}
.list-stack__item:first-of-type {
    border-top: 1px solid #343434;
}
.l-list-stack__item__link {
    padding-right: 20px;
    padding-left: 20px;
    height: 96px;
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    transition: .2s ease background-color,.2s ease color;
}
@media (min-width: 600px){
  .t-headline-primary, .t-headline-secondary, .t-sub-display-primary {
    font-size: 1.5em;
}
}
.t-headline-secondary{
    font-weight: 300;
}
.l-list-stack__item__link .service__icon+.t-headline-secondary {
    margin-left: 20px;
}
.l-list-stack__item__link .service__icon {
    height: 40px;
    width: 40px;
    fill: #343434;
    transition: .2s ease fill;
}
.l-list-stack__item__link .icon-chevron-right {
    margin-left: auto;
    height: 29px;
    width: 15px;
    stroke: #e0e0e0;
    transition: .2s ease stroke;
}
.icon-chevron-down, .icon-chevron-left, .icon-chevron-right {
    fill: transparent;
    transition: .2s ease transform,.2s ease stroke;
}
.l-list-stack__item__link:active, .l-list-stack__item__link:hover {
    background-color: #343434;
    color: #fff;
}
.l-list-stack__item__link:active .service__icon, .l-list-stack__item__link:hover .service__icon {
    fill: #fff;
}
</style>