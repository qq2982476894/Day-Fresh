<template>
  <div class="header">
    <a-button type="primary"
              @click="toggleCollapsed">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
        <a-breadcrumb-item>An Application</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li>{{user.username}}
        <a-icon type="down" />
      </li>
      <li @click="handleOut">退出</li>
    </ul>
  </div>
</template>

<script>
export default {
    props:{
        collapsed:{
            type:Boolean
        },
        user:{
            type:Object
        }
    },
    methods:{
       toggleCollapsed(){
           this.$store.dispatch('setCollapsed')
        },
        handleOut(){
            this.$store.dispatch('loginOut')
            this.$router.push({name:'Login'})
        }
    }
}
</script>

<style lang="less" scoped>

</style>

