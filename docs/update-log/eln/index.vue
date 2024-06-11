<!--
 * @Description: 
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-06-11 14:39:59
-->
<template>
  <div class="eln-box">
    <div class="header-box">
      选择版本：
      <el-select
        v-model="value"
        placeholder="Select"
        size="large"
        style="width: 240px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <!--@include: ./version/1.0.0.md-->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElSelect, ElOption } from 'element-plus'

const value = ref('')
const options = [
  {
    value: '1.0.0',
    label: '1.0.0.md'
  }
]
</script>

<style lang="scss" scoped>
.header-box {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
