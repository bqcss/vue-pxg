import Vue from 'vue'
import Router from 'vue-router'
import home from 'page/home'
import Lists from 'page/Lists'
import List from 'page/List'
import Listinfo from 'page/Listinfo'
import sw from 'page/sw'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home', component: home },
    {path: '/Lists', name: 'Lists', component: Lists },
    {path: '/List', name:"List" ,component: List},
    {path: '/sw', name:"sw" ,component: sw},
    // {path: '/List/:id',component:List,
    //   children:[
    //    { path:'',
    //       component:home,

    //     },
    //     { path:'Listinfo',
    //       component:Listinfo,
    //       name:'aa'
    //     },
    //     { path:'Lists',
    //       component:Lists,
    //       name:'bb'
    //     }
    //   ]
    // },
  ]
})
