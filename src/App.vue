<template>
  <div id="app">
    <!--顶部-->
   
    <router-view/>
    <!--tabtab导航-->
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      selected:""
    }
  }
}
</script>

<style>


</style>
