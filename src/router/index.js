import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import services from '@/pages/services'
import work from '@/pages/work'
import whyDockyard from '@/pages/why-dockyard'
import blog from '@/pages/blog'
import contact from '@/pages/contact'
import press from '@/pages/press.vue'
import terms from '@/pages/terms-of-service-and-privacy-policy.vue'

// subpages
// ---------------------------
// capabilities
import designConsulting from '@/pages/subpages/capabilities/design-consulting.vue'
import progressiveWebApps from '@/pages/subpages/capabilities/progressive-web-apps.vue'
import ember from '@/pages/subpages/capabilities/ember.vue'
import phoenixConsulting from '@/pages/subpages/capabilities/phoenix-consulting.vue'
// services
import subService from '@/pages/subpages/services/service.vue'
// work
import subWork from '@/pages/subpages/capabilities/work.vue'
// blog post
import blogPost from '@/pages/subpages/company/blog-post.vue'
// Authors post
import authors from '@/pages/subpages/company/authors.vue'
// Categories post
import categories from '@/pages/subpages/company/categories.vue'
// Press
import pressReleases from '@/pages/subpages/company/pressReleases.vue'
import pressRelease from '@/pages/subpages/company/pressRelease.vue'

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
