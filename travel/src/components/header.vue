<template>
    <div class="header" :class="[istrue?'iscolor':'']">
        <div class="layout">
            <div class="logo"></div>
            <div class="font" @click="goIndex">Travel</div>
            <div class="list">
                <div class="dec" v-for="(item,index) in ClickList" :key="index" >
                    <div  @click="goClick(item.click)">{{item.name}}</div>
                    
                </div>
            </div>
            
            <div class="login" @click="goClick(login)" v-if="!login_in">登录</div>
            <div class="login1" v-if="login_in">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-submenu index="2">
                        <template slot="title" >个人中心</template>
                        <el-menu-item index="2-1" @click="goTo(sort1)">我的订单</el-menu-item>
                        <el-menu-item index="2-2" @click="goTo(sort2)">我的发布</el-menu-item>
                        <el-menu-item index="2-3" @click="goTo(sort3)">个人资料</el-menu-item>
                        <el-menu-item index="2-4" @click="loginOut">退出登录</el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['Iscolor','Status'],
    data(){
        return {
            // Iscolor:this.Iscolor,
            istrue:this.Iscolor,
            ClickList:[
                {name:"主页",click:"/"},
                {name:"景点",click:"destination"},
                {name:"酒店",click:"hotel"},
                {name:"分享",click:"publish_share"},
                {name:"攻略",click:"publish_guides"},
                {name:"关于",click:"about"}
                ],
                login:"login",
                login_in:window.login_in,
                activeIndex: '2',
                sort1:"first",
                sort2:"second",
                sort3:"third"
        }
    },
    mounted(){
        if(!this.Status){
        window.addEventListener('scroll', this.handleScroll);
        }
    },
    created(){
        // console.log(this.ClickList,"ClickList")
    },
    methods:{
        handleScroll(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop>81){
                this.istrue=true;
                // console.log(scrollTop);
            }
            else{
                this.istrue=false;
            }
        },
        goIndex(){
            if(this.$route.path !== "/"){
                this.$router.push({
                path:"/"
      })
            }
            
        },
        goClick(name){
            if(this.$route.path !== "/"+name){
                this.$router.push({
                path: name //动态跳转
      })
            }
            
        },
        handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      loginOut() {
          window.login_in=0;
          location.reload();
      },
      goTo(item){
        //   console.log(item);
          if(this.$route.path !== "/personal"){
          this.$router.push({
              name:"personal",
              params:{
                  test:item
              }
          })
          }
      }
    }
}
</script>
<style scoped lang="less">
.header{
    z-index: 100;
    width: 100%;
    height: 80px;
    background-color:transparent;
    position: fixed;
    top: 0;
    left: 0;
    &.iscolor{
        background-color:#849AAD;
        transition: all .5s ease 0s;
    }
    .layout{
        display: flex;
        align-items: center;
        color: white;
        height: 80px;   //不继承高度
        margin:0 2%;
        // .logo{
        //     margin-left: 30px;
        //     background-image: url(../assets/logogo.png);
        //     width: 70px;
        //     height: 70px;
        //     background-size: 100% 100%;
        //     margin-top: 10px;
        // }
        .font{
            color: white;
            font-size: 24px;
            align-self: center;
            // padding: 10px 0 0 10px;
            font-family:'Times New Roman', Times, serif;
            cursor: pointer;
        }
        .list{
            display: flex;
            margin-left: auto;
            .dec{
                margin-left: 30px;
                cursor: pointer;
            }
        }
        .login{
            margin-left: 30px;
            cursor: pointer;
        }
        /deep/.login1{
            margin-left: 30px;
            cursor: pointer;
            .el-submenu__title{
                color: white;
            }
            .el-menu{
            background-color: transparent;
            border-bottom:transparent;
            color: white;
            // .el-submenu{
                
            // }
            }
            .el-menu--horizontal>.el-submenu .el-submenu__title{
                    color: white;
                    font-size: 16px;
                }

            .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
            background-color: transparent;
            color: white;
            }
            .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
                color: white;
                border-bottom: transparent;
            }
                        
                    }
                }
    

}
</style>

