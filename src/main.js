import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App.vue'
import VueRouter from 'vue-router'
import Overview from './components/Overview.vue'
import SelfTasks from './components/SelfTasks.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Trips from './components/Trips.vue'
import '../semantic/dist/semantic.min.css'
import '../semantic/dist/semantic.min.js'
import vmodal from 'vue-js-modal'

Vue.use(VueRouter);
Vue.use(vmodal)
Vue.use(VueFire)

const routes = [
  {
    path: '/',
    redirect: '/overview'
  },
  {
    path: '/overview',
    component: Overview,
    props: true
  },
  {
    path: '/tasks',
    component: SelfTasks,
    props: true
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/trips',
    component: Trips
  }
]

const router = new VueRouter({routes});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
