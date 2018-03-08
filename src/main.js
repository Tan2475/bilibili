import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'

Vue.prototype.$http=axios.create({
  baseURL:"http://localhost:8080/"
})

new Vue({
  el: '#app',
  router,
  components:{App},
  template:'<App/>'
})
