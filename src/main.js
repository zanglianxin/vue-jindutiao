import Vue from 'vue'
import App from './App.vue'
import MyButton from './components/index'

Vue.config.productionTip = false
Vue.use(MyButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
