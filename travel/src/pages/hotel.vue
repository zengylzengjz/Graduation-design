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
                <el-tabs v-model="activeName2" @tab-click="handleClick">
                    <el-tab-pane label="三亚" name="1th">
                         <Hotel :HotelList="HotelList1"/>
                    </el-tab-pane>
                    <el-tab-pane label="上海" name="2th">
                        <Hotel :HotelList="HotelList1"/>
                    </el-tab-pane>
                    <el-tab-pane label="广州" name="3th">
                        <Hotel :HotelList="HotelList1"/>
                    </el-tab-pane>
                    <el-tab-pane label="深圳" name="4th">
                        <Hotel :HotelList="HotelList1"/>
                    </el-tab-pane>
                    <el-tab-pane label="成都" name="5th">
                        <Hotel :HotelList="HotelList1"/>
                    </el-tab-pane>
                    <el-tab-pane label="重庆" name="6th">
                        <Hotel :HotelList="HotelList1"/>
                    </el-tab-pane>
                    <el-tab-pane label="西安" name="7th">
                        <Hotel :HotelList="HotelList1"/>
                    </el-tab-pane>
                    <el-tab-pane label="长沙" name="8th">
                        <Hotel :HotelList="HotelList1"/>
                    </el-tab-pane>
                    <el-tab-pane label="厦门" name="9th">
                        <Hotel :HotelList="HotelList1"/>
                    </el-tab-pane>
                    <el-tab-pane label="杭州" name="10th">
                        <Hotel :HotelList="HotelList1"/>
                    </el-tab-pane>
                    <el-tab-pane label="更多" name="11th"><br><br>更多内容正在开放中<br><br><br>敬请期待<br><br><br><br></el-tab-pane>




                     
                </el-tabs>
            </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="境外·港澳台酒店" name="second">
        <Hotel :HotelList="HotelList2"/>
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
            activeName2: '1th',

            activeIndex: '1',
            
            SearchList1:{
                content: '请输入酒店名称',
                search: '搜索'
            },
            SearchList2:{
                content: 'Please enter a hotel name',
                search:'Search'
            },
            HotelList1:
            [
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
                    name: 'Jinjianginn锦江之星',
                    address: 'xxxxxxxx',
                    money: '¥280',
                    star:3.5,
                    rate: 4.6,
                    comment: '--6条评论',
                },
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel3.jpg',
                    name:'汉庭酒店',
                    address: 'xxxxxxxx',
                    money: '¥280',
                    star:3,
                    rate: 4.6,
                    comment: '--6条评论',
                },
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel4.jpg',
                    name:'全季酒店',
                    address: 'xxxxxxxx',
                    money: '¥280',
                    star:4,
                    rate: 4.6,
                    comment: '--6条评论',
                },
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel5.jpg',
                    name:'亚朵酒店',
                    address: 'xxxxxxxx',
                    money: '¥280',
                    star:4.5,
                    rate: 4.6,
                    comment: '--6条评论',
                },
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel6.jpg',
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
                    title: '亚龙湾凯莱仙人掌度假酒店',
                    address: '亚龙湾 吉阳区亚龙湾国家旅游度假区',
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
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel1.jpg',
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
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel6.jpg',
                    address: 'xxxxxxxx',
                    money: '¥280',
                    star:3,
                    rate: 4.6,
                    comment: '--6条评论',
                },
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel4.jpg',
                    address: 'xxxxxxxx',
                    money: '¥280',
                    star:3,
                    rate: 4.6,
                    comment: '--6条评论',
                },
                {
                    img: 'http://zengyl.dev.dxdc.net/travel_pic/pic/hotel5.jpg',
                    address: 'xxxxxxxx',
                    money: '¥280',
                    star:3,
                    rate: 4.6,
                    comment: '--6条评论',
                },
                
            ]
        }
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      
    },
    mounted(){
        document.body.scrollTop = document.documentElement.scrollTop = 0
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
    margin-left: 60px;
    margin-right: 40px;
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