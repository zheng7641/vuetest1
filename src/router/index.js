import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '@/components/App'
import Test1 from '@/components/Test1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/App',
      name: 'App',
      component: App
    },
    {
      path: '/Test1',
      name: 'Test1',
      component: Test1
    }
  ]
})
