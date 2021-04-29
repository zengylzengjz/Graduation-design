<template>
    <div>
        <Header :Iscolor="Iscolor" :Status="Status"/>
        <div class="line"></div>
        <div class="city">{{city}}</div>
        <Search :SearchList="SearchList2"/>
        
        <!-- <Sort /> -->
        <Footer />

    </div>
</template>
<script>
import Header from "../components/header"
import Footer from "../components/footer"
import Search from "../components/search"
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

            ]
        }
    },
    mounted(){
        this.city=this.$route.params.destination;
    },
    components:{
      Header,
      Search,
    //   Sort,
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