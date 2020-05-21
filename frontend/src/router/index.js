import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Table from '@/components/Table'
import kkarousel from '@/components/kkarousel'
import exptable from '@/components/exptable'
import CategoryPage from '@/components/CategoryPage'
import ProductTable from '@/components/ProductTable'
import ShoppingCart from '@/components/ShoppingCart'
import Shopp from '@/components/Shopp'
/*
import kkard_viewer from '@/components/kkard_viewer'
*/
import Product from '@/components/Product'


import { NavbarPlugin } from 'bootstrap-vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
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
        },
        {
            path: '/kkarousel',
            name: 'kkarousel',
            component: kkarousel
        },
        {
            path: '/Product',
            name: 'Product',
            component: Product
        },
        {
            path: '/exptable',
            name: 'exptable',
            component: exptable
        },
        {
            path: '/CategoryPage',
            name: 'CategoryPage',
            component: CategoryPage
        },
        {
            path: '/ProductTable',
            name: 'ProductTable',
            component: ProductTable
        },
        {
            path: '/ShoppingCart',
            name: 'ShoppingCart',
            component: ShoppingCart
        },
        {
            path: '/Shopp',
            name: 'Shopp',
            component: Shopp
        }

        /*,
        {
            path: '/kkard_viewer',
            name: 'kkard_viewer',
            component: kkard_viewer
        }*/
    ]
})