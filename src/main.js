import Vue from 'vue'
import App from './App.vue'

// import Ninjas from './Ninjas.vue'

/* globally registered */
// Vue.component('ninjas', Ninjas);

new Vue({
  el: '#app',
  render: h => h(App)
})
