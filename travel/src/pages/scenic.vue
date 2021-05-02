<template>
    <div>
        <Header :Iscolor="Iscolor" :Status="Status"/>
        <div class="line"></div>
        <div class="city">{{city}}</div>
        <Search :SearchList="SearchList2"/>
        <Scenic :ScenicList="ScenicList"/>
        <!-- <Sort /> -->
        <Footer />

    </div>
</template>
<script>
import Header from "../components/header"
import Footer from "../components/footer"
import Search from "../components/search"
import Scenic from "../components/scenic"
// import Sort from "../components/sort"
export default {
    data(){
        return {
            Iscolor:true,
            Status:true,
            SearchList2:{
                content: 'Please enter a scenic name',
                search:'Search'
            },
            city:'',
            ScenicList:[
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/6.jpg",
                    title:"重庆长江索道",
                    description:"万里长江的一条空中走廊，俯瞰滚滚长江",
                    money:"¥50",
                    level:"4A景区",
                    comment:"--4条评论",
                    address:"重庆市渝中区新华路151号",
                    addr:"地址：",
                    time:"7:30~22:30",
                    timeme:"开放时间：",
                    ticket:"88",
                    ticketet:"剩余票数：",
                    qty:"购买数量",
                    buy:"立即预定"
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/5.jpg",
                    title:"",
                    description:""
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/4.jpg",
                    title:"",
                    description:""
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/3.jpg",
                    title:"",
                    description:""
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/2.jpg",
                    title:"",
                    description:""
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/1.jpg",
                    title:"",
                    description:""
                }
            ]
        }
    },
    mounted(){
        this.city=this.$route.params.destination;
    },
    components:{
      Header,
      Search,
      Scenic,
      Footer,
        },

}
</script>
<style scoped lang="less">
.line{
    height: 80px;
}
.city{
    font-size: 40px;
    margin:1% 3%;
    border-bottom: 3px solid #A6DFFA;
}
</style>