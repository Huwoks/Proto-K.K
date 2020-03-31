import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cart from '@/components/Cart'
import Navbar from '@/components/Navbar'
import { NavbarPlugin } from 'bootstrap-vue'

Vue.use(Router)

export default new Router({
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