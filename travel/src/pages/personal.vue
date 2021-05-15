<template>
<div>
       <Header :Iscolor="Iscolor" :Status="Status"/>
       <div class="line"></div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="" name="0" disabled></el-tab-pane>
            <el-tab-pane label="我的订单" name="first">
                <div class="mmm">暂未开放</div>
            </el-tab-pane>
            <el-tab-pane label="我的发布" name="second">
                <div class="mmm">暂未开放</div>
                </el-tab-pane>
            <el-tab-pane label="个人资料" name="third"><div class="mmm">暂未开放</div></el-tab-pane>
        </el-tabs>
</div>
</template>
<script>
import Header from "../components/header"
export default {
    data(){
        return {
            Iscolor:true,
            Status:true,
            activeName: '',
            // tableData:{}
        }
    },
    components:{
       Header
    },
    methods: {
         handleClick(tab, event) {
        // console.log(tab, event);
      }
    },
    mounted(){
        // console.log(this.$route.params.test);
        this.activeName=this.$route.params.test;
    }
}
</script>
<style scoped lang="less">
.line{
  height: 80px;
}
.mmm{
    margin-left: 30px;
    padding-top: 5px;
}
</style>