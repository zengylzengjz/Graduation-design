<template>
<div class="framework">
    <div class="footer">
        <div class="module1_agency">
            <div class="title">{{FooterList.module1_agency.title}}
                <span>+</span>
            </div>
            <div class="title_two">{{FooterList.module1_agency.title_two}}</div>
            <div class="content">{{FooterList.module1_agency.content}}</div>
        </div>
        <div class="module2">
            <div class="title">{{FooterList.module2.title}}</div>
            <div class="content" v-for="(item,index) in FooterList.module2.content" :key="index">
                <div class="item">{{item}}</div>
                <div class="el-icon-arrow-right"></div>
            </div>
        </div>
        <div class="structure">
            <div class="module3" v-for="(item,index) in FooterList.module3.list" :key="index">
                <div class="title" :class="[index?'two':'']">{{item.title}}</div>
                <div class="content">{{item.content}}</div>
            </div>
        </div>
        <div class="module4">
            <div class="title">{{FooterList.module4.title}}</div>
            <div class="content">{{FooterList.module4.content}}</div>
            <div class="search"><input type="text" :placeholder="FooterList.module4.description" class="input">
            <el-row>
                <el-button type="primary" class="el-icon-right" style="height='50px'"></el-button>
            </el-row>
            </div>
        </div>
        
    </div>
    <div class="message">
        <div class="content">Copyright © 2021. ZengYanling 2017051603011</div>
    </div>
</div>
    
</template>
<script>
export default {
    data(){
        return {
            FooterList:{
                module1_agency: {
                    title:"Travel",
                    title_two:"Travel Agency",
                    content:"Aperiam adipisci dicta maiores sint ipsum magni repellat explicabo facere ducimus laboriosam minus ad debitis, tempora optio facilis, labore tempore sequi, necessitatibus.",
                },
                module2:{
                    title:"Links",
                    content:["Home","Scenic","Hotel","Share","Strategy","About"],
                },
                module3:{
                    list:[
                        {
                            title:"Get in Touch",
                            content:"+86 18875219087",
                        },
                        {
                            title:"Address",
                            content:"Chongqing Normal University,Chongqing",
                        },
                        {
                            title:"E-mail",
                            content:"2119037241@qq.com",
                        }
                    ],
                },
                module4:{
                    title:"Something Interested",
                    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae aspernatur omnis quisquam quis in autem necessitatibus.",
                    description:"search for interested news ...",
                }
            }

        }
    },
    props:[''],
}
</script>
<style scoped lang="less">
.framework{
    width:100%;
    height:500px;
    background-color: #A6DFFA;
    padding-top: 5px;
    color:white;
    .footer{
    width: 84%;
    height: 380px;
    // border: 1px solid red;
    padding: 2% 8% 0 8%;
    background-color:#849AAD;
    display: flex;
    .module1_agency{
        display: flex;
        flex-direction: column;
        width: 28%;
        margin-right:100px;
        .title{
            color: white;
            font-weight: 800;
            font-size: 40px;
            span{
                color: #A6DFFA;
            }
        }
        .title_two{
            color: #666;
            font-size: 20px;
            margin-bottom: 30px;
        }
        .content{
            color: #666;
            font-size: 18px;
            width: 240px;
        }
    }
    .module2{
        display: flex;
        flex-direction: column;
        width: 20%;
        margin-right: 115px;
        .title{
            color: white;
            font-weight: 800;
            font-size: 40px;
            margin-bottom: 10px;
        }
        .content{
            font-size: 20px;
            color: #666;
            margin-bottom: 20px;
            display: flex;
            border-bottom: 1px solid rgba(100,100,100,0.2);
            .item{
                padding-left: 5px;
            }
            .el-icon-arrow-right{
                margin-left: auto;
                padding-left: 5px;
            }
        }
        .content:hover{
            color: #3b7aac;
            // text-decoration:underline;
        }
    }
    .structure{
        display: flex;
        flex-direction: column;
        width: 32%;
        margin-right:84px;
        .module3{
        .title{
            color: white;
            font-weight: 800;
            font-size: 36px;
            margin-bottom: 10px;
            display: flex;
            flex-direction: column;
            &.two{
                font-size: 28px;
            }
        }
        .content{
            font-size: 20px;
            color: #666;
            margin-bottom: 20px;
        }
    }
    }
    .module4{
        display: flex;
        flex-direction: column;
        width: 24%;
        .title{
            color: white;
            font-weight: 800;
            font-size: 26px;
            margin-bottom: 30px;
            display: flex;
            flex-direction: column;
        }
        .content{
            font-size: 20px;
            color: #666;
            margin-bottom: 35px;
        }
            .search{
                display: flex;
                .input{
            width: 220px;
            height: 50px;
            background-color:#A6DFFA;
        }
        .el-icon-right{
            height: 55px;
        }
            }
    }
    
}
.message{
    padding-left: 8% ;
    font-size: 20px;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    height: 90px;
    .content{
        // vertical-align:center;
        // width: 200px;
    }
}
}

</style>