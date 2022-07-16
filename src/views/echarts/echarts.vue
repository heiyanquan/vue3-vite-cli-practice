<template>
  <n-grid x-gap="12" :cols="2">
    <n-gi>
      <div id="map_chart" class="chart_box"></div>
    </n-gi>
    <n-gi>
      <div id="map_zj_chart" class="chart_box"></div>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import axios from 'axios'

function initMapChart() {
  var myChart = echarts.init(document.getElementById('map_chart'))
  // 数据纯属虚构
  var data = [
    {
      name: '北京市',
      value: 3.8
    },
    {
      name: '上海市',
      value: 4.6
    },
    {
      name: '重庆市',
      value: 3.6
    },
    {
      name: '河北省',
      value: 3.4
    },
    {
      name: '河南省',
      value: 13.2
    },
    {
      name: '云南省',
      value: 11.6
    },
    {
      name: '辽宁省',
      value: 14.3
    },
    {
      name: '黑龙江省',
      value: 14.1
    },
    {
      name: '湖南省',
      value: 12.4
    },
    {
      name: '安徽省',
      value: 23.3
    },
    {
      name: '山东省',
      value: 23.0
    },
    {
      name: '新疆维吾尔自治区',
      value: 21
    },
    {
      name: '江苏省',
      value: 23.9
    },
    {
      name: '浙江省',
      value: 23.5
    },
    {
      name: '江西省',
      value: 32.0
    },
    {
      name: '湖北省',
      value: 32.1
    },
    {
      name: '广西壮族自治区',
      value: 33.0
    },
    {
      name: '甘肃省',
      value: 31.2
    },
    {
      name: '山西省',
      value: 31.2
    },
    {
      name: '内蒙古自治区',
      value: 43.5
    },
    {
      name: '陕西省',
      value: 42.5
    },
    {
      name: '吉林省',
      value: 41.5
    },
    {
      name: '福建省',
      value: 42.8
    },
    {
      name: '贵州省',
      value: 41.8
    },
    {
      name: '广东省',
      value: 53.7
    },
    {
      name: '青海省',
      value: 51.6
    },
    {
      name: '西藏自治区',
      value: 51.4
    },
    {
      name: '四川省',
      value: 53.3
    },
    {
      name: '宁夏回族自治区',
      value: 52.8
    },
    {
      name: '海南省',
      value: 61.9
    },
    {
      name: '台湾省',
      value: 62.1
    },
    {
      name: '香港特别行政区',
      value: 62.1
    },
    {
      name: '澳门特别行政区',
      value: 62.1
    }
  ]

  var option = {
    visualMap: {
      type: 'continuous',
      orient: 'horizontal',
      itemWidth: 10,
      itemHeight: 80,
      text: ['高', '低'],
      showLabel: true,
      seriesIndex: [0],
      min: 0,
      max: 60,
      inRange: {
        color: ['rgba(40, 82, 172, 1)', 'rgba(74, 176, 255, 1)', 'rgba(255, 222, 94, 1)', 'rgba(255, 157, 60, 1)', 'rgba(255, 92, 55, 1)']
      },
      textStyle: {
        color: '#7B93A7'
      },
      bottom: 30,
      left: 'left'
    },
    series: [
      {
        type: 'map',
        map: 'china',
        data
      }
    ]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
}
function initZjMapChart() {
  var myChart = echarts.init(document.getElementById('map_zj_chart'))
  // 数据纯属虚构
  var data = [
    {
      name: '杭州市',
      value: 3.8
    },
    {
      name: '宁波市',
      value: 4.6
    },
    {
      name: '温州市',
      value: 3.6
    },
    {
      name: '金华市',
      value: 3.6
    }
  ]

  var option = {
    visualMap: {
      type: 'continuous',
      orient: 'horizontal',
      itemWidth: 10,
      itemHeight: 80,
      text: ['高', '低'],
      showLabel: true,
      seriesIndex: [0],
      min: 0,
      max: 60,
      inRange: {
        color: ['rgba(40, 82, 172, 1)', 'rgba(74, 176, 255, 1)', 'rgba(255, 222, 94, 1)', 'rgba(255, 157, 60, 1)', 'rgba(255, 92, 55, 1)']
      },
      textStyle: {
        color: '#7B93A7'
      },
      bottom: 30,
      left: 'left'
    },
    series: [
      {
        type: 'map',
        map: 'zj',
        data
      }
    ]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
}

onMounted(() => {
  axios.get('static/js/map.json').then((res) => {
    echarts.registerMap('china', res.data)
    initMapChart()
  })
  axios.get('static/js/zjMap.json').then((res) => {
    echarts.registerMap('zj', res.data)
    initZjMapChart()
  })
})
</script>

<style scoped lang="less">
.chart_box {
  width: 600px;
  height: 400px;
}
</style>
