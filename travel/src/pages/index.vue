<template>
<div>
    <Header :ClickList="ClickList"/>
    
    <Banner :BannerList="BannerList"/>
</div>



</template>
<script>
import Header from "../components/header"
import Banner from "../components/banner"
import Footer from "../components/footer"
export default {
    data(){
        return{
            ClickList:["主页","景点","酒店","分享","攻略","关于"],
            BannerList:[
                {
                    image: "http://zengyl.dev.dxdc.net/travel_pic/pic/7.jpg",
                    title: "testtest",
                    content: "fghjkl;rtyuiop;gbhnjmk,l",
                },
                {
                    image: "http://zengyl.dev.dxdc.net/travel_pic/pic/6.jpg",
                    title: "testtest",
                    content: "fghjkl;rtyuiop;gbhnjmk,l",
                },
                {
                    image: "http://zengyl.dev.dxdc.net/travel_pic/pic/5.jpg",
                    title: "testtest",
                    content: "fghjkl;rtyuiop;gbhnjmk,l",
                }
            ],
        }
    },
  components:{
      Header,
      Banner,
      Footer
        },
    mounted(){
    }
}
</script>