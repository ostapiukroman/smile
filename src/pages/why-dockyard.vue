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
.l-background-wrap-light {
    background-color: #f8f8f8;
    color: #343434;
}
.l-section, .l-section-landing, .l-section-no-mobile-gutter, .l-section-vanilla, .l-section-wide-image, .l-sub-section, .l-sub-section-no-mobile-gutter {
    max-width: 1320px;
    margin-right: auto;
    margin-left: auto;
}
.l-section, .l-section-landing, .l-section-no-mobile-gutter, .l-sub-section, .l-sub-section-no-mobile-gutter {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.t-display, strong {
    font-weight: 700;
}
.t-card-heading, .t-card-heading-strong, .t-headline-primary, .t-headline-secondary, .t-sub-display-primary, .t-sub-display-secondary {
    line-height: 1.5em;
}
.t-display {
    line-height: 1.066em;
}
.t-headline-secondary, .t-sub-display-secondary {
    font-weight: 300;
}
.why-dockyard__masthead .section__wide .t-display+.t-sub-display-secondary {
    margin-top: 1.25rem;
}
.l-section .t-body-heading, .l-section .t-heading, .l-section-landing .t-body-heading, .l-section-landing .t-heading, .l-section-no-mobile-gutter .t-body-heading, .l-section-no-mobile-gutter .t-heading, .l-section-vanilla .t-body-heading, .l-section-vanilla .t-heading, .l-sub-section .t-body-heading, .l-sub-section .t-heading, .l-sub-section-no-mobile-gutter .t-body-heading, .l-sub-section-no-mobile-gutter .t-heading {
    margin-bottom: 24px;
}
.t-body, .t-copy {
    font-size: 1.125em;
    line-height: 1.666em;
}
.l-card:after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transition: .2s ease box-shadow;
}
.l-card--full-img .img-jpg {
    min-height: 100%;
    min-width: 100%;
    position: absolute;
}
@media (min-width: 600px) {
  .l-section__wrap:not(.l-section__wrap--flipped) .l-card--full-img .img-jpg {
    left: 0;
}
}
@media (min-width: 800px) {
  .l-section, .l-section-no-mobile-gutter, .l-section-vanilla, .l-sub-section, .l-sub-section-no-mobile-gutter {
    padding-top: 80px;
    padding-bottom: 80px;
}
.l-section__wrap+.l-section__wrap {
    margin-top: 80px;
}
.section__wide {
    width: 60%;
}
.l-card, .l-card-showcase-media {
    padding-top: 40px;
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.05);
}
.l-card {
    height: 320px;
    position: relative;
}
.l-card--full-img {
    padding-top: 0;
    display: block;
}
.t-body-large, .t-heading {
    line-height: 1.25em;
}
.t-body-large, .t-heading {
    font-size: 2.25em;
}
.l-section, .l-section-landing, .l-section-vanilla, .l-sub-section {
    padding-right: 60px;
    padding-left: 60px;
}
.section__thin {
    margin-right: 60px;
    width: calc(40% - 60px);
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.section__wide {
    width: 60%;
}
.l-section-no-mobile-gutter, .l-sub-section-no-mobile-gutter {
    padding-right: 60px;
    padding-left: 60px;
}
.l-section--flipped .section__thin, .l-section__wrap--flipped .section__thin {
    -ms-flex-order: 2;
    order: 2;
    margin-right: 0;
    margin-left: 60px;
}
}
@media (min-width: 1150px) {
  .t-display {
    font-size: 3.75em;
}
.t-sub-display-secondary {
    font-size: 1.5em;
}
}
.t-hidden {
    position: absolute!important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px,1px,1px,1px);
}
.l-section__wrap {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
}
</style>
