<template>
<sticky :offset="46" class='sticky-top'>
  <scroller lock-y >
    <div id="scbar">
      <div class="sb-items" :class='{"sb-active":adda}' v-for='i in sbcate' @click='addactive(this)'>{{i.name}} <a href="">{{i.url}}</a>
        <hr>
          <ol>
            <li v-for='ii of i.arr'>{{ii.name}} <a href="">{{ii.url}}</a>
            <br/>
              <b v-for ='iii of ii.arr'>
                {{iii.name}} <a href="">{{iii.url}}</a>
              </b>
            </li>
          </ol>
      </div>

    </div>
  </scroller>
  </sticky>
</template>
<script type="text/javascript">
  import {Scroller,Sticky} from 'vux'
  export default{
    components:{
      Scroller,Sticky
    },
    data(){
      return {
        sbcate:[
        {
          name:'水果类',
          url:'###shuiguo',
          arr:[
            { name:'核果类', url:'###11',
            arr:[
             {name:'苹果',url:'###pingguo'},
             {name:'橘子',url:'###pingguo'},
             {name:'香蕉',url:'###香蕉'},
             {name:'草莓',url:'###caonmei'},
            ]}
           
          ]
          }
        ,
        {
          name:'鱼类',
          url:'###yulei',
          arr:[
            { name:'胖头鱼类', url:'###11',arr:[
             {name:'草鱼',url:'###pingguo'},
             {name:'金鱼',url:'###pingguo'},
             {name:'鳕鱼',url:'###香蕉'},
             {name:'',url:'###caonmei'},
            ]}
           
          ]
          }
        ,
],
        adda:false
      }
    },
    methods:{
      addactive(m){
        alert(m)
      }
    }
  }
</script>
<style lang="scss">
  #scbar{white-space:nowrap;width:700px;}
  .sb-items{
    display:inline-block;
    padding: 4px 10px;

  }
  .sb-active{
    color: #f00;
    font-weight: 600;
  }
  .sticky-top{background:#fff;z-index: 3;}
</style>