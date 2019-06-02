import Vue from 'vue'
import 'es6-promise/auto' // Promise 폴리필
import App from './App'
import router from './router'
import store from './store' // Vuex 스토어 인스턴스 임포트

// Vue.config.productionTip = false

Vue.config.productionTip = process.env.NODE_ENV === 'production'

/* eslint-disable */
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store, // 임포트한 스토어 인스턴스를 'store' 옵션으로 지정
    render: h => h(App)
})