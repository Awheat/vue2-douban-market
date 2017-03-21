// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import VueLazyLoad from 'vue-lazyload'

import './assets/css/fonts.css'

//懒加载的默认图片 
import def_lazy_img from './assets/images/loading.gif'

//使用懒加载组件
Vue.use(VueLazyLoad,{
	loading: def_lazy_img
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
