<template>
    <div class="destination">
        <div class="title">{{DestinationList.des_title_copy}}</div>
        <div class="content">{{DestinationList.des_content_copy}}</div>
        <div class="click">{{DestinationList.des_click_copy}}</div>
        <div class="dec">
            <div class="list" v-for="(item,index) in DestinationList.list.slice(0,3)" :key="index" >
            <div class="image">
                <div class="img" :style="{'background-image':'url('+item.img+')'}"></div>
                <div class="img_dec">
                    <div class="img_content">
                        <div class="name">{{item.name}}</div>
                        <div class="scenic">{{item.scenic}} Scenic Spots</div>
                    </div>
                <div class="detail">
                    {{item.description}}
                </div>
                <div class="recommend">
                    <div class="recommend_star" v-for="(item1,index1) in arr.slice(0,item.recommend)" :key="index1">
                        <img src="../assets/star.png">
                    </div>
                    <div class="review">
                        - {{item.reviews}} Reviews
                    </div>
                    <div class="button">
                        DETAILS
                    </div>
                </div>
                </div>
                
            </div>
            
        </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[1,2,3,4,5,6,]
        }
    },
    props:['DestinationList'],
    mounted(){
        // console.log(this.DestinationList);
        // console.log(this.arr,"arr");

    },
    created(){
        // let arr =this.DestinationList.list;
        // arr=[...arr,...this.DestinationList.list];
        // console.log(arr,"arr");
    }
}
</script>
<style scoped lang="less">
.destination{
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
    .click{
        font-size: 26px;
        color: #508784;
        padding-bottom: 20px;
        text-decoration: underline;
    }
    .dec{
        display: flex;
        padding: 0 5%;
        .list{
        
        .image{
            margin-left: 30px;
            .img{
            width: 25rem;
            height: 280px;
            background-size:cover;
            }
            .img_dec{
                height: 200px;
                background: #fafafa;
            .img_content{
                display: flex;
                padding-top: 25px;
                padding-bottom: 10px;
            .name{
                font-size: 30px;
                padding-left: 15px;
                padding-right: 20px;
                color: #636363;
            }
            .scenic{
                color: #FF0033;
                padding-top: 20px;
            }
            
        }
        .detail{
                font-size: 14px;
                padding: 0 13px;
                color: #757575;
                height: 60px;
                overflow: hidden;
                text-overflow:ellipsis;
            }
            .recommend{
                text-align: left;
                margin: 20px 20px;
                display: flex;
                .recommend_star{
                    padding-right: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .review{
                    font-size: 13px;
                    color: #757575;
                    display: flex;
                    align-items: center;
                    justify-content: center;
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
         
       
    }
    }
    
}
</style>