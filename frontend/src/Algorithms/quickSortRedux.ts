import { setCurrentAction, removeCurrentAction } from '../store/currentNumber/actions'
import { setNewAction } from '../store/list/actions'

import store from '../store'

const partition = (low: number, high: number) => {
  const list: number[] = [...store.getState().numberList.list]
  const pivot: number = list[high]
  const i = store.getState().currentNumber.current
  console.log('pivot', pivot)
  store.dispatch(setCurrentAction(i))
  timeoutLoop(i, low, pivot, low, high)
  
}

const timeoutLoop = (i: number, j: number, pivot: number, low: number,  high: number): void => {
  const list: number[] = [...store.getState().numberList.list]
  setTimeout(() => {
    console.log('i',i)
    console.log('j',j)
    if (list[j] < pivot) {
      console.log('smaller');

      [list[i], list[j]] = [list[j], list[i]]
      store.dispatch(setNewAction(list))
      i++
      store.dispatch(setCurrentAction(i))
    }
    if (j === high) {
      console.log('j === high', j, high);

      [list[i], list[high]] = [list[high], list[i]];
      console.log(list)
      store.dispatch(setNewAction(list))
      sort(low, --i)
      sort(++i, high)
    } else {
      timeoutLoop(i, ++j, pivot, low, high)
    }
  }, 20)
}

const sort = (low: number, high: number): void => {
  const list = [...store.getState().numberList.list]
  partition(low, high)
  
}

export const quickSort = (): void => {
  const list = [...store.getState().numberList.list]
  store.dispatch(setCurrentAction(0))
  sort(0, list.length-1)
}