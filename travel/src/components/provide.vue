<template>
    <div class="provides">
        <div class="title">{{ProvideList.title}}</div>
        <div class="content">{{ProvideList.content}}</div>
        <div class="dec">
            <div class="list" v-for="(item,index) in ProvideList.list" :key="index">
            <div class="first">
                <div class="number">{{item.number}}</div>
                <div class="title_copy">{{item.title_copy}}</div>
            </div>
            
            <div class="content_copy">{{item.content_copy}}</div>
        </div>
        </div>
        
    </div>
</template>
<script>
export default {
    props:['ProvideList'],
    mounted(){
        // console.log(this.ProvideList);
    }
}
</script>
<style scoped lang="less">
.provides{
    margin-top: 60px;
    text-align: center;
    .title{
        font-size: 50px;
        margin-bottom: 20px;
    }
    .content{
        margin-top: 30px;
        padding:0 20% 2% 20%;
        color: #757575;
    }
    .dec{
        display:flex;
        flex-wrap: wrap;
        .list{
            padding:2% 5%;
            width:326px;
            .first{
                display:flex;
                align-items: center;
                padding-bottom: 20px;
                .number{
                    display: flex;
                    justify-content:center;
                    align-items:center;
                    width:50px;
                    height:50px;
                    background:#849AAD;
                    color: white;
                    font-size: 24px;
                }
                .title_copy{
                    font-size: 30px;
                    margin: auto 0 auto 20px;
                }
                .title_copy:hover{
                    color: #849AAD;
                }
            }
            .content_copy{
                    height: 130px;
                    width: 400px;
                    overflow: hidden;
                    color:#757575;
                }
        }
    }
}
</style>