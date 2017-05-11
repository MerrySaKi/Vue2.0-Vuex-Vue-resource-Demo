<template>
  <div class="log-form">
    <div class="log-form-group">
      <div class="form-style">
        <label for="userId">用户名
      <input type="text" name="" id="userId" value=""/>
      </label>
      </div>
      <div class="form-style">
        <label for="psw">密码
      <input type="password" name="" id="psw" value=""/>
      </label>
      </div>
      <div class="form-save-style">
        <label for="save" class="ckbox">
        <input  type="checkbox" name="" id="save" value=""/>保存密码
        </label>
        <a href="">忘记密码</a>
      </div>
      <input type="submit" name="" id="sbt" value="登录" />
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
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
</style>
