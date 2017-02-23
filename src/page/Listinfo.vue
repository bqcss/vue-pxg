<template>
  <div>

      <flexbox wrap="wrap" gutter='0' style='text-align:center;'>
        <flexbox-item v-for='icon of listsItems' :span='1/4'>
          <div> <img :src="icon.img" alt="" class="w50"> </div>
          <div>{{icon.ti}}</div>
        </flexbox-item>
      </flexbox>
  </div>
</template>

<script>
import {Flexbox,FlexboxItem} from 'vux'

const listsItems=[
    {
      url: 'javascript:',
      img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png',
      ti: '小鲜肉'
    }

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
