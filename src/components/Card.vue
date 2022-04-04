<template>
  <div class="card-content">
    <template v-for="card in list">
      <a-card size='small'
              :title="card.title"
              :bordered="false"
              :key="card.title">
        <p v-for="content in card.contentList"
           :key="content">{{content}}</p>
      </a-card>
    </template>

  </div>

</template>

<script>
export default {
  props: ['list'],
}
</script>

<style lang="less" scoped>
.card-content {
    display: flex;
    justify-content: center;
    background: #ececec;
    padding: 10px;
    box-sizing: border-box;
    .ant-card {
      flex: 1;
      margin: 0 5px;
    }
  }
</style>