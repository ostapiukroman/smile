<template>
  <main class="capabilities capabilities--ember">
    <div class="l-background-wrap-light">
    <section class="l-section-landing">
      <header class="section__thin section__thin--align-top l-masthead capabilities__header">
        <h1 class="t-display">Hire the best team for Ember</h1>
        <h2 class="t-sub-display-secondary">We are the most expert team in the world, and we’re worth it. </h2>
        <router-link :to="{ name: 'Contact' }" class="t-link-cta ember-view">Let’s build together</router-link>
      </header>
      <div class="section__wide">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 766 515" class="capabilities__header__media"><g fill="none" fill-rule="evenodd"><path fill="#E54B29" d="M229.3 514.2c152.7 0 536.26-11.04 536.26-163.74 0-152.7-96.53-328.13-249.23-328.13S0-60.32 0 92.4c0 152.7 76.6 421.8 229.3 421.8z"></path><g fill="#FFF" fill-rule="nonzero"><path d="M420.97 144.4c-3.08 2.16-35.26 25.14-53.4 38.37l-1 .72c-.38.2-.75.5-1.1.7l-.7.5-.8.6c-.26 1.3-.02 2.8.68 4 1.34 2.9 2.74 6.4 4.1 10.4 2.23 5 2.05 10.8-.47 15.6-2.62 4.6-7.58 7.32-12.87 7.1h-.5c-6.8-1.1-14.5-9.87-21.1-15.8-1.3-1.46-3-2.63-4.9-3.4l-2.2.6c-3.1-2.3-5.9-5.18-8.1-8.4l.6-.47c2.4-1.7 4.9-3.14 7.6-4.3 1.3-1.2 2.7-2.3 4.2-3.24 5.4-2.7 11.18-4.5 17.1-5.4l1.5-.25-2-.28-2.52-.3c-6.64-.6-13.32-.1-19.82 1.4-23.93 5.32-31.43 27.73-32.43 55.85s-1.64 50.9-18.04 59.26-26.85-3.2-28.77-8c-.7-1.7 6.82-6 3.4-19.1-4.15 2-7.8 4.9-10.7 8.4 0 0-6.9-8.4-13.4-8.08 0 0-1.2 15 8.4 19.1 2.3 1 5.3 25.4 29.7 31.43 24.46 6.04 73.3 4.7 91-5.37 17.76-10.1 22.07-23.2 24.8-55.9 1.9-23.3 1.9-47.2-3.47-61.2 12.5-12.8 45.98-50.1 49.06-53.67 3.45-4.3 1.6-4.94-3.64-1.27zm-121.9 90.44c.3-5.26.98-10.5 2-15.65 1.18-2.6 2.7-5 4.56-7.2 3.9-4.9 8.2-9.5 12.87-13.7 1.54 1.9 3.26 3.7 5.14 5.3l-6.85 4.1c-4.8 3.6-8.7 8.1-11.5 13.3-.3 1.4.8 6.3.8 8.9.1 1.9-.7 3.7-2.2 4.9-1 .5-2.1.9-3.2 1.2-2.1.6-1.8-1.4-1.8-1.4zm34.56 42.66c-4 8.32-4.65 16.06-10.47 23.98-4.72 5.87-11.88 9.26-19.4 9.18-2.75 0-12.65-1.7-9.57-6.34 3.6-5.48 8.7-8.56 11.4-15.18 3.4-8.15 5-15.2 10.2-22.78 7.9-11.17 27.4-13.43 26.7-5.86-.3 3.98-6.9 12.54-9.1 17z"></path><path d="M338.74 189.93c-1.4.54-2.5 1.7-2.92 3.14-.44 1.44-.18 3 .7 4.22.54 1 1.16 2.1 1.84 3 2.07 3.2 4.5 6.1 7.2 8.8 2.35 2.5 5.15 4.6 8.24 6.2 1.08.5 2.24.7 3.42.8 3.25 0 6.32-1.5 8.22-4.1 2.16-2.7 2.16-7.6.48-12.7-1.25-4.2-3.34-8.1-6.16-11.4-1.52-1.8-3.67-2.9-6-3.1h-.85c-1.3.1-2.6.3-3.9.7-3.5 1-6.9 2.4-10.2 4.15zm14.44 10.28c1.23 3.7-.66 7.7-4.28 9.1l-.44.2h-.2l-.52-.5c-3.05-2.9-5.75-6.1-8.05-9.7.8-1.8 2.4-3.2 4.3-3.8 3.8-1.2 7.9.9 9.1 4.7v.2zm-24.1-6.3l-4.55 2.3c-.96.5 0 2.1.85 1.5l3.98-2.7c.78-.6.27-1.3-.28-1z"></path></g></g></svg>
      </div>
    </section>

    <section class="l-section-vanilla project-description">
      <h2 class="project-description__heading t-capabilities-heading">Uniquely qualified to handle your most ambitious Ember project</h2>
      <div class="project-description__figures l-grid-quarters">
        <figure v-for="item in abilites" class="project-description__figure grid__item ember-view">
        <span v-html="item.icon"></span>
<figcaption class="project-description__figure__caption">
  <h3 class="t-headline-secondary">{{ item.name }}</h3>
  <p class="t-body">{{ item.desc }}</p>
</figcaption>
</figure>
      </div>
    </section>
  </div>
  <section class="l-content-medium l-section-vanilla proof-of-expertise">
    <h2 class="t-headline-primary proof-of-expertise__heading">Why DockYard?</h2>
    <ul class="l-grid-halves proof-of-expertise__items proof-of-expertise__items--ember">
      <li class="grid__item proof-of-expertise__item ember-view" v-for="item in whySection">
        <likeIcon />
        <h3 class="t-headline-secondary proof-of-expertise__item__heading">{{ item.title }}</h3>
        <p class="t-body">{{ item.desc }}</p>
      </li>
    </ul>
  </section>


  <div class="l-background-wrap-light l-latest-news--multiple">
    <section class="l-sub-section-no-mobile-gutter l-section--center latest-news">
    <h2 class="t-section-heading t-section-heading--bordered">We love spreading our Ember knowledge</h2>
  <div class="l-latest-news__items">
  <a href="https://youtu.be/KgJ4mW3BtoA" aria-label="Conference talk: 'EmberCamp London 2017'" class="latest-news__items__item">
  <div class="latest-news__items__item__header">
    <h3 class="t-eyebrow">EmberCamp London 2017</h3>
    <h4 class="t-card-heading">Marten Schilstra – Making Titanic Ember Apps Feel Tiny</h4>
  </div>
    <img src="https://assets.dockyard.com/assets/images/conference/future.svg" class="latest-news__items__item__img">

  <p class="t-link t-link--light t-link--icon-after latest-news__items__item__cta">
      Watch the talk
    <svg viewBox="0 0 19 32" aria-label="Arrow pointing right" class="icon-svg icon-chevron-right"><path stroke-width="2.7826" stroke-miterlimit="4" stroke-linecap="square" stroke-linejoin="miter" d="M2.783 2.783l13.913 13.913-13.217 13.217"></path></svg>
  </p>
</a>
 <a href="https://youtu.be/MpFudGJn2J0" aria-label="Conference talk: 'EmberConf 2017'" class="latest-news__items__item">
  <div class="latest-news__items__item__header">
    <h3 class="t-eyebrow">EmberConf 2017</h3>
    <h4 class="t-card-heading">Miguel Camba – Higher Order Components</h4>
  </div>
    <img src="https://assets.dockyard.com/assets/images/conference/Miguel-c34e8a787d17e36481ba9228ed570ffd.jpg" class="latest-news__items__item__img">

  <p class="t-link t-link--light t-link--icon-after latest-news__items__item__cta">
      Watch the talk
    <svg viewBox="0 0 19 32" aria-label="Arrow pointing right" class="icon-svg icon-chevron-right"><path stroke-width="2.7826" stroke-miterlimit="4" stroke-linecap="square" stroke-linejoin="miter" d="M2.783 2.783l13.913 13.913-13.217 13.217"></path></svg>
  </p>
</a>

        <a href="https://youtu.be/hNwgp9alwKg" aria-label="Conference talk: 'EmberConf 2016'" class="latest-news__items__item">
  <div class="latest-news__items__item__header">
    <h3 class="t-eyebrow">EmberConf 2016</h3>
    <h4 class="t-card-heading">Estelle DeBlois – Dissecting an Ember CLI Build</h4>
  </div>
    <img src="https://assets.dockyard.com/assets/images/conference/Estelle-dbd504d038f5acfa18cc59ce7d809518.jpg" class="latest-news__items__item__img">

  <p class="t-link t-link--light t-link--icon-after latest-news__items__item__cta">
      Watch the talk
    <svg viewBox="0 0 19 32" aria-label="Arrow pointing right" class="icon-svg icon-chevron-right"><path stroke-width="2.7826" stroke-miterlimit="4" stroke-linecap="square" stroke-linejoin="miter" d="M2.783 2.783l13.913 13.913-13.217 13.217"></path></svg>
  </p>
</a>

  </div>
</section>
  <latestPosts :cutId="cutId"></latestPosts>

    <p class="latest-news__cta">
      See more posts about
      <router-link :to="{ name: 'Category', params: { slug: 'ember', page_id: 1 } }" class="t-link ember-view">Ember</router-link>
    </p>
  </div>
  <section class="l-section-wide-image">
    <img src="~@/assets/img/2015-WGE-conf_scale_w_2400-75d9a4aff40ff8e52cd6623f69f635ad.jpg" alt="2015 Wicked Good Ember Conference, Boston" class="wge__image">
  </section>
  <section class="l-section coding-community l-section--center-heading">
    <div class="l-content-thin coding-community__intro">
      <h3 class="t-body-heading">We’re a big part of the Ember community, too!</h3>
      <p class="t-body">We made an early investment in the Ember eco-system and have continued to pour resources into its continued development. Our commitment to the Ember community involves <a href="http://wickedgoodember.com" class="t-link">conferences we’ve run</a>, <a href="https://www.meetup.com/Boston-Ember-js/" class="t-link">meetups we’ve organized</a>, <a href="https://github.com/DockYard?utf8=%E2%9C%93&amp;q=ember&amp;type=&amp;language=javascript#org-repositories" class="t-link">open source we’ve written</a>, and <a href="https://emberjs.com/sponsors/" class="t-link">Ember Core Team members we’ve employed</a>. We believe that Ember is the best choice for building modern web applications.</p>
    </div>
    <div class="l-grid-halves l-grid-halves--mobile-centered l-content-medium coding-community__cards">
      <div id="ember587" class="grid__item feature-list-item ember-view"><img src="https://assets.dockyard.com/assets/images/ember-consulting/wicked-good-ember@2x-184e76c5f374c199329f9a0063a5edf9.png" alt="Wicked Good Ember logo" class="feature-list-item__image">
<div class="feature-list-item__content">
  <h3 class="t-headline-primary">Wicked Good Ember</h3>
  <p class="t-body">Each year over 200 Emberiños take part in an unforgettable day and night of Ember.</p>
  <a aria-label="learn more about Wicked Good Ember" href="https://wickedgoodember.com/" class="t-body t-link t-link--icon-after">
    Learn more
    <svg viewBox="0 0 19 32" class="icon-svg icon-chevron-right" aria-label="Arrow pointing right"><path stroke-width="2.7826" stroke-miterlimit="4" stroke-linecap="square" stroke-linejoin="miter" d="M2.783 2.783l13.913 13.913-13.217 13.217"></path></svg>
  </a>
</div>
</div>

      <div id="ember588" class="grid__item feature-list-item ember-view"><img src="https://assets.dockyard.com/assets/images/ember-consulting/boston-ember@2x-499f088fb7868011a8ac431eda19436a.png" alt="Boston Ember logo" class="feature-list-item__image">
<div class="feature-list-item__content">
  <h3 class="t-headline-primary">Boston Ember</h3>
  <p class="t-body">Founded by DockYard, this is Boston’s premier Ember meetup. Eat, drink, and hack!</p>
  <a aria-label="learn more about Boston Ember" href="https://www.meetup.com/Boston-Ember-js/" class="t-body t-link t-link--icon-after">
    Learn more
    <svg viewBox="0 0 19 32" class="icon-svg icon-chevron-right" aria-label="Arrow pointing right"><path stroke-width="2.7826" stroke-miterlimit="4" stroke-linecap="square" stroke-linejoin="miter" d="M2.783 2.783l13.913 13.913-13.217 13.217"></path></svg>
  </a>
</div>
</div>
    </div>
    <h2 class="t-section-heading t-section-heading--bordered">DockYard <span aria-label="loves">♥</span> Open Source</h2>
    <div class="l-content-thin coding-community__open-source">
      <ul class="list-stack">
        <li class="list-stack__item l-list-stack__item--simple">
          <a href="https://github.com/DockYard/ember-service-worker" class="l-list-stack__item__link">
            <h2 class="t-button-heading">ember-service-worker</h2>
            <p class="t-body">A pluggable approach to Service Workers for Ember.js</p>
          </a>
        </li>
        <li class="list-stack__item l-list-stack__item--simple">
          <a href="https://github.com/DockYard/ember-one-way-controls" class="l-list-stack__item__link">
            <h2 class="t-button-heading">ember-one-way-controls</h2>
            <p class="t-body">A simple and consistent API to add form controls to your app</p>
          </a>
        </li>
        <li class="list-stack__item l-list-stack__item--simple">
          <a href="https://github.com/DockYard/eslint-plugin-ember-suave" class="l-list-stack__item__link">
            <h2 class="t-button-heading">eslint-plugin-ember-suave</h2>
            <p class="t-body">Linting rules to make your Ember code more “suave”</p>
          </a>
        </li>
      </ul>
      <p class="t-body"><a href="https://github.com/DockYard?utf8=%E2%9C%93&amp;q=ember&amp;type=&amp;language=javascript#org-repositories" class="t-link">… &amp; many other projects we support!</a></p>
    </div>
  </section>
  <div class="l-background-wrap-light">
      <section class="l-section case-study__blockquote">
        <div id="ember589" class="ember-view"><blockquote class="testimonial">
  <p class="t-testimonial-quote">“In terms of an Ember consultancy, there literally is no better shop than DockYard.
        (…) As a result we were able to stay on the bleeding edge of Ember updates with
          virtually no disruption to daily development operations.”</p>
  <cite class="t-testimonial-cite">
    <span class="testimonial__author">Hassan Abdel-Rahman</span>
    <span class="testimonial__position">Senior Software Developer</span>
    <span class="testimonial__company">McGraw-Hill Education</span>
  </cite>
</blockquote>
</div>
      </section>
    </div>
    <section class="narwin-banner">
    <div class="narwin-banner__grid l-section--slim">
      <div class="narwin-banner__item narwin-banner__item--headline">
        <h1 class="t-banner">Let’s talk about your Ember project</h1>
      </div>
      <div class="narwin-banner__item narwin-banner__item--image">
        <img src="~@/assets/img/orange_narwin_full-loop-matte-01e45b014c7dd99e4727b00629f12ac8.gif" alt="DockYard logo" class="narwin-banner__media">
      </div>
    </div>
  </section>
  <contactForm />
  </main>
</template>

<script>
import contactForm from '../components/contact-form.vue'
import latestPosts from '../components/latest-posts.vue'
// Only icon
import likeIcon from '../components/icons/like.vue'

export default {
  name: 'Ember',
  data () {
    return {
      cutId: [1],
      abilites: [
        {
          name: 'Full-stack projects',
          desc: 'Project management, design discovery, UX/UI, and engineering.',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 59" width="62" height="59" aria-label="Full-stack projects" class="project-description__figure__media"><g fill="currentColor" fill-rule="evenodd" transform="translate(0 -.17)"><path fill-rule="nonzero" d="M59.8 40.3c0-9.4-7.6-17-17-17-9.3 0-17 7.6-17 17s7.7 17 17 17c9.4 0 17-7.6 17-17zm1.7 0C61.5 50.6 53 59 42.8 59s-18.6-8.4-18.6-18.7c0-10.3 8.4-18.6 18.6-18.6 10.3 0 18.7 8.3 18.7 18.6z"></path><path fill-rule="nonzero" d="M47.8 19.2c0-9.4-7.6-17-17-17s-17 7.6-17 17c0 9.3 7.6 17 17 17s17-7.7 17-17zm1.6 0c0 10.2-8.3 18.6-18.6 18.6S12 29.4 12 19.2C12 9 20.6.5 31 .5S49.4 9 49.4 19.2z"></path><path fill-rule="nonzero" d="M35.6 40.3c0-9.4-7.6-17-17-17s-17 7.6-17 17 7.6 17 17 17 17-7.6 17-17zm1.6 0C37.2 50.6 29 59 18.6 59S0 50.5 0 40.2C0 30 8.3 21.7 18.6 21.7S37.2 30 37.2 40.3z"></path><circle cx="9.9" cy="36" r="1"></circle><circle cx="6.7" cy="30.3" r="1"></circle><circle cx="4.2" cy="39.3" r="1"></circle><circle cx="15.7" cy="32.7" r="1"></circle><circle cx="12.4" cy="27" r="1"></circle><circle cx="13.2" cy="41.7" r="1"></circle><circle cx="7.5" cy="45" r="1"></circle><circle cx="18.9" cy="38.4" r="1"></circle><circle cx="21.4" cy="29.4" r="1"></circle><circle cx="30.4" cy="31.9" r="1"></circle><circle cx="27.9" cy="40.9" r="1"></circle><circle cx="22.2" cy="44.2" r="1"></circle><circle cx="16.5" cy="47.4" r="1"></circle><circle cx="10.8" cy="50.7" r="1"></circle><circle cx="14" cy="56.4" r="1"></circle><circle cx="19.8" cy="53.2" r="1"></circle><circle cx="25.5" cy="49.9" r="1"></circle><circle cx="31.2" cy="46.6" r="1"></circle><circle cx="33.7" cy="37.6" r="1"></circle><path fill-rule="nonzero" d="M40.6 22L33 55.3l1 .2L41.3 22M47.7 22.8L37.7 58l.7.2 10-35.2M52.6 25.3L44.2 58l.8.2 8.4-32.7M58.4 31.4l-6.4 24h.8l6.4-23.8M33.3 25L27 49.2l1 .2 6-24.2"></path><circle cx="18.1" cy="23.7" r="1"></circle><circle cx="27.1" cy="26.2" r="1"></circle></g></svg>'
        },
        {
          name: 'Staff augmentation',
          desc: 'Extra horsepower to meet your project deadline.',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 66" width="49" height="66" aria-label="Staff augmentation" class="project-description__figure__media"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M1.754 26.18c-.413.733-1.53.44-1.53-.402v-.333C.224 12.155 11.272.785 24.54.785c13.268 0 24.316 11.37 24.316 24.66v.333c0 .842-1.117 1.135-1.53.402-1.37-2.432-4.233-3.728-7.085-3.132-2.55.534-4.53 2.47-5.11 4.91-.18.768-1.24.858-1.54.133-1.51-3.52-5.05-5.88-9.04-5.88-3.99 0-7.53 2.35-9.04 5.88-.31.73-1.36.64-1.55-.13-.58-2.44-2.55-4.37-5.11-4.91-2.85-.59-5.71.7-7.08 3.14zm7.42-4.734c2.523.527 4.595 2.157 5.706 4.335 2.06-3.18 5.67-5.2 9.66-5.2s7.6 2.02 9.66 5.21c1.11-2.18 3.183-3.81 5.706-4.33 2.653-.55 5.32.21 7.216 1.91-1.08-11.48-10.93-20.94-22.582-20.94-11.652 0-21.5 9.46-22.582 20.94 1.897-1.693 4.563-2.46 7.216-1.903z"></path><path d="M1.715 25.313l1.395 2.02-1.346.93-1.395-2.02M4.5 29.35l1.4 2.02-1.346.93-1.395-2.02m4.13 3.11l1.39 2.018-1.35.93-1.4-2.02m4.13 3.11l1.39 2.02-1.35.93-1.396-2.02m4.14 3.107l1.394 2.02-1.346.93-1.396-2.02m4.133 3.108l1.4 2.02-1.347.93-1.396-2.02m4.137 3.107l1.39 2.02-1.35.93-1.394-2.02m4.43 3.106l1.67 2.62-1.35.93-1.67-2.62m.907-4.44l-1.24-4.48 1.562-.48 1.246 4.483m-4.04-6.35l-.716-2.35 1.566-.48.72 2.35m-3-4.22l-.71-2.35 1.56-.48.716 2.34m-3-4.22l-.712-2.34 1.566-.48.717 2.342m-3-4.213L13.96 28l1.564-.48.353 1.155"></path><path fill-rule="nonzero" d="M20.738 65.626c-.452 0-.818-.366-.818-.818V56.61c0-.45.366-.817.818-.817h8.166c.45 0 .818.366.818.818v8.2c0 .45-.367.82-.818.82h-8.166zm7.348-1.636v-6.56h-6.53v6.56h6.53z"></path><path d="M47.365 25.313l-1.394 2.02 1.35.93 1.4-2.02m-4.14 3.107l-1.39 2.02 1.35.93 1.4-2.02m-4.14 3.11l-1.39 2.018 1.35.93 1.4-2.02M39 37.428l-1.396 2.02 1.348.93 1.395-2.02m-4.137 3.107l-1.395 2.02 1.348.93 1.395-2.02m-4.137 3.108l-1.39 2.02 1.35.93 1.4-2.02m-4.14 3.107l-1.39 2.02 1.35.93 1.4-2.02m-1.51-7.23l.718-2.347-1.563-.48-.714 2.348m3-4.21l.72-2.34-1.566-.48-.72 2.35m3-4.21l.72-2.34-1.567-.48-.72 2.35m3-4.214l.35-1.152-1.565-.48-.35 1.16M28.1 53.59l-1.67 2.62 1.345.93 1.67-2.62"></path><path fill-rule="nonzero" d="M24.014.976c-.092.076-.25.22-.465.428-.35.34-.74.75-1.16 1.227-1.18 1.36-2.36 3-3.46 4.93-3.13 5.5-5.01 12.22-5.01 20.21 0 .45.36.82.82.82.45 0 .82-.36.82-.82 0-7.7 1.8-14.15 4.79-19.4 1.04-1.83 2.16-3.38 3.27-4.66.38-.44.74-.82 1.06-1.13.18-.18.31-.29.37-.35.34-.29.39-.8.1-1.15-.29-.34-.81-.39-1.15-.1z"></path><path fill-rule="nonzero" d="M24.014 2.228c.06.052.19.168.377.35.32.31.68.685 1.07 1.128 1.12 1.276 2.23 2.827 3.27 4.66 2.99 5.254 4.79 11.702 4.79 19.402 0 .45.37.818.82.818.45 0 .82-.367.82-.818 0-7.99-1.87-14.717-5-20.212-1.1-1.93-2.28-3.57-3.46-4.925-.42-.47-.8-.88-1.15-1.22-.21-.21-.37-.35-.46-.43-.34-.29-.86-.24-1.15.1-.29.35-.243.86.1 1.15z"></path><path d="M28.192 50.067l1.245-4.48-1.564-.48-1.246 4.482"></path></g></svg>'
        },
        {
          name: 'Staff training',
          desc: 'Build team knowledge on the most recent Ember updates and best practices.',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 61" width="67" height="61" aria-label="Staff training" class="project-description__figure__media"><g fill="currentColor" fill-rule="nonzero"><path d="M33.66 10.7l9.12 36.5 1.6-.38-9.12-36.48c-.13-.52-.9 0-1.6 0-.77 0-1.48-.5-1.62.1l-9.1 36.38 1.6.4 9.12-36.53z"></path><path d="M42.26 28.07c-2.38 2.05-5.4 3.2-8.6 3.2-3.2 0-6.22-1.15-8.6-3.2L24 29.3c2.66 2.3 6.06 3.6 9.66 3.6 3.6 0 7-1.3 9.67-3.6l-1.07-1.23zM32.72 0v3.7h1.64V0"></path><path d="M32.62 29.58v4.97h1.64v-4.97M37.33 7.32c0 2.03-1.64 3.67-3.67 3.67-2.03 0-3.68-1.7-3.68-3.7 0-2.07 1.65-3.7 3.68-3.7 2.03 0 3.67 1.63 3.67 3.7"></path><path d="M36.52 7.32c0-1.58-1.28-2.86-2.86-2.86-1.58 0-2.86 1.28-2.86 2.86 0 1.57 1.28 2.85 2.86 2.85 1.58 0 2.86-1.28 2.86-2.85zm1.63 0c0 2.48-2 4.5-4.5 4.5-2.47 0-4.5-2.02-4.5-4.5 0-2.5 2.03-4.5 4.5-4.5 2.5 0 4.5 2 4.5 4.5zM11.58 22.16H56.1c.4 0 .7-.36.7-.8 0-.47-.3-.83-.7-.83H11.58c-.4 0-.7.36-.7.82 0 .45.3.8.7.8z"></path><path d="M65 21.9c0-2.92-2.36-5.27-5.26-5.27-.83 0-1.64.2-2.36.55v29.46c.75-.27 1.54-.4 2.36-.4 2.1 0 4 .93 5.26 2.43V21.9zM7.55 46.22c.8 0 1.6.14 2.36.4V17.2c-.7-.36-1.5-.55-2.3-.55-2.9 0-5.25 2.35-5.25 5.26v26.8c1.26-1.5 3.14-2.4 5.26-2.4zM.65 21.9c0-3.82 3.1-6.9 6.9-6.9 1.3 0 2.52.35 3.6 1 .24.15.4.42.4.7v31.24c0 .64-.7 1.03-1.25.7-.82-.5-1.77-.78-2.75-.78-2.9 0-5.26 2.36-5.26 5.26s2.3 5.26 5.2 5.26h52.2c2.9 0 5.24-2.35 5.24-5.26 0-2.9-2.37-5.26-5.27-5.26-1 0-1.93.27-2.75.78-.55.33-1.25-.06-1.25-.7V16.7c0-.28.16-.55.4-.7 1.08-.65 2.3-1 3.6-1 3.8 0 6.9 3.08 6.9 6.9v31.22c0 3.8-3.1 6.9-6.9 6.9H7.55c-3.8 0-6.9-3.1-6.9-6.9V21.9z"></path></g></svg>'
        },
        {
          name: 'Architectural reviews',
          desc: 'Rest easy knowing your code is working at its cost-effective best.',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 53" width="78" height="53" aria-label="Architectural reviews" class="project-description__figure__media"><g fill="currentColor"><path d="M2.05 42.63V1.73h62.42v21.34l1.64.57V.92c0-.45-.34-.82-.8-.82H1.24C.78.1.4.47.4.92v42.53c0 .45.38.82.83.82H65.3c.44 0 .8-.37.8-.82V28.8l-1.63-.52v14.35H2.05z"></path><path d="M77.7 29.6l-19.92-7.34-.56 1.54 19.9 7.32M56.33 44.27l1.96 7.82 1.56-.4-2.1-8.47c-.1-.36-.43-.62-.8-.62H9.53c-.37 0-.7.27-.8.63l-2.1 8.44 1.58.4 1.98-7.83h46.15z"></path><path d="M4.66 52.3h5.54v-1.64H4.66M56.32 52.3h5.54v-1.64h-5.54M8.07 9.4h7.42V7.74H8.04M17.67 9.4h17.87V7.74H17.67M16.25 13.86h12.9v-1.64h-12.9M31.2 13.86h8.63v-1.64H31.2M25.86 18.46h32.67v-1.64H25.86M8.07 23.3H22.6v-1.6H8.06M24.77 23.3h10.76v-1.6H24.77M16.25 27.78h5.8v-1.64h-5.8M24.1 27.78h15.73v-1.64H24.1M25.86 32.38h20.7v-1.63h-20.7M49.18 32.38h9.35v-1.63h-9.35M8.07 37.24H29.7V35.6H8.06M31.86 37.24h3.67V35.6h-3.67"></path></g></svg>'
        }
      ],
      whySection: [
        {
          title: 'Unparallelled expertise',
          desc: 'Whether it’s upgrading your team and your code or creating a new project from an idea, we’ve probably encountered—and solved—your current challenge.'
        },
        {
          title: 'Leading the community',
          desc: 'Conference presentations, meetups, and even creating our own events are just a few of the ways we’ve supported the Ember community.'
        },
        {
          title: 'Trusted by the biggest companies',
          desc: 'We’re very proud of the work we’ve done with well known Fortune 500 companies and ambitious startups.'
        },
        {
          title: 'We support the core of Ember',
          desc: 'DockYard is a key contributor to the Ember platform through various high level open source projects.'
        }
      ]
    }
  },
  components: {
    contactForm,
    likeIcon,
    latestPosts
  },
  created: function () {
    this.$root.title = 'Ember'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
