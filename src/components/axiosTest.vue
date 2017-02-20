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

import axios from "axios"
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
     axios.get('/index/getList')
    .then((response) =>{
      // console.log(response.request.response);
     // this.pre=(JSON.parse(response.request.response).data.code)
     // this.imgfirst=JSON.parse(response.request.response).data.data[0].imgGrounp[0]
     this.imgsList=JSON.parse(response.request.response).data.data[0].imgGrounp
    })
    .catch(function (response) {
      console.log(response);
    });

    }
  }
}
</script>