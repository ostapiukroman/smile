<template>
  <div class="contact">
    <main class="main">
      <div class="l-background-wrap-light">
        <section class="l-section">
          <div class="section__wide l-masthead">
            <h2 class="t-display">{{ title }}</h2>
            <h3 class="t-sub-display-secondary">{{ subtitle }}</h3>
          </div>
        </section>
      </div>
      <contactForm />
    </main>
  </div>
</template>

<script>
import contactForm from '../components/contact-form.vue'
export default {
  name: 'Contact',
  data () {
    return {
      title: 'Let’s build something great together',
      subtitle: 'Whatever your ambition, we’d love to design and build your next big idea or lend a hand on an existing one.'
    }
  },
  components: {
    contactForm
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
.t-card-heading, .t-card-heading-strong, .t-headline-primary, .t-headline-secondary, .t-sub-display-primary, .t-sub-display-secondary {
    line-height: 1.5em;
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
.t-display {
    line-height: 1.066em;
}
@media(min-width: 1150px){
  .t-display {
    font-size: 3.75em;
  }
  .t-sub-display-secondary {
    font-size: 1.5em;
  }
}
@media(min-width:800px){
  .l-section, .l-section-no-mobile-gutter, .l-section-vanilla, .l-sub-section, .l-sub-section-no-mobile-gutter {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .l-section, .l-section-landing, .l-section-vanilla, .l-sub-section {
    padding-right: 60px;
    padding-left: 60px;
  }
  .section__wide {
    width: 60%;
  }
}
.l-background-wrap-light {
    background-color: #f8f8f8;
    color: #343434;
}
.t-headline-secondary, .t-sub-display-secondary {
    font-weight: 300;
}
</style>
