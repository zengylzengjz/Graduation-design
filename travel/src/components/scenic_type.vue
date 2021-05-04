<template>
<div class="type">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="tab">
        <el-tab-pane :label="TypeList.typename" name="first" class="first_type">
            <div class="line1"></div>
            <div class="typelist" v-for="(item,index) in TypeList.type" :key="index">
                <div class="typelist_title" :class="index<TypeList.type.length-1?'border padding1':'padding2'">
                    <div class="text0">{{Scenic.title}}{{item.name}}</div>
                    <div class="text1">
                        <div>{{item.text1}}</div>
                        <div class="text2">{{item.text2}}</div>
                    </div>
                    <div class="detail">{{TypeList.detail}}</div>
                    <div class="el-icon-arrow-right icon_right"></div>
                    <div class="ticket_money">{{item.money}}</div>
                    <div class="ticket_button">
                        <!-- <el-row> -->
                            <el-button type="primary" @click="open">&nbsp;{{TypeList.order}}&nbsp;</el-button>
                        <!-- </el-row> -->
                    </div>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane :label="TypeList.commentname" name="second">
            <div class="part2">
                <div class="banner">
                    <div class="start">
                        <el-rate
                            v-model="TypeList.star"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}/5">
                        </el-rate>
                    </div>
                    <div class="comment" >
                        {{TypeList.comment.length}}{{TypeList.commentText}}
                    </div>
                </div>
                <div  v-for="(item,index) in TypeList.comment" :key="index">
                    <div class="comment_content">
                        <div class="comment_banner">
                            <div class="content_star">
                                <el-rate 
                                    v-model="item.star"
                                    disabled
                                    show-score
                                    text-color="#ff9900"
                                    font-size="12px"
                                    score-template="">
                                </el-rate>
                            </div>
                            <div class="name">{{item.name}}</div>
                            <div class="time">{{item.time}}</div>
                        </div>
                        <div class="cont">
                            {{item.comment}}
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </el-tab-pane>
    </el-tabs>
</div>
    
</template>
<script>
export default {
    data(){
        return{
            activeName: 'first',
            value: 3.7
        }
    },
    props:['TypeList','Scenic'],
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }

    },
    mounted(){
        console.log(this.TypeList);
        console.log(this.Scenic);
    }
}
</script>
<style  lang="less">
.type{
    margin: 3% 7%;
}
.typelist{
    margin: 0 3%;
    display: flex;
}
.first_type{
border-bottom: 1px solid #E4E7ED;
border-left: 1px solid #E4E7ED;
border-right: 1px solid #E4E7ED;
}
.line1{
    height: 10px;
}
.typelist_title{
display: flex;
width: 100%;
position: relative;
}
.text0{
padding-top: 20px;
}
.text1{
    position: absolute;
    padding-top:6px;
    left: 42%;
    font-size: 14px;
    // margin-left: 60px;
}
.text2{
    text-align: center;
    color: #4da7b7;
    border: 1px solid rgba(23,164,189,0.5);
    font-size: 12px;
    margin-top: 5px;
}
.detail{
    color: #4da7b7;
    font-size: 12px;
    position: absolute;
    left: 62%;
    margin-top: 21px;
    // align-self: center;
}

.icon_right{
    color: #4da7b7;
    font-size: 12px;
    position: absolute;
    left: 64%;
    margin-top: 24px;
    margin-left: 2px;
}
.ticket_money{
    position: absolute;
    left: 74%;
    padding-top:13px;
    color: #f60;
    font-size: 20px;
}
.ticket_button{
margin-left: auto;
margin-top: 10px;
margin-right: 10px;
}
&.padding1{
padding-bottom: 20px;
}
&.padding2{
    padding-bottom: 25px;
}
&.border{
    border-bottom: 1px dashed #999;
}
.el-tabs__item{
width: 120px;
text-align: center;
}
.el-tabs__header{
    margin: 0;
}
.part2{
border-left: 1px solid #E4E7ED;
border-right: 1px solid #E4E7ED;
border-bottom: 1px solid #E4E7ED;
.banner{
    border-bottom: 1px solid #E4E7ED;
    height:80px;
    display: flex;
    justify-content:center;
    align-items:center;
    .start{
        // font-size:30px;
    }
    .comment{
        color: #888;
        font-size: 16px;
        margin-left: 30px;
        margin-top: 14px;
    }
}
.comment_content{
    padding-top: 10px;
    padding-left: 5px;
    border-bottom: 1px dashed #999;
    .comment_banner{
        display: flex;
    .el-rate__icon{
    font-size: 16px;
    margin-right: 0px;
}
.name{
    margin-left: 40px;
    color: #555;
}
.time{
    margin-left: 40px;
    color: #888;
}
    }
    .cont{
        padding-top: 20px;
        font-size: 14px;
    }
}
}
.el-rate__icon{
    font-size: 35px;
}
.el-rate__text{
    font-size: 20px;
}

</style>