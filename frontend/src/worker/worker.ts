import { setCurrentAction, removeCurrentAction } from '../store/currentNumber/actions'
import { setNewAction } from '../store/list/actions'

import store from '../store'

declare function postMessage(message: any): void

const wait = async (ms: number): Promise<void> => await new Promise(resolve => setTimeout(resolve, ms))

const partition = async (low: number, high: number): Promise<number> => {
  const list: number[] = [...store.getState().numberList.list]
  const pivot: number = list[high]
  let i = store.getState().currentNumber.current
  console.log('pivot', pivot)
  store.dispatch(setCurrentAction(i))

  for (let j = low; j < high; j++) {
    await wait(20)
     if (list[j] < pivot) {
      const newList = [...list.map(
        n => n === list[i] ? list[j] : n === list[j] ? list[i] : n
        )]
        store.dispatch(setNewAction(newList))
        i++
     }
  }
  const newList = [...list.map(
    n => n === list[i] ? list[high] : n === list[high] ? list[i] : n
    )]
  store.dispatch(setNewAction(newList))
  return i
}

const timeoutLoop = async (i: number, j: number, pivot: number, low: number,  high: number) => {
  const list: number[] = [...store.getState().numberList.list]
  setTimeout(() => {
    if (list[j] < pivot) {
      const newList = [...list.map(
        n => n === list[i] ? list[j] : n === list[j] ? list[i] : n
        )]
      store.dispatch(setNewAction(newList))
      i++
      store.dispatch(setCurrentAction(i))
    }
    if (j === high) {
      const newList = [...list.map(
        n => n === list[i] ? list[high] : n === list[high] ? list[i] : n
        )]
      console.log(newList)
      store.dispatch(setNewAction(list))
      
    } else {
      timeoutLoop(i, ++j, pivot, low, high)
    }
  }, 20)
}

const sort = async (low: number, high: number): Promise<void> => {
  const p = await partition(low, high)
  sort(low, p - 1)
  sort(p + 1, high)
  
}

export const quickSort = (): void => {
  const list = [...store.getState().numberList.list]
  postMessage('currentValue')
  //sort(0, list.length-1)
}

quickSort()