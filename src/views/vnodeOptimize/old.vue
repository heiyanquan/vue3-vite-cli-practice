<template>
  <div class="hello">
    <div v-for="item in tableData" :key="item.name" class="row">
      <n-checkbox v-model="item.checked" @update:checked="change">备选项</n-checkbox>
      <p>{{ item.name }}</p>
      <p>{{ item.province }}</p>
      <p>{{ item.city }}</p>
      <p>{{ item.address }}</p>
      <p>{{ item.zip }}</p>
      <p>{{ item.desc }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      tableData: [],
    }
  },
  mounted() {
    for (let i = 0; i < 5000; i++) {
      this.tableData.push({
        date: '2016-05-02',
        name: `王小虎${i}`,
        province: '上海',
        city: '普陀区',
        address: `上海市普陀区金沙江路 10${i} 弄`,
        zip: 200333,
        desc: '荷兰优质淡奶，奶香浓而不腻',
        checked: false
      })
    }
  },
  methods: {
    change() {
      const s = window.performance.now()
      setTimeout(() => {
        this.renderTime = `${(window.performance.now() - s).toFixed(2)}ms`
        console.log(this.renderTime)
      })
    }
  }
}
</script>

<style scoped lang="less">
.row {
  display: flex;
  align-items: center;
  justify-content: space-around;
  p {
    margin-left: 40px;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
