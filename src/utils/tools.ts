import moment from "moment"

export function handleTableData(originList: any[]) {
  const list = originList.map((item) => ({
    name: item.name,
    value: item.value
  }))
  return list
}

export function handleTableIndex(rowIndex: number, page: any, pageSize: any) {
  const index = (page.value - 1) * pageSize.value + rowIndex + 1
  return h('div', {}, { default: () => index })
}

export function handleTableDate(timestamp: number) {
  const date = moment(timestamp).format("YYYY-MM-DD")
  return date
}
