<template>
<div>
<Header :Iscolor="Iscolor" :Status="Status"/>
<div class="line"></div>
<div class="tabs">
    <el-tabs v-model="activeName" @tab-click="handleClick" >
        <el-tab-pane label="" disabled></el-tab-pane>
        <el-tab-pane label="国内目的地" name="first">
            <Search :SearchList="SearchList1"/>
            <div class="des">热门目的地</div>
            <div class="flex">
                <div class="photo" v-for="(item,index) in DesList1" :key="index">
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
            </div>
            
        </el-tab-pane>
        <el-tab-pane label="境外·港澳台目的地" name="second">
            <Search :SearchList="SearchList2"/>
            <div class="des">Popular destinations</div>
            <div class="flex">
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
            </div>
            
        </el-tab-pane>
    </el-tabs>
</div>




<Footer />
</div>
</template>
<script>
import Header from "../components/header"
import Footer from "../components/footer"
import Search from "../components/search"
export default {
    data(){
        return{
            Iscolor:true,
            Status:true,
            activeName: 'first',
            SearchList1:{
                content: '请输入目的地名称',
                search: '搜索'
            },
            SearchList2:{
                content: 'Please enter a destination name',
                search:'Search'
            },
            width1:[380,780,380,380,380,780,380],
            DesList1:[
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/9.jpg",
                    destination:'测试',
                    translate:'test'
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/8.jpg",
                    destination:'测试',
                    translate:'test'
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/7.jpg",
                    destination:'测试',
                    translate:'test'
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/6.jpg",
                    destination:'测试',
                    translate:'test'
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/5.jpg",
                    destination:'测试',
                    translate:'test'
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/4.jpg",
                    destination:'测试',
                    translate:'test'
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/3.jpg",
                    destination:'测试',
                    translate:'test'
                }
            ],
            DesList2:[
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/1.jpg",
                    destination:'test',
                    translate:'测试'
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/2.jpg",
                    destination:'test',
                    translate:'测试'
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/3.jpg",
                    destination:'test',
                    translate:'测试'
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/4.jpg",
                    destination:'test',
                    translate:'测试'
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/5.jpg",
                    destination:'test',
                    translate:'测试'
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/6.jpg",
                    destination:'test',
                    translate:'测试'
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/7.jpg",
                    destination:'test',
                    translate:'测试'
                }
            ]
        }
    },
    methods: {
      goscenic(des){
        this.$router.push({
        name: 'scenic',
        params: {destination:des},
      })
      },
      handleClick(tab, event) {
        // console.log(tab, event);
      }
    },
    components:{
      Header,
      Search,
      Footer,
        },
}
</script>
<style  lang="less" scoped>
.line{
    height: 80px;
}
.des{
    padding: 0 5% 0 8%;
    font-size: 26px;
    font-weight: 600;
    color: #636363;
    margin-top: 30px;
    margin-bottom: 10px;
}
.flex{
    display: flex;
    flex-wrap: wrap;
    padding: 0 8%;
  .photo{
    margin-top: 10px;
        .image{
             position: relative;
             height: 320px;
             background-size: 100% 100%;
            .img{
             height: 320px;
                background-size: 100% 100%;
                border-radius: 15px;
    }
    .city{
        z-index: 10;
        position: absolute;
        top: 110px;
        color: white;
        font-size: 36px;
        width: 96%;
        text-align: center;
    }
    .translate{
        z-index: 10;
        position: absolute;
        top: 155px;
        color: white;
        font-size: 14px;
        width: 96%;
        text-align: center;
    }
    .mask{
            position: absolute;
            height: 320px;
            top: 0;
            left: 0;
            background-color: rgba(0,0,0,0.4);
            color:white;
            opacity: 0;
            border-radius: 15px;
            display:flex;
            justify-content: center;
            align-items: center;
            .font{
                border: 2px solid white;
                height: 40px;
                width: 100px;
                display:flex;
                justify-content: center;
                align-items: center;
                margin-top: 90px;
            }
        }
    .mask:hover{
        opacity: 1;
    }
        }
    
    .margin{
        width: 20px;
    }
    }  
}

    
    

</style>