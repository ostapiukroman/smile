<template>
  <section class="l-section">
      <div class="form">
        <form id="contactForm" class="form" v-on:submit.prevent="sendForm">

          <label for="hire-us-email" class="t-form-label">Email</label>
          <input v-model.lazy="email" type="email" id="hire-us-email" name="hire-us-email" class="form__input l-text ember-view" placeholder="john.smith@example.com" required>

          <button type="submit" aria-label="Submit Hire Us form" class="button">Submit</button>
        </form>
      </div>
  </section>
</template>

<script>
export default {
  name: 'subscribe-form',
  data () {
    return {
      email: null
    }
  },
  props: {
    postSlug: {
      type: String,
      defoult: null
    }
  },
  methods: {
    sendForm: function () {
      console.log(this.email)
      console.log(this.postSlug)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
