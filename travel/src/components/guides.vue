<template>
<div>
    <!-- <div id="parallax1" class="parallax">
    <div class="bg1 parallax-bg"></div>
    <div class="overlay"></div>
    <div class="parallax-content">
        <div class="container">

            <div class="row">
                <div class="col-sm-10 animated">
                    <div class="txt1">Caucasus Vacation Packages</div>
                    <div class="txt2">格鲁吉亚位于高加索地区的黑海沿岸，北邻俄罗斯，南部与土耳其、亚美尼亚、阿塞拜疆接壤。曾经是前苏联加盟国，前苏联领袖斯大林的故乡，位于连接欧亚大陆的外高加索中西部的整个黑海沿岸、库拉河中游和库拉河支流阿拉扎尼河谷地。首都第比利斯，因附近著多温泉得名；黑海沿岸旅游带气候温暖，滨海沙滩浴场众多，是周边国家的避暑度假胜地，文物古迹蜚声遐迩，景色令人心旷神怡，比如欧洲最高海拔的乌树故里古村落和滑雪者的梦想天堂梅斯蒂亚等。
                    </div>
                    <div class="txt3">From: Khazbegi (Goergia) $159.00<span>person</span></div>
                </div>
                <div class="col-sm-2 animated">
                    <a href="#" class="btn-default btn0">Details</a>
                </div>
            </div>

        </div>
    </div>
</div> -->
<div class="guides">
        <div class="banner" :style="{'background-image':'url('+GuidesList.GuideImg+')'}">
            <div class="cover">
                <div class="title">{{GuidesList.GuideTitle}}</div>
                <div class="content">{{GuidesList.GuideDescription}}</div>
            </div>
        </div>
        <div class="idea">
            <div class="trip" v-for="(item,index) in GuidesList.list" :key="index">
                <div class="trip_single">
                    <div class="image" :style="{'background-image':'url('+item.theme_img+')'}" :class="index<2?'margin':''">
                        <div class="money">
                            <div class="font">{{item.price}}</div>
                        </div>
                    </div>
                    <div class="message" :class="index<2?'margin':''">
                        <div class="trip_idea">
                        {{GuidesList.GuideTitle_min}}
                        </div>
                        <div class="trip_theme">
                            {{item.theme}}
                        </div>
                        <div class="button">
                            <div class="trip_time">
                                <div class="font">{{item.day}} Days -> {{item.day-1}} Nights
                                </div>
                            </div>
                            <div class="v-detail">
                                View Details 
                            </div>
                        </div>
                        
                        <!-- <div>--18reviews</div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>
<script>
export default {
    props:['GuidesList'],
    data(){
        return{
            // GuidesList:this.GuidesList
        }
    },
    mounted(){
        // console.log(this.GuidesList);
    }
}
</script>
<style scoped lang="less">
.guides{
    padding: 7% 5% 0 5%;
    .banner{  
    height: 340px;
    background-size:100% 100%;
    .cover{
        background-color: rgba(0,0,0,0.3);
        height: 340px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        color: white;
        .title{
            font-size: 40px;
            padding-bottom: 15px;
        }
        .content{
            font-size: 16px;
            padding: 0 15%;
            text-align: center;
        }

    }
}
}
.idea{
    padding: 4% 0;
    display: flex;
    justify-content:space-between;
   .trip{
       width: 100%;
       .trip_single{
           .image{
           background-size:100% 100%;
           height: 220px;
           padding-top: 20px;
           &.margin{
           margin-right: 20px;
           }
           .money{
               background-color: white;
               height: 28px;
               width: 70px;
               border-radius: 0 20px 20px 0;
               display: flex;
               align-items:center;
               padding-left: 5px;
               .font{
                   color: #fc5b62;
               }
           }
           }
           .message{
               height: 180px;
               background-color: #fafafa;
               padding: 20px 30px;
               &.margin{
                margin-right: 20px;
           }
           .trip_idea{
               color: #f5a623;
               font-size: 20px;
               margin-bottom: 16px;
           }
           .trip_theme{
               font-size: 24px;
               margin-bottom: 16px;
           }
           .button{
               display: flex;

               .trip_time{
               width: 120px;
               height: 26px;
               background-color: #fc5b62;
               color: white;
               border-radius: 4px;
               font-size: 12px;
               display: flex;
               justify-content: center;
               align-items: center;
               .font{
                //    margin: auto;
               }
           }
           .v-detail{
               color: #f05942;
               font-size: 12px;
               text-decoration:underline;
               margin-left: auto;
               margin-right: 15px;
               align-self: flex-end;
           }

           }
           
           }
       }
   }  
}
// .parallax {width: 100%; position: relative; overflow: hidden; background: none;}
// .parallax, .parallax .parallax-content, .parallax .overlay { height: 100%;}

// .parallax-bg { width: 100%; height: 100%; left: 0; top: 0; margin: 0 auto; position: absolute; background-size: cover; background-attachment: scroll; background-repeat: repeat-y; background-position: center center; }
// .parallax-bg.bg-fixed{background-attachment: fixed;}
// .parallax .overlay { background: none; width: 100%; position: absolute; overflow: hidden; background: none;}
// .parallax-content { padding-top: 0px; padding-bottom: 0px;}
// .bg1{
//     background-image: url('http://zengyl.dev.dxdc.net/travel_pic/pic/banner1.jpg')
// }
</style>