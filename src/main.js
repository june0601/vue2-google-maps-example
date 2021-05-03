import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'you are google api key',
    libraries: 'places',
    v: '3.26',
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')


