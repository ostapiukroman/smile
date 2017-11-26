<template>
  <div id="app">
    <main-header />
    <router-view/>
  </div>
</template>

<script>
import MainHeader from './components/blocks/header.vue'
export default {
  name: 'app',
  components: {
    MainHeader
  }
}
</script>

<style>
</style>
