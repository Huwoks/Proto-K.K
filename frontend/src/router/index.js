import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
<<<<<<< HEAD
import Cart from '@/components/Cart'
=======
import Button from '@/components/example/Button.vue'
>>>>>>> 7f0ca8c307a8e7d19eab275b9f9b1207b4e7c51c

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
<<<<<<< HEAD
      path: '/cart',
      name: 'Cart',
      component: Cart
=======
      path: '/button',
      name: 'Button',
      component: Button
>>>>>>> 7f0ca8c307a8e7d19eab275b9f9b1207b4e7c51c
    }
  ]
})
