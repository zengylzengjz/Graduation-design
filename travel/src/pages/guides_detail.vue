<template>
    <div class="guides_detail">
        <Header :Iscolor="Iscolor" :Status="Status"/>
        <div class="line"></div>
        <div class="tabs">
            <div class="nav">
                <div class="list" v-for="(item,index) in destination" :key="index">
                    <div class="item" @click="go(item)" :class="[!index?'color':'']">{{item}}</div>
                </div>
            </div>
            <div class="content">
                <div class="type">TRIP IDEAS</div>
                <div class="title">
                    Where to Go in Ireland: The 5 Destinations You Must Visit
                </div>
                <div class="description">Ireland isn't just about historic sights, ancient castles, and lots of green (though there's more than enough of that to go around). Right now, the tiny country is embracing all things local in the form of trendy cafés, design hotels, craft cocktails, and world-class cuisine. Whether you’re headed to Dublin to party, Kilkenny to sightsee, or Galway for fabulous food, Ireland’s top destinations are better than they’ve ever been.</div>
                <div class="author">
                    <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="By ZengYanling April 20，2021" name="1">
                        <div>ZengYanling,Chongqing Normal University, 2017051603011
                        </div>
                        <div>e-mail:2119037241@qq.com</div>
                    </el-collapse-item>
                    </el-collapse>
                </div>
                <div class="detail" v-for="(item,index) in DetailList" :key="index">
                    <div :id="item.addr" class="addr">{{item.addr}}</div>
                        <img :src="item.img" alt="" class="image">
                    <div class="introduce">{{item.introduce}}</div>
                </div>
            </div>
        </div>
        <!-- <Footer /> -->
    </div>
</template>
<script>
import Header from "../components/header"
import Footer from "../components/footer"
export default {
    data(){
        return{
           Iscolor:true,
           Status:true,
           tabPosition: 'left',
           activeNames: ['0'],
           destination:["Dublin","Kilkenny","Cork","Doolin/Cliffs of Moher","Galway"],
           DetailList:[
               {
                   addr:"Dublin",
                   img: "https://www.jetsetter.com/wp-content/uploads/sites/7/2018/04/DGKRgnLq-1380x1035.jpeg",
                   introduce:"It’s taken time, but the country’s gritty capital has evolved into one of the hippest cities in Europe. One can’t visit Dublin without exploring Trinity College’s campus, with its imposing buildings and statues of its lauded graduates, or making time for a tour of the Guinness Storehouse, whose well-executed displays on old Dublin’s cobbled streets and factory buildings—not to mention a pint of what they say is the best-tasting Guinness in the world—is worth the entry fee. "
               },
               {
                   addr:"Kilkenny",
                   img:"https://www.jetsetter.com/wp-content/uploads/sites/7/2018/04/9YtqZbHx-1380x1035.jpeg",
                   introduce:"History buffs will find everything they’re looking for in Kilkenny. About halfway between Dublin and Cork, this medieval town might be best known as the home of Kilkenny Castle, a dramatic 12th-century fortress whose interiors have been fully (and beautifully) restored and are open to the public."
               },
               {
                   addr:"Cork",
                   img:"https://www.jetsetter.com/wp-content/uploads/sites/7/2018/04/syvhf5Xn-1380x1035.jpeg",
                   introduce:"Ireland’s third-largest city has charm to spare—not least in its unique waterways, youthful vibe, and the passion locals have for their Gaelic football and hurling teams. Before a day of sightseeing, caffeine up at Filter café on Georges Quay, which does top-notch pour-overs using Irish-roasted beans, then head to the stalls of the 18th-century Old English Market for a hearty sampling of Irish cheeses, locally caught fish, scones, and more. "
               },
               {
                   addr:"Doolin/Cliffs of Moher",
                   img:"https://www.jetsetter.com/wp-content/uploads/sites/7/2018/04/sfXd5OFz-1380x1035.jpeg",
                   introduce:"Western Ireland is arguably the country’s most beautiful region, home to some of the world’s best scenery. It’s here you’ll find the majestic Cliffs of Moher, which draw endless visitors (and grace countless postcards) thanks to its sweeping vistas of where land meets sea. "
               },
               {
                   addr:"Galway",
                   img:"https://www.jetsetter.com/wp-content/uploads/sites/7/2018/04/bdXb-xIn-1380x1035.jpeg",
                   introduce:"Waterside Galway is Ireland’s bohemian hub, home to brightly colored cafés and pubs, gaggles of study-abroad students, and a youthful, vibrant energy that’s impossible to resist."
               }
           ]
        }
    },
    methods: {
        handleChange(val) {
        // console.log(val);
      },
      go(item){

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
    margin: 2%;
    height: 100%;
    // height: 4300px;
    .nav{
        position: fixed;
        width: 14%;
        
        .list{
        display: flex;
        flex-direction: columns;
        text-align: right;
        .item{
            height: 60px;
            padding-right: 20px;
            border-right: 1px solid #999;
            width: 100%;
            &.color{
            color: #409EFF;
        }
        }
        
        .item:hover{
            color: #409EFF;
        }
        }
    }
    .content{
        margin-left: 18%;
        // height: 720px;
        .type{
            font-size: 18px;
        }
        .title{
            margin-top: 16px;
            font-size: 48px;
            font-weight: 600;
            width: 80%;
        }
        .description{
            margin-top: 20px;
            font-size: 18px;
            width: 90%;
            color: #999;
        }
        .author{
            margin-top: 20px;
            color: #666;
            width: 90%;
        }
    }
    .detail{
        // display: flex;
        margin-top: 20px;
        .addr{
            padding-top: 20px;
            font-size: 28px;
            font-weight: 600;
            color: #409EFF;
            margin-bottom: 30px;
        }
        .image{
            
            height: 400px;
            width: 600px;
        }
        .introduce{
            margin-top: 30px;
            width: 75%;
            // text-align: center;
        }
    }
}

</style>