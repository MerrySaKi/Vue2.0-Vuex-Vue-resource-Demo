<template>
  <div id="app">
    <app-header></app-header>
    <div class="app-content">
     <keep-alive>
       <router-view></router-view>
     </keep-alive>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from './components/appheader'
import appFooter from './components/appfooter'

export default {
  data () {
    return {
      add: '组件测试'
    }
  },
  components: {
    appHeader,
    appFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("../css/normalize.css");
html,body{
  padding: 0;
  margin: 0;
  background: rgb(240,242,242);
  overflow: hidden;
}
.app-content{
}
</style>
