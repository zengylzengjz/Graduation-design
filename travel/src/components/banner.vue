<template>
<div>
    <div>
    <el-carousel trigger="click" height="790px">
      <el-carousel-item v-for="(item,index) in BannerList" :key="index">
          <div class="banner" :style="{'background-image':'url('+item.show_image+')'}">
              <div class="container">
                  <div class="title">{{item.title}}</div>
                  <div class="content">{{item.content}}</div>
              <div>
    <el-row class="button">
        <el-button type="success" round class="decoration">GET STARTED</el-button>
    </el-row>
                  </div>
              </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>


</div>

    
</template>
<script>
export default {
    props:['BannerList'],
    mounted(){
        // console.log(this.BannerList);
    }
}
</script>
<style scoped lang="less">
.banner {
    height: 790px;
    width: 100%;
    color: white;
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(0,0,0,0.1); //opacity
        height: 790px;
        width: 100%;
    .title {
        padding-top: 15%;
        color: white;
        font-size: 60px;
        padding-bottom: 20px;
    }
    .content {
        color: white;
        font-weight: 300;
        padding: 0 20%;
    }
    }
    
}
.button{
    padding-top: 35%;
    .decoration{
        background-color: #849AAD;
        border-color:#849AAD;
        height: 60px;
        width: 200px;
        font-size: 20px;
    }
}
</style>