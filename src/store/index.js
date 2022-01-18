import { defineStore } from "pinia";

// defineStore 调用后返回一个函数，调用该函数货都 Store 实体
export const useStore = defineStore({
  // id: 必须，在所有 Store 中唯一
  id: 'myState',
  // state
  state: () => ({
    count: 2
  }),
  getters: {
    // 计算 count 的平方
    countPow2(state) {
      return state.count ** 2
    },

    // 使用this
    // countPow2() {
    //   return this.count ** 2
    // },

    // 使用箭头函数
    // countPow2: state => state.count ** 2

    // 获取其他的 getter，直接通过 this
    countPow2() {
      return this.countPow2
    },

    // https://segmentfault.com/a/1190000040373313

  },
})

