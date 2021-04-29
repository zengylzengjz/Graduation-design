import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import HelloWorld from '../components/HelloWorld'
import destination from '../pages/destination'
import scenic from '../pages/scenic'


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
}
  ]
})
