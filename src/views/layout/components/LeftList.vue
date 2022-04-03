<template>
  <div class="left-list" v-if="menuRoutes">
    <a-menu :default-selected-keys="[$router.currentRoute.matched[1].name]"
            :default-open-keys="[$router.currentRoute.matched[0].name]"
            mode="inline"
            theme="dark"
            :inline-collapsed="collapsed">
      <template v-for="route in menuRoutes">
        <a-sub-menu v-if="!route.meta.hide"
                    :key="route.name">
          <span slot="title">
            <a-icon :type='route.meta.icon' /><span>{{route.meta.title}}</span>
          </span>
          <template v-for="children in route.children">
            <a-menu-item :key="children.name">
              <router-link :to="{name:children.name}"></router-link>
              <a-icon :type="children.meta.icon" /><span>{{children.meta.title}}</span>

            </a-menu-item>
          </template>

        </a-sub-menu>
      </template>

    </a-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  computed: {
    ...mapState(['menuRoutes']),
  },
  mounted() {
  
  },
}
</script>

<style lang="less" scoped>
</style>