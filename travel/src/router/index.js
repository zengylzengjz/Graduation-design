import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import HelloWorld from '../components/HelloWorld'
import destination from '../pages/destination'
import scenic from '../pages/scenic'
import scenic_detail from '../pages/scenic_detail'
import hotel from '../pages/hotel'
import hotel_detail from '../pages/hotel_detail'
import publish_share from '../pages/publish_share'
import guides_detail from '../pages/guides_detail'
import publish_guides from '../pages/publish_guides'
import login from '../pages/login'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
{
  path: '/destination',
      name: 'destination',
      component: destination
},
{
  path: '/scenic',
      name: 'scenic',
      component: scenic
},
{
  path: '/scenic_detail',
      name: 'scenic_detail',
      component: scenic_detail
},
{
  path: '/hotel',
      name: 'hotel',
      component: hotel
},
{
  path: '/hotel_detail',
      name: 'hotel_detail',
      component: hotel_detail
},
{
  path: '/publish_share',
      name: 'publish_share',
      component: publish_share
},
{
  path: '/guides_detail',
      name: 'guides_detail',
      component: guides_detail
},
{
  path: '/publish_guides',
      name: 'publish_guides',
      component: publish_guides
},
{
  path: '/login',
      name: 'login',
      component: login
},
  ]
})
