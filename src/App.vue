<template>
  <div id="app">
   <Home />
  </div>
</template>
<script>

import Home from './views/layout/Home.vue'
export default {
  components: {
      Home
  },
}
</script>
<style lang="less">
#app,
html,
body {
  width: 100%;
  height: 100%;
}

</style>
