<template>
  <div>
    <h2>{{myT}}</h2>
    <h3>快出来{{mm}}</h3>
  </div>
</template>
<script>
export default{
  data(){
    return {
     myT:'组件里自带的数据'
    }
  },
  created:function(){
    console.log(this.$store.state)
  },
  computed:{
    mm(){
       return this.$store.state.comm.myTitle
    }
  }
}
</script>
