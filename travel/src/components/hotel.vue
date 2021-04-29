<template>
<div class="hotel">
    <div class="title">{{HotelList.hotel_title_copy}}</div>
    <div class="content">{{HotelList.hotel_content_copy}}</div>
    <div class="detail">
        <div class="list" v-for="(item,index) in HotelList.list" :key="index">
            <div class="image" :style="{'background-image':'url('+item.img+')',height:height[index]+'px'}">
                    <div class="img"  :style="{height:height[index]+'px'}">
                    <div class="copy">
                        <div class="el-icon-location-outline addr">
                            <div class="butt">
                                {{item.name}}
                            </div>
                            <div> ,&nbsp;{{item.addr}}</div>
                        </div>
                        <div class="price">{{item.price}}</div>
                        <div class="star" >
                                <img class="star_img" src="../assets/star.png" v-for="(item1,index1) in arr.slice(0,item.star)" :key="index1">
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    </div>
    <div class="button">
            <el-row>
                <el-button type="success">View All Hotel ➡️</el-button>
            </el-row>
    
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            height:[260,230,310,210,320,255],
            arr:[1,2,3,4,5,6,]
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
        padding: 0 5%;
        display: flex;
        flex-wrap:wrap;
        .list{
            margin-left: 15px;
            margin-bottom: 15px;
            
            .image{
                width: 400px;
                background-size:cover;
            .img{
                display: flex;
                flex-direction: column;
                justify-content:flex-end;
                align-items:flex-start;
                background-color:rgba(0,0,0,0.2);
                color: white;
                // padding-left: 10px;
                .copy{
                    .addr{
                    padding-left: 10px;
                    display: flex;
                    font-weight: bold;
                    .butt{
                        margin-left: 5px;
                    }
                }
                .price{
                    text-align: left;
                    padding-left: 15px;
                    padding-top: 8px;
                }
                .star{
                    text-align: left;
                    padding: 8px 0 15px 5px;
                    display: flex;
                    flex-direction: row;
                    padding-left: 15px;
                    .star_img{
                        padding-right: 5px;
                    }
                }
                }
                
             }
            }
            }
            }
     .button{
        margin-top: 20px;
    }
            
        }
    
   

</style>