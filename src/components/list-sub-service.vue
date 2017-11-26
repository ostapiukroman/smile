<template>
    <div>
      <section class="l-section">
        <div class="l-grid-halves why-dockyard__services">
          <div id="ember835" class="grid__item why-dockyard__services__service ember-view" v-for="service in services">
            <div class="icon-svg" v-html="service.icon"></div> 
            <div class="why-dockyard__services__service__content">
              <h3 class="t-headline-primary">{{service.title}}</h3>
              <p class="t-body">{{service.desc}}</p>
              <router-link :to="{ name: 'subServices', params: { slug: service.slug } }" class="t-body t-link t-link--icon-after ember-view">Find out more <arrow-right /></router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
import serviceData from '../resource/services.json'
import arrowRight from './icons/arrowLeft.vue'

export default {
  name: 'ListSubService',
  data () {
    return {
      services: serviceData.services
    }
  },
  components: {
    arrowRight
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
