<script lang="ts">
import { h } from 'vue'
import { NCheckbox } from 'naive-ui'

export default {
  components: {
    NCheckbox
  },
  data() {
    return {
      tableData: [],
      vnodeCache: [],
      changeIndex: undefined
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
    },
    renderRow(item, index) {
      return h('div', {
        class: 'row'
      }, [
        h(NCheckbox, {
          onUpdateChecked: e => this.change(e, item, index)
        }, { default: () => '备选项' }),
        h('p', item.name),
        h('p', item.province),
        h('p', item.city),
        h('p', item.address),
        h('p', item.zip),
        h('p', item.desc)
      ])
    },
    handleRow(item, index) {
      if (this.changeIndex === index) {
        return this.renderRow(item, index)
      }
      const rowVnode = this.vnodeCache[index]
      if (rowVnode) {
        return rowVnode
      }
      return this.renderRow(item, index)
    }
  },
  render() {
    return h('h1', {
      class: 'hello'
    }, this.tableData.map((item, index) => this.handleRow(item, index)))
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
