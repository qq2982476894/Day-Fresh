import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = ()=>import('@/views/Login.vue')
Vue.use(VueRouter)

const routes = [

//   {
//     path: '/',
//     name: 'Home',
//     // route level code-splitting
//     // this generates a separate chunk (Home.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "Home" */ '@/views/layout/Home.vue')
//   }
{
    path:'/login',
    name:'Login',
    component:Login
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
