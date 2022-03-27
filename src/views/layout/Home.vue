<template>
  <div class="home-container">
    <LeftList :collapsed='collapsed'/>
    <div :class="{'app-container':true,'menu-unfold':collapsed}">
      <HeadNav :collapsed='collapsed'/>
      <div class="main">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeadNav from './components/HeadNav.vue'
import LeftList from './components/LeftList.vue'
import {mapState} from 'vuex'
export default {
  components: {
    LeftList,
    HeadNav
  },
  data() {
    return {
      
    }
  },
  computed:{
      ...mapState(['collapsed'])
  },
  methods: {
   
  },
}
</script>
<style lang="less">
@import '~@/assets/styles/home.less';
</style>
