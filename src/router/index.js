import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/Dashboard'
import PageNotFound from '@/views/PageNotFound'
import EditVehicle from '@/components/EditVehicle'
import NewVehicle  from '@/components/NewVehicle'
import ViewCar from '@/components/ViewCar'
import Login from '@/views/auth/Login'
import ForgotPassword from '@/views/auth/ForgotPassword'
import ResetPassword from '@/views/auth/ResetPassword'
import Welcome from '@/views/Welcome'
import Register from '@/views/auth/Register'
import firebase from 'firebase'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPassword,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/dashboard/new-vehicle',
    name: 'new-vehicle',
    component: NewVehicle,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/dashboard/edit-vehicle/:vehicle_id',
    name: 'edit-vehicle',
    component: EditVehicle,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/:vehicle_id',
    name: 'view-car',
    component: ViewCar,meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    name: 'page-not-found',
    component: PageNotFound
  }
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//nav Guards

router.beforeEach((to,from,next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!firebase.auth().currentUser){
      next({
        path : '/',
        query : {
          redirect : to.fullPath
        }
      });
    }else{
      next();
    }
    }else if(to.matched.some(record => record.meta.requiresGuest)){
      this.$router.push('/')
      if(firebase.auth().currentUser){
        next({
          path : '/',
          query : {
            redirect : to.fullPath
          }
        });
      }else{
        next();
      }
    }else{
      next();
    }
});

export default router
