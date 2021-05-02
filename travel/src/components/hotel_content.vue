<template>
    <div class="dec">
            <div class="list" v-for="(item,index) in HotelList" :key="index" >
            <div class="image" @click="gohotel_detail(item)">
                <div class="img" :style="{'background-image':'url('+item.img+')'}">
                    <div class="imgMask">
                        <!-- <div class="level">{{item.level}}</div> -->
                        <div class="level">
                            <div class="star">
                                <el-rate
                                    v-model="item.star"
                                    disabled
                                    show-score
                                    text-color="#ff9900"
                                    score-template="">
                                </el-rate>
                            </div>
                        </div>
                        <div class="comment">{{item.comment}}</div>
                    </div>
                </div>
                <div class="img_dec">
                    <div class="img_content">
                        <div class="name">{{item.title}}</div>
                    </div>
                    <div class="detail">
                        {{item.address}}
                    </div>
                    <div class="recommend">
                        <div class="money">{{item.money}}
                            <span>起</span>
                        </div>
                    </div>
                    <div class="mask"></div>
                </div>
                
            </div>
            
        </div>
        </div>
</template>
<script>
export default {
    props:['HotelList'],
    mounted(){
        // console.log(this.HotelList);
    },
    methods:{
        gohotel_detail(item){
            this.$router.push({
            name: 'hotel_detail',
            params: {hotel_detail: item},
      })
        }
    }
}
</script>
<style scoped lang="less">
.dec{
        display: flex;
        flex-wrap: wrap;
        padding: 0 5% 2% 5%;
        .list{
        
        .image{
            margin-top: 4%;
            margin-left: 30px;
            .img{
            width: 25rem;
            height: 200px;
            background-size:100% 100%;
            z-index: -1;
            position: relative;
            .imgMask{
                position: absolute;
                bottom:0;
                right: 0;
                width: 100%;
                height: 24%;
                background-color:rgba(166, 223, 250,0.6);
                z-index: 1;
                opacity:0;
                display: flex;
                justify-content:flex-start;
                align-items: center;
                .level{
                    margin-left: 4%;
                    // .star{
                    //     .el-rate__icon{
                    //         font-size: 16px;
                    //         margin-right: 0px;
                    //     }
                    // }
                }
                .comment{
                    margin-left: auto;
                    padding-right: 4%;
                }
            }
            }
            .img_dec{
                height: 140px;
                background: #fafafa;
                position: relative;
                .mask{
                    position: absolute;
                    right: 0;
                    bottom:0;
                    width: 100%;
                    border-bottom: 2px solid #A6DFFA;
                }
            .img_content{
                display: flex;
                padding-top: 15px;
                padding-bottom: 10px;
            .name{
                font-size: 24px;
                padding-left: 15px;
                padding-right: 20px;
                color: #636363;
            }
            // .scenic{
            //     color: #FF0033;
            //     padding-top: 20px;
            // }
            
        }
        .detail{
                font-size: 14px;
                padding: 0 13px;
                color: #757575;
                // height: 60px;
                // overflow: hidden;
                // text-overflow:ellipsis;
            }
            .recommend{
                text-align: left;
                margin: 12px 20px;
                display: flex;
                // position: relative;
                .money{
                    font-size: 26px;
                    color: red;
                    span{
                        color: black;
                        font-size: 12px;
                    }
                }
                
                .button{
                    width: 70px;
                    height: 30px;
                    background: #508784;
                    margin-left: auto;
                    color: white;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                }
            }
            }
        }
        .image:hover .imgMask{
            opacity: 1;
        }
         
       
    }
    }
    
</style>