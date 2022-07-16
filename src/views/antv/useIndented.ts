import G6 from '@antv/g6'

function handleNumX(value: string | number) {
  let addNum = 3
  if (value < 10) {
    addNum = 6
  } else if (value >= 100 && value < 1000) {
    addNum = 0
  } else if (value >= 1000) {
    addNum = -3
  }
  return addNum
}

function handleRectWidth(str: string) {
  const width = 72 + (str.length - 1) * 16
  const xNum = 40 + (str.length - 1) * 16
  return {
    width,
    xNum
  }
}

function handleData(originData: any) {
  const recursive = (item: any, index: number, parent: any) => {
    item.id = `${parent.id}${index + 1}`
    item.depth = parent.depth + 1
    if (item.depth === 1) {
      item.width = 112
      item.xNum = 75
    } else if (item.depth > 1) {
      item.width = handleRectWidth(item.label).width
      item.xNum = handleRectWidth(item.label).xNum
    }
    if (item.children && item.children.length) {
      item.children.forEach((ele: any, eIdx: number) => {
        recursive(ele, eIdx, item)
      })
    }
  }
  originData.id = 'g1'
  originData.depth = 0
  originData.width = 148
  if (originData.children) {
    originData.children.forEach((first: any, fIdx: number) => {
      recursive(first, fIdx, originData)
    })
  }
}

let graph: any = null
export default function useIndented(dom: string, originData: any, callback: () => void) {
  handleData(originData)
  if (graph) {
    graph.destroy()
  }
  //  组件props
  const props = {
    data: originData,
    config: {
      padding: [20, 0],
      defaultLevel: 3,
      defaultZoom: 0.8,
      modes: { default: ['zoom-canvas', 'drag-canvas', 'dice-mindmap'] }
    }
  }

  // 默认配置
  const defaultConfig = {
    // width,
    // height,
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
      direction: 'H',
      dropCap: false,
      indent: 200,
      getHeight: () => {
        return 52
      },
      getSide: (d: any) => {
        if (d.data.direction === 'left') {
          return 'left'
        }
        return 'right'
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
          const { label, value, width, xNum = 0, depth, active } = cfg
          let grey = 'rgba(79, 119, 187, 0.2)'
          if (active === 1) {
            grey = 'rgba(12, 184, 133, 0.2)'
          }
          if (active === 2) {
            grey = 'rgba(242, 69, 78, 0.2)'
          }
          // 逻辑不应该在这里判断
          const rectConfig = {
            width,
            height: 40,
            lineWidth: depth > 1 ? 3 : 0,
            fontSize: 12,
            fill: '#fff',
            radius: 3,
            stroke: grey,
            opacity: 1,
            cursor: 'pointer'
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
          if (depth === 0) {
            // 根节点
            group.addShape('rect', {
              attrs: {
                x: nodeOrigin.x,
                y: nodeOrigin.y,
                width: 148,
                height: 52,
                radius: 3,
                fill: '#4F77BB'
              },
              name: 'root-shape'
            })
            group.addShape('text', {
              attrs: {
                ...textConfig,
                x: 24 + nodeOrigin.x,
                y: 34 + nodeOrigin.y,
                text: label,
                fontSize: 20,
                fontWeight: 'bold',
                fill: '#FFFFFF'
              },
              name: 'root-name-shape'
            })
          } else if (depth === 1) {
            // 上中下游
            group.addShape('rect', {
              attrs: {
                x: nodeOrigin.x,
                y: nodeOrigin.y,
                width: 112,
                height: 52,
                radius: 3,
                fill: 'rgba(79, 119, 187, 0.2)',
                cursor: 'pointer'
              },
              name: `dep-1-${label}`
            })
            // label title
            group.addShape('text', {
              attrs: {
                ...textConfig,
                x: 24 + nodeOrigin.x,
                y: 34 + nodeOrigin.y,
                text: label,
                fontSize: 20,
                fontWeight: 'bold',
                fill: '#4F77BB',
                cursor: 'pointer'
              },
              name: `dep-1-${label}`
            })
            // circle
            group.addShape('circle', {
              attrs: {
                x: xNum + 10 + nodeOrigin.x,
                y: 24 + nodeOrigin.y,
                r: 16,
                fill: '#4F77BB'
              },
              name: 'dep-1-circle'
            })
            const addNum = handleNumX(value)
            // num
            group.addShape('text', {
              attrs: {
                ...textConfig,
                x: xNum + addNum + nodeOrigin.x,
                y: 30 + nodeOrigin.y,
                text: value,
                fontSize: 12,
                fill: '#FFFFFF'
              },
              name: 'dep-1-circle-value'
            })
          } else {
            let fill = '#4F77BB'
            if (active === 1) {
              fill = '#0CB885'
            }
            if (active === 2) {
              fill = '#F2454E'
            }
            const addNum = handleNumX(value)
            // label title
            group.addShape('text', {
              attrs: {
                ...textConfig,
                x: 12 + nodeOrigin.x,
                y: 28 + nodeOrigin.y,
                text: label,
                fontSize: 16,
                fontWeight: 'normal',
                fill,
                cursor: 'pointer'
              },
              name: `name-${label}`
            })
            // circle
            group.addShape('circle', {
              attrs: {
                x: xNum + 10 + nodeOrigin.x,
                y: 20 + nodeOrigin.y,
                r: 16,
                fill
              },
              name: 'normal-circle-shape'
            })
            // num
            group.addShape('text', {
              attrs: {
                ...textConfig,
                x: xNum + addNum + nodeOrigin.x,
                y: 26 + nodeOrigin.y,
                text: value,
                fontSize: 12,
                fill: '#FFFFFF'
              },
              name: 'normal-circle-value'
            })
          }

          return rect
        }
      },
      'rect'
    )
    G6.registerBehavior('dice-mindmap', {
      getEvents() {
        return {
          'node:click': 'clickNode'
          // 'node:mouseenter': 'hoverNode',
          // 'node:mouseleave': 'hoverNodeOut'
        }
      },
      clickNode(evt) {
        console.log('clickNode', evt)
      }
      // hoverNode(evt) {
      //   console.log('hoverNode', evt)
      // },
      // hoverNodeOut(evt) {
      //   console.log('hoverNodeOut', evt)
      // }
    })
  }

  registerFn()

  const { data } = props

  const initGraph = (data: any[]) => {
    const { config } = props
    graph = new G6.TreeGraph({
      container: dom,
      width: 1870,
      height: 800,
      ...defaultConfig,
      ...config
    })
    graph.data(data)
    graph.render()
    graph.zoom(2)
    graph.translate(-1000, 0)
    graph.on('node:click', (e: any) => {
      console.log('node:click', e)
    })
    graph.on('edge:click', (e: any) => {
      console.log('edge:click', e)
    })
    graph.on('canvas:click', () => {
      callback()
    })
  }
  initGraph(data)
}
