<template>
    <div class="publish_guides">
        <Header :Iscolor="Iscolor" :Status="Status"/>
        <div class="line"></div>
        <div class="title">
            <img src="../assets/icon_travel.png" alt="" class="image">
            <!-- <div class="image"></div> -->
        </div>
    </div>
</template>
<script>
import Header from "../components/header"
export default {
    data(){
        return{
            Iscolor:true,
            Status:true,
        }
        
    },
    components:{
        Header
    }
}
</script>
<style scoped lang="less">

.publish_guides{
    .line{
    height: 80px;
}
.title{
    background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
    width: 100%;
    height: 180px;
    display: flex;
    .image{
        width: 100px;
        height: 100px;
    }
}
}
</style>