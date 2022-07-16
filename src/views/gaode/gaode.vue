<template>
  <div id="mapContainer1"></div>
  <div class="district_box">
    <n-select v-model:value="province" clearable placeholder="请选择省份" :options="porvinceList" @update:value="provinceChange"></n-select>
    <n-select v-model:value="city" clearable placeholder="请选择城市" :options="cityList" @update:value="cityChange"></n-select>
    <n-select v-model:value="district" clearable placeholder="请选择区域" :options="districtList" @update:value="districtChange"></n-select>
  </div>
</template>

<script setup lang="ts">
import { allProvinceList, allCityList, allAreaList } from './area'

const province = ref('')
const provinceName = ref('安徽省')
const porvinceList = allProvinceList
const city = ref('')
const cityName = ref('')
const cityList = ref([])
const district = ref('')
const districtName = ref('')
const districtList = ref([])
let map

async function provinceChange(value) {
  if (value) {
    cityList.value = allCityList[value]
    const ele = allProvinceList.find((item) => item.value === value)
    provinceName.value = ele.label
    switchArea()
  } else {
    province.value = ''
    city.value = ''
    cityList.value = []
  }
}
async function cityChange(value) {
  if (value) {
    districtList.value = allAreaList[value].filter((item) => item.label !== '市辖区')
    const ele = cityList.value.find((item) => item.value === value)
    cityName.value = ele.label
    switchArea()
  } else {
    city.value = ''
    district.value = ''
    districtList.value = []
  }
}
async function districtChange(value) {
  if (value) {
    const ele = districtList.value.find((item) => item.value === value)
    districtName.value = ele.label
    switchArea()
  }
}
async function switchArea() {
  // 行政区划查询
  let level = 'province'
  let name = provinceName.value
  if (city.value) {
    level = 'city'
    name = cityName.value
  }
  if (district.value) {
    level = 'district'
    name = districtName.value
  }
  const opts = {
    extensions: 'all',
    level
  }
  const districtSearch = new AMap.DistrictSearch(opts) //注意：需要使用插件同步下发功能才能这样直接使用
  districtSearch.search(name, async (status, result) => {
    const bounds = result.districtList[0].boundaries
    const mask = []
    for (let i = 0; i < bounds.length; i++) {
      mask.push([bounds[i]])
    }
    map.clearMap()
    map.setMask(mask)
    for (let i = 0; i < bounds.length; i++) {
      new AMap.Polyline({
        path: bounds[i],
        strokeColor: '#3078ac',
        strokeWeight: 1,
        map
      })
    }
    map.setFitView()
  })
}

onMounted(async () => {
  map = new AMap.Map('mapContainer1', {
    features: ['bg', 'point', 'road', 'building']
  })
  switchArea()
})
</script>

<style lang="less">
#mapContainer1 {
  height: calc(100vh);
  .marker_text {
    width: max-content;
    font-size: 12px;
    p {
      margin: 0;
      font-size: 12px;
    }
  }
}
.district_box {
  position: absolute;
  top: 40px;
  right: 40px;
  display: flex;
  .n-select {
    width: 200px;
  }
}
</style>
