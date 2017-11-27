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
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
