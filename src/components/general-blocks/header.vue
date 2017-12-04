<template>
  <header :class="mobShow ? 'has-mobile-nav-showing' : 'close'">
    <nav class="l-nav">
      <div class="nav__icons">
        <logo />
        <div class="nav__icon-menu icon-menu" v-on:click="mobShow = !mobShow">
          <div class="icon-menu__top-bar"></div>
          <div class="icon-menu__center-bar"></div>
          <div class="icon-menu__bottom-bar"></div>
        </div>
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
import Logo from '@/components/icons/logo.vue'

export default {
  name: 'main-header',
  data () {
    return {
      mobShow: false
    }
  },
  components: {
    Logo
  },
  watch: {
    '$route': 'hideMenu'
  },
  methods: {
    hideMenu () {
      this.mobShow = false
    }
  }
}
</script>

<style>
</style>