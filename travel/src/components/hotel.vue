<template>
<div class="hotel">
    <div class="title">{{HotelList.hotel_title_copy}}</div>
    <div class="content">{{HotelList.hotel_content_copy}}</div>
    <div class="detail">
        <div class="list" v-for="(item,index) in HotelList.list" :key="index">
            <div class="image" :style="{'background-image':'url('+item.img+')'}"></div>
            <!-- {{item.img}} -->
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    props:['HotelList'],
    mounted(){
        // console.log(this.HotelList);
    }
}
</script>
<style scoped lang="less">
.hotel{
    margin-top: 60px;
    margin-bottom: 60px;
    text-align: center;
    .title{
        font-size: 50px;
        margin-bottom: 20px;
    }
    .content{
        margin-top: 30px;
        padding:0 20% 2% 20%;
        color: #757575;
    }
    .detail{
        
        .list{
            display: flex;
            padding: 0 5%;
            .image{
            width: 25rem;
            height: 280px;
            background-size:cover;
            flex-wrap: wrap;
            }
            
        }
    }
}
</style>