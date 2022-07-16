import { reactive, toRefs, getCurrentInstance } from "vue";

export default function useSecond(type: string) {
  const selectCity = reactive({
    city: '杭州'
  })
  function changeCity() {
    selectCity.city = 'update温州' + type
  }
  console.log('useSecond', getCurrentInstance());

  return {
    ...toRefs(selectCity),
    changeCity
  }
}
