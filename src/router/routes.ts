import { Comment, defineAsyncComponent, RouteRecordRaw } from 'vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Test',
    component: () => import('modules/DemoTest/components/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    // component: defineAsyncComponent(() => import('comps/404.vue'))
    component: () => import('comps/404.vue')
  }
]
export default routes
