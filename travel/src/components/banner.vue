<template>
    <div>
        <div v-for="(item,index) in BannerList" :key="index">
            <div class="banner" :style="{'background-image':'url('+item.image+')'}">
                <div class="title">{{item.title}}</div>
                <div class="content">{{item.content}}</div>
                
            </div>
        </div>
        

    </div>
</template>
<script>
export default {
    props:['BannerList'],
    mounted(){
        // console.log(this.BannerList);
    }
}
</script>
<style scoped lang="less">
.banner {
    height: 790px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    .title {
        padding-top: 20%;
    }
    .content {

    }
}
</style>