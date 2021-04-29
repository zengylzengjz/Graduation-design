<template>
    <div class="frame">
        <div class="sort">
            <div class="ways">{{sortList.way}}</div>
            <div class="dropdown">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            sortList:{
                way:'Sort Order'
            }
        }
    }
}
</script>
<style scoped lang="less">
.frame {
    .sort{
    margin:0 3%;
    background-color: #fafafa;
    height: 80px;
    padding: 0 2%;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    .ways{
        font-size: 18px;
        font-weight: 500;
        color: #636363;
        // height: 30px;
    }
}
.test{

}
}
</style>