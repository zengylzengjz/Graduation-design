<template>
    <div class="scenic_detail">
        <Header :Iscolor="Iscolor" :Status="Status"/>
        <div class="line"></div>
        <Content :Scenic="Scenic"/>
        <Type :TypeList="TypeList" :Scenic="Scenic"/>
        <Footer />
    </div>
</template>
<script>
import Header from "../components/header"
import Footer from "../components/footer"
import Content from "../components/detail_content"
import Type from "../components/scenic_type"
export default {
    data(){
        return{
            Iscolor:true,
            Status:true,
            Scenic:{},
            TypeList:{
                typename:"推荐",
                commentname:"评论",
                detail:"详情",
                order:"预定",
                star:4.8,
                commentText:"条评论",
                type:[
                    {
                        name: "成人票（无需取票，身份证直接入园）",
                        money: "¥50",
                        text1:"23:59前随买随用",
                        text2:"随时退",
                    },
                    {
                        name: "学生票（需出示相关证件）",
                        money: "¥40",
                        text1:"23:58前随买随用",
                        text2:"条件退",
                    },
                    {
                        name: "儿童票（身高1.0~1.5之间）",
                        money: "¥30",
                        text1:"23:58前随买随用",
                        text2:"条件退",
                    },
                ],
                comment:[
                    {
                        star:4.8,
                        name:"zengyanling",
                        time:"2021-04-22",
                        comment:"体验非常棒，nice!!!",
                    },
                    {
                        star:4.5,
                        name:"zengjz",
                        time:"2021-04-16",
                        comment:"开心的旅程，让人记忆深刻的景点",
                    },
                    {
                        star:5,
                        name:"zyl",
                        time:"2021-03-21",
                        comment:"have fun!",
                    },
                    {
                        star:5,
                        name:"zjz",
                        time:"2021-03-18",
                        comment:"开心，不虚此行",
                    }
                ]
            }
        }
    },
    created() {
        this.Scenic=this.$route.params.scenic_detail;
        // console.log(this.scenic,"test");
    },
    components:{
      Header,
      Content,
      Type,
      Footer,
        },
}
</script>
<style scoped lang="less">
.scenic_detail{
.line{
    height: 80px;
}
}
</style>