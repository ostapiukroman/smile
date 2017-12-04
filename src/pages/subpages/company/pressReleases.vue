<template>
<main class="press">
  <header class="press__header l-press">
    <h1 class="t-display">Press releases</h1>
    <router-link :to="{ name: 'press' }" class="t-link active ember-view">View company information</router-link>
  </header>

  <section class="l-posts">
    <article class="posts__post" v-for="release in releases" :key="release.slug">
    <h2>
      <router-link :to="{ name: 'pressRelease', params: { slug: release.slug } }" class="posts__post__title t-heading ember-view">{{ release.title }}</router-link>
    </h2>
    <p class="posts__post__body t-body">{{ release.desc }}</p>
  </article>
 </section>
</main>
</template>

<script>
import releases from '@/resource/releases.json'
export default {
  name: 'Releases',
  data: function () {
    return {
      releases: releases
    }
  },
  created: function () {
    this.$root.title = 'Press Releases'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
