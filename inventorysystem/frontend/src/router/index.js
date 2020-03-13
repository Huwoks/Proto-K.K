import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListProduct from '@/components/product/listproduct'
import EditProduct from '@/components/product/editproduct'
import Login from '@/components/product/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/products',
      name: 'ListProduct',
      component: ListProduct
    },
    {
      path: '/products/edit',
      name: 'EditProducts',
      component: EditProduct
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
