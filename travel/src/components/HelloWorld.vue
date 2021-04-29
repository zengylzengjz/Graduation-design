<template>
<div>
  <!-- <div>
    <el-button type="primary">test</el-button>
  </div> -->

  <!-- <div class="block">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div> -->

  <div class="newslist">
  <ul>
   <li v-for="(item,index) in AboutList" :key="index">
    <p class="p" ref="liCon">{{item.question}}</p>
    <div class="open" @click="open(item,index)">
     <div v-if="!item.answer">【展开】</div>
     <div v-else>【收缩】</div>
    </div>
   </li>
  </ul>
 </div>
</div>
  
</template>
<script type="text/ecmascript-6">
 import Vue from 'vue'
 export default {
  // props: ['newslist'],
  data() {
   return {
    liConHeight: 50, // 两行文字的高度
    AboutList:{
            aboutTop:"About us",
            aboutTitle:"Frequently Asked Questions",
            list:[
                {
                    question:" Low Cost service is available or not ?",
                    answer:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor",
                },
                {
                    question:"",
                    answer:"",
                }
            ]
        }
   }
  },
  methods: {
   open(item, i) {
    const liCon = this.$refs.liCon[i]
    var height = liCon.offsetHeight
    if (height === this.liConHeight) { // 展开
     liCon.style.height = 'auto'
     height = liCon.offsetHeight
     liCon.style.height = this.liConHeight + 'px'
     var f = document.body.offsetHeight // 必加
     liCon.style.height = height + 'px'
    } else { // 收缩
     liCon.style.height = this.liConHeight + 'px'
    }
    if (!item.openFlag) {
     Vue.set(item, 'openFlag', true)
    } else {
     Vue.set(item, 'openFlag', false)
    }
   }
  }
 }
</script>
<style scoped>
.newslist ul li p {
 font-size: 14px;
 color: #555;
 line-height: 25px;
 height: 50px;
 overflow: hidden;
 transition: height .3s;
}
</style>

