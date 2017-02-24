<template>
  <div>
    <flexbox :gutter="0" wrap="wrap" :orient="vvshow">
      <flexbox-item v-for='item of Lists' :span='1/2'>
        <div class="h-items" :class="{vvs:Cs}">
          <a :href="item.href" class="db">
            <i>{{item.tag}}</i>
            <img :src="item.img" alt="">
            <h4>{{item.title}}</h4>
            <p>{{item.subTitle}}</p>
            <span>{{item.price}}</span>
            <span>{{item.supPrice}}</span>
            <button>添加</button>
          </a>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>
<script>
import { Flexbox, FlexboxItem } from 'vux'

export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  props:["Lists",'vvshow',"Cs"]
}
</script>
<style lang="scss">
  .h-items{
    outline: 1px dashed;
    border-radius:8px;
  }
  .db{
    display: block;
  }
  .vvs{
    background-color: green;
    transition: all 1s;
  }
</style>
