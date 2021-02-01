import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/main/Home.vue'
import Profile from '@/views/accounts/Profile'
import Signup from '@/views/accounts/Signup'
import Menu from '@/views/viewset/Menu'
import CreateSet from '@/views/viewset/CreateSet'
import Viewees from '@/views/viewset/Viewees'
import Viewers from '@/views/viewset/Viewers'
import Progress from '@/views/viewset/Progress'
import Main from '@/views/main/Main'
import StandbyRoom from '@/views/room/StandbyRoom'

// import Recruit from '@/components/viewset/Recruit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: Main,
  },
  {
    path: '/standbyroom',
    name: 'StandbyRoom',
    component: StandbyRoom,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
    children: [
      // {
      //   path: 'recruit',
      //   name: 'Recruit',
      //   component: Recruit,
      // },
      {
        path: '',
        redirect: 'progress',
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
      },
      {
        path: 'progress',
        name: 'Progress',
        component: Progress,
      },
      {
        path: 'viewees',
        name: 'Viewees',
        component: Viewees,
      },
      {
        path: 'viewers',
        name: 'Viewers',
        component: Viewers,
      }
    ]
  },
  {
    path: '/createset',
    name: 'CreateSet',
    component: CreateSet,
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router