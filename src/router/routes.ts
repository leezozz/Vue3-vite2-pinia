import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Test',
    component: () => import('modules/DemoTest/components/index.vue')
  },
  {
    path: '/pinia',
    name: 'Pinia',
    component: () => import('modules/TestPinia/test01.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    // component: defineAsyncComponent(() => import('comps/404.vue'))
    component: () => import('comps/404.vue')
  }
];

// const router = createRouter({
//   // history: createWebHistory(process.env.BASE_URL),
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes,
// });

export default routes
