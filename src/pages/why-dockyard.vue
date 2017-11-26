<template>
<div>
    <div class="l-background-wrap-light">
          <section class="l-section why-dockyard__masthead">
      <div class="section__wide l-mobile-gutter">
        <h2 class="t-display">The right team for the&nbsp;job</h2>
        <p class="t-sub-display-secondary">We understand the challenges faced when embracing new technology and tools. With this in mind, our expert team takes pride in ensuring you’re set up for success.</p>
      </div>
    </section>

    <section class="l-section-no-mobile-gutter l-section-no-mobile-gutter--no-mobile-space-bottom why-dockyard__traits">
      <h2 class="t-hidden">Our Traits</h2>
      <article class="l-section__wrap">
        <header class="l-mobile-gutter section__thin">
          <h3 class="t-heading">Pioneering the field</h3>
          <p class="t-body">We provide access to the best resources at all times because we innovate every year to push core technologies forward.</p>
        </header>
        <div class="section__wide">
          <div class="l-card l-card--full-img">
            <img src="https://assets.dockyard.com/assets/images/why-dockyard/pioneers-7a329e1c465f5098ee444f8a5abd4de3.jpg" alt="" class="img-jpg">
          </div>
        </div>
      </article>
      <article class="l-section__wrap l-section__wrap--flipped">
        <header class="l-mobile-gutter section__thin">
          <h3 class="t-heading">High quality project management and execution</h3>
          <p class="t-body">Our integrated approach allows us to solve problems quickly with stability and maintainability, ensuring your project is on time and within budget.</p>
        </header>
        <div class="section__wide">
          <div class="l-card l-card--full-img">
            <img src="https://assets.dockyard.com/assets/images/why-dockyard/agile-1402d9ccec5559a1cf014b444c23cd60.jpg" alt="" class="img-jpg">
          </div>
        </div>
      </article>
    </section>
    </div>
    <listSubService />
  </div>
</template>

<script>
import listSubService from '../components/list-sub-service.vue'

export default {
  name: 'whyDockyard',
  data () {
    return {
      post: null
    }
  },
  components: {
    listSubService
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
