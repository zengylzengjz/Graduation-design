<template>
    <div class="header" :class="[istrue?'iscolor':'']">
        <div class="layout">
            <div class="logo"></div>
            <div class="font">Travel</div>
            <div class="list">
                <div class="dec" v-for="(item,index) in ClickList" :key="index">
                    <div>{{item}}</div>
                </div>
            </div>
            
            <div class="login">登录</div>
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
            ClickList:["主页","景点","酒店","分享","攻略","关于"],
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
        }
        .list{
            display: flex;
            margin-left: auto;
            .dec{
                margin-left: 30px;
            }
        }
        .login{
            margin-left: 30px;
        }
    }

}
</style>
