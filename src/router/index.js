import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import team from '../views/team.vue'
import teach from '../views/Teacher.vue'
import quiz from '../views/quiz.vue'
import view from '@/components/viewq.vue'
import edit from '@/components/editq.vue'
import addq from '@/components/addq.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/team',
    name:'team',
    component: team
  },
  {
    path:'/teach',
    name:'teach',
    component: teach
  },
  {
    path:'/Quiz',
    name:'quiz',
    component: quiz
  },
  {
    path:'/view',
    name:'view',
    component: view
  },
  {
    path:'/edit',
    name:'edit',
    component: edit
  },
  {
    path:'/add',
    name:'addq',
    component: addq
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
