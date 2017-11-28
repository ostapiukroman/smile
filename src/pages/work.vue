<template>
  <main class="work">
  <div class="l-background-wrap-light">
    <section class="l-section work__items">
    	<router-link v-for="(subpage, index) in subpages" :key="subpage.slug" class="l-section__wrap ember-view" v-bind:class="subpage.slug" :to="{ name: 'subWork', params: { slug: subpage.slug } }">
    		<div class="section__thin section__thin--align-top l-mobile-gutter">
			  <h3 class="t-display">{{subpage.title}}</h3>
			  <p class="t-body">{{subpage.desc}}</p>
			  <p class="t-body t-link t-link--icon-after">
			    Read case study
			    <arrow-right />
			  </p>
			</div>
			<div class="section__wide">
			  <div class="l-card l-card-showcase-media" :class="'l-card--' + subpage.slug">
          <div class="img-wrap">
            <img :src="'https://dockyard.com/assets/images/work/'+subpage.img" class="img" :alt="subpage.slug">   
          </div>
        </div>
			</div>
    	</router-link>
    </section>
  </div>
  <clients class="l-section l-section--center work__clients"><h2 slot="headline">WHO WE’VE WORKED WITH</h2></clients>
  </main>
</template>

<script>
import arrowRight from '../components/icons/arrowLeft.vue'
import clients from '../components/clients.vue'
import serviceData from '../resource/services.json'

export default {
  name: 'Work',
  data () {
    return {
      subpages: serviceData.work,
      fileWay: null
    }
  },
  components: {
    arrowRight,
    clients
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
