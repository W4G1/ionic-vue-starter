import Vue from 'vue'
import Ionic from '@ionic/vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Ionic)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
