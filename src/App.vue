<template>
  <div style="height:100%;" id="app">
    <!--<div>{{myti}}</div>-->
      <!-- 左边的地址选择 -->
      <transition name='vux-pop-out'>
        <fullpage v-if='iShow'>
          <a @click='iShow=!iShow'> 返回</a>
          <div style="color:#333">
            这下面是地址选择
          </div>
        </fullpage>
      </transition>

      <view-box ref="viewBox">
        <!-- 头部 -->
        <x-header  :left-options="{showBack: false}" >
        <a slot="left" @click='iShow=!iShow'><span class="iconfont icon-dizhi "></span><span class="">上海</span></a>
          pxg logo
         <a slot="right"><span class="iconfont icon-sousuo"></span></a>

        </x-header>
        <!-- 使用转换 -->
         <!--<search-bar></search-bar>-->
         <transition :name='"vux-pop-in"'>
          <router-view class="router-view"></router-view>
        </transition>
        <!-- 底部bar -->
        <tabbar class="" icon-class="iconfont">
          <tabbar-item link='/' selected="/">
            <span class="iconfont icon-shouyeshouye" slot="icon"></span>
            <span slot="label">首页</span>
          </tabbar-item>
          <tabbar-item link='/Lists'>
              <span class=" iconfont icon-fenlel" slot="icon"></span>
              <span slot="label"><span>分类</span></span>
            </tabbar-item>
          <tabbar-item link='/List'>
              <span class="iconfont icon-chushi" slot="icon"></span>
              <span slot="label">食谱</span>
          </tabbar-item>
          <tabbar-item badge="9" link='/sw'>
              <span class="iconfont icon-gouwuche2" slot="icon"></span>
              <span slot="label"><span>购物车</span></span>
            </tabbar-item>
          <tabbar-item show-dot>
              <span class="iconfont icon-youke" slot="icon"></span>
              <span slot="label">我的</span>
          </tabbar-item>
        </tabbar>


    </view-box>
  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem} from 'vux';
import fullpage from 'components/fullpage';
import searchBar from 'components/searchBar';
// const list = () => ['精选', '美食', '电影', '酒店', '外卖']
export default {
    data(){
      return{
        iShow:false,
        iShowSearch:true,
        index:0,
        list2:['精选', '美食', '电影', '酒店', '外卖','aaa','bbb','ccc'],
      }
    },
    components: {
      XHeader,
      Tabbar,
      TabbarItem,
      fullpage,searchBar,
    },
  computed:{

//      myti(){
//        return this.$store.state.comm.myTitle+'111111'
//      }
    }
}
</script>

<style lang="scss">
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  span.iconfont{
    font-size:22px;
  }
  p.weui-tabbar__label{font-size: 12px;margin: 0;}

  @import '../src/assets/scss/main.scss';
  @import '../src/assets/icon/icon.scss';
</style>
