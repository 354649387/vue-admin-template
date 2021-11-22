<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: [
      'user', 'region'
    ],
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods:{
      //点击搜索
      onSearch(){
        // console.log(this.user)
        //传入一个监听事件名给使用它的组件,参数一是监听事件名，参数二是传递的参数
        this.$emit('listenSearch',this.user);
      }
    },
    created() {
      // console.log(this.region)
    }

    }
</script>

<style>
</style>
