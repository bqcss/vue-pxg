<template>
  <div>
    <h3>这下面放返回的数据</h3>
    <div>this is info{{infos}}</div>
  </div>
</template>
<script>
  export default{
    created(){
      let id=this.$route.params.id;
      this.$store.dispatch('agetINFOS',id);

    },
    computed:{
      infos(){
        return this.$store.getters.getINFOS;
      }
    }

  }
</script>