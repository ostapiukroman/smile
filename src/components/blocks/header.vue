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
// console.log($route);
import Logo from '../logo.vue'

export default {
  name: 'main-header',
  components: {
    Logo
  }
}
</script>

<style>
.l-nav {
    margin-right: auto;
    margin-left: auto;
    position: relative;
}
.l-nav {
  padding-right: 60px;
  padding-left: 60px;
  height: 80px;
  max-width: 1320px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  background: #fff;
}
.nav__links {
    margin-left: auto;
    width: calc(100% - 164px);
    text-align: right;
}
.nav__link, .t-link-cta, a, abbr {
    text-decoration: none;
}
.nav__link {
    color: #424242;
    line-height: 2em;
    letter-spacing: .5px;
    text-transform: uppercase;
    transition: .2s ease font-size,.2s ease color,.2s ease box-shadow;
}
.nav__link {
    margin-left: 50px;
}
.nav__link {
    font-size: .875em;
}
.nav__link:focus, .nav__link:hover {
    color: #343434;
    box-shadow: 0 1px 0 0 #343434;
}
</style>