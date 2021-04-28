
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('src/pages/Today.vue')},
      { path: '/week', component: () => import('src/pages/Week.vue')},
      { path: '/month', component: () => import('src/pages/Month.vue')},
      { path: '/year', component: () => import('src/pages/Year.vue')},
      { path: '/focus', component: () => import('src/pages/Focus.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
