import Vue from 'vue'
import Router from 'vue-router'
import home from 'page/home'
import Lists from 'page/Lists'
import List from 'page/List'
import Listinfo from 'page/Listinfo'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home', component: home },
    {path: '/Lists', name: 'Lists', component: Lists },
    {path: '/List',  component: List},
    {path: '/List/:id', component:List,
      children:[
      {path:'', component:Listinfo},
        { path:'Listinfo',
          component:Listinfo,
          name: 'Listinfo'
        },
        { path:'Lists',
          component:Lists,
          name:'LLists'
        }
      ]
    },
  ]
})
