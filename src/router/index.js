import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListProductView from '../views/ListProductsView.vue'
import DetailProductView from '../views/DetailProductView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import LoginView from '../views/LoginView.vue'
import OrderView from '../views/OrderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list-products',
      name: 'list-products',
      component: ListProductView
    },
    {
      path: '/detail-product/:id',
      name: 'detail-product',
      component: DetailProductView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrderView
    },
  ]
})

export default router
