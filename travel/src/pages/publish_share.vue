<template>
    <div class="publish_share">
        <Header :Iscolor="Iscolor" :Status="Status"/>
        <div class="line"></div>
        <div class="tabs">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="" disabled></el-tab-pane>
                <el-tab-pane label="发布分享" name="first">
                    <!-- <div class="description">上传图片</div> -->
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        list-type="picture">
                        <span class="title">旅游图片&nbsp;&nbsp;</span><el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                    <div class="theme">
                        <div class="texta">主题</div>
                    <div>
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                    <!-- <input type="请输入主题"> -->
                    </div>
                    <div class="theme">
                        <div class="texta">详细描述</div>
                        <div><el-input
                        type="textarea"
                        :rows="8"
                        placeholder="请输入内容"
                        v-model="textarea">
                        </el-input></div>
                    </div>
                    <div class="button">
                        <el-row>
                        <el-button type="primary">确认发布</el-button>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="个人发布" name="second">配置管理</el-tab-pane>
            </el-tabs>
        </div>
        <Footer />

    </div>
</template>
<script>
import Header from "../components/header"
// import Search from "../components/search"
import Footer from "../components/footer"
export default {
   data(){
       return {
           Iscolor:true,
           Status:true,
           activeName: 'first',
           fileList: [{name: 'travel.jpeg', url: 'https://www.jetsetter.com/wp-content/uploads/sites/7/2018/04/gvpne32F-1-1380x1035.jpeg'}],
           input: '',
           textarea:''
       }
   } ,
   methods: {
       handleClick(tab, event) {
        // console.log(tab, event);
      },
      handleRemove(file, fileList) {
        // console.log(file, fileList);
      },
      handlePreview(file) {
        // console.log(file);
      }
   },
   components:{
      Header,
    //   Search,
      Footer,
        },
   
}
</script>
<style lang="less">
.line{
    height: 80px;
}
.tabs{
    
    .el-tabs__content{
        margin: 2% 6%;
    }
    .description{

    }
    .el-upload-list--picture .el-upload-list__item{
        height: 300px;
    }
    .el-upload-list__item{
        width: 440px;
    }
    .el-upload-list--picture .el-upload-list__item-thumbnail{
        width: 390px;
        height: 280px;
        margin-right: 20px;
        // padding: 5% 0;
    }
    .el-upload-list--picture .el-upload-list__item.is-success .el-upload-list__item-name{
        margin-top: 100px;
        margin-left: 30px;
        width: 80px;
    }
    .title{
        color: #666;
    }
    .theme{
        display: flex;
        margin-top: 10px;
        align-items: center;
        .texta{
            margin-right: 20px;
            color: #666;
        }
        .el-input__inner{
            margin-left: 32px;
            width: 140%;
        }
        .el-textarea__inner{
            width: 470%;
        }
    }
    .button{
        margin-top:20px;
    }
}
</style>