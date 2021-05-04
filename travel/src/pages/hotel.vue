<template>
<div>
    <Header :Iscolor="Iscolor" :Status="Status"/>
    <div class="line"></div>
    <div class="tabs">
    <el-tabs v-model="activeName1" @tab-click="handleClick" >
        <el-tab-pane label="" disabled></el-tab-pane>
        <el-tab-pane label="国内酒店" name="first">
            <Search :SearchList="SearchList1"/>
            <div class="recommend">
            <div class="des">酒店推荐</div>
            <div class="bar">
                <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">北京</el-menu-item>
                    <el-menu-item index="2">上海</el-menu-item>
                    <el-menu-item index="3">广州</el-menu-item>
                    <el-menu-item index="4">深圳</el-menu-item>
                    <el-menu-item index="5">成都</el-menu-item>
                    <el-menu-item index="6">重庆</el-menu-item>
                    <el-menu-item index="7">西安</el-menu-item>
                    <el-menu-item index="8">长沙</el-menu-item>
                    <el-menu-item index="9">厦门</el-menu-item>
                    <el-menu-item index="10">杭州</el-menu-item>

                    <el-submenu index="11">
                        <template slot="title">更多</template>
                    </el-submenu>
                </el-menu> -->
                <el-tabs v-model="activeName2" @tab-click="handleClick">
                    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                </el-tabs>
            </div>
            </div>
        <Hotel :HotelList="HotelList1"/>
            <!-- <div class="flex">
                <div class="photo" v-for="(item,index) in HotelList1" :key="index">
                <div class="image" @click="goscenic(item.destination)">
                    <img :src="item.img" alt="" class="img"  style="margin-right: 20px" :style="{width:width1[index]+'px'}">
                    <div class="city">{{item.destination}}</div>
                    <div class="translate">——{{item.translate}}——</div>
                    <div class="mask" :style="{width:width1[index]+'px'}">
                        <div class="font">
                            <div>去看看</div>
                        </div>
                    </div>
                </div>
            </div>
            </div> -->
            
        </el-tab-pane>
        <el-tab-pane label="境外·港澳台酒店" name="second">
        <Hotel :HotelList="HotelList2"/>
            <!-- <div class="des">Popular destinations</div> -->
            <!-- <div class="flex">
                <div class="photo" v-for="(item,index) in DesList2" :key="index">
                <div class="image" @click="goscenic(item.destination)">
                    <img :src="item.img" alt="" class="img"  style="margin-right: 20px" :style="{width:width1[index]+'px'}">
                    <div class="city">{{item.destination}}</div>
                    <div class="translate">——{{item.translate}}——</div>
                    <div class="mask" :style="{width:width1[index]+'px'}">
                        <div class="font">
                            <div>Go and See</div>
                        </div>
                    </div>
                </div>
                
            </div>
            </div> -->
            
        </el-tab-pane>
    </el-tabs>
</div>
    <Footer />
</div>
</template>
<script>
import Header from "../components/header"
import Search from "../components/search"
import Hotel from "../components/hotel_content"
import Footer from "../components/footer"
export default {
    data(){
        return{
            Iscolor:true,
            Status:true,
            activeName1: 'first',
            activeName2: 'first',

            // activeIndex: '1',
            
            SearchList1:{
                content: '请输入酒店名称',
                search: '搜索'
            },
            SearchList2:{
                content: 'Please enter a hotel name',
                search:'Search'
            },
            HotelList1:{}
            [
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel1.jpg',
                    title: '维也纳酒店',
                    address: 'xxxxxxxx',
                    addr:"地址：",
                    money: '¥280',
                    star:3,
                    rate: 4.6,
                    comment: '--6条评论',
                    ticket:"24",
                    ticketet:"剩余房间数：",
                    qty:"预定数量",
                    buy:"查看详情"
                },
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel1.jpg',
                    name: 'Jinjianginn锦江之星',
                    address: 'xxxxxxxx',
                    money: '¥280',
                    star:3.5,
                    rate: 4.6,
                    comment: '--6条评论',
                },
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel1.jpg',
                    name:'汉庭酒店',
                    address: 'xxxxxxxx',
                    money: '¥280',
                    star:3,
                    rate: 4.6,
                    comment: '--6条评论',
                },
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel1.jpg',
                    name:'全季酒店',
                    address: 'xxxxxxxx',
                    money: '¥280',
                    star:4,
                    rate: 4.6,
                    comment: '--6条评论',
                },
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel1.jpg',
                    name:'亚朵酒店',
                    address: 'xxxxxxxx',
                    money: '¥280',
                    star:4.5,
                    rate: 4.6,
                    comment: '--6条评论',
                },
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel1.jpg',
                    name:'HNA海航酒店',
                    address: 'xxxxxxxx',
                    money: '¥280',
                    star:3,
                    rate: 4.6,
                    comment: '--6条评论',
                }
            ],
            HotelList2:[
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel0.jpg',
                    title: '三亚亚龙湾凯莱仙人掌度假酒店',
                    address: '三亚 亚龙湾 吉阳区亚龙湾国家旅游度假区',
                    addr:"地址：",
                    money: '¥530',
                    star:3,
                    rate: 4.6,
                    comment: '--6条评论',
                    ticket:"24",
                    ticketet:"剩余房间数：",
                    qty:"预定数量",
                    buy:"立即预定",
                    description:"酒店背依巍巍青山连绵起伏，面呈龙潭湖的碧波悠悠。"
                },
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel2.jpg',
                    address: 'xxxxxxxx',
                    money: '¥280',
                    star:4,
                    rate: 4.6,
                    comment: '--6条评论',
                },
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel2.jpg',
                    address: 'xxxxxxxx',
                    money: '¥280',
                    star:3,
                    rate: 4.6,
                    comment: '--6条评论',
                },
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel2.jpg',
                    address: 'xxxxxxxx',
                    money: '¥280',
                    star:3,
                    rate: 4.6,
                    comment: '--6条评论',
                },
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel2.jpg',
                    address: 'xxxxxxxx',
                    money: '¥280',
                    star:3,
                    rate: 4.6,
                    comment: '--6条评论',
                },
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel2.jpg',
                    address: 'xxxxxxxx',
                    money: '¥280',
                    star:3,
                    rate: 4.6,
                    comment: '--6条评论',
                },
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel2.jpg',
                    address: 'xxxxxxxx',
                    money: '¥280',
                    star:3,
                    rate: 4.6,
                    comment: '--6条评论',
                }
            ]
        }
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
    },
    components:{
      Header,
      Search,
      Hotel,
      Footer,
        },
}
</script>
<style scoped lang="less">
.line{
    height: 80px;
}
.recommend{
    padding: 0 3%;
    margin-top: 30px;
    margin-bottom: 10px;
    display: flex;
    justify-content:flex-start;
    align-items:center;
    .des{
    font-size: 20px;
    font-weight: 600;
    color: #636363;
    }
    .bar{
        margin-top:30px;
        margin-left: 15px;
        .el-menu.el-menu--horizontal{
            border-bottom: 0;
        }
        .el-menu--horizontal>.el-menu-item.is-active {
            border-bottom: 0;
            color: #409EFF;
        }
        
    }
}
</style>