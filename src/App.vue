<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="Course Name" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><Notebook /></el-icon>
          <span style="margin-left: 10px">{{ scope.row.courseName }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Academic Credit" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 45px">{{ scope.row.academicCredit }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" type="primary" :disabled="scope.row.status==0" @click="handleSelect(scope.$index, scope.row)"
        >Select</el-button
        >
        <el-button size="small" type="danger" :disabled="scope.row.status==1" @click="handleSelect(scope.$index, scope.row)"
        >Cancel</el-button
        >
      </template>
    </el-table-column>
  </el-table>

  已选学分：
  <h1><div class="text" :style="{'color':judge(choseValue,10)}">{{choseValue}}</div></h1>
  至少需要 10 学分

</template>

<script lang="ts" setup>
import { Notebook } from '@element-plus/icons-vue'
import {ref} from "vue";

const choseValue = ref(0)

const judge = function (a: number,b: number){
  if(a<b) return 'red'
  else return 'green'
}

interface Course {
  courseName: string
  academicCredit: number
  status: number
}

const handleSelect = (index: number, row: Course) => {

  if (row.status==0){
    row.status=1
    choseValue.value -= row.academicCredit
  }else {
    row.status=0
    choseValue.value += row.academicCredit
  }

}

const tableData: Course[] = [
  {
    courseName: '数据结构',
    academicCredit: 2,
    status: 1,
  },
  {
    courseName: '操作系统',
    academicCredit: 2,
    status: 1,
  },
  {
    courseName: '计算机组成原理',
    academicCredit: 2,
    status: 1,
  },
  {
    courseName: '计算机网络',
    academicCredit: 2,
    status: 1,
  },
  {
    courseName: '算法设计',
    academicCredit: 2,
    status: 1,
  },
  {
    courseName: '软件体系结构',
    academicCredit: 2,
    status: 1,
  },
  {
    courseName: '软件需求管理',
    academicCredit: 2,
    status: 1,
  },

]
</script>
