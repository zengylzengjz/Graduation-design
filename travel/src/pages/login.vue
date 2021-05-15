<template>
  <div class="about">
    <Header :Iscolor="Iscolor" :Status="Status"/>
    <div class="line"></div>
    <div class="login-wrap">
      <el-form class="login-container" :model="loginForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
        <h1 class="title">Travel</h1>
        <!-- <h4 class="msg">
          <div>{{msg}}</div>
        </h4> -->
        <el-form-item label="用户名" prop="username">
          <el-input v-model.number="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(loginForm)">提交</el-button>
          <el-button @click="resetForm()">重置</el-button>
          <el-button @click="registerForm()">注册</el-button>
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
      loginForm:{
        username: "zjz",
        password: "123456"
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }

  },
  components:{
    Header
  },
  methods:{
    submitForm: function(data){
      // doLogin validate
      if(this.loginForm.username === "zjz"){
        if(this.loginForm.password === "123456"){

          //登录成功
          let routeUrl = this.$router.resolve({
            path: "/",
          });
          window.open(routeUrl.href, '_self');
          window.login_in=1;


        }else{
          this.msg = "密码错误"
        }
      }else{
        this.msg = "用户名不存在";
      }

    },
    resetForm: function(data){
      this.loginForm.username = ''
      this.loginForm.password = ''

    },
    registerForm: function(data){
      let routeUrl = this.$router.resolve({
        path: "/register",
      });
      window.open(routeUrl.href, '_self');

    }
  }
}
</script>
<style scoped lang="less">
.about {
  height: 100vh;//all
  width: 100%;
  box-sizing: border-box;
  padding-top: 10%;
  // background-image: url(../assets/bg3.jpg);
  background-image: url("http://zengyl.dev.dxdc.net/travel_pic/pic/1.jpg");
  // background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
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
