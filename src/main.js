import Vue from 'vue'
import App from './App.vue'
import router from './router'
const axios = require('axios')
const { APIKEY } = require('../config.json')

// Set default options for axios requests
axios.interceptors.request.use(
  config => {
    return {
      ...config,
      headers: {
        Authorization: APIKEY
      }
    }
  },
  error => Promise.reject(error)
)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
