import { ComponentCustomProperties } from "@vue/runtime-core";
import { createStore, Store } from "vuex"
import { InjectionKey } from 'vue'
import DemoTest from '@/modules/DemoTest/store'

export type State = {
  counter: number
}

// 创建一个 InjectionKey 
export const key: InjectionKey<Store<State>> = Symbol()

// this.$store 强类型支持
// 模块扩展
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

export default createStore({
  modules: {
    DemoTest,
  },
  state: {
    counter: 333
  },
  mutations: {
    add(state) {
      state.counter++
    }
  }
})