<template>
    <div class="about">
        <div class="top">{{AboutList.aboutTop}}</div>
        <div class="title">{{AboutList.aboutTitle}}</div>
        <div class="button">
            <div class="content">
                <el-collapse   @change="handleChange" v-for="(item,index) in AboutList.list" :key="index" class="content1">
                <el-collapse-item :title="item.question" name="index" class="content2">
                    <div class="answer">{{item.answer}}</div>
                </el-collapse-item>
                </el-collapse>
            </div>
            <div class="pic"></div>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
      return {
        //   activeNames: ['0']
      };
    },
    props:['AboutList'],
    methods: {
      handleChange(val) {
        // console.log(val);
      }
    }
}
</script>
<style  lang="less">
.about{
    padding: 0 5%;
    margin-bottom: 50px;
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
    .button{
        display: flex;

        .content{
        padding: 0 0 0 10%;
        width: 40%;
        padding-top: 25px;
        .content1{
            margin-bottom: 20px;
            .content2{
            }
        }
    }  
    .pic{
        background-image: url(../assets/3.png);
        width: 500px;
        height: 440px;
        background-size: 100% 100%;
        margin-top: 20px;
        margin-left: 15px;
    }
    }
    
    }
    
    
.el-collapse-item__header{
    height: 60px !important;
    font-size: 18px;
    padding-left: 10px;
    background-color: #eee;
    // padding-right: 40px;
}
.el-collapse-item__header:hover{
    color: #849AAD;
}
.el-collapse-item__header.focusing:focus:not(:hover){color:#303133}
.el-collapse-item__content{
    padding-left: 10px;
    padding-top: 15px;
}
</style>