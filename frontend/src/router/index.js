import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cart from '@/components/Cart'
<<<<<<< HEAD
import Button from '@/components/example/Button.vue'
=======
import Navbar from '@/components/Navbar'
import { NavbarPlugin } from 'bootstrap-vue'
>>>>>>> 7d55e9da7581af3b025b6871aa9c1fc35dbb0f17

Vue.use(Router)

export default new Router({
<<<<<<< HEAD
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
=======
    routes: [{
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
            path: '/Navbar',
            name: 'Navbar',
            component: Navbar
        }
    ]
})
>>>>>>> 7d55e9da7581af3b025b6871aa9c1fc35dbb0f17
