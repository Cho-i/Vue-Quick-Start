import Vue from 'vue'
//import App from './AppNamed.vue'
import App from './AppScoped.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
