<template>
  <header>
    <nav class="l-nav">
      <div class="nav__icons">
        <logo />
      </div>

      <div class="nav__links">
        <router-link :to="{ name: 'Services' }" class="nav__link ember-view">Services</router-link> 
        <router-link :to="{ name: 'Work' }" class="nav__link ember-view">Work</router-link> 
        <router-link :to="{ name: 'WhyDockyard' }" class="nav__link ember-view">Why dockyard</router-link> 
        <router-link :to="{ name: 'Blog', params: { page_id: '1' } }" class="nav__link ember-view">Blog</router-link> 
        <router-link :to="{ name: 'Contact' }" class="nav__link ember-view">Contact us</router-link> 
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from '../logo.vue'

export default {
  name: 'main-header',
  components: {
    Logo
  }
}
</script>

<style>
</style>