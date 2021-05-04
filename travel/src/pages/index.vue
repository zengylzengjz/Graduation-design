<template>
<div>
    <Header :Iscolor="Iscolor" :Status="Status"/>
    <Banner :BannerList="BannerList"/>
    <Provide :ProvideList="ProvideList"/>
    <Destination :DestinationList="destinationList"/>
    <Hotel :HotelList="HotelList"/>
    <Share :ShareList="ShareList"/>
    <Guides :GuidesList="GuidesList"/>
    <About :AboutList="AboutList"/>
    <Footer />
</div>



</template>
<script>
import Header from "../components/header"
import Banner from "../components/banner"
import Provide from "../components/provide"
import Destination from "../components/destination"
import Hotel from "../components/hotel"
import Share from "../components/share"
import Guides from "../components/guides"
import About from "../components/about"
import Footer from "../components/footer"

export default {
    data(){
        return{
            Iscolor:true,
            Status:true,
            // ClickList:["主页","景点","酒店","分享","攻略","关于"],
            BannerList:[
                {
                    show_image: "http://zengyl.dev.dxdc.net/travel_pic/pic/1.jpg",
                    title: "Welcome to the travel",
                    content: "Now,you will have the best time to travel with us",
                },
                {
                    show_image: "http://zengyl.dev.dxdc.net/travel_pic/pic/2.jpg",
                    title: "The big big world",
                    content: "The happy happy you and me",
                },
                {
                    show_image: "http://zengyl.dev.dxdc.net/travel_pic/pic/4.jpg",
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
                        title_copy: "Travel sharing",
                        content_copy:"If the first thing you plan on a trip is your meals, we feel you. It's pretty much at the top of every  travelers‘ must-do list, whether visiting America, Europe, Asia or beyond."
                    },
                    {
                        number: "05",
                        title_copy: "Amazing Tour",
                        content_copy:"We help you to choose the best destination reservation consectetur adipisicing elit.Is held the wise, the smallest of them, for he fled to attain, by the law of Commodus."
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
                    img: "http://zengyl.dev.dxdc.net/travel_pic/pic/Chongqing.jpg",
                    name: "Chongqing",
                    description: "Chongqing, a mountain city, is also a river city, unlike the north of the rugged and the delicate jiangnan is too much, its natural pity is guarding a unique southwest of the Qingwan excellence.",
                    scenic: 5,
                    recommend:5,
                    reviews:10,
                    },
                    {
                    img: "http://zengyl.dev.dxdc.net/travel_pic/pic/Nyingchi.jpg",
                    name: "Tibet Nyingchi",
                    description: "Clouds in the sky of Tibet Nyingchi, Qianshan dusk snow peach forest. Nyingchi boasts snow-capped mountains, flowers, clouds, streams, and scenery everywhere.",
                    scenic: 7,
                    recommend:4,
                    reviews:18,
                    },
                    {
                    img: "https://www.jetsetter.com/wp-content/uploads/sites/7/2018/04/6bDcjYHc-1380x690.jpeg",
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
                        price:"From ¥2800",
                        star:5,
                        addr:"Chongqing",
                    },
                    {
                        img:"http://zengyl.dev.dxdc.net/travel_pic/pic/hotel2.jpg",
                        name:"Banyan Tree",
                        price:"From ¥2000",
                        star:4,
                        addr:"Jiuzhaigou",
                    },
                    {
                        img:"http://zengyl.dev.dxdc.net/travel_pic/pic/hotel3.jpg",
                        name:"Phoenix Island Resort Hotel",
                        price:"From ¥1800",
                        star:5,
                        addr:"Sanya",
                    },
                    {
                        img:"http://zengyl.dev.dxdc.net/travel_pic/pic/hotel4.jpg",
                        name:"Puxiu Snow Mountain Hotel",
                        price:"From ¥2200",
                        star:4,
                        addr:"Lijiang",
                    },
                    {
                        img:"http://zengyl.dev.dxdc.net/travel_pic/pic/hotel6.jpg",
                        name:"Baiyoke Sky Hotel",
                        price:"From ¥800",
                        star:3,
                        addr:"Bangkok",
                    },
                    {
                        img:"http://zengyl.dev.dxdc.net/travel_pic/pic/hotel5.jpg",
                        name:"Hilton Bali Resort",
                        price:"From ¥1200",
                        star:4,
                        addr:"Bali",
                    },
                ]
        },
        ShareList: {
            sharetop:"Hot Share",
            shareTitle:"What Our Relaxed Customers Share About Travel",
            list:[
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/1.jpg",
                    title:"",
                    content:"Sapiente dolorum distinctio facere quod ipsam doloremque dignissimos blanditiis soluta est accusamus corporis rerum veritatis nisi! Harum, tenetur minima soluta.",
                    city:"",
                    username:"zeng zeng zeng",
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/2.jpg",
                    title:"",
                    content:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit.",
                    city:"",
                    username:"Rachel",
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/3.jpg",
                    title:"",
                    content:"",
                    city:"",
                    username:"zeng zeng zeng",
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/4.jpg",
                    title:"",
                    content:"",
                    city:"",
                    username:"zeng zeng zeng",
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/5.jpg",
                    title:"",
                    content:"",
                    city:"",
                    username:"zeng zeng zeng",
                },
                {
                    img:"http://zengyl.dev.dxdc.net/travel_pic/pic/6.jpg",
                    title:"",
                    content:"",
                    city:"",
                    username:"zeng zeng zeng",
                },
            ]
        },
        GuidesList:{
            GuideTitle:"TRIP IDEAS",
            GuideTitle_min:"Trip Ideas",
            GuideDescription:"Not sure where to go next? We’ve got everything you need to inspire your next great getaway, from long weekend escapes in China to must-see cities in Europe to bucket-list adventures in Africa and beyond. Get packing.",
            GuideImg:"http://zengyl.dev.dxdc.net/travel_pic/pic/banner1.jpg",
            list:[
            {
                // theme:"The Coolest Things to Do in Ireland Now,How relaxing it is",
                theme:"Where to Go in Ireland: The 5 Destinations You Must Visit to Relax.",
                theme_img:"https://www.jetsetter.com/wp-content/uploads/sites/7/2018/04/bdXb-xIn-1380x1035.jpeg",
                theme_copy:"",
                day:5,
                price:"Europe"
            },
            {
                theme:"6 Beautiful Places We're Dreaming Of Right Now",
                theme_img:"https://www.jetsetter.com/wp-content/uploads/sites/7/2018/04/K6tdmpAu-1380x1035.jpeg",
                theme_copy:"",
                day:10,
                price:"Global"
            },
            {
                theme:"11 Places to Visit Before It’s Too Late.To Do the Coolest Things Now",
                theme_img:"https://www.jetsetter.com/wp-content/uploads/sites/7/2018/04/jM84bYgW-1380x1035.jpeg",
                theme_copy:"",
                day:15,
                price:"Global"
            },
        ]
        },
        AboutList:{
            aboutTop:"About us",
            aboutTitle:"Frequently Asked Questions",
            list:[
                {
                    question:"What is Travel?",
                    answer:"Think of Travel as your well-traveled friend, the one you call when you need advice on where to go, where to stay, and what to do when you get there. We serve up stories and images to inspire your next adventure and then give you the tools you need to plan it. We also hook you up with some pretty sweet travel deals.",
                    showcontent:false,
                },
                {
                    question:"Low Cost service is available or not ?",
                    answer:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor",
                    showcontent:false,
                },
                {
                    question:"Can I contribute to a future volume of Travel?",
                    answer:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor",
                    showcontent:false,
                },
                {
                    question:"I’d like to sponsor and/or advertise in the Travel.",
                    answer:"If you feel there may be an opportunity to work together, we’d love to hear from you. As an independent publisher, we believe in staying true to our values and ethos, and want to work with those who share in the spirit of our magazine. If you have an idea of how we could work together please email us at ",
                    showcontent:false,
                },
                {
                    question:"I couldn’t find an answer to my question.",
                    answer:"Please contact us at 2119037241@qq.com with your request accompanied with any relevant information.",
                    showcontent:false,
                }
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
      Hotel,
      Share,
      Guides,
      About,
        },
    mounted(){
    }
}
</script>