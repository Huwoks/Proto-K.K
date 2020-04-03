import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cart from '@/components/Cart'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Table from '@/components/Table'
import { NavbarPlugin } from 'bootstrap-vue'

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
            path: '/Navbar',
            name: 'Navbar',
            component: Navbar
        },
        {
            path: '/Footer',
            name: 'Footer',
            component: Footer
        },
        {
            path: '/Table',
            name: 'Table',
            component: Table
        }
    ]
})
