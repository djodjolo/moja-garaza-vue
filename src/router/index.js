import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/Dashboard'
import EditVehicle from '@/components/EditVehicle'
import NewVehicle  from '@/components/NewVehicle'
import ViewCar from '@/components/ViewCar'
import Login from '@/views/auth/Login'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/new-vehicle',
    name: 'new-vehicle',
    component: NewVehicle
  },
  {
    path: '/edit-vehicle/:vehicle_id',
    name: 'edit-vehicle',
    component: EditVehicle
  },
  {
    path: '/:vehicle_id',
    name: 'view-car',
    component: ViewCar
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
