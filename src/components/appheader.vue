<template>
  <div class="app-header">
      <img src="../assets/logo.png" alt="" />
      <ul>
        <li @click = "dialogLogShow">登录</li>
        <li @click = "dialogRegShow">注册</li>
        <li @click = "dialogAboutShow">关于</li>
      </ul> 
      <mydialog class="mydialog" :is-show = "showLogShow" @on-close = "hideDialog('showLogShow')">
        <log-form>
          
        </log-form>
      </mydialog>
      
      <mydialog class="mydialog" :is-show = "showRegShow" @on-close = "hideDialog('showRegShow')">
        <reg-form>
          
        </reg-form>
      </mydialog>
      
      <mydialog class="mydialog" :is-show = "showAboutShow" @on-close = "hideDialog('showAboutShow')">
        <p>
          这是一段关于，这是一段关于这是一段关于这是一段关于，这是一段关于这是一段关于这是一段关于这是一段关于这是一段关于这是一段关于，这是一段关于这是一段关于。这是一段关于这是一段关于。
        </p>
      </mydialog>
  </div>
  
</template>

<script>
import mydialog from './dialog'
import logForm from './form/logform'
import regForm from './form/regform'

export default {
  data () {
    return {
      showLogShow: false,
      showRegShow: false,
      showAboutShow: false
    }
  },
  components: {
    mydialog,
    logForm,
    regForm
  },
  methods: {
    dialogLogShow () {
      this.showLogShow = true
    },
    dialogRegShow () {
      this.showRegShow = true
    },
    dialogAboutShow () {
      this.showAboutShow = true
    },
    hideDialog (attr) {
      this[attr] = !this[attr]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.app-header{
  width:100%;
  background-color: #2C3E50;
  line-height: 70px;
  height:70px;
  display: flex;
  justify-content: space-around;
}
.app-header img{
  height: 60px;
  margin-top:5px;
}
.app-header ul{
  margin:0;
  padding: 0;
}
.app-header ul li{ 
  display: inline-block;
  color:#fff;
  padding:0 15px;
}
.mydialog{
  z-index: 99;
  line-height: 25px;
  font-weight: 300;
}
</style>
