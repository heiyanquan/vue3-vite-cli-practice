import fetch from 'utils/fetch'

const AREA_ID = 'AH'

// 模块指标
export const inxGeneral = (data, config) => fetch('post', '/index/list', { area_id: AREA_ID, ...data }, config)
// 指标明细
export const inxGeneralDetail = (data, config) => fetch('post', '/index/detail', { area_id: AREA_ID, ...data }, config)

