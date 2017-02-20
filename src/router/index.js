import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import VuxTest from 'components/vuxTest'
import axiosTest from 'components/axiosTest'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/hello', name: 'hello', component: Hello },
    {path: '/vuxtest', name: 'vuxtest', component: VuxTest },
    {path: '/axiostest', name: 'vuxtest', component: axiosTest },
  ]
})
