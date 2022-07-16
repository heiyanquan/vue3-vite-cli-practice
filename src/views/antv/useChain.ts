// active => 0:普通； 1：优势；2：劣势
// direction => left：向左布局
export const companyChainData = {
  label: '化学原料药',
  value: '6305',
  children: [
    {
      label: '上游',
      value: '4731',
      children: [
        {
          label: '原辅料',
          value: '4374',
          children: [
            {
              label: '无机化学原料',
              value: '1567',
              active: 1
            },
            {
              label: '有机化学原料',
              value: '2320'
            },
            {
              label: '医药中间体',
              value: '487',
              active: 2
            }
          ]
        },
        {
          label: '设备',
          value: '357',
          children: [
            {
              label: '制药装备',
              value: '85'
            },
            {
              label: '分析设备',
              value: '272'
            }
          ]
        }
      ]
    },
    {
      label: '中游',
      value: '684',
      direction: 'left',
      children: [
        {
          label: '消化系统用药',
          value: '126'
        },
        {
          label: '抗生素类药物',
          value: '132'
        },
        {
          label: '水、电解质及酸碱平衡调节药',
          value: '13'
        },
        {
          label: '泌尿系统用药',
          value: '21'
        },
        {
          label: '呼吸系统用药',
          value: '10'
        },
        {
          label: '影响组织代谢药物',
          value: '35'
        },
        {
          label: '神经系统用药',
          value: '47'
        },
        {
          label: '抗肿瘤药物',
          value: '15'
        },
        {
          label: '抗寄生虫病药',
          value: '10'
        },
        {
          label: '麻醉药物',
          value: '13'
        },
        {
          label: '循环系统用药',
          value: '36'
        },
        {
          label: '人工合成抗感染类药',
          value: '36'
        },
        {
          label: '激素及调节内分泌功能类药',
          value: '41'
        },
        {
          label: '维生素与矿物质类药',
          value: '25'
        },
        {
          label: '影响免疫功能药',
          value: '12'
        },
        {
          label: '诊断用药',
          value: '10'
        },
        {
          label: '解热镇痛药物',
          value: '21'
        },
        {
          label: '抗变态反应药',
          value: '5'
        },
        {
          label: '血液系统用药',
          value: '15'
        },
        {
          label: '抗应激药',
          value: '12'
        },
        {
          label: '专科用药',
          value: '17'
        },
        {
          label: '抑制剂',
          value: '32'
        }
      ]
    },
    {
      label: '下游',
      value: '890',
      children: [
        {
          label: '化妆品',
          value: '152'
        },
        {
          label: '化学制剂',
          value: '387'
        },
        {
          label: '保健品',
          value: '351'
        }
      ]
    }
  ]
}

export const talentChainData = {
  label: '化学原料药',
  value: '1355',
  children: [
    {
      label: '上游',
      value: '221',
      children: [
        {
          label: '原辅料',
          value: '157',
          children: [
            {
              label: '无机化学原料',
              value: '56',
              active: 1
            },
            {
              label: '有机化学原料',
              value: '31'
            },
            {
              label: '医药中间体',
              value: '70',
              active: 2
            }
          ]
        },
        {
          label: '设备',
          value: '64',
          children: [
            {
              label: '制药装备',
              value: '43'
            },
            {
              label: '分析设备',
              value: '21'
            }
          ]
        }
      ]
    },
    {
      label: '中游',
      value: '816',
      direction: 'left',
      children: [
        {
          label: '消化系统用药',
          value: '24'
        },
        {
          label: '抗生素类药物',
          value: '65'
        },
        {
          label: '水、电解质及酸碱平衡调节药',
          value: '43'
        },
        {
          label: '泌尿系统用药',
          value: '56'
        },
        {
          label: '呼吸系统用药',
          value: '49'
        },
        {
          label: '影响组织代谢药物',
          value: '44'
        },
        {
          label: '神经系统用药',
          value: '72'
        },
        {
          label: '抗肿瘤药物',
          value: '29'
        },
        {
          label: '抗寄生虫病药',
          value: '12'
        },
        {
          label: '麻醉药物',
          value: '63'
        },
        {
          label: '循环系统用药',
          value: '31'
        },
        {
          label: '人工合成抗感染类药',
          value: '14'
        },
        {
          label: '激素及调节内分泌功能类药',
          value: '34'
        },
        {
          label: '维生素与矿物质类药',
          value: '27'
        },
        {
          label: '影响免疫功能药',
          value: '43'
        },
        {
          label: '诊断用药',
          value: '18'
        },
        {
          label: '解热镇痛药物',
          value: '17'
        },
        {
          label: '抗变态反应药',
          value: '26'
        },
        {
          label: '血液系统用药',
          value: '26'
        },
        {
          label: '抗应激药',
          value: '36'
        },
        {
          label: '专科用药',
          value: '22'
        },
        {
          label: '抑制剂',
          value: '65'
        }
      ]
    },
    {
      label: '下游',
      value: '318',
      children: [
        {
          label: '化妆品',
          value: '97'
        },
        {
          label: '化学制剂',
          value: '142'
        },
        {
          label: '保健品',
          value: '79'
        }
      ]
    }
  ]
}

export const patentChainData = {
  label: '化学原料药',
  value: '19579',
  children: [
    {
      label: '上游',
      value: '9063',
      children: [
        {
          label: '原辅料',
          value: '5096',
          children: [
            {
              label: '无机化学原料',
              value: '2347',
              active: 1
            },
            {
              label: '有机化学原料',
              value: '2506'
            },
            {
              label: '医药中间体',
              value: '243',
              active: 2
            }
          ]
        },
        {
          label: '设备',
          value: '3967',
          children: [
            {
              label: '制药装备',
              value: '510'
            },
            {
              label: '分析设备',
              value: '3457'
            }
          ]
        }
      ]
    },
    {
      label: '中游',
      value: '3890',
      direction: 'left',
      children: [
        {
          label: '消化系统用药',
          value: '106'
        },
        {
          label: '抗生素类药物',
          value: '340'
        },
        {
          label: '水、电解质及酸碱平衡调节药',
          value: '127'
        },
        {
          label: '泌尿系统用药',
          value: '153'
        },
        {
          label: '呼吸系统用药',
          value: '112'
        },
        {
          label: '影响组织代谢药物',
          value: '203'
        },
        {
          label: '神经系统用药',
          value: '348'
        },
        {
          label: '抗肿瘤药物',
          value: '131'
        },
        {
          label: '抗寄生虫病药',
          value: '124'
        },
        {
          label: '麻醉药物',
          value: '129'
        },
        {
          label: '循环系统用药',
          value: '143'
        },
        {
          label: '人工合成抗感染类药',
          value: '276'
        },
        {
          label: '激素及调节内分泌功能类药',
          value: '194'
        },
        {
          label: '维生素与矿物质类药',
          value: '125'
        },
        {
          label: '影响免疫功能药',
          value: '114'
        },
        {
          label: '诊断用药',
          value: '69'
        },
        {
          label: '解热镇痛药物',
          value: '142'
        },
        {
          label: '抗变态反应药',
          value: '31'
        },
        {
          label: '血液系统用药',
          value: '139'
        },
        {
          label: '抗应激药',
          value: '426'
        },
        {
          label: '专科用药',
          value: '218'
        },
        {
          label: '抑制剂',
          value: '240'
        }
      ]
    },
    {
      label: '下游',
      value: '6626',
      children: [
        {
          label: '化妆品',
          value: '4138'
        },
        {
          label: '化学制剂',
          value: '1718'
        },
        {
          label: '保健品',
          value: '770'
        }
      ]
    }
  ]
}
