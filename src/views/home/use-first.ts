import { defineEmits } from 'vue'

export default function useFirst() {
  const emit = defineEmits(['change'])
  console.log(emit);
  
  function callButton() {
    emit('change', 'aaa')
  }

  return {
    callButton
  }
}
