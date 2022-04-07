<template>
  <a-table :columns="columns"
           bordered
           :dataSource='tableData'
           :pagination="page"
           @change='changePage'>
    <div slot="operation"
         slot-scope="text,record">
      <a-button @click="handleEdit(record)">编辑</a-button>
      <a-button @click="handleDelete(record)">删除</a-button>
    </div>
  </a-table>

</template>
<script>
export default {
  props: ['data', 'page'],
  computed: {
    tableData() {
      return this.data.map((item) => {
        return {
          ...item,
          key: item.id,
        }
      })
    },
  },
  data() {
    return {
      columns: [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: '标题',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: '描述',
          dataIndex: 'desc',
          key: 'desc',
        },
        {
          title: '类目',
          dataIndex: 'category',
          key: 'address category',
          ellipsis: true,
          customRender: function (text, record) {
            switch (record.category) {
              case 1:
                return '酒水冲调'
              case 2:
                return '时令水果'
              case 3:
                return '安心乳品'
              case 4:
                return '休闲零食'
              case 5:
                return '新鲜蔬菜'
              default:
                break
            }
          },
        },
        {
          title: '预售价格',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: '折扣价格',
          dataIndex: 'prise_off',
          key: 'prise_off',
        },
        {
          title: '标签',
          dataIndex: 'tags',
          key: 'tags',
        },
        {
          title: '限制购买数量',
          dataIndex: 'inventory',
          key: 'inventory',
        },
        {
          title: '上架状态',
          dataIndex: 'status',
          key: 'status',
          customRender: function (text, record) {
            return record === 1 ? '上架中' : '已下架'
          },
        },
        {
          title: '操作',
          dataIndex: 'operation',
          key: 'operation',
          scopedSlots: { customRender: 'operation' },
        },
      ],
    }
  },
  methods: {
    changePage(page) {
      this.$emit('change', page)
    },
    handleEdit(record) {
      this.$emit('edit',record)
     
    },
    handleDelete(record) {
        this.$emit('remove',record)
    },
  },
}
</script>