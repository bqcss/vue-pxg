<template>
  <div>
  <button @click='showmock'>点击异步获取mock接口数据</button>
  <pre>{{pre}}</pre>
  <div>
    <img :src="img" alt="" v-for=' img of imgsList'>
    {{imgfirst}}
  </div>
  </div>
</template>

<script>

import api from "../api/api"
import mock from '../server/mock.js'
export default {
  data:function(){
    return {
      pre:" ",
      imgfirst:'',
      img:'',
      imgsList:[]
    }
  },
  methods:{
    showmock(){
        api.getLists(function(res){
          console.log(res[0].name)
        })
    }
  }
}
</script>