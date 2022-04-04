<template>
  <div class="index-container">
    <div class="card-content">
        <Card :list='cardList' />
    </div>
    <div class="chart">
        <LineChart/>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import LineChart from '@/components/LineChart.vue'

export default {
  components: {
      Card,
      LineChart
  },
  data() {
    return {
      cardList: [
        {
          title: '商品总览',
          contentList: ['哈哈哈'],
        },
        {
          title: '用户总览',
          contentList: ['Wangsi'],
        },
        {
          title: '销售总览',
          contentList: ['嘿嘿'],
        },
      ],
    
    }
  },
}
</script>

<style lang="less" scoped>
.index-container {
  padding: 20px;
}
</style>