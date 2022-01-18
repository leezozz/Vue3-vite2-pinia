<template>
  <div>
    {{ store.count }}
  </div>
</template>

<script>
import {
 defineComponent,
 getCurrentInstance
} from 'vue'
import { useStore } from '@/store/index'

export default defineComponent({
 name: 'Xx',
 components: {},
 props: {},
 setup () {
  // Vuex store
  const store = useStore()

  console.log('store', store)
  console.log('getter', store.countPow2)

  // this
  // const { ctx } = getCurrentInstance()
  // console.log(ctx)

  return {
    store
  }
 }
})
</script>

<style scoped lang="scss">

</style>
