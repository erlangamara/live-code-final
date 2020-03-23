import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import MainPage from '../views/MainPage.vue'
import Report from '../views/Report.vue'
import AddReport from '../components/AddReport.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      isLogin: true
    }
  },
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/report',
    name: 'Report',
    component: Report,
    children: [
      {
        path: '',
        name: 'AddReport',
        component: AddReport,
      }
    ],
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }

  if (to.matched.some(record => record.meta.isLogin)) {
    if (localStorage.getItem('token')) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
