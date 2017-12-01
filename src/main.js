// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// styles
import './assets/style/style1.less'
import './assets/style/style2.less'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    title: '...'
  },
  router,
  template: '<App/>',
  components: { App },
  watch: {
    '$route': 'getTitle',
    title: 'getTitle'
  },
  created: function () {
    this.getTitle()
  },
  methods: {
    getTitle () {
      window.document.title = this.title
    }
  }
})
