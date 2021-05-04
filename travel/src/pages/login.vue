<template>
    <div>
        <Header :Iscolor="Iscolor" :Status="Status"/>
        <div class="line"></div>
        login
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
.line{
    height: 80px;
}
</style>