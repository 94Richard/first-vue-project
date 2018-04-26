import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Find from '@/components/Find'
import Order from '@/components/Order'
import Mine from '@/components/Mine'
Vue.use(Router)
export default new Router({
    routes:[
      {
        path:'/',
        name:'Index',
        component:Index,
    },
      {
        path:'/find',
        name:'Find',
        component:Find,
    },
      {
        path:'/order',
        name:'Order',
        component:Order,
    },
      {
        path:'/Mine',
        name:'Mine',
        component:Mine,
    },],
    mode:"history"
})


