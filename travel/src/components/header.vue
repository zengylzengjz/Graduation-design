<template>
    <div class="header" :class="[iscolor?'iscolor':'']">
        <div class="layout">
            <div class="logo">logo</div>
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
    props: ['ClickList'],
    data(){
        return {
            iscolor:false,
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll);
    },
    created(){
        // console.log(this.ClickList,"ClickList")
    },
    methods:{
        handleScroll(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop>81){
                this.iscolor=true;
                // console.log(scrollTop);
            }
            else{
                this.iscolor=false;
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
        .logo{

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
