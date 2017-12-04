<template>
<section class="l-section l-section--center work__clients">
    <h2 class="t-section-heading t-section-heading--bordered">Who we’ve worked with</h2>
    <ul class="l-grid-thirds">
      <li v-for="client in clients" class="grid__item">
        <p v-html="client.logo"></p>
        <p class="client__desc t-body">{{client.desc}}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import clients from '@/resource/clients.json'

export default {
  name: 'CanHelpSection',
  data: function () {
    return {
      clients: clients
    }
  }
}
</script>

<style>
</style>