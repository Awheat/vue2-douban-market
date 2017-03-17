import Vue from 'vue'
import Router from 'vue-router'
import Error from '../components/404.vue'
import Hello from '@/components/Hello'
import Home from '@/pages/home/home.vue'
import Category from '@/pages/category/category.vue'
import Cart from '@/pages/cart/cart.vue'
import My from '@/pages/my/my.vue'
import List from '@/pages/list/list.vue'
import Detail from '@/pages/detail/detail.vue'
import Login from '@/pages/login/login.vue'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/home',
    	name:'Home',
    	component: Home
    },
    {
      path:'/category',
      name:'Category',
      component: Category
    },
    {
      path:'/list/:id',
      name:'List',
      component: List
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component: Detail
    },
    {
      path:'/cart',
      name:'Cart',
      component: Cart
    },
    {
      path:'/my',
      name:'My',
      component: My
    },
    {
      path:'/login',
      name:'Login',
      component: Login
    },
    {
      path:'/404',
      name:'Error',
      component: Error
    },
    {
      path: "*",
      redirect: '/404'
    }
  ]
})
