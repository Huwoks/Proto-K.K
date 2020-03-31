import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cart from '@/components/Cart'
import Button from '@/components/example/Button.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    }
  ]
})
