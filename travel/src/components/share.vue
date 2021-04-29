<template>
    <div class="share">
        <div class="top">{{ShareList.sharetop}}</div>
        <div class="title">{{ShareList.shareTitle}}</div>
  <el-carousel :interval="4000" type="card" height="350px" class="card">
    <el-carousel-item v-for="(item,index) in ShareList.list" :key="index" class="card_img" :style="{'background-image':'url('+item.img+')'}">
        <div class="photo" >
            <div class="content">{{item.content}}</div>
            <div class="username">--{{item.username}}</div>
        </div>
    </el-carousel-item>
  </el-carousel>
    </div>
</template>
<script>
export default {
    props:['ShareList'],
    mounted(){
        console.log(this.ShareList);
    }
}
</script>
<style scoped lang="less">
.share{
    padding: 0 5%;
    margin-bottom: 80px;
    .top{
        color: #fc5b62;
        text-align: center;
        font-size: 12px;
        margin-bottom: 6px;
    }
    .title{
        font-size: 40px;
        text-align: center;
        margin-bottom: 20px;
        padding: 0 20%;
    }
    .card{
        background-color: rgba(0,0,0,0.8);
        // margin: 0 5%;
        .card_img{
            background-size: 100% 100%;
            display: flex;
            flex-direction: column;
            justify-content:flex-end;
            .photo{
                height: 100%;
                background-color: rgba(0,0,0,0.1);
                color:white;
                display: flex;
                flex-direction: column;
                justify-content:flex-end;
                .content{
                    text-align: center;
                    padding: 0 1% 8px 1%;
                }
                .username{
                    margin-left: auto;
                    padding-right: 15px;
                    padding-bottom: 4px;
                }
            }
        }
        
    }
    .card:hover{
        background-color: rgba(0,0,0,0.8);
    }
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>