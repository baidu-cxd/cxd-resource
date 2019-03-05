import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Library from './views/Library.vue'
import FileList from './views/FileList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/library/*',
      name: 'library',
      component: Library
    },
    {
      path: '/bucket/*',
      name: 'bucket',
      component: FileList
    },
  ]
})
