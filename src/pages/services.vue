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

import listStack from '@/components/navigation/list-stack.vue'

export default {
  name: 'Services',
  data () {
    return {
      title: 'How we can help',
      subtitle: 'Whether you need a full stack engagement, staff augmentation, training, code/UX audits, design, or user experience testing we offer services that can take your project to the next level.',
      listHeading: 'What we can do for you'
    }
  },
  created: function () {
    this.$root.title = 'Services'
  },
  components: {
    listStack
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
