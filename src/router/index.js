import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import services from '../pages/services'
import work from '../pages/work'
import whyDockyard from '../pages/why-dockyard'
import blog from '../pages/blog'
import contact from '../pages/contact'
import designConsulting from '../pages/design-consulting.vue'
import progressiveWebApps from '../pages/progressive-web-apps.vue'
import press from '../pages/press.vue'
import pressReleases from '../pages/pressReleases.vue'
import pressRelease from '../pages/pressRelease.vue'
import terms from '../pages/terms-of-service-and-privacy-policy.vue'
import ember from '../pages/ember.vue'
import phoenixConsulting from '../pages/phoenix-consulting.vue'

// subpages
// ---------------------------
// services
import subService from '../pages/subpages/service.vue'
// work
import subWork from '../pages/subpages/work.vue'
// blog post
import blogPost from '../pages/subpages/blog-post.vue'
// Authors post
import authors from '../pages/subpages/authors.vue'
// Categories post
import categories from '../pages/subpages/categories.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/services',
      name: 'Services',
      component: services
    },
    {
      path: '/services/:slug',
      name: 'subServices',
      component: subService
    },
    {
      path: '/work',
      name: 'Work',
      component: work
    },
    {
      path: '/work/:slug',
      name: 'subWork',
      component: subWork
    },
    {
      path: '/why-dockyard',
      name: 'WhyDockyard',
      component: whyDockyard
    },
    {
      path: '/blog/page/:page_id',
      name: 'Blog',
      component: blog,
      children: [
        {
          path: '/blog/category',
          name: 'Categories',
          component: categories
        },
        {
          path: '/blog/authors',
          name: 'Authors',
          component: authors
        },
        {
          path: '/blog/category/:slug/:page_id',
          name: 'Category'
        },
        {
          path: '/blog/authors/:slug/:page_id',
          name: 'Author'
        }
      ]
    },
    {
      path: '/blog/:slug',
      name: 'blogPosts',
      component: blogPost
    },
    {
      path: '/contact/hire-us',
      name: 'Contact',
      component: contact
    },
    {
      path: '/design-consulting',
      name: 'designConsulting',
      component: designConsulting
    },
    {
      path: '/progressive-web-apps',
      name: 'progressiveWebApps',
      component: progressiveWebApps
    },
    {
      path: '/press',
      name: 'press',
      component: press
    },
    {
      path: '/press/releases',
      name: 'pressReleases',
      component: pressReleases
    },
    {
      path: '/press/releases/:slug',
      name: 'pressRelease',
      component: pressRelease
    },
    {
      path: '/terms-of-service-and-privacy-policy',
      name: 'terms-of-service-and-privacy-policy',
      component: terms
    },
    {
      path: '/ember-consulting',
      name: 'ember',
      component: ember
    },
    {
      path: '/phoenix-consulting',
      name: 'phoenix-consulting',
      component: phoenixConsulting
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
