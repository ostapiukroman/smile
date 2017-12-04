<template>
  <section class="l-sub-section l-section--center l-worked-with">
    <slot name="headline"></slot>
    <ul class="client-list">
      <li class="client-list__item" v-for="client in clientsSection.clients" v-html="client.logo"></li>
    </ul>
  </section>
</template>

<script>
import clients from '@/resource/clients.json'

export default {
  name: 'HomeServices',
  data: function () {
    return {
      clientsSection: {
        allClients: clients,
        showCount: 5,
        clients: null
      }
    }
  },
  created: function () {
    this.clientsSection.clients = []
    for (var i = 0; i < this.clientsSection.showCount; i++) {
      this.clientsSection.clients.push(this.clientsSection.allClients[i])
    }
  }
}
</script>

<style>
</style>