<template>
  <div style="height:100%;" id="app">
      <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
        <!-- 头部 -->
        <x-header  :left-options="{showBack: false}" ><a slot="left"><span class="demo-icon-22" style="color:#fff">&#xe633;</span>图标</a> 我是首页，欢迎你 <a slot="right">右边</a></x-header>
        <!-- 使用转换 -->
         <transition :name='"vux-pop-in"'>
          <router-view class="router-view"></router-view>
        </transition>
        <!-- 底部bar -->
        <tabbar class="vux-demo-tabbar" icon-class="vux-center"  sloleft="bottom">
          <tabbar-item>
            <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;">&#xe637;</span>
            <span slot="label">首页</span>
          </tabbar-item>
          <tabbar-item >
              <span class="demo-icon-22" slot="icon">&#xe633;</span>
              <span slot="label"><span>分类</span></span>
            </tabbar-item>
          <tabbar-item>
              <span class="demo-icon-22" slot="icon">&#xe630;</span>
              <span slot="label">食谱</span>
          </tabbar-item>
          <tabbar-item badge="9">
              <span class="demo-icon-22" slot="icon">&#xe633;</span>
              <span slot="label"><span>购物车</span></span>
            </tabbar-item>
          <tabbar-item show-dot>
              <span class="demo-icon-22" slot="icon">&#xe630;</span>
              <span slot="label">我的</span>
          </tabbar-item>
        </tabbar>


    </view-box>
  </div>
</template>

<script>
import { ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem } from 'vux'
export default {
    components: {
      ButtonTab,
      ButtonTabItem,
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem
    },
 
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';

body {
  background-color: #fbf9fe;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
.demo-icon-22 {
  font-family: 'vux-demo';
  font-size: 22px;
  color: #888;
}
.weui-tabbar.vux-demo-tabbar {
  /** backdrop-filter: blur(10px);
  background-color: none;
  background: rgba(247, 247, 250, 0.5);**/
}
.vux-demo-tabbar .weui-bar__item_on .demo-icon-22 {
  color: #F70968;
}
.vux-demo-tabbar .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
  color: #35495e;
}
.vux-demo-tabbar .weui-tabbar_item.weui-bar__item_on .vux-demo-tabbar-icon-home {
  color: rgb(53, 73, 94);
}
.demo-icon-22:before {
  content: attr(icon);
}
.vux-demo-tabbar-component {
  background-color: #F70968;
  color: #fff;
  border-radius: 7px;
  padding: 0 4px;
  line-height: 14px;
}
.weui-tabbar__icon + .weui-tabbar__label {
  margin-top: 0!important;
}
.vux-demo-header-box {
  z-index: 100;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
@font-face {
  font-family: 'vux-demo';  /* project id 70323 */
  src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot');
  src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.woff') format('woff'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.svg#iconfont') format('svg');
}
.demo-icon {
  font-family: 'vux-demo';
  font-size:20px;
  color: #04BE02;
}
.demo-icon:before {
  content: attr(icon);
}
/**
* vue-router transition
*/
.router-view {
  width: 100%;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  backface-visibility: hidden;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  height: 100%;
  position: absolute;
  left: 0;
}
.vux-pop-out-enter-active {
  animation-name: popInLeft;
}
.vux-pop-out-leave-active {
  animation-name: popOutRight;
}
.vux-pop-in-enter-active {
  perspective: 1000;
  animation-name: popInRight;
}
.vux-pop-in-leave-active {
  animation-name: popOutLeft;
}
@keyframes popInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutLeft {
  from {
    opacity: 1;
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes popInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutRight {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}
</style>