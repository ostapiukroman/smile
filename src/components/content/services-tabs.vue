<template>
    <div class="section__wide home__services ember-view">

        <div class="home__services__button ember-view" v-for="service in services" :class="(currentOpen === service.slug) ? 'is-active' : 'defoult'" @click="fetchSlug(service.slug)">
            <div class="service-icon" v-html="service.icon"></div>
            <h3 class="t-list-heading">{{ service.title }}</h3>
            <router-link :to="{ name: 'subServices', params: { slug: service.slug } }" class="t-body home__services__button__details ember-view">  {{ service.desc }}
      <span class="t-link t-link--icon-after">
        Read more
        <arrowLeft />
      </span>
    </router-link>
        </div>

        <div class="home__services__info is-active ember-view" v-for="service in services" :class="service.slug" v-if="currentOpen === service.slug">
            <div class="home__services__info__icon-wrap">
                <div class="home__services__info__icon" v-html="service.largeIcon"></div>
            </div>
            <router-link :to="{ name: 'subServices', params: { slug: service.slug } }" class="t-body home__services__info__text ember-view">  {{ service.desc }}
      <span class="t-link t-link--icon-after">
        Read more
        <arrowLeft />
      </span>
    </router-link>
        </div>
    </div>
</template>

<script>
import arrowLeft from '@/components/icons/arrowLeft.vue'
import serviceData from '@/resource/services.json'

export default {
  name: 'HomeServices',
  data: function () {
    return {
      services: serviceData.services,
      slugPost: null,
      currentOpen: null
    }
  },
  created: function () {
    this.currentOpen = this.services[0].slug
  },
  methods: {
    fetchSlug (slug) {
      this.currentOpen = slug
    }
  },
  components: {
    arrowLeft
  }
}
</script>

<style>
</style>