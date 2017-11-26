<template>
  <div class="services">
    <section class="l-section-no-mobile-gutter">
      <header class="section__thin section__thin--align-top l-masthead l-mobile-gutter">
        <h2 class="t-display">{{ title }}</h2>
        <p class="t-body">{{ subtitle }}</p>
      </header>
      <div class="section__wide">
        <h3 class="t-list-heading l-mobile-gutter">{{ listHeading }}</h3>
        <list-stack />
      </div>
    </section>
  </div>
</template>

<script>

import listStack from '../components/list-stack.vue'

export default {
  name: 'Sercices',
  data () {
    return {
      title: 'How we can help',
      subtitle: 'Whether you need a full stack engagement, staff augmentation, training, code/UX audits, design, or user experience testing we offer services that can take your project to the next level.',
      listHeading: 'What we can do for you'
    }
  },
  components: {
    listStack
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
.t-display, strong {
    font-weight: 700;
}
.t-body, .t-copy {
    font-size: 1.125em;
    line-height: 1.666em;
}
.services .t-list-heading {
    margin-bottom: 1.5rem;
}
.t-list-heading, .t-section-heading, .t-sub-headline {
    display: inline-block;
    font-size: 1em;
    font-weight: 700;
}
.l-masthead .t-display+.t-body, .l-masthead .t-display+.t-sub-display-primary, .l-masthead .t-display+.t-sub-display-secondary, .l-masthead .t-sub-page-display+.t-body, .l-masthead .t-sub-page-display+.t-sub-display-primary, .l-masthead .t-sub-page-display+.t-sub-display-secondary {
    margin-top: 1.25rem;
}
.t-display {
    line-height: 1.066em;
}
@media (min-width: 1150px) {
.t-display {
    font-size: 3.75em;
}
}
@media (min-width: 800px) {
.l-section, .l-section-no-mobile-gutter, .l-section-vanilla, .l-sub-section, .l-sub-section-no-mobile-gutter {
    padding-top: 80px;
    padding-bottom: 80px;
}
.l-section-no-mobile-gutter, .l-sub-section-no-mobile-gutter {
    padding-right: 60px;
    padding-left: 60px;
}
.section__wide {
    width: 60%;
}
.section__thin {
    margin-right: 60px;
    width: calc(40% - 60px);
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
}

</style>
