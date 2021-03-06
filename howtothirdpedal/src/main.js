import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import App from './App.vue'
import VueGtag from "vue-gtag"
import Unicon from 'vue-unicons'
import { uniRedditAlienAlt } from 'vue-unicons/src/icons'

Vue.config.productionTip = false

Unicon.add([uniRedditAlienAlt])
Vue.use(Unicon, VueGtag, {
  config: {id: "UA-65671531-2" }
})

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
