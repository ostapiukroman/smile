<template>
<footer class="l-footer l-background-wrap-light">
  <div class="l-footer-nav">
    <div class="footer__cta">
      <h2 class="t-button-heading">Like what you see?</h2>
      <router-link :to="{ name: 'Contact' }" class="t-link-cta ember-view">Let’s build together</router-link>
    </div>
    <nav class="footer__nav">
      <div class="footer__links">
        <div class="footer__link-group">
          <h3 class="t-list-heading">Services</h3>
          <ul>
            <li v-for="item in services" class="footer__link-group__link">
              <router-link :to="{ name: 'subServices', params: { slug: item.slug } }" class="footer__nav__link ember-view">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>

        <div class="footer__link-group">
          <h3 class="t-list-heading">Capabilities</h3>
          <ul>
            <li class="footer__link-group__link" v-for="item in links.capabilities">
              <router-link :to="{ name: item.slug }" class="footer__nav__link ember-view">{{ item.name }}</router-link>
            </li>
          </ul>
        </div>

        <div class="footer__link-group">
          <h3 class="t-list-heading">Company</h3>
          <ul>
            <li class="footer__link-group__link">
              <router-link :to="{ name: 'press' }" class="footer__nav__link ember-view">Press</router-link>
            </li>
            <li class="footer__link-group__link">
              <router-link :to="{ name: 'Blog', params: { page_id: 1 } }" class="footer__nav__link ember-view">Blog</router-link>
            </li>
            <li class="footer__link-group__link">
              <router-link :to="{ name: 'Contact' }" class="footer__nav__link ember-view">Join us</router-link>
            </li>
          </ul>
        </div>

        <div class="footer__link-group">
          <h3 class="t-list-heading">Connect</h3>
          <ul>
            <li v-for="item in links.connect" class="footer__link-group__link">
              <a :href="item.link" aria-label="DockYard’s GitHub" target="_blank" rel="noopener" class="footer__nav__link">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div class="l-footer-legal">
    <p class="t-footer">© 2017 DockYard, Inc. All rights reserved.</p>
    <p class="t-footer"><a href="/terms-of-service-and-privacy-policy" id="ember593" class="footer__nav__link ember-view">Terms of Service and Privacy Policy</a></p>
  </div>
</footer>
</template>

<script>
import pages from '../../resource/services.json'
export default {
  name: 'main-footer',
  data () {
    return {
      services: pages.services,
      links: {
        capabilities: [
          {
            name: 'Design',
            slug: 'designConsulting'
          },
          {
            name: 'Ember',
            slug: 'ember'
          },
          {
            name: 'Elixir / Phoenix',
            slug: 'phoenix-consulting'
          },
          {
            name: 'Progressive Web Apps',
            slug: 'progressiveWebApps'
          }
        ],
        connect: [
          {
            name: 'GitHub',
            link: 'https://github.com/dockyard'
          },
          {
            name: 'Twitter',
            link: 'https://twitter.com/dockyard'
          },
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/company/dockyard'
          },
          {
            name: 'Dribbble',
            link: 'https://dribbble.com/dockyard'
          }
        ]

      }
    }
  }
}
</script>

<style>
</style>