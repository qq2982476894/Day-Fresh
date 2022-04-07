<template>
  <div class="list-container">
    <Search @submit='searchSubmit'
            :categoryList='categoryData' />
    <a-button class="btn-add">
      <router-link :to="{name:'productAdd'}">添加商品</router-link>
    </a-button>
    <ProductTable :data='tableData'
                  :page='page'
                  @change='changePage'
                  @edit='handleEdit'
                  @remove='handleRemove' />
  </div>
</template>

<script>
import { product as productApi, category as categoryApi } from '@/api/index'
import ProductTable from '@/components/productTable.vue'
import Search from '@/components/Search.vue'
export default {
  components: {
    Search,
    ProductTable,
  },
  data() {
    return {
      tableData: [],
      searchForm: {},
      categoryData: [],
      page: {
        current: 1,
        pageSize: 10,
        total: 1,
        showSizeChanger: false,
        showQuickJumper: true,
      },
    }
  },
  methods: {
    searchSubmit(form) {
      console.log(form)
      this.searchForm = form
      this.getTableData()
    },
    getCategory() {
      categoryApi.list().then((res) => {
        this.categoryData = res.data
      })
    },
    getTableData() {
      productApi
        .list({
          page: this.page.current,
          size: this.page.pageSize,
          ...this.searchForm,
        })
        .then((res) => {
          this.page.total = res.total
          this.tableData = res.data
        })
    },
    changePage(page) {
      console.log(page)
      this.page.current = page.current
      this.getTableData()
    },
    handleEdit(record) {
      this.$router.push({
        name: 'productEdit',
        params: {
          id: record.id,
        },
      })
    },
    handleRemove(record) {
      this.$confirm({
        title: '确定删除吗',
        content: `${record.title}`,
        onOk: () => {
             productApi.remove({ id: record.id }).then((res) => {
                 if(res.data.ok===1){
                     this.$message.success('删除成功');
                     this.getTableData()
                 }
             })
        },
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onCancel() {},
      })

     
    },
  },

  created() {
    this.getTableData()
    this.getCategory()
  },
}
</script>
<style lang="less" scoped>
.list-container {
  position: relative;
  .ant-btn {
    position: absolute;
    right: 20px;
    top: 15px;
  }
}
</style>

