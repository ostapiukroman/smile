<template>
  <main class="capabilities capabilities--phoenix">
    <div class="l-background-wrap-light">
    <section class="l-section-landing">
      <header class="section__thin section__thin--align-top l-masthead capabilities__header">
        <h1 class="t-display">Let’s do Elixir & Phoenix, together</h1>
        <h2 class="t-sub-display-secondary">Hire the professionals. We’ve built the tools ourselves!</h2>
        <router-link :to="{ name: 'Contact' }" class="t-link-cta ember-view">Let’s build together</router-link>
      </header>
      <div class="section__wide">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 674 465" class="capabilities__header__media"><path d="M441.172 464.737C288.465 464.737.5 477.54.5 324.834S79.996 3.514 232.703 3.514s440.902-35.24 440.902 117.467c0 152.71-79.726 343.76-232.433 343.76zM153.738 217.105c3.403 0 6.16-2.758 6.16-6.16 0-3.403-2.757-6.162-6.16-6.162s-6.16 2.76-6.16 6.16c0 3.404 2.757 6.162 6.16 6.162zm-81.16 28.238c1.797 0 3.254-1.457 3.254-3.255 0-1.798-1.457-3.255-3.255-3.255-1.798 0-3.255 1.457-3.255 3.255 0 1.798 1.457 3.255 3.255 3.255zm75 29.71c1.797 0 3.254-1.457 3.254-3.254 0-1.8-1.457-3.26-3.255-3.26-1.798 0-3.255 1.45-3.255 3.25s1.457 3.25 3.255 3.25zm352.51-134.726c1.796 0 3.254-1.457 3.254-3.255 0-1.797-1.458-3.255-3.255-3.255-1.798 0-3.255 1.458-3.255 3.255 0 1.798 1.457 3.255 3.255 3.255zm117.376 55.64c1.797 0 3.255-1.457 3.255-3.255 0-1.797-1.46-3.255-3.26-3.255s-3.26 1.458-3.26 3.255c0 1.798 1.45 3.255 3.25 3.255zM283.994 408c1.43 0 2.587-1.158 2.587-2.587 0-1.43-1.15-2.587-2.58-2.587-1.43 0-2.59 1.158-2.59 2.587 0 1.43 1.16 2.588 2.59 2.588zm54.25-44.824c1.43 0 2.588-1.158 2.588-2.587 0-1.43-1.16-2.59-2.588-2.59-1.43 0-2.587 1.16-2.587 2.59 0 1.42 1.158 2.58 2.587 2.58zM405.21 63.67c3.402 0 6.16-2.76 6.16-6.162 0-3.403-2.758-6.16-6.16-6.16-3.403 0-6.162 2.757-6.162 6.16 0 3.402 2.76 6.16 6.162 6.16zm-10.516 16.196c1.58 0 2.86-1.282 2.86-2.862s-1.28-2.862-2.86-2.862c-1.58 0-2.862 1.28-2.862 2.862 0 1.58 1.28 2.862 2.862 2.862zm131.9 180.1c2.436 0 4.41-1.974 4.41-4.41 0-2.434-1.974-4.408-4.41-4.408-2.434 0-4.408 1.974-4.408 4.41 0 2.434 1.974 4.408 4.41 4.408zm7.526 11.59c1.13 0 2.048-.916 2.048-2.047 0-1.14-.917-2.05-2.048-2.05-1.13 0-2.048.91-2.048 2.05 0 1.13.917 2.04 2.048 2.04zm-363.21-93.73c1.057 0 1.913-.857 1.913-1.913S171.967 174 170.91 174c-1.055 0-1.91.857-1.91 1.913s.855 1.912 1.91 1.912z"></path><path fill="#FFF" d="M268.463 266.604c-7.466 1.944-19.07 3.694-24.474-.65 6.25 6.58 15.09 9.33 26.02 7.345 7.79-1.43 13.14-4.74 21.17-2.11 2.9.95 5.65 2.38 7.8 5.38-5.03-1.68-15.54-5.74-22.08.07 9.62-4.95 22.64 3.84 31.31 6.44 9.71 2.73 19.45.97 28.12-5.61 3.93-2.99 8.16-7.45 15.7-7.33-9.75-.16-14.46 3.97-20.92 5.09-6.12 1.25-12.86-.307-18.37-2.63-7.38-3.128-11.65-5.86-18.21-8.226-9.16-3.3-17.6-.004-26.09 2.203zm-23.583-11.93c-5.383 1.162-8.636 2.85-13.885 7.154 0 0 3.168-1.162 6.27-1.185 4.75-.035 6.286 2.842 14.725 3.858 6.4.78 15.333-3.16 20.61-6.46 0 0-5.584 2.35-11.883-.41-4.338-1.9-10.455-4.11-15.837-2.95zm80.59 14.328c13.99 1.014 37.424-8.044 37.424-8.044.307 2.296-7.142 7.477-7.08 7.478 12.778.977 31.166-14.993 42.23-37.89 5.516-11.407 8.787-22.784 9.592-32.468.277-2.215.593-4.28.513-6.184 11.23-5.65 42.42-22.81 45.27-24.485 1.13-.67 2.7-1.15 2.7-1.55 0-.06-.78-.14-.78-.18l-1.98-.46c-.69.05-1.64.23-2.84.58-2.6.744-30.61 9.09-45.44 13.71l-2.6.815c-2.28-2.24-6.67-5.81-13.42-8.325-3.17-1.18-6.86-2.126-11.09-2.605-17.24-1.93-27.25 11.305-34.33 29.78-2.83 7.386-8.08 19.2-11.12 25.737-3.796 5.8-14.68 14.353-22.69 15.607-2.438.38-4.928.66-7.44.873 2.63 1.55 5.47 2.663 8.99 2.74 3.984.075 9.87-1.187 11.6-3.103-.51 1.37-3.18 17.756-19.75 10.37 4.92 1.24 11.392-.305 11.104-4.234-1.496.62-2.575.814-4.405 1.034-9.15 1.11-26.93-14-44.36.13-3.847 3.12-5.477 5.97-5.57 6.14.226-.2 4.403-3.85 19.863-1.57-1.517 1.19-5.97 4.81-7.41 6.72 4.16-2.22 11.653-3.622 17.58-2.12 13.41 3.416 23.824 10.64 35.41 11.478zm46.2-44.4c-.946 2.492-6.528 6.74-8.635 9.178-1.232 1.42-2.24 2.85-3.202 4.274-.047.07-.088.14-.136.208-.336.505-.67 1.01-1.006 1.51-.11.175-.23.346-.35.516-.17.244-.34.49-.51.728-.51.72-1.02 1.413-1.54 2.083-.1.13-.21.27-.32.4-19.15 24.57-40.55 16.8-40.55 16.8 12.95 1.28 21.02-16.69 31.97-29.35 0 0 0-.01.01-.01 1.84-2.53 3.74-4.94 6.5-7.23 6.85-5.66 19.51-3.77 17.78.87zm7.776-27.456c-2.836-.04-5.096-2.38-5.047-5.22.05-2.84 2.38-5.11 5.23-5.06 2.83.056 5.1 2.396 5.05 5.236-.05 2.84-2.39 5.11-5.24 5.044z"></path></svg>
      </div>
    </section>
    <section class="l-section-vanilla project-description">
      <h2 class="project-description__heading t-capabilities-heading">We welcome your most ambitious Elixir & Phoenix project</h2>
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
    <h2 class="t-section-heading t-section-heading--bordered">We love spreading our Elixir &amp; Phoenix knowledge</h2>
  <div class="l-latest-news__items">
        <a href="https://youtu.be/zbbK0WOvWII" aria-label="Conference talk: 'ElixirConf 2017'" class="latest-news__items__item">
  <div class="latest-news__items__item__header">
    <h3 class="t-eyebrow">ElixirConf 2017</h3>
    <h4 class="t-card-heading">Chris McCord – Keynote: State of Phoenix</h4>
  </div>
    <img src="~@/assets/img/future.svg" class="latest-news__items__item__img">

  <p class="t-link t-link--light t-link--icon-after latest-news__items__item__cta">
      Watch the talk
    <svg viewBox="0 0 19 32" aria-label="Arrow pointing right" class="icon-svg icon-chevron-right"><path stroke-width="2.7826" stroke-miterlimit="4" stroke-linecap="square" stroke-linejoin="miter" d="M2.783 2.783l13.913 13.913-13.217 13.217"></path></svg>
  </p>
</a>

        <a href="https://youtu.be/fjD7x54myMs" aria-label="Conference talk: 'GOTO Chicago 2017'" class="latest-news__items__item">
  <div class="latest-news__items__item__header">
    <h3 class="t-eyebrow">GOTO Chicago 2017</h3>
    <h4 class="t-card-heading">Brian Cardarella – Elixir: The only sane choice in an insane world</h4>
  </div>
    <img src="https://assets.dockyard.com/assets/images/conference/Brian-0f2a644755fa6138145c5c80fbe53370.jpg" class="latest-news__items__item__img">

  <p class="t-link t-link--light t-link--icon-after latest-news__items__item__cta">
      Watch the talk
    <svg viewBox="0 0 19 32" aria-label="Arrow pointing right" class="icon-svg icon-chevron-right"><path stroke-width="2.7826" stroke-miterlimit="4" stroke-linecap="square" stroke-linejoin="miter" d="M2.783 2.783l13.913 13.913-13.217 13.217"></path></svg>
  </p>
</a>

        <a href="https://youtu.be/QRdZDcYq9-Y" aria-label="Conference talk: 'Lonestar ElixirConf 2017'" class="latest-news__items__item">
  <div class="latest-news__items__item__header">
    <h3 class="t-eyebrow">Lonestar ElixirConf 2017</h3>
    <h4 class="t-card-heading">Nico Mihalich – Leveling up your Phoenix Projects with OTP</h4>
  </div>
    <img src="https://assets.dockyard.com/assets/images/conference/Nico-23ba716e8dda0d88f1c7a2e3186cd415.jpg" class="latest-news__items__item__img">

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
      <router-link :to="{ name: 'Category', params: { slug: 'elixir', page_id: 1 } }" class="t-link ember-view">Elixir</router-link>
       and 
      <router-link :to="{ name: 'Category', params: { slug: 'phoenix', page_id: 1 } }" class="t-link ember-view">Phoenix</router-link>
    </p>
  </div>
  <section class="l-section coding-community l-section--center-heading">
    <div class="l-content-thin coding-community__intro">
      <h3 class="t-body-heading">We’re in the Elixir &amp; Phoenix community, too!</h3>
      <p class="t-body">We’re proud to announce that we’re a <a href="https://elixirconf.com/" class="t-link">Platinum sponsor of ElixirConf 2017</a>!</p>
    </div>
    <div class="l-grid-halves l-grid-halves--mobile-centered l-content-medium coding-community__cards">
      <div id="ember723" class="grid__item feature-list-item ember-view"><img src="https://assets.dockyard.com/assets/images/phoenix-consulting/lonestar@2x-ebe98b6c4314c4d81a76724537262278.png" alt="Lonestar Elixir logo" class="feature-list-item__image">
<div class="feature-list-item__content">
  <h3 class="t-headline-primary">Lonestar Elixir</h3>
  <p class="t-body">Listen to DockYard CEO Brian Cardarella on Holistically built and tested APIs.</p>
  <a aria-label="learn more about Lonestar Elixir" href="http://lonestarelixir.com/" class="t-body t-link t-link--icon-after">
    Learn more
    <svg viewBox="0 0 19 32" class="icon-svg icon-chevron-right" aria-label="Arrow pointing right"><path stroke-width="2.7826" stroke-miterlimit="4" stroke-linecap="square" stroke-linejoin="miter" d="M2.783 2.783l13.913 13.913-13.217 13.217"></path></svg>
  </a>
</div>
</div>

      <div id="ember724" class="grid__item feature-list-item ember-view"><img src="https://assets.dockyard.com/assets/images/phoenix-consulting/boston-elixir@2x-7e92629b7c5688bbee66497023ab592b.png" alt="Boston Elixir logo" class="feature-list-item__image">
<div class="feature-list-item__content">
  <h3 class="t-headline-primary">Boston Elixir</h3>
  <p class="t-body">Our DockYard sponsored monthly event in Boston featuring guest speakers.</p>
  <a aria-label="learn more about Boston Elixir" href="https://www.meetup.com/Boston-Elixir/" class="t-body t-link t-link--icon-after">
    Learn more
    <svg viewBox="0 0 19 32" class="icon-svg icon-chevron-right" aria-label="Arrow pointing right"><path stroke-width="2.7826" stroke-miterlimit="4" stroke-linecap="square" stroke-linejoin="miter" d="M2.783 2.783l13.913 13.913-13.217 13.217"></path></svg>
  </a>
</div>
</div>

      <div id="ember725" class="grid__item feature-list-item ember-view"><img src="https://assets.dockyard.com/assets/images/phoenix-consulting/elixirconf@2x-4c786319a0db8ba94cfc5ca9b18544ac.png" alt="ElixirConf EU logo" class="feature-list-item__image">
<div class="feature-list-item__content">
  <h3 class="t-headline-primary">ElixirConf EU</h3>
  <p class="t-body">DockYarder Chris McCord to provide a keynote on the state of Phoenix.</p>
  <a aria-label="learn more about ElixirConf EU" href="http://www.elixirconf.eu/" class="t-body t-link t-link--icon-after">
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
          <a href="http://www.phoenixframework.org" class="l-list-stack__item__link">
            <h2 class="t-button-heading">The Phoenix Framework</h2>
            <p class="t-body">DockYard is the primary financial sponsor for Phoenix. We also employ its creator, Chris McCord!</p>
          </a>
        </li>
        <li class="list-stack__item l-list-stack__item--simple">
          <a href="https://github.com/DockYard/inquisitor" class="l-list-stack__item__link">
            <h2 class="t-button-heading">inquisitor</h2>
            <p class="t-body">Easily build composable queries for Ecto</p>
          </a>
        </li>
        <li class="list-stack__item l-list-stack__item--simple">
          <a href="https://github.com/DockYard/elixir-mail" class="l-list-stack__item__link">
            <h2 class="t-button-heading">elixir-mail</h2>
            <p class="t-body">Build composable mail messages</p>
          </a>
        </li>
      </ul>
      <p class="t-body"><a href="https://github.com/DockYard?utf8=%E2%9C%93&amp;q=&amp;type=&amp;language=elixir#org-repositories" class="t-link">… &amp; many other projects we support!</a></p>
    </div>
  </section>
  <div class="l-background-wrap-light">
      <section class="l-section case-study__blockquote">
        <div id="ember726" class="ember-view"><blockquote class="testimonial">
  <p class="t-testimonial-quote">“Working with DockYard was a great experience. Their extensive knowledge
            in Phoenix and Elixir helped level up our team and we look forward to future engagements.”</p>
  <cite class="t-testimonial-cite">
    <span class="testimonial__author">T.S. Lim</span>
    <span class="testimonial__position">CTO</span>
    <span class="testimonial__company">Tribe Learn Inc.</span>
  </cite>
</blockquote>
</div>
      </section>
    </div>
<section class="narwin-banner">
    <div class="narwin-banner__grid l-section--slim">
      <div class="narwin-banner__item narwin-banner__item--headline">
        <h1 class="t-banner">Let’s talk about your Elixir &amp; Phoenix project</h1>
      </div>
      <div class="narwin-banner__item narwin-banner__item--media">
        <img src="https://assets.dockyard.com/assets/images/phoenix-consulting/purple_narwin_full-loop-matte-169aba520781f634192e3b65dc6da54c.gif" alt="DockYard logo" class="narwin-banner__media">
      </div>
    </div>
  </section>
  <contactForm />
  </main>
</template>

<script>
import contactForm from '../components/contact-form.vue'
import latestPosts from '../components/latest-posts.vue'
import likeIcon from '../components/icons/like.vue'

export default {
  name: 'Phoenix-consulting',
  data () {
    return {
      cutId: [8, 9],
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
    this.$root.title = 'Phoenix Consulting'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
