import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import services from '../pages/services'
import work from '../pages/work'
import whyDockyard from '../pages/why-dockyard'
import blog from '../pages/blog'
import contact from '../pages/contact'

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
// Author post
import author from '../pages/subpages/author.vue'
// Categories post
import categories from '../pages/subpages/categories.vue'
// Category post
import category from '../pages/subpages/category.vue'

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
      path: '/blog/:page_id',
      name: 'Blog',
      component: blog
    },
    {
      path: '/blog/authors',
      name: 'Authors',
      component: authors
    },
    {
      path: '/blog/authors/:slug',
      name: 'Author',
      component: author
    },
    {
      path: '/blog/category',
      name: 'Categories',
      component: categories
    },
    {
      path: '/blog/category/:slug',
      name: 'Category',
      component: category
    },
    {
      path: '/contact/hire-us',
      name: 'Contact',
      component: contact
    },
    {
      path: '/blog/:slug',
      name: 'blogPosts',
      component: blogPost
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
