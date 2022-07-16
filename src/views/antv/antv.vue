<template>
  <div id="container" class="light_wrapper"></div>
</template>

<script setup lang="ts">
import G6 from '@antv/g6'

// mocked data
const mockData = {
  id: 'g1',
  name: 'Name1',
  count: 123456,
  label: '538.90',
  currency: 'Yuan',
  rate: 1.0,
  status: 'B',
  variableName: 'V1',
  variableValue: 0.341,
  variableUp: false,
  children: [
    {
      id: 'g12',
      name: 'Deal with LONG label LONG label LONG label LONG label',
      count: 123456,
      label: '338.00',
      rate: 0.627,
      status: 'R',
      currency: 'Yuan',
      variableName: 'V2',
      variableValue: 0.179,
      variableUp: true,
      children: [
        {
          id: 'g121',
          name: 'Name3',
          collapsed: true,
          count: 123456,
          label: '138.00',
          rate: 0.123,
          status: 'B',
          currency: 'Yuan',
          variableName: 'V2',
          variableValue: 0.27,
          variableUp: true,
          children: [
            {
              id: 'g1211',
              name: 'Name4',
              count: 123456,
              label: '138.00',
              rate: 1.0,
              status: 'B',
              currency: 'Yuan',
              variableName: 'V1',
              variableValue: 0.164,
              variableUp: false,
              children: []
            }
          ]
        },
        {
          id: 'g122',
          name: 'Name5',
          collapsed: true,
          count: 123456,
          label: '100.00',
          rate: 0.296,
          status: 'G',
          currency: 'Yuan',
          variableName: 'V1',
          variableValue: 0.259,
          variableUp: true,
          children: [
            {
              id: 'g1221',
              name: 'Name6',
              count: 123456,
              label: '40.00',
              rate: 0.4,
              status: 'G',
              currency: 'Yuan',
              variableName: 'V1',
              variableValue: 0.135,
              variableUp: true,
              children: [
                {
                  id: 'g12211',
                  name: 'Name6-1',
                  count: 123456,
                  label: '40.00',
                  rate: 1.0,
                  status: 'R',
                  currency: 'Yuan',
                  variableName: 'V1',
                  variableValue: 0.181,
                  variableUp: true,
                  children: []
                }
              ]
            },
            {
              id: 'g1222',
              name: 'Name7',
              count: 123456,
              label: '60.00',
              rate: 0.6,
              status: 'G',
              currency: 'Yuan',
              variableName: 'V1',
              variableValue: 0.239,
              variableUp: false,
              children: []
            }
          ]
        },
        {
          id: 'g123',
          name: 'Name8',
          collapsed: true,
          count: 123456,
          label: '100.00',
          rate: 0.296,
          status: 'DI',
          currency: 'Yuan',
          variableName: 'V2',
          variableValue: 0.131,
          variableUp: false,
          children: [
            {
              id: 'g1231',
              name: 'Name8-1',
              count: 123456,
              label: '100.00',
              rate: 1.0,
              status: 'DI',
              currency: 'Yuan',
              variableName: 'V2',
              variableValue: 0.131,
              variableUp: false,
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 'g13',
      name: 'Name9',
      count: 123456,
      label: '100.90',
      rate: 0.187,
      status: 'B',
      currency: 'Yuan',
      variableName: 'V2',
      variableValue: 0.221,
      variableUp: true,
      children: [
        {
          id: 'g131',
          name: 'Name10',
          count: 123456,
          label: '33.90',
          rate: 0.336,
          status: 'R',
          currency: 'Yuan',
          variableName: 'V1',
          variableValue: 0.12,
          variableUp: true,
          children: []
        },
        {
          id: 'g132',
          name: 'Name11',
          count: 123456,
          label: '67.00',
          rate: 0.664,
          status: 'G',
          currency: 'Yuan',
          variableName: 'V1',
          variableValue: 0.241,
          variableUp: false,
          children: []
        }
      ]
    },
    {
      id: 'g14',
      name: 'Name12',
      count: 123456,
      label: '100.00',
      rate: 0.186,
      status: 'G',
      currency: 'Yuan',
      variableName: 'V2',
      variableValue: 0.531,
      variableUp: true,
      children: []
    }
  ]
}

//  组件props
const props = {
  data: mockData,
  config: {
    padding: [20, 50],
    defaultLevel: 3,
    defaultZoom: 0.8,
    modes: { default: ['zoom-canvas', 'drag-canvas'] }
  }
}

onMounted(() => {
  const container = document.getElementById('container')
  const width = container.scrollWidth
  const height = container.scrollHeight || 500

  // 默认配置
  const defaultConfig = {
    width,
    height,
    modes: {
      default: ['zoom-canvas', 'drag-canvas']
    },
    fitView: true,
    animate: true,
    defaultNode: {
      type: 'flow-rect'
    },
    defaultEdge: {
      type: 'cubic-horizontal',
      style: {
        stroke: '#CED4D9'
      }
    },
    layout: {
      type: 'indented',
      direction: 'LR',
      dropCap: false,
      indent: 300,
      getHeight: () => {
        return 60
      }
    }
  }

  // 自定义节点、边
  const registerFn = () => {
    /**
     * 自定义节点
     */
    G6.registerNode(
      'flow-rect',
      {
        shapeType: 'flow-rect',
        draw(cfg, group) {
          const { name = '', label, currency } = cfg
          const grey = '#CED4D9'
          // 逻辑不应该在这里判断
          const rectConfig = {
            width: 202,
            height: 60,
            lineWidth: 1,
            fontSize: 12,
            fill: '#fff',
            radius: 4,
            stroke: grey,
            opacity: 1
          }
          const nodeOrigin = {
            x: -rectConfig.width / 2,
            y: -rectConfig.height / 2
          }
          const textConfig = {
            textAlign: 'left',
            textBaseline: 'bottom'
          }
          const rect = group.addShape('rect', {
            attrs: {
              x: nodeOrigin.x,
              y: nodeOrigin.y,
              ...rectConfig
            }
          })
          const rectBBox = rect.getBBox()
          // label title
          group.addShape('text', {
            attrs: {
              ...textConfig,
              x: 12 + nodeOrigin.x,
              y: 20 + nodeOrigin.y,
              text: name.length > 28 ? name.substr(0, 28) + '...' : name,
              fontSize: 12,
              opacity: 0.85,
              fill: '#000',
              cursor: 'pointer'
            },
            name: 'name-shape'
          })
          // price
          const price = group.addShape('text', {
            attrs: {
              ...textConfig,
              x: 12 + nodeOrigin.x,
              y: rectBBox.maxY - 12,
              text: label,
              fontSize: 16,
              fill: '#000',
              opacity: 0.85
            }
          })
          // label currency
          group.addShape('text', {
            attrs: {
              ...textConfig,
              x: price.getBBox().maxX + 5,
              y: rectBBox.maxY - 12,
              text: currency,
              fontSize: 12,
              fill: '#000',
              opacity: 0.75
            }
          })
          return rect
        }
      },
      'rect'
    )
  }

  registerFn()

  const { data } = props
  let graph = null

  const initGraph = (data) => {
    if (!data) {
      return
    }
    const { config } = props
    graph = new G6.TreeGraph({
      container: 'container',
      ...defaultConfig,
      ...config
    })
    graph.data(data)
    graph.render()

    graph.on('node:click', (e) => {
      console.log('node-text:click', e.item._cfg)
    })
  }

  initGraph(data)
})
</script>
<style lang="less">
.light_wrapper {
  width: 1870px;
  height: 800px;
  background: #ffffff;
}
</style>
