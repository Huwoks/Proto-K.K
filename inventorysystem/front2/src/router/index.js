import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import ListProduct from '@/components/product/listproduct'
import EditProduct from '@/components/product/editproduct'
import DeleteProduct from '@/components/product/deleteproduct'
import NewProduct from '@/components/product/newproduct'
import ListSupplier from '@/components/supplier/listsupplier'
import EditSupplier from '@/components/supplier/editsupplier'
import DeleteSupplier from '@/components/supplier/deletesupplier'
import NewSupplier from '@/components/supplier/newsupplier'
import ListSaleman from '@/components/saleman/listsaleman'
import EditSaleman from '@/components/saleman/editsaleman'
import DeleteSaleman from '@/components/saleman/deletesaleman'
import NewSaleman from '@/components/saleman/newsaleman'
import ListCustomer from '@/components/customers/listcustomer'
import EditCustomer from '@/components/customers/editcustomer'
import DeleteCustomer from '@/components/customers/deletecustomer'
import NewCustomer from '@/components/customers/newcustomer'
import ListOrder from '@/components/orders/listorder'
import EditOrder from '@/components/orders/editorder'
import DeleteOrder from '@/components/orders/deleteorder'
import NewOrder from '@/components/orders/neworder'
import ListMeta from '@/components/metaorder/listmeta'
import EditMeta from '@/components/metaorder/editmeta'
import DeleteMeta from '@/components/metaorder/deletemeta'
import NewMeta from '@/components/metaorder/newmeta'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/products',
      name: 'ListProduct',
      component: ListProduct
    },
    {
      path: '/products/:productId/edit',
      name: 'EditProducts',
      component: EditProduct
    },
    {
      path: '/products/:productId/delete',
      name: 'DeleteProduct',
      component: DeleteProduct
    },
    {
      path: '/products/new',
      name: 'NewProduct',
      component: NewProduct
    },
    {
      path: '/suppliers',
      name: 'ListSupplier',
      component: ListSupplier
    },
    {
      path: '/suppliers/:supplierId/edit',
      name: 'EditSupplier',
      component: EditSupplier
    },
    {
      path: '/suppliers/:supplierId/delete',
      name: 'DeleteSupplier',
      component: DeleteSupplier
    },
    {
      path: '/suppliers/new',
      name: 'NewSupplier',
      component: NewSupplier
    },
    {
      path: '/saleman',
      name: 'ListSaleman',
      component: ListSaleman
    },
    {
      path: '/saleman/:salemanId/edit',
      name: 'EditSaleman',
      component: EditSaleman
    },
    {
      path: '/saleman/:salemanId/delete',
      name: 'DeleteSaleman',
      component: DeleteSaleman
    },
    {
      path: '/saleman/new',
      name: 'NewSaleman',
      component: NewSaleman
    },
    {
      path: '/customers',
      name: 'ListCustomer',
      component: ListCustomer
    },
    {
      path: '/customers/:customerId/edit',
      name: 'EditCustomer',
      component: EditCustomer
    },
    {
      path: '/customers/:customerId/delete',
      name: 'DeleteCustomer',
      component: DeleteCustomer
    },
    {
      path: '/customers/new',
      name: 'NewCustomer',
      component: NewCustomer
    },
    {
      path: '/orders',
      name: 'ListOrder',
      component: ListOrder
    },
    {
      path: '/orders/:orderId/edit',
      name: 'EditOrder',
      component: EditOrder
    },
    {
      path: '/orders/:orderId/delete',
      name: 'DeleteOrder',
      component: DeleteOrder
    },
    {
      path: '/orders/new',
      name: 'NewOrder',
      component: NewOrder
    },
    {
      path: '/orders/:orderId/meta',
      name: 'ListMeta',
      component: ListMeta
    },
    {
      path: '/orders/:orderId/meta/:metaId/edit',
      name: 'EditMeta',
      component: EditMeta
    },
    {
      path: '/orders/:orderId/meta/:metaId/delete',
      name: 'DeleteMeta',
      component: DeleteMeta
    },
    {
      path: '/orders/:orderId/meta/new',
      name: 'NewMeta',
      component: NewMeta
    }
  ]
})
