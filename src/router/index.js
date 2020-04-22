import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ShowsTable from '@/components/ShowsTable'
import NProgress from 'nprogress'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/shows',
      component: Home
    },
    {
      path: '/shows',
      name: 'shows',
      component: ShowsTable,
      beforeEnter: (to, from, next) => {
        NProgress.start()
        next()
      }
    }
  ]
})
