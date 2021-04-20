<template>
<div>
    <Header :ClickList="ClickList"/>
    <Banner :BannerList="BannerList"/>
    <Provide :ProvideList="ProvideList"/>
    <Destination :DestinationList="destinationList"/>
    <Hotel :HotelList="HotelList"/>
</div>



</template>
<script>
import Header from "../components/header"
import Banner from "../components/banner"
import Footer from "../components/footer"
import Provide from "../components/provide"
import Destination from "../components/destination"
import Hotel from "../components/hotel"
export default {
    data(){
        return{
            ClickList:["主页","景点","酒店","分享","攻略","关于"],
            BannerList:[
                {
                    show_image: "http://zengyl.dev.dxdc.net/travel_pic/pic/7.jpg",
                    title: "Welcome to the travel",
                    content: "Now,you will have the best time to travel with us",
                },
                {
                    show_image: "http://zengyl.dev.dxdc.net/travel_pic/pic/6.jpg",
                    title: "The big big world",
                    content: "The happy happy you and me",
                },
                {
                    show_image: "http://zengyl.dev.dxdc.net/travel_pic/pic/5.jpg",
                    title: "Have Fun,baby",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Performance takes a lot mass nutrition in the United States but as propaganda. Financing smile or a salad of mourning until a propaganda cartoon computer.",
                }
            ],
            ProvideList:{
                title: "Services we Provide",
                content:"Wise to make the distinction between pain and the pain was worthy of flattery point the accusing body except the truth? Of these, 'it is the smallest of all loosened.",
                list:[
                    {
                        number:"01",
                        title_copy:"Select Destination",
                        content_copy:"We help you to choose the best destination reservation consectetur adipisicing elit.Is held the wise, the smallest of them, for he fled to attain, by the law of Commodus."
                    },
                    {
                        number: "02",
                        title_copy: "Scenic Spot",
                        content_copy:"If the first thing you plan on a trip is your meals, we feel you. It's pretty much at the top of every  travelers‘ must-do list, whether visiting America, Europe, Asia or beyond."
                    },
                    {
                        number:"03",
                        title_copy: "Hotel Booking",
                        content_copy:"Lisbon is often overlooked as a prime European dining destination but, trust us, has no shortage of delicious food. To help organize your culinary tour, we’ve put together a list of the most iconic dishes and where to try them."
                    },
                    {
                        number: "04",
                        title_copy: "Amazing Tour",
                        content_copy:"We help you to choose the best destination reservation consectetur adipisicing elit.Is held the wise, the smallest of them, for he fled to attain, by the law of Commodus."
                    },
                    {
                        number: "05",
                        title_copy: "Travel sharing",
                        content_copy:"If the first thing you plan on a trip is your meals, we feel you. It's pretty much at the top of every  travelers‘ must-do list, whether visiting America, Europe, Asia or beyond."
                    },
                    {
                        number: "06",
                        title_copy: "About us",
                        content_copy:"We help you to choose the best destination reservation consectetur adipisicing elit.Is held the wise, the smallest of them, for he fled to attain, by the law of Commodus."
                    }
                ]
            },
        destinationList:{
                des_title_copy: "Populor Destinations",
                des_content_copy:"Wise to make the distinction between pain and the pain was worthy of flattery point the accusing body except the truth? Of these, 'it is the smallest of all loosened.",
                des_click_copy:"All Destination",
                list:[
                    {
                    img: "http://zengyl.dev.dxdc.net/travel_pic/pic/7.jpg",
                    name: "Chongqing",
                    description: "Chongqing, a mountain city, is also a river city, unlike the north of the rugged and the delicate jiangnan is too much, its natural pity is guarding a unique southwest of the Qingwan excellence.",
                    scenic: 5,
                    recommend:5,
                    reviews:10,
                    },
                    {
                    img: "http://zengyl.dev.dxdc.net/travel_pic/pic/4.jpg",
                    name: "Tibet Nyingchi",
                    description: "Clouds in the sky of Tibet Nyingchi, Qianshan dusk snow peach forest. Nyingchi boasts snow-capped mountains, flowers, clouds, streams, and scenery everywhere.",
                    scenic: 7,
                    recommend:4,
                    reviews:18,
                    },
                    {
                    img: "http://zengyl.dev.dxdc.net/travel_pic/pic/6.jpg",
                    name: "Tokyo",
                    description: "Tokyo, a larger-than-life metropolis, always has a touch of tradition behind the bustling commercial streets and all kinds of fashionable buildings.",
                    scenic: 9,
                    recommend:5,
                    reviews:6,
                    },
                ]
            
        },
        HotelList: {
                hotel_title_copy: "Comfortable Hotel",
                hotel_content_copy:"Wise to make the distinction between pain and the pain was worthy of flattery point the accusing body except the truth? Of these, 'it is the smallest of all loosened.",
                list:[
                    {
                        img:"http://zengyl.dev.dxdc.net/travel_pic/pic/hotel1.jpg",
                        name:"Bailian Resort Hotel",
                        price:"2800",
                        start:5,
                        addr:"Chongqing",
                    },
                    {
                        img:"http://zengyl.dev.dxdc.net/travel_pic/pic/hotel2.jpg",
                        name:"Banyan Tree",
                        price:"2000",
                        start:4,
                        addr:"Jiuzhaigou",
                    },
                    {
                        img:"http://zengyl.dev.dxdc.net/travel_pic/pic/hotel3.jpg",
                        name:"Phoenix Island Resort Hotel",
                        price:"1800",
                        start:5,
                        addr:"Sanya",
                    },
                    {
                        img:"http://zengyl.dev.dxdc.net/travel_pic/pic/hotel4.jpg",
                        name:"Puxiu Snow Mountain Hotel",
                        price:"2200",
                        start:4,
                        addr:"Lijiang",
                    },
                    {
                        img:"http://zengyl.dev.dxdc.net/travel_pic/pic/hotel5.jpg",
                        name:"Hilton Bali Resort",
                        price:"1200",
                        start:4,
                        addr:"Bali",
                    },
                    {
                        img:"http://zengyl.dev.dxdc.net/travel_pic/pic/hotel6.jpg",
                        name:"Baiyoke Sky Hotel",
                        price:"800",
                        start:3,
                        addr:"Bangkok",
                    },
                ]
        }
        }
    },
  components:{
      Header,
      Banner,
      Footer,
      Provide,
      Destination,
      Hotel
        },
    mounted(){
    }
}
</script>