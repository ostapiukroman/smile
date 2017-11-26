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
</style>
