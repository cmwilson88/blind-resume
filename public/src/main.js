import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store';
import axios from 'axios';
import VueAxios from 'vue-axios'

// VueRouter
import VueRouter from 'vue-router'
import {routes} from './routes/routes.js'
Vue.use(VueRouter)

const router = new VueRouter({
	routes: routes
})

// VueQuillEditor
import VueQuillEditor from 'vue-quill-editor'
Vue.use(VueQuillEditor)

// Vue Paginate
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)

export const EventBus = new Vue();

// Vue Material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial)

Vue.use(VueAxios, axios)

Vue.material.registerTheme('about', {
  primary: {
    color: 'light-blue',
    hue: 'A200',
    textColor: 'white',
  }
})

Vue.material.registerTheme('add', {
  primary: {
    color: 'light-blue',
    hue: '900',
    textColor: 'white'
  },
    accent: {
    color: 'green',
    textColor: 'white'
  }
  })

new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})
