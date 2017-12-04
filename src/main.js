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
    },
    findImgWay (arrayClients, imageClass) {
      arrayClients.forEach(function (array) {
        // Check if image
        if (array.logo.search('</svg>') > 0) { return }
        // Check to if this way
        if (array.logo.search('src="/') < 0) { return }

        var imgWay = array.logo.substring(array.logo.search('src="') + 6)
        imgWay = imgWay.substring(0, imgWay.search('"'))
        // eslint-disable-next-line
        var imgClass = (array.logo.search('class="') >= 0) ? array.logo.substring(array.logo.search('class="') + 8) : ''
        imgClass = imgClass.substring(0, imgClass.search('"'))
        array.logo = '<img src="' + require('@/' + imgWay) + '" class="' + imageClass + ' ' + imgClass + '">'
      })
      return arrayClients
    }
  }
})
