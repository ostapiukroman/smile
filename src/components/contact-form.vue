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
<style scoped>
.form {
    margin-right: auto;
    margin-left: auto;
    max-width: 800px;
}
button, input, select, textarea {
    border: 0;
    border-radius: 0;
    color: #343434;
    outline: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: 0 0;
}
button, select {
    line-height: 1em;
    cursor: pointer;
}
.t-form-label {
    width: 100%;
    font-size: 1em;
    font-weight: 700;
    color: #343434;
}
.form__input, .form__select {
    max-width: 100%;
    width: 100%;
    position: relative;
    z-index: 2;
    font-size: 1.5em;
    line-height: 1.5em;
    border: 1px solid #bdbdbd;
    background: 0 0;
    transition: .2s ease border-color;
}
.form__input {
    padding: .542em .833em;
}
.form__input:active, .form__input:focus, .form__input:hover, .form__select:active, .form__select:focus, .form__select:hover {
    border-color: #343434;
}
.t-form-label:not(.t-hidden)+.form__input, .t-form-label:not(.t-hidden)+.l-select {
    margin-top: 15px;
    margin-bottom: 30px;
}
.l-select {
    position: relative;
}
.form__select {
    padding: .542em 2.542em .542em .833em;
}
.l-select .icon-svg {
    z-index: 1;
    height: 11px;
    width: 21px;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    stroke: #343434;
}
.icon-chevron-down, .icon-chevron-left, .icon-chevron-right {
    fill: transparent;
    transition: .2s ease transform,.2s ease stroke;
}
.button {
    padding: .938em 1.875em;
    min-width: 212px;
    text-decoration: none;
    font-weight: 700;
    color: #343434;
    border: 2px solid #343434;
    transition: .2s ease background-color,.2s ease color;
}
.button:focus, .button:hover {
    background-color: #343434;
    color: #fff;
}
.t-form-label--optional {
    color: #bdbdbd;
    font-weight: 300;
}
@media (min-width: 800px){
.l-select {
    width: 50%;
}
}
</style>
