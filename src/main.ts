import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// import store from '@/store'

import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'


const app = createApp(App)

app
  .use(router)
  // .use(store)
  .use(ElementPlus)
  .use(createPinia())

app.mount('#app')