<template>
  <div class="log-form">
    <div class="log-form-group">
      <div class="form-style">
        <label for="userId">
      <input type="text" name="" id="userId" value="" v-model="username" placeholder="用户名"/>
      </label>
      
      </div>
      <div class="form-style">
        <label for="psw">
      <input type="password" name="" id="psw" value="" v-model="userpwd" placeholder="密码"/>
      </label>
      </div>
      <div class="error">{{userError.errorText}}</div>
      <div class="form-save-style">
        <label for="save" class="ckbox">
        <input  type="checkbox" name="" id="save" value=""/>保存密码
        </label>
        <a href="">忘记密码</a>
      </div>
      <input type="submit" name="" id="sbt" value="登录" @click="onLogin"/>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      username: '',
      userpwd: ''
    }
  },
  computed: {
    userError () {
      let errorText, status
      if (!/@/g.test(this.username)) {
        status = false
        errorText = '你输入的账号错误'
      } else {
        status = true
        errorText = ''
      }
      if (!this.errorFlag) {
        errorText = ''
        this.errorFlag = true
      }
      return {
        errorText,
        status
      }
    }
  },
  methods: {
    onLogin () {
      if (!this.userError.status) {
        alert('账号信息错误')
      } else {
        this.errorText = ''
        this.$http.get('api/login')
        .then((res) => {
          this.$emit('has-log', res.data)
        }, (error) => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.log-form-group{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
}
.log-form-group > div{
   width: 45%;
}
.log-form-group input{
  outline: none;
  background: rgba(255,255,255,0);
  border:none;
  border:#666 1px solid;
  padding: 8px;
  width:100%;
}

.form-style label{
  display: flex;
  justify-content: space-between;
}
.form-style{
  margin:10px auto;
}
.form-save-style{
  margin:auto;
  display: flex;
  justify-content: space-between;
}
.form-save-style a{
  text-decoration: none;
  color:#000;
  font-size: 14px;
}
.ckbox input{
  width: 16px;
  height: 16px;
  vertical-align: middle;

}
.ckbox{
  font-size: 14px;
}
#sbt{
  width: 45%;
  margin:15px auto 0;
  padding: 5px 0;
}
#sbt:hover{
  border:1px solid #999;
}
.error{
  margin: auto;
  color:red;
  font-size: 14px;
}
</style>
