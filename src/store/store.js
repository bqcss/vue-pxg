import Vue from 'vue'
import Vuex from 'vuex'
//import comm from './modules/comm'
import home from './modules/home'
import proinfo from './modules/info,js'

Vue.use(Vuex);

const store = new Vuex.Store({
  //state,getters,mutations,actions,
    modules: {
        home,proinfo
    },
    strict: process.env.NODE_ENV !== 'production', //是否开启严格模式
});


export default store
