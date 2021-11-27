<template>
  <div class="xxx-container">
    <h2>demo</h2>
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance
} from 'vue'
import { useStore } from 'vuex'

const useDemoTest = async (store) => {
  const getData = async () => {
    const { data } = await store.dispatch('DemoTest/getDemoTestData')
    console.log('data', data)
  }
  getData()
  return {
  }
}
export default defineComponent({
  name: 'Xxx',
  props: {

  },
  setup () {
    const store = useStore()
    // const { proxy } = getCurrentInstance()
    // console.log(proxy)

    return {
      ...useDemoTest(store)
    }
  }
})

</script>

<style lang="scss" scoped>
.xxx-container {

}
</style>
