<template>
  <div class="fullpage">
    <slot></slot>
  </div>
</template>
<style type="text/css">
  .fullpage{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f7f7f7;
    z-index: 501;
    overflow-y:auto;
  }
</style>
<script type="text/javascript">
  export default{
    props:[]
  }
</script>