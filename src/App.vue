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
*{
	padding: 0;
	margin: 0;
	font-family: inherit;
  list-style-type: none;
  box-sizing: border-box;
  color:inherit;
  font-size: inherit;
  text-decoration: inherit;
}
</style>
