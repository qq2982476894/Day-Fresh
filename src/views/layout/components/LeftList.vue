<template>
  <div class="left-list">
    <a-menu :default-selected-keys="['1']"
            :default-open-keys="['sub1']"
            mode="inline"
            theme="dark"
            :inline-collapsed="collapsed">
      <a-sub-menu>
        <span slot="title">
          <a-icon type='home' /><span>首页</span>
        </span>
        <a-menu-item key="1">
          <a-icon type="area-chart" />
          <span>统计</span>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="mail" /><span>商品</span>
        </span>
        <a-menu-item key="5">
          <a-icon type="unordered-list" />
          <span>商品列表</span>
        </a-menu-item>
        <a-menu-item key="6">
          <a-icon type="file-add" /><span>添加商品</span>
        </a-menu-item>
      </a-sub-menu>

    </a-menu>
  </div>
</template>

<script>
export default {
  props: {
    collapsed: {
      type: Boolean,
    },
  },
}
</script>

<style lang="less" scoped>
</style>