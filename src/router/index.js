import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListProductView from '../views/ListProductsView.vue'
import DetailProductView from '../views/DetailProductView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import OrderView from '../views/OrderView.vue'

import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'
import ForGotView from '@/views/password/ForGotView.vue'
import ResetView from '@/views/password/ResetView.vue'
function is_Login(to, from, next){
  var token = localStorage.getItem('token');
  if(token){
    next();
  }else{
    next({name: 'login'});
  }
}
function is_outside(to, from, next){
  var token = localStorage.getItem('token');
  if(!token){
    next();
  }else{
    next({name: 'home'});
  }
}
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
      beforeEnter: [is_Login],
      component: CheckoutView
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: [is_outside],
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      beforeEnter: [is_outside],
      component: RegisterView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrderView
    },
    {
      path: '/password',
      name: 'password',
      beforeEnter: [is_outside],
      children: [
        {
          path: 'forgot',
          component: ForGotView,
        },
        {
          path: 'reset-password/:token',
          component: ResetView,
        },
      ],
    },
  ]
})

export default router
