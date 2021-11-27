import {
  getDemoTestList,
  getDemoTestData
} from '@/modules/DemoTest/api'
import MUTATION from '@/modules/DemoTest/store/mutations-type'
import mixin from '@/store/utils/mixin'

const DemoTestModule = {
  namespaced: true,
  _name: 'DemoTest',
  state: {
    demoList: [
      1,
      2,
      3,
      4
    ]
  },
  getters: {
    demoList: state => state.demoList
  },
  actions: {
    async GetModuleTestList ({ commit }, params) {
      // TODO: 模拟响应时间
      // await sleep(1000)
      // TODO: 模拟 api
      const result = await getDemoTestList(params)
      // const result = {
      //   test: 'ok'
      // }
      console.log(result)
      commit(MUTATION.SET_DEMO_LIST, result)
      return result
    },
    async getDemoTestData ({ commit }, params) {
      const result = await getDemoTestData(params)
      
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve({
      //       error: 0,
      //       data: {
      //         a: 1,
      //         b: 2
      //       }
      //     })
      //   }, 500)
      // })


      return result
    }
  },
  mutations: {
    [MUTATION.SET_DEMO_LIST] (state, demoList) {
      state.demoList = demoList
    }
  },
  ...mixin
}

export default DemoTestModule
