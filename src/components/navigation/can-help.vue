<template>
    <div class="l-content-thin">
      <h2 class="t-heading-cta">We can help</h2>
      <h3 class="t-subheading-cta"><router-link class="t-link ember-view" :to="{ name: 'Contact'}">Contact us</router-link> about web application development, consulting, and on-site training for your company.</h3>
    </div>	
</template>

<script>
export default {
  name: 'CanHelpSection',
  data: function () {
    return {
      text: null
    }
  }
}
</script>

<style>
</style>