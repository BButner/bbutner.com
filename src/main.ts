import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
import '../node_modules/vue-code-highlight/themes/window.css'
import '../node_modules/vue-code-highlight/themes/prism-tomorrow.css'
import VueCodeHightlight from 'vue-code-highlight'

Vue.config.productionTip = false

Vue.use(VueCodeHightlight)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
