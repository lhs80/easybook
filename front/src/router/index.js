import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue'
import Writer from '../views/writer.vue'
import Regist from '../views/regist.vue'
import Loginer from '../views/login.vue'
import Collections from '../views/collections.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/write',
      name: 'Write',
      component: Writer
    },
    {
      path: '/sign_up',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/sign_in',
      name: 'Loginer',
      component: Loginer
    },
    {
      path: '/collections',
      name: 'Collections',
      component: Collections
    }
  ]
})
