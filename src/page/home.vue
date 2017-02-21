<template>
  <div>
    <swiper loop auto :list="demoList" ></swiper>
      <!-- 条目分离 -->
      <group>
        <flexbox>
          <flexbox-item v-for=' item of b_Items'>
            <div class="tc">
              <img :src="item.img" >
              <div>{{item.ti}}</div>
            </div>
          </flexbox-item>
        </flexbox>
      </group>
      <!-- 特价类 -->

      <!-- 列表类 -->
      <group>
      <divider>热销爆款</divider>
       <img src="//st.360buyimg.com/m/images/index/floor-tit.png" alt="">
      <scroller lock-y scrollbar-x>
        <div class="box">
          <div class="box-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
        </div>
      </scroller>
      </group>
      <!-- 广告位的以及推荐商品 -->
      <group>
        <img src="//st.360buyimg.com/m/images/index/floor-tit.png" alt="">
        <div class="w50s" v-for='t in 8'>
        <img src="https://m.360buyimg.com/mobilecms/jfs/t3949/131/2586696231/42355/fdaa4df1/58ab9d8bNb8f76fe9.jpg!q70.jpg" alt="">
         <div> 我是商品--{{t}}</div>
        </div>
      </group>
  </div>
</template>

<script>
import { Swiper,SwiperItem,Card, Flexbox ,FlexboxItem,Divider,Group,Scroller  } from 'vux'
const demoList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '这是个标题1111111'
}, {
  url: 'javascript:',
  img: 'https://img1.360buyimg.com/da/jfs/t3046/202/6397710481/99410/c0451270/58a557f5N1aea6495.jpg',
  title: '这是个标题2222222222'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '这是个标题33333333333333'
}]

const b_Items=[
    {
      url: 'javascript:',
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png',
      ti: '超市'
    },
    {
      url: 'javascript:',
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t4042/144/2524267687/15532/439bc863/58aae9ccN543da263.png',
      ti: '分类'
    },
    {
      url: 'javascript:',
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3211/295/1824792746/12749/a74e2524/57d543ebN25337ef2.png',
      ti: '优惠券'
    },
    {
      url: 'javascript:',
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png',
      ti: '签到'
    },
    {
      url: 'javascript:',
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3118/92/1836879034/12255/981e942a/57d54204N32b71c87.png',
      ti: '其他'
    },
]

export default {
  data(){
    return {
     demoList,
     b_Items
    }
  },
  components:{
   Swiper,SwiperItem,Card, Flexbox ,FlexboxItem,Divider,Group,Scroller
  }

}
</script>
<style lang="scss">
  .tc{
    text-align:center;
    font-size: 14px;
    padding:10px;
    &>img{
      max-width: 88%;
    }
  }
  .box{
    white-space: nowrap;
    width: 1000px;
    position: relative;
    height: 120px;
    .box-item{
      width: 100px;
      height: 100px;
      margin: 8px;
      background:grey;
      display: inline-block
    }
  }
  .w50s{
    width: 50%;
    box-sizing:border-box;
    background:pink;
    display: inline-block;
    outline: 3px dashed;
    img{
      max-width: 100%;
    }
  }
</style>
