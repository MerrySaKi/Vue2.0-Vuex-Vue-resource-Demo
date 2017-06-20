<template>
  <div id="app">
    <div class="app-header">
      <router-link :to="{path:'/'}">
        <img :src = "logo"/>
      </router-link>
      <ul>
        <li>{{username}}</li>
        <li v-if="username!==''" @click="logout">退出</li> 
        <li @click = "dialogLogShow" v-if="username===''">登录</li>
        <li @click = "dialogRegShow" v-if="username===''">注册</li>
        <li @click = "dialogAboutShow">关于</li>
      </ul> 
    </div>
    <div class="app-content">
     <keep-alive>
       <router-view></router-view>
     </keep-alive>
    </div>
    <app-footer></app-footer>
    <mydialog class="mydialog" :is-show = "showLogShow" @on-close = "hideDialog('showLogShow')">
        <log-form @has-log="onSuccessLog">
          
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
import appFooter from './components/appfooter'
import mydialog from './components/dialog'
import logForm from './components/form/logform'
import regForm from './components/form/regform'

export default {
  data () {
    return {
      showLogShow: false,
      showRegShow: false,
      showAboutShow: false,
      username: '',
      logo: require('./assets/logo.png')
    }
  },
  components: {
    appFooter,
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
      this[attr] = false
    },
    onSuccessLog (data) {
      this.hideDialog('showLogShow')
      this.username = data.username
    },
    logout () {
      this.username = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html,body{
  padding: 0;
  margin: 0;
  background: rgb(240,242,242);
  font-family: "microsoft yahei";
}
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
  z-index: 10;
  line-height: 25px;
  font-weight: 300;
}
</style>
