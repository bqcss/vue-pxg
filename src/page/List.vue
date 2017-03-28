<template>
 <scroller lock-x scrollbar-y  @on-scroll="onScroll" use-pulldown use-pullup @on-pullup-loading="loadMore" ref="scroller" :pulldown-config="myfig">
    <div>
    <h3>scrollTop:{{scrollTop}}</h3>
      <label><input type="checkbox"  v-model="styleObj.Style" >{{styleObj.Style?"竖排":"横排"}}</label>
      <v-items :Lists='listsItems' :vvshow='styleObj.Style?"vertical":""' :Cs='styleObj.Style'></v-items>
      <h3>另一种排版</h3>
      <!-- <h-items :Lists='listsItems' ></h-items> -->
      <p style="text-align:center" v-for='i in nn'>新增加了{{i}}个</p>
    </div>
    </scroller>
</template>

<script>
import {Scroller} from 'vux'
import HItems from '../components/HItems'
import VItems from '../components/VItems'
const listsItems=[
    {
      href: 'javascript:',
      tag:'买一送一',
      title:'主要标题',
      subTitle:'小标题小标题小标题小标题小标题小标题',
      price:40,
      subPrice:50,
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png',
      ti: '小鲜肉',
    },    {
      href: 'javascript:',
      tag:'买一送一',
      title:'主要标题',
      subTitle:'小标题小标题小标题小标题小标题小标题',
      price:40,
      subPrice:50,
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png',
      ti: '小鲜肉',
    },    {
      href: 'javascript:',
      tag:'买一送一',
      title:'主要标题',
      subTitle:'小标题小标题小标题小标题小标题小标题',
      price:40,
      subPrice:50,
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png',
      ti: '小鲜肉',
    },    {
      href: 'javascript:',
      tag:'买一送一',
      title:'主要标题',
      subTitle:'小标题小标题小标题小标题小标题小标题',
      price:40,
      subPrice:50,
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png',
      ti: '小鲜肉',
    },    {
      href: 'javascript:',
      tag:'买一送一',
      title:'主要标题',
      subTitle:'小标题小标题小标题小标题小标题小标题',
      price:40,
      subPrice:50,
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png',
      ti: '小鲜肉',
    },    {
      href: 'javascript:',
      tag:'买一送一',
      title:'主要标题',
      subTitle:'小标题小标题小标题小标题小标题小标题',
      price:40,
      subPrice:50,
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png',
      ti: '小鲜肉',
    },    {
      href: 'javascript:',
      tag:'买一送一',
      title:'主要标题',
      subTitle:'小标题小标题小标题小标题小标题小标题',
      price:40,
      subPrice:50,
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t4042/144/2524267687/15532/439bc863/58aae9ccN543da263.png',
      ti: '小鲜肉',
    }
]

const styleObj={
  Style:true
}
const myfig={
        content: '怎么都没用啊',
          pullUpHeight: 60,
          height: 40,
          autoRefresh: false,
          downContent: '放下才能刷新啊',
          upContent: '使劲。。。。。。。。。。',
          loadingContent: '老子在努力加载中...',
}
export default {
  data(){
    return {
      listsItems,
      styleObj,
      scrollTop:0,
      nn:0,
      myfig
    }
  },
  components:{
    HItems,VItems,Scroller
  },
  methods: {
    onScroll (pos) {
      this.scrollTop = pos.top
    },
  loadMore() {
      setTimeout(() => {
        this.nn += 10
        this.$nextTick(() => {
          this.$refs.scroller.donePullup()
          // if (this.nn >= 30) {
          //   this.$refs.scroller1.disablePullup()
          //   console.log('No more data, Pullup disabled!')
          // }
        })
      }, 2000)
    }
  }


}
</script>
<style lang="scss" scoped>
.pullup-arrow {
  transition: all linear 0.2s;
  color: #666;
  font-size: 25px;
}
</style>
