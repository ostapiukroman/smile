<template>
  <div class="case-study">
    <section class="l-section flywheel">
      <div class="section__thin l-mobile-gutter l-masthead">
        <h1 class="t-display">{{post.title}}</h1>
        <h2 class="t-sub-display-secondary">{{post.desc}}</h2>
      </div>
      <div class="section__wide">
        image here
      </div>
    </section>
    <div v-html="post.body"></div>
    <section class="l-section--center case-study__cta">
      <can-help />
    </section>
  </div>
</template>

<script>
import serviceData from '../../resource/services.json'
import canHelp from '../../components/can-help.vue'

export default {
  name: 'subWork',
  data: function () {
    return {
      posts: serviceData.work,
      post: null
    }
  },
  created: function () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      self.posts.filter(function (array) {
        if (array.slug === self.$route.params.slug) {
          self.post = array
          return false
        }
      })
    }
  },
  components: {
    canHelp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
.l-masthead {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.section__thin--align-top, .section__wide--align-top {
    -ms-flex-item-align: start;
    align-self: flex-start;
}
.t-sub-page-display {
    font-size: 2.25em;
    line-height: 1.25em;
}
.services .divider-accent:after {
    content: "";
    height: 2px;
    width: 30px;
    position: absolute;
    bottom: 0;
    background-color: #343434;
}
.services .divider-accent {
    position: relative;
    padding-bottom: calc(1.25rem + 2px);
}
.t-body, .t-copy {
    font-size: 1.125em;
    line-height: 1.666em;
}
.fastboot-banner, .l-section--center>.l-content-small, .l-section--center>.l-content-thin, .t-link-cta {
    text-align: center;
}
.nav__link, .t-link-cta, a, abbr {
    text-decoration: none;
}
.t-link--bold, .t-link-cta {
    font-weight: 700;
}
.t-link-cta {
    padding: .938em 1.875em;
    min-width: 212px;
    display: inline-block;
    color: #343434;
    border: 2px solid currentColor;
    transition: .2s ease background-color,.2s ease color;
}
.l-masthead .t-link-cta {
    margin-bottom: 30px;
}
.l-masthead .t-body+.t-link-cta, .l-masthead .t-sub-display-primary+.t-link-cta, .l-masthead .t-sub-display-secondary+.t-link-cta {
    margin-top: 2.25rem;
    display: inline-block;
}
.l-masthead .t-display+.t-body, .l-masthead .t-display+.t-sub-display-primary, .l-masthead .t-display+.t-sub-display-secondary, .l-masthead .t-sub-page-display+.t-body, .l-masthead .t-sub-page-display+.t-sub-display-primary, .l-masthead .t-sub-page-display+.t-sub-display-secondary {
    margin-top: 1.25rem;
}
.section__wide--align-right {
    margin-left: auto;
}
.t-card-heading, .t-card-heading-strong, .t-headline-primary, .t-headline-secondary, .t-sub-display-primary, .t-sub-display-secondary {
    line-height: 1.5em;
}
@media (min-width: 600px) {
  .t-headline-primary, .t-headline-secondary, .t-sub-display-primary {
    font-size: 1.5em;
}
}
@media (min-width: 700px) {
  .services .divider-accent:after {
    left: 0;
}
}
@media (min-width: 800px) {
  .l-section, .l-section-no-mobile-gutter, .l-section-vanilla, .l-sub-section, .l-sub-section-no-mobile-gutter {
    padding-top: 80px;
    padding-bottom: 80px;
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
}
.t-link-cta:focus, .t-link-cta:hover {
    background-color: #343434;
    color: #fff;
}
.t-headline-primary, .t-sub-display-primary {
    font-weight: 700;
}
.services .t-headline-primary {
    margin-bottom: .625rem;
}
.t-body, .t-copy {
    font-size: 1.125em;
    line-height: 1.666em;
}
.services .t-body+.t-headline-primary {
    margin-top: 40px;
}
.icon-services-large {
    margin-bottom: 40px;
    padding-bottom: 38%;
    height: 0;
    width: 100%;
    position: relative;
}
.icon-services-large .icon-svg {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
