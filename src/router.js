import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let matcRoutes = []

matcRoutes.push({path:'my-account.html', component: () => import(/* webpackChunkName: "about" */ 'views/user/Account.vue')})
matcRoutes.push({path:'reset_password.html', component: () => import(/* webpackChunkName: "about" */ 'views/user/ResetPassword.vue')})
matcRoutes.push({path:'reset_password3.html', component: () => import(/* webpackChunkName: "about" */ 'views/user/ResetPassword.vue')})
matcRoutes.push({path:'404.html', component: () => import(/* webpackChunkName: "about" */ 'views/404.vue')})

// Apps
matcRoutes.push({path:'', component: () => import(/* webpackChunkName: "apps" */ 'views/apps/Apps.vue')})
matcRoutes.push({path:'my-apps.html', component: () => import(/* webpackChunkName: "apps" */ 'views/apps/Apps.vue')})
matcRoutes.push({path:'logged_in.html', component: () => import(/* webpackChunkName: "apps" */ 'views/apps/Apps.vue')})
matcRoutes.push({path:'create-app.html', component: () => import(/* webpackChunkName: "apps" */ 'views/apps/Create.vue')})
matcRoutes.push({path:'tryout.html', component: () => import(/* webpackChunkName: "apps" */ 'views/apps/Create.vue'), meta: {isTryout:true}})
matcRoutes.push({path:'apps/:id.html', component: () => import(/* webpackChunkName: "apps" */ 'views/apps/Overview.vue')})
matcRoutes.push({path:'apps/:id/:tab.html', component: () => import(/* webpackChunkName: "apps" */ 'views/apps/Overview.vue')})
matcRoutes.push({path:'apps/:id/replay/:session.html', component: () => import(/* webpackChunkName: "apps" */ 'views/apps/Overview.vue')})

export default new Router({
  routes: [
    {
      path: '/simulate.html',
      name: 'SimulatorPage',
      component: () => import(/* webpackChunkName: "simulator" */ 'views/simulator/SimulatorPage.vue')
    },
    {
      path: '/test.html',
      name: 'TestPage',
      component: () => import(/* webpackChunkName: "matc" */ 'views/simulator/TestPage.vue')
    },
    {
      path: '/test/mobile/:id.html',
      name: 'TestPageMobile',
      component: () => import(/* webpackChunkName: "matc" */ 'views/simulator/TestMobile.vue')
    },
    {
      path: '/apps/:id/create.html',
      name: 'Editor',
      component: () => import(/* webpackChunkName: "design" */ 'views/apps/Design.vue')
    },
    {
      path: '/apps/:id/design/:sid.html',
      name: 'ScreenEditor',
      component: () => import(/* webpackChunkName: "design" */ 'views/apps/Design.vue')
    },
    {
      path: '/tryout2.html',
      name: 'TryoutEditor',
      meta: {isPublic:true},
      component: () => import(/* webpackChunkName: "design" */ 'views/apps/Tryout.vue')
    },
    {
      path: '/examples/:id/design/:sid.html',
      name: 'ExampleEditor',
      meta: {isPublic:true},
      component: () => import(/* webpackChunkName: "design" */ 'views/apps/Design.vue')
    },
    {
      path: '/share.html',
      name: 'SharePage',
      component: () => import(/* webpackChunkName: "design" */ 'views/apps/Share.vue')
    },
    {
      path: '/apps/:id/analyze/workspace.html',
      name: 'AnalyticCanvasPage',
      component: () => import(/* webpackChunkName: "design" */ 'views/apps/Analyze.vue')
    },
    {
      path: '/',
      name: '',
      children: matcRoutes,
      component: () => import(/* webpackChunkName: "matc" */ 'views/QUX.vue')
    },
    {
      path: '/test/DojoTest.html',
      component: () => import(/* webpackChunkName: "unit" */ './unit/DojoTest.vue')
    },
    {
      path: '/test/Canvas.html',
      component: () => import(/* webpackChunkName: "unit" */ './unit/CanvasTest.vue')
    },
    {
      path: '/test/code/:id.html',
      component: () => import(/* webpackChunkName: "unit" */ './unit/CodeGenTest.vue')
    }
  ]
})