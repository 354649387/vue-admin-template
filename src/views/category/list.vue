<template>
  <div class="app-container">
    <el-table
      :data="categoryList"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      stripe
      :tree-props="{children: 'children'}"
    >
      <el-table-column
        prop="id"
        label="ID"
        width="180"
        sortable
        type=""
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        sortable
        width="180"
      >
      </el-table-column>

      <el-table-column
        prop="nick"
        label="栏目名称"
        sortable
      >
      </el-table-column>
      <el-table-column label="操作">
        <el-button type="primary" size="mini">添加子栏目</el-button>
        <el-button type="success" size="mini">编辑</el-button>
        <el-button type="warning" size="mini">删除</el-button>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>

export default {

  data() {
    return {
      categoryList: [
        {
          id: 1,
          name: '游戏库',
          nick: 'games',
          children: [
            {
              id: 2,
              name: '射击游戏',
              nick: 'gun'
            },
            {
              id: 3,
              name: '音乐舞蹈',
              nick: 'music'
            }
          ]
        },
        {
          id: 4,
          name: '资讯中心',
          nick: 'news',
          children: [
            {
              id: 5,
              name: '游戏攻略',
              nick: 'gra'
            },
            {
              id: 6,
              name: '游戏新闻',
              nick: 'info'
            }
          ]
        }
      ]
    }
  },
  created() {

  },
  methods: {}
}
</script>
