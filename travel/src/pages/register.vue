<template>
  <div class="register">
    <Header :Iscolor="Iscolor" :Status="Status"/>
    <div class="line"></div>
    <div class="login-wrap">
      <el-form class="login-container" :model="registerForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
        <h1 class="title">Register</h1>
        <!-- <h4 class="msg">
          <div>{{msg}}</div>
        </h4> -->
        <el-form-item label="用户名" prop="username">
          <el-input v-model.number="registerForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(registerForm)">提交</el-button>
          <el-button @click="resetForm()">重置</el-button>
          <el-button @click="loginForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import Header from "../components/header"
export default {
  data(){
    return{
      Iscolor:false,
      Status:false,
      msg: '',
      registerForm:{
        username: "",
        password: "",
        rePassword: ""
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        rePassword: [{ required: true, message: '请再次输入密码', trigger: 'blur' }]
      }
    }

  },
  components:{
    Header
  },
  methods:{
    submitForm: function(data){
      // doLogin validate
      if(this.registerForm.username === ''){
        this.msg = '请输入用户名'
        return
      }

      if(this.registerForm.password === ''){
        this.msg = '请输入密码'
        return
      }

      if(this.registerForm.password !== this.registerForm.rePassword){
        this.msg = '两次密码不正确'
        return
      }



    },
    resetForm: function(data){
      this.registerForm.username = ''
      this.registerForm.password = ''
      this.registerForm.rePassword = ''

    },
    loginForm: function(data){
      let routeUrl = this.$router.resolve({
        path: "/login",
      });
      window.open(routeUrl.href, '_self');

    }
  }
}
</script>
<style scoped lang="less">
.register{
  width: 100%;
  height: 100vh;
  background-image: url("http://zengyl.dev.dxdc.net/travel_pic/pic/1.jpg");
  box-sizing: border-box;
  padding-top: 10%;
  background-repeat: no-repeat;
  background-position: center right;
  background-size: 100% 100%;
  .line{
  height: 80px;
}
.login-wrap {
  


  .login-container {
    border-radius: 10px;
    margin: 0 auto;
    width: 400px;
    padding: 50px 50px 55px 10px;
    background: #fff;
    border: 1px solid #eaeaea;
    text-align: left;
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);


    .title {
      margin: 0 auto 30px auto;
      text-align: center;
      color: #409EFF;
      padding-left: 40px;
    }

    .msg{
      height: 16px;
      text-align: center;
      color: red;

      div{
        font-weight: lighter;
      }
    }
  }
}
}





</style>
