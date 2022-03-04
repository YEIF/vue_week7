import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView_copy.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        // component: HomeView
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/ProductView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/CartView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/DashboradView.vue'),
    children: [
      {
        path: '',
        // component: HomeView
        component: () => import('../views/AdminView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/AdminProducts.vue')
      },
      {
        path: 'coupon',
        component: () => import('../views/AdminCoupon.vue')
      }, {
        path: 'orders',
        component: () => import('../views/OrderView.vue')
      }
    ]
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
  // {
  //   path: '/admin/:pathMatch(.*)*',
  //   redirect: { name: 'Login' }
  // }

  // 重新導向
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: {
  //     name: HomeView
  //   }
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active' // bootstrap
})

export default router
