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
                            <el-input v-model="input" placeholder="请输入地点" ></el-input>
                        </div>
                        <div class="con_flex">
                            <div class="el-icon-notebook-1 icon"></div>
                            <el-input class="con_input"
                            type="textarea"
                            :rows="10"
                            placeholder="请输入内容"
                            v-model="textarea">
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
                            <el-input v-model="input" placeholder="请输入地点" ></el-input>
                        </div>
                        <div class="con_flex">
                            <div class="el-icon-notebook-1 icon"></div>
                            <el-input class="con_input"
                            type="textarea"
                            :rows="10"
                            placeholder="请输入内容"
                            v-model="textarea">
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
                            <el-input v-model="input" placeholder="请输入地点" ></el-input>
                        </div>
                        <div class="con_flex">
                            <div class="el-icon-notebook-1 icon"></div>
                            <el-input class="con_input"
                            type="textarea"
                            :rows="10"
                            placeholder="请输入内容"
                            v-model="textarea">
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
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../components/header"
export default {
    data(){
        return{
            Iscolor:true,
            Status:true,
            input: '',
            textarea:'',
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