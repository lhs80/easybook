import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue'
import Writer from '../views/writer.vue'
import Regist from '../views/regist.vue'
import Loginer from '../views/login.vue'

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
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/login',
      name: 'Loginer',
      component: Loginer
    }
  ]
})
