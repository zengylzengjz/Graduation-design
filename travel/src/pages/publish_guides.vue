<template>
    <div class="publish_guides">
        <Header :Iscolor="Iscolor" :Status="Status"/>
        <div class="line"></div>
        <div class="title">
            <div class="input">
            <el-input v-model="input" placeholder="请为攻略取一个有趣的名字"></el-input>
            </div>
            <div>
            <img src="../assets/icon_travel.png" alt="" class="image">
            </div>
        </div>
        <div class="content">
            <div class="block">
                <el-timeline :reverse="reverse">
                    <el-timeline-item
                    v-for="(activity, index) in activities" :class="[!index?'color':'']"
                    :key="index"
                    :timestamp="activity.timestamp">
                    {{activity.content}}
                    </el-timeline-item>
                </el-timeline>
                </div>
            <!-- <div  v-for="(item,index) in PartList" :key="index" class="layout">
                <div>{{item}}</div>
            </div> -->
        </div>
        <div class="template">
            <div class="block">
                <el-timeline>
                    <el-timeline-item timestamp="Part 1" placement="top">
                    <el-card>
                        <div class="dis_flex">
                            <div class="el-icon-location-outline icon"></div>
                            <el-input v-model="input1" placeholder="请输入地点" ></el-input>
                        </div>
                        <div class="con_flex">
                            <div class="el-icon-notebook-1 icon"></div>
                            <el-input class="con_input"
                            type="textarea"
                            :rows="10"
                            placeholder="请输入内容"
                            v-model="textarea1">
                            </el-input>
                            <el-upload class="con_image"
                            onchange="false"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                        </div>
                    </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="Part 2" placement="top">
                    <el-card>
                        <div class="dis_flex">
                            <div class="el-icon-location-outline icon"></div>
                            <el-input v-model="input2" placeholder="请输入地点" ></el-input>
                        </div>
                        <div class="con_flex">
                            <div class="el-icon-notebook-1 icon"></div>
                            <el-input class="con_input"
                            type="textarea"
                            :rows="10"
                            placeholder="请输入内容"
                            v-model="textarea2">
                            </el-input>
                            <el-upload class="con_image"
                            onchange="false"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                        </div>
                    </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="Part 3" placement="top">
                    <el-card>
                        <div class="dis_flex">
                            <div class="el-icon-location-outline icon"></div>
                            <el-input v-model="input3" placeholder="请输入地点" ></el-input>
                        </div>
                        <div class="con_flex">
                            <div class="el-icon-notebook-1 icon"></div>
                            <el-input class="con_input"
                            type="textarea"
                            :rows="10"
                            placeholder="请输入内容"
                            v-model="textarea3">
                            </el-input>
                            <el-upload class="con_image"
                            onchange="false"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                        </div>
                    </el-card>
                    </el-timeline-item>
                </el-timeline>
                <div >
                    <el-row style="margin-left:60px;margin-bottom: 40px" >
                    <el-button type="primary" @click="check()" >确认发布</el-button>
                    <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible1"
                    width="30%"
                    :before-close="handleClose">
                    <span>确定要发布该旅游攻略吗？</span>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible1 = false">取 消</el-button>
                        <el-button type="primary" @click="refresh(),dialogVisible1 = false">确 定</el-button>
                    </span>
                </el-dialog>
                    </el-row>
                </div>
                
                

            </div>
        </div>
    </div>
</template>
<script>
import Header from "../components/header"
export default {
    data(){
        return{
            login_in:window.login_in,
            dialogVisible1: false,
            Iscolor:true,
            Status:true,
            input: '',
            input1: '',
            textarea1:'',
            input2: '',
            textarea2:'',
            input3: '',
            textarea3:'',
            dialogImageUrl: '',
            dialogVisible: false,
            PartList:["Part 1","Part 2","Part 3"],
            reverse: false,
            activities: [{
            content: 'Part 1',
            // timestamp: '2018-04-15'
            }, {
            content: 'Part 2',
            // timestamp: '2018-04-13'
            }, {
            content: 'Part 3',
            // timestamp: '2018-04-11'
            }]
        }
        
    },
    components:{
        Header
    },
    methods:{
        handleRemove(file, fileList) {
        // console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        // this.dialogImageUrl = file.url;
        // this.dialogVisible = true;
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      check(){
        if(!this.login_in){
            alert("请先登录本系统！");
            return;
        }
        if(!this.input||!this.textarea1||!this.input1||!this.input2||!this.input3||!this.textarea2||!this.textarea3){
            // console.log(this.dialogVisible);
            alert("请完善发布内容！");
            return;
        }
        else this.dialogVisible1=true;
        
        
    },
    refresh(){
        this.input="";
        this.input1="";
        this.input2="";
        this.input3="";
        this.textarea1="";
        this.textarea2="";
        this.textarea3="";
        
    }
    }
}
</script>
<style scoped lang="less">

.publish_guides{
    .line{
    height: 80px;
}
.title{
    background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
    width: 100%;
    height: 180px;
    display: flex;
    justify-content:center;
    align-items:center;
    .image{
        width: 100px;
        height: 100px;
        margin-left: 20px;
    }
    .input{
        width: 40%;
    }
}
.content{
    position: fixed;
    width: 16%;
    height: 20px;
    margin-top: 20px;
    &.color{
            color: #409EFF;
    }
    // .layout{
    //     display:flex;
    //     justify-content:flex-end;
    //     padding-right: 20px;
    //     padding-bottom: 40px;
    //     border-left: 2px solid #ccc;
    //     width: 30%;
    //     margin-left: 80px;
    // }
}
.template{
    margin-left: 16%;
    width:80%;
    .block{
        margin-top: 10px;
        .dis_flex{
            display: flex;
            .icon{
                margin-right: 10px;
                font-size: 20px;
                align-self: center;
            }
            .dis_input{
                background: #eee;
            }
        }
        .con_flex{
            display: flex;
            .icon{
                margin-right: 10px;
                font-size: 20px;
                align-self: flex-start;
                padding-top: 20px;
            }
            .con_input{
                // margin-left: 30px;
            }
            .con_image{
                align-self: center;
                .el-upload--picture-card{
                    width: 248px;
                    height: 248px;
                }
            }
        }
    }
}
}

</style>