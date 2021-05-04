<template>
    <div class="content">
        <div class="des">
            <div class="image">
                <img :src="Scenic.img" alt="" class="img">
            </div>
            <div class="text">
                <div class="title">
                    <div class="name">{{Scenic.title}}</div>
                    <div class="level">{{Scenic.level}}</div>
                </div>
                <div class="money">
                    <div class="true">{{Scenic.money}}</div>
                    <div class="false">{{symbol}}{{money/0.8}}</div>
                </div>
                <div class="address">
                    <div class="el-icon-map-location icon"></div>
                    <div class="address">{{Scenic.addr}}{{Scenic.address}}</div>
                </div>
                <!-- <div class="time">
                    <div class="el-icon-timer icon"></div>
                    <div class="timer">{{Scenic.timeme}}{{Scenic.time}}</div>
                </div> -->
                <div class="block">
                    <div class="el-icon-timer icon"></div>
                    <!-- <p>组件值：{{ value }}</p> -->
                    <el-date-picker
                    v-model="value"
                    type="daterange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-time="['00:00:00', '23:59:59']">
                    </el-date-picker>
                </div>
                <div class="ticket">
                    <div class="el-icon-tickets icon"></div>
                    <div class="ticketet">{{Scenic.ticketet}}{{Scenic.ticket}}</div>
                </div>
                <div class="description">{{Scenic.description}}</div>
                <div class="qty">
                    <div class="des">{{Scenic.qty}}</div>
                    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                    <el-row class="button">
                    <el-button type="primary">{{Scenic.buy}}</el-button>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            money:'',
            symbol:'',
            num: 1,
            value: ''
        }
    },
    props:['Scenic'],
    mounted(){
        console.log(this.Scenic);
        this.money=this.Scenic.money.replace(/[^\d]/g,' '); //
        this.symbol=this.Scenic.money.slice(0,1)
        console.log(this.symbol);
        
    },
    methods: {
      handleChange(tab, event) {
        // console.log(tab, event);
      }
    }
}
</script>
<style scoped lang="less">
.content{
    margin: 2% 5%;
    .des{
        display: flex;
        .image{
            padding: 0 2%;
            background-size: 100% 100%;
            width: 55%;
            .img{
                width: 100%;
                height: 400px;
            }
        }
        .text{
            width: 45%;
            .title{
                padding-bottom: 6px;
                border-bottom: 3px solid #A6DFFA;
                display: flex;
                align-items: center;
                .name{
                font-size: 30px;
                color: #409EFF;
                }
                .level{
                    font-size: 18px;
                    align-self: flex-end;
                    margin-left: 10px;
                }
            }
            .money{
                display: flex;
                margin-top: 20px;
                margin-bottom: 30px;
                .true{
                    font-size: 30px;
                }
                .false{
                    font-size: 20px;
                    color: #ccc;
                    text-decoration: line-through;
                    padding-left: 12px;
                }
            }
            .address{
                font-size: 24px;
                display: flex;
                align-items: center;
                // margin-top: 16px;
                // padding-top: 16px;
                .icon{
                    margin-right: 10px;
                }
                // .addr{
                //     font-size: 16px;
                // }
                .address{
                    font-size: 15px;
                    color: #999;
                }
            }
            .time{
                margin-top: 25px;
                font-size: 24px;
                display: flex;
                align-items: center;
                .icon{
                    margin-right: 10px;
                }
                .timer{
                    font-size: 15px;
                    color: #999;
                }
            }
            .block{
                display: flex;
                margin-top: 25px;
                font-size: 24px;
                .icon{
                    margin-right: 10px;
                    padding-top: 6px;
                    font-size: 28px;
                }
            }
            .ticket{
                margin-top: 25px;
                font-size: 24px;
                display: flex;
                align-items: center;
                .icon{
                    margin-right: 10px;
                }
                .ticketet{
                    font-size: 15px;
                    color: #999;
                }
            }
            .description{
                margin-top: 20px;
                padding: 10px 0;
                font-size: 14px;
                border-top: 1px solid #eee;
                border-bottom: 1px solid #eee;
            }
            .qty{
                margin-top: 25px;
                font-size: 16px;
                color: #999;
                display: flex;
                align-items: center;
                .des{
                    margin-right: 15px;
                }
                .button{
                    margin-left: 15px;
                }
            }
        }
    }
}
</style>