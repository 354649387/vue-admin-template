<template>
  <div class="app-container">

    <el-card>
      <el-button type="primary" size="small">
        <router-link :to="{ path: '/article/add' }">新增文章</router-link>
      </el-button>
      <div style="float: right;">
        <!-- 监听子组件传递过来的事件名listenSearch -->
        <search v-bind="formInline" v-on:listenSearch="receiveSearchValue"></search>
      </div>
    </el-card>

    <el-card>
      <el-table :data="articles" style="width: 100%">
        <el-table-column prop="id" label="ID" sortable width="80">
        </el-table-column>
        <el-table-column prop="title" label="标题" width="180">
        </el-table-column>
        <el-table-column prop="category" label="栏目" width="180">
        </el-table-column>
        <el-table-column prop="create_time" label="创建时间" sortable width="180">
        </el-table-column>
        <el-table-column prop="update_time" label="更新时间" sortable width="180">
        </el-table-column>
        <el-table-column prop="admin" label="管理员">
        </el-table-column>

        <el-table-column label="操作" #default="scope">
          <el-button type="success" size="mini">
            <router-link to="/article/update">编辑</router-link>
          </el-button>
          <el-button type="warning" size="mini" v-on:click="deletes(scope.$index, scope.row)">删除</el-button>
        </el-table-column>
      </el-table>

      <div style="width: auto;height: 50px;"></div>

      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
        @prev-click="handlePrevClick" @next-click="handleNextClick" :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]" :page-size="10" layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </el-card>


  </div>
</template>

<script>
  import search from '../common/search.vue'
  export default {

    data() {
      return {
        formInline: {
          user: 'asd',
          region: '2'
        },
        currentPage: 1,
        articles: [

          {
            id: 1,
            title: '钢铁是怎么样炼成？',
            category: '知识栏目',
            create_time: '2021-11-18 14:55:04',
            update_time: '2021-11-18 14:55:04',
            admin: 'admin'
          },
          {
            id: 2,
            title: '一个自律的人多可怕？',
            category: '求学栏目',
            create_time: '2021-11-18 14:55:04',
            update_time: '2021-11-18 14:55:04',
            admin: 'admin'
          },
          {
            id: 3,
            title: '晚上吃什么？',
            category: '美食栏目',
            create_time: '2021-11-18 14:55:04',
            update_time: '2021-11-18 14:55:04',
            admin: 'admin'
          },
          {
            id: 3,
            title: '晚上吃什么？',
            category: '美食栏目',
            create_time: '2021-11-18 14:55:04',
            update_time: '2021-11-18 14:55:04',
            admin: 'admin'
          },
          {
            id: 3,
            title: '晚上吃什么？',
            category: '美食栏目',
            create_time: '2021-11-18 14:55:04',
            update_time: '2021-11-18 14:55:04',
            admin: 'admin'
          },
          {
            id: 3,
            title: '晚上吃什么？',
            category: '美食栏目',
            create_time: '2021-11-18 14:55:04',
            update_time: '2021-11-18 14:55:04',
            admin: 'admin'
          },
          {
            id: 3,
            title: '晚上吃什么？',
            category: '美食栏目',
            create_time: '2021-11-18 14:55:04',
            update_time: '2021-11-18 14:55:04',
            admin: 'admin'
          },
          {
            id: 3,
            title: '晚上吃什么？',
            category: '美食栏目',
            create_time: '2021-11-18 14:55:04',
            update_time: '2021-11-18 14:55:04',
            admin: 'admin'
          },
          {
            id: 3,
            title: '晚上吃什么？',
            category: '美食栏目',
            create_time: '2021-11-18 14:55:04',
            update_time: '2021-11-18 14:55:04',
            admin: 'admin'
          },
          {
            id: 3,
            title: '晚上吃什么？',
            category: '美食栏目',
            create_time: '2021-11-18 14:55:04',
            update_time: '2021-11-18 14:55:04',
            admin: 'admin'
          },
          {
            id: 3,
            title: '晚上吃什么？',
            category: '美食栏目',
            create_time: '2021-11-18 14:55:04',
            update_time: '2021-11-18 14:55:04',
            admin: 'admin'
          }


        ]

      }
    },
    created() {

    },
    methods: {
      //接受搜索组件传递过来的参数
      receiveSearchValue(value) {
          console.log(value)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handlePrevClick(val) {
        console.log(`当前页: ${val}`);
      },
      handleNextClick(val) {
        console.log(`当前页: ${val}`);
      },
      deletes(index,value){
        console.log(value)
      }
    },
    components: {
      search
    }
  }
</script>
