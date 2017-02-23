<template>
  <div>
    <h2>我想做成类似app界面的小图标</h2>
      <flexbox wrap="wrap" :gutter='0' style='text-align:center;'>
        <flexbox-item v-for='icon of listsItems' :span='1/4'>
        <router-link to='/List'>
          <div> <img :src="icon.img" alt="" class="w50"> </div>
          <div>{{icon.ti}}</div>
        </router-link>
        </flexbox-item>
      </flexbox>
        <h2>User {{ $route.params.id }}</h2>
  </div>
</template>

<script>
import {Flexbox,FlexboxItem} from 'vux'

const listsItems=[
    {
      url: 'javascript:',
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png',
      ti: '小鲜肉'
    },
    {
      url: 'javascript:',
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t4042/144/2524267687/15532/439bc863/58aae9ccN543da263.png',
      ti: '老腊肉'
    },
    {
      url: 'javascript:',
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3211/295/1824792746/12749/a74e2524/57d543ebN25337ef2.png',
      ti: '水果'
    },
    {
      url: 'javascript:',
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png',
      ti: '生鲜'
    },
    {
      url: 'javascript:',
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3118/92/1836879034/12255/981e942a/57d54204N32b71c87.png',
      ti: '电器'
    },
    {
      url: 'javascript:',
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png',
      ti: '生活用品'
    },
    {
      url: 'javascript:',
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t4042/144/2524267687/15532/439bc863/58aae9ccN543da263.png',
      ti: '老腊肉'
    },
    {
      url: 'javascript:',
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3211/295/1824792746/12749/a74e2524/57d543ebN25337ef2.png',
      ti: '水果'
    },
    {
      url: 'javascript:',
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png',
      ti: '生鲜'
    },
    {
      url: 'javascript:',
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3118/92/1836879034/12255/981e942a/57d54204N32b71c87.png',
      ti: '电器'
    },
]

export default {
  data(){
    return {
      listsItems
    }
  },
  components:{
    Flexbox,FlexboxItem
  }

}
</script>
<style lang="scss" >
  img.w50{
    width: 50%;
    max-width: 90px;
  }
</style>
