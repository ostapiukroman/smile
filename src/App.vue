<template>
  <div id="app">
    <main-header />
    <router-view/>
	<main-footer />
  </div>
</template>

<script>
import MainHeader from './components/blocks/header.vue'
import MainFooter from './components/blocks/footer.vue'
export default {
  name: 'app',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style>
</style>
