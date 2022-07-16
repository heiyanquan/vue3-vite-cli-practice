<template>
  <div class="check_module_id_wrapper">
    <div class="row">
      <div class="row_flex">
        <label>查询module_id数据：</label>
        <n-input v-model="module_id" placeholder="请输入module_id" clearable @change="search" @keyup.enter="search" />
      </div>
      <div class="row_flex">
        <label>查询rule_id数据：</label>
        <n-input v-model="rule_id" placeholder="请输入rule_id" clearable @change="search" @keyup.enter="search" />
      </div>
      <textarea v-model="jsonList" readonly></textarea>
    </div>
    <div class="row">
      <label>查询inx_general/detail数据：</label>
      <div class="box">
        <div class="left">
          <label>请输入index_id：</label>
          <n-input v-model="indexIdInfor.index_id" placeholder="请输入index_id" clearable />
          <label>请输入date：</label>
          <n-input v-model="indexIdInfor.date" placeholder="请输入date" clearable @change="dateChange" />
          <label>请输入start_date：</label>
          <n-input v-model="indexIdInfor.start_date" placeholder="请输入start_date" clearable />
          <label>请输入value：</label>
          <n-input v-model.number="indexIdInfor.value" placeholder="请输入value" clearable />
          <label>请输入page：</label>
          <n-input v-model.number="indexIdInfor.page" placeholder="请输入page" clearable />
          <label>请输入page_size：</label>
          <n-input v-model.number="indexIdInfor.page_size" placeholder="请输入page_size" clearable />
          <label>请输入search：</label>
          <n-input v-model="indexIdInfor.search" placeholder="请输入search" clearable />
          <label>请输入filter_type：</label>
          <n-input v-model="indexIdInfor.filter_type" placeholder="filter_type" clearable />
          <label>请输入address_city：</label>
          <n-input v-model="indexIdInfor.address_city" placeholder="address_city" clearable />
          <div class="btn" @click="checkDetail">查询</div>
        </div>
        <textarea v-model="jsonList2" readonly></textarea>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { inxGeneral, inxGeneralDetail } from '@/api/index'

const module_id = ref('AHCYDT0002')
const rule_id = ref('AHGCJ0598')
const jsonList = ref('')
const indexIdInfor = ref({
  index_id: 'cab912d3849bee268692e6246c4fe662',
  date: '2022-03-29',
  start_date: '2022-03-29',
  value: undefined,
  page: 1,
  page_size: 10,
  search: undefined,
  filter_type: undefined,
  address_city: undefined
})
const jsonList2 = ref('')

function dateChange() {
  indexIdInfor.value.start_date = indexIdInfor.value.date
}
function search() {
  inxGeneral({ module_id: module_id.value, rule_id: rule_id.value, size: 99999 }).then((res) => {
    jsonList.value = JSON.stringify(res, null, 2)
  })
}
function checkDetail() {
  inxGeneralDetail({ ...indexIdInfor.value }).then((res) => {
    jsonList2.value = JSON.stringify(res, null, 2)
  })
}
</script>
<style lang="less">
.check_module_id_wrapper {
  display: flex;
  background-color: #f4f4f4;
  .row {
    margin-right: 60px;
    label {
      font-size: 16px;
    }
    .ivu-input-wrapper {
      width: fit-content;
    }
    input {
      padding: 0 16px;
      border-radius: 20px;
      width: 447px;
      height: 40px;
      font-size: 16px;
      background: transparent;
      outline: none;
    }
    input::-webkit-input-placeholder {
      color: rgba(169, 215, 255, 0.7);
    }
    textarea {
      display: block;
      width: 600px;
      height: 820px;
      margin-top: 20px;
      border: none;
      font-size: 16px;
      overflow-y: auto;
      padding: 16px;
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-thumb {
        background: #3656b2;
        border-radius: 4px;
        width: 8px;
        cursor: pointer;
      }
    }
    .box {
      display: flex;
      .left {
        margin-right: 10px;
        label {
          display: block;
          margin-top: 10px;
        }
        .btn {
          margin-top: 10px;
          width: 447px;
          line-height: 40px;
          text-align: center;
          font-size: 16px;
          background: #3656b2;
          color: white;
          border-radius: 20px;
          cursor: pointer;
        }
      }
    }
  }
  .row_flex {
    display: flex;
    align-items: center;
  }
}
</style>
