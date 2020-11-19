import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Inscription from "@/components/Inscription";
import Home from "@/components/Home";
import Visiter from "@/components/Visiter";

Vue.config.productionTip = false

Vue.use(VueRouter)

const router =  new VueRouter({
  mode: 'history',
  routes: [
    {path : '/', component : Home},
    {path : '/inscription', component: Inscription},
    {path: '/visiter', component: Visiter},
  ]
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
