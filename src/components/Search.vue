<template>
  <div class="serch-container">
    <a-form name="search"
            layout="inline"
            :model="form"
            @submit.prevent="handleSubmit">
      <a-form-item name="search-word"
                   label="检索关键字">
        <a-input style="width: 200px"
                 v-model="form.searchWord" />
      </a-form-item>
      <a-form-item>
        <a-select @change='changeCategory'
                  allowClear
                  style="width: 200px"
                  :options="categoryList.map(item=>({value:item.id,label:item.name}))">

        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button type="primary"
                  html-type="submit">搜索</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  props: ['categoryList'],
  data() {
    return {
      form: {
        category: '',
        searchWord: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.form)
    },
    changeCategory(id) {
      this.form.category = id
    },
  },
}
</script>

<style lang='less' scoped>
.serch-container {
  padding: 10px;
}
</style>