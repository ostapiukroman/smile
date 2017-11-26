<template>
  <section class="l-section">
      <div class="form">
        <form id="contactForm" class="form" v-on:submit.prevent="sendForm">
          <label for="hire-us-name" class="t-form-label">What is your name?</label>
          <input v-model.lazy="name" type="text" id="hire-us-name" name="hire-us-name" class="form__input l-text ember-view" required>

          <label for="hire-us-email" class="t-form-label">What email address do you use?</label>
          <input v-model.lazy="mail" type="email" id="hire-us-email" name="hire-us-email" class="form__input l-text ember-view" required>

          <label for="hire-us-company-name" class="t-form-label">What is your company’s name? <span class="t-form-label--optional">(optional)</span></label>
          <input v-model.lazy="company" type="text" id="hire-us-company-name" name="hire-us-company-name" class="form__input l-text ember-view">

          <label for="hire-us-phone-number" class="t-form-label">What is your phone number? <span class="t-form-label--optional">(optional)</span></label>
          <input v-model.lazy="phone" type="phone" id="hire-us-phone-number" name="hire-us-phone-number" class="form__input l-text ember-view">

          <label for="hire-us-source" class="t-form-label">How did you find us? <span class="t-form-label--optional">(optional)</span></label>
          <input v-model.lazy="source" type="text" id="hire-us-source" name="hire-us-source" class="form__input l-text ember-view">

          <label for="hire-us-budget" class="t-form-label">What is your budget?</label>
          <div  aria-label="Select project budget" class="l-select">
            <select v-model.lazy="budget.selected" required name="hire-us-budget" id="hire-us-budget" class="form__select l-text ember-view" placeholder="123"> 
              <option selected="true" disabled="disabled">Select one...</option>
              <option v-for="option in budget.list" v-bind:value="option">
                {{ option }}
              </option>
            </select>
            <svg viewBox="0 0 53 32" class="icon-svg icon-chevron-down" aria-label="Arrow pointing down"><path stroke-width="4.5714" stroke-miterlimit="4" stroke-linecap="butt" stroke-linejoin="miter" d="M50.286 2.286l-25.033 25.143-22.967-23.069"></path></svg>
          </div>

          <label for="hire-us-reason" class="t-form-label">How can we help?</label>
          <textarea v-model.lazy="reason" rows="3" name="hire-us-reason" id="hire-us-reason" autoresize="" class="form__input l-text ember-auto-resize ember-view" required></textarea>

          <button type="submit" aria-label="Submit Hire Us form" class="button">Submit</button>
        </form>
      </div>
  </section>
</template>

<script>
export default {
  name: 'contact-form',
  data () {
    return {
      name: null,
      mail: null,
      company: null,
      phone: null,
      source: null,
      budget: {
        selected: null,
        list: ['Less than $10,000', '$10,000 - $50,000', '$50,000 - $100,000', '$100,000 - $250,000', '$250,000 - $500,000', 'More than $500,000']
      },
      reason: null
    }
  },
  methods: {
    sendForm: function () {
      console.log(this.$data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
