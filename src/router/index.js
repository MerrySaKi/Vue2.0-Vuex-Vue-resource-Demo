import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/indexPage'
import detailPage from '@/pages/detail'
import analysis from '@/pages/details/analysis'
import count from '@/pages/details/count'
import forecast from '@/pages/details/forecast'
import publish from '@/pages/details/publish'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },
    {
      path: '/detail',
      component: detailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: analysis
        },
        {
          path: 'count',
          component: count
        },
        {
          path: 'forecast',
          component: forecast
        },
        {
          path: 'publish',
          component: publish
        }
      ]
    }
  ]
})
