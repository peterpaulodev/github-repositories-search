import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createProvider } from './vue-apollo'
import babelPolyfill from 'babel-polyfill'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  babelPolyfill,
  render: h => h(App)
}).$mount('#app')
