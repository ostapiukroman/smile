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
<style scoped>
svg{
  max-width: 100%;
}
@media (min-width: 600px) {
.t-headline-primary, .t-headline-secondary, .t-sub-display-primary {
    font-size: 1.5em;
}  
}
.case-study__blockquote .testimonial, .case-study__details .figcaption, .l-press, .why-dockyard__services {
    margin-right: auto;
    margin-left: auto;
}
.why-dockyard__services {
    max-width: 960px;
}
.why-dockyard__services__service {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.why-dockyard__services .icon-svg:not(.icon-chevron-right) {
    display: block;
    fill: #343434;
}
.t-headline-primary, .t-sub-display-primary {
    font-weight: 700;
}
.t-body, .t-copy {
    font-size: 1.125em;
    line-height: 1.666em;
}
.t-body, .t-copy {
    font-size: 1.125em;
    line-height: 1.666em;
}
.icon-chevron-down, .icon-chevron-left, .icon-chevron-right {
    fill: transparent;
    transition: .2s ease transform,.2s ease stroke;
}
.t-link--icon-after .icon-svg, .t-link--icon-before .icon-svg {
    height: .722em;
    width: .444em;
    stroke: #343434;
    transition: .2s ease transform,.2s ease stroke;
}
.t-link--icon-after .icon-svg {
    margin-left: 20px;
}
.t-link {
    border-bottom: 1px dotted #424242;
    transition: .2s ease border-bottom,.2s ease color;
}
.t-link--icon-after, .t-link--icon-before {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: baseline;
    align-items: baseline;
    border-bottom: 0;
}
.t-link--icon-after {
    line-height: 1em;
}
.t-body+.t-body {
    margin-top: 1.111em;
}
.why-dockyard__services .t-link--icon-after {
    margin-top: auto;
}
.why-dockyard__services .t-body:not(.t-link--icon-after) {
    margin-bottom: 1.333em;
}
.t-link--icon-after:active .icon-svg, .t-link--icon-after:focus .icon-svg, .t-link--icon-after:hover .icon-svg {
    transform: translateX(10px);
}
.l-grid-halves, .l-grid-quarters, .l-grid-thirds {
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
@media (min-width: 800px) {
  .why-dockyard__services__service {
    -ms-flex-direction: column;
    flex-direction: column;
}
  .grid__item:not(:nth-last-of-type(-n+2)) {
    margin-bottom: 80px;
}
  .l-grid-halves .grid__item {
    width: calc((100% - 60px)/ 2);
}
  .l-grid-halves .grid__item:not(:nth-of-type(2n)) {
    margin-right: 60px;
}
.why-dockyard__services .icon-svg:not(.icon-chevron-right) {
    margin-bottom: 40px;
}
.why-dockyard__services .icon-svg:not(.icon-chevron-right) {
    height: 64px;
    width: 64px;
}
}
.l-section__wrap + .l-section__wrap {
    margin-top: 80px;
}
</style>
