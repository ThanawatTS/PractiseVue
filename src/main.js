import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Vuetify, {
  iconfont: 'mdi'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
