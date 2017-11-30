<template>
<main class="home">
  <div class="l-background-wrap-light">
    <section class="l-section-no-mobile-gutter home__masthead">
      <header class="section__thin section__thin--align-top l-masthead l-mobile-gutter">
        <h1 class="t-display">Believe in the power of the web</h1>
        <h2 class="t-sub-display-secondary">Reducing costs. Expediting development. We empower companies with web based mobile solutions.</h2>
        <router-link :to="{ name: 'Contact' }" class="t-link-cta ember-view">Let’s build together</router-link>
      </header>
      <div class="section__wide">
<router-link :to="{ name: 'progressiveWebApps' }" class="l-card l-card--red ember-view">          
<div class="card__headings">
  <h3 class="t-eyebrow">High Tide | Feature</h3>
  <h4 class="t-card-heading-strong">Progressive Web Apps can transform your business</h4>
</div>
  <div class="card__img-wrap">
    <img alt="High Tide Progressive Web App" src="~@/assets/img/progressive-web-app-e62c3f0a317a984bcc4711fdbfebdda7.png" class="card__img-wrap__img">
  </div>
  <arrowLeft />

</router-link>
<router-link :to="{ name: 'subWork', params: { slug: 'mcgraw-hill-education' } }" class="l-card l-card--blue ember-view">          <div class="card__headings">
  <h3 class="t-eyebrow">McGraw-Hill Education | Case Study</h3>
  <h4 class="t-card-heading-strong">The best educational experiences are adaptive.</h4>
</div>
  <div class="card__img-wrap">
    <img alt="McGraw-Hill Education Case Study" src="~@/assets/img/mcgraw-hill-education-card-6bd174f70673737a5436b0313fcfa02e.png" class="card__img-wrap__img">
  </div>
  <arrowLeft />

</router-link>     </div>
    </section>
  </div>

  <section class="l-section home__about-us">
    <header class="section__thin">
      <h2 class="t-heading">About us</h2>
      <p class="t-body">DockYard helps companies design, engineer, and iterate on their most important digital products. Our team is smart, relatable, and deeply knowledgeable about modern application architecture and UX. We work alongside teams building beautiful, functional web applications with an eye toward the future.</p>
    </header>

    <servicesTabs />

  </section>

  <div class="l-background-wrap-light">
    <section class="l-section-no-mobile-gutter l-section--flipped home__leading-the-way">
      <header class="l-mobile-gutter section__thin">
        <h2 class="t-heading">Better together</h2>
        <p class="t-body">Our approach delivers better applications and better teams. Close collaboration allows us to design and engineer applications that integrate seamlessly into existing infrastructures while also exposing your team to best practices and new processes. This is how we help companies safely and successfully transition to new technologies.</p>
      </header>
      <div class="section__wide">
<router-link :to="{ name: 'WhyDockyard' }" class="l-card l-card--pink l-card--why-dockyard ember-view">          
<div class="card__headings">
  <h3 class="t-eyebrow">Why DockYard</h3>
  <h4 class="t-card-heading-strong">Building your dream and enabling you to run with it</h4>
</div>
<!----><arrowLeft />

</router-link>      </div>
    </section>
  </div>

  <lastCliets><h2 class="t-section-heading t-section-heading--bordered" slot="headline">Who we’ve worked with</h2></lastCliets>

  <div class="l-background-wrap-dark">

  <latestPosts><h2 class="t-section-heading t-section-heading--bordered" slot="headline">Latest</h2></latestPosts>
  </div>
</main>
</template>

<script>
import latestPosts from '../components/latest-posts.vue'
import arrowLeft from '../components/icons/arrowLeft.vue'
import lastCliets from '../components/last-clients.vue'
import servicesTabs from '../components/services-tabs.vue'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function () {
    this.$root.title = 'Home'
  },
  components: {
    servicesTabs,
    arrowLeft,
    lastCliets,
    latestPosts
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
