import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import App from './App.vue'
import VueGtag from "vue-gtag"

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: {id: "UA-65671531-2" }
})

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
