<template>
<div class="search">
    <div class="title">{{SearchList.content}}</div>
    <input type="text" :placeholder="SearchList.content" class="input" >
    <el-row>
  <el-button type="primary" class="button">{{SearchList.search}}</el-button>
</el-row>
</div>
</template>
<script>
export default {
    props:['SearchList']
}
</script>
<style scoped lang="less">
.search{
    border-bottom: 2px solid #A6DFFA;
    height: 160px;
    margin: 2% 3% 20px 3%;
    padding: 2%;
    background-color: #fafafa;
    .title{
        font-size: 18px;
        font-weight: 600;
        color: #636363;
    }
    .input{
        margin-top: 2%;
        width: 90%;
        height: 40px;
        border: 1px solid #ccc;
        padding-left: 10px;
    }
    .button{
        margin-top: 30px;
        width: 140px;
    }

}
</style>