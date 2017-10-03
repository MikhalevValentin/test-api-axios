// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

Vue.use(VueRouter)

import Hello from './components/Hello'
import Example from './components/Example'
import Empire from './components/Empire'
import People from './components/People'
import Film from './components/Film'

const routes = [
	{ path: '/', component: Hello },
	{ path: '/example', component: Example },
	{ path: '/empire', component: Empire },
  { path: '/people', component: People },
  { path: '/film', component: Film }
]

const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
