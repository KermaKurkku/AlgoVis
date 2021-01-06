import { setCurrentAction, removeCurrentAction } from '../store/currentNumber/actions'
import { setNewAction } from '../store/list/actions'

import store from '../store'

const wait = async (ms: number): Promise<void> => await new Promise(resolve => setTimeout(resolve, ms))

const partition = async (A: number[], low: number, high: number): Promise<number> => {
  const list: number[] = [...A]
  const pivot: number = list[high]
  let i = low
  console.log('pivot', pivot)
  
  if (!pivot)
    return -1
  for (let j = low; j < high; j++) {
    await wait(20)
    console.log('i', i)
    if (list[j] < pivot) {
      console.log('old list', list);
      [list[i], list[j]] = [list[j], list[i]]
      console.log('new List', list)
      store.dispatch(setNewAction(list))
      i++
    }
  }
  [list[i], list[high]] = [list[high], list[i]]
  store.dispatch(setNewAction(list))
  return i
}

const sort = async (low: number, high: number): Promise<void> => {
  const list = [...store.getState().numberList.list]
  if (low < high) {
    const p = await partition(list, low, high)
    store.dispatch(setCurrentAction(p))
    console.log('p', p)
    if (p === -1)
      return
    await sort(low, p - 1)
    await sort(p + 1, high)
  }
  
}

export const quickSort = async (): Promise<void> => {
  const list = [...store.getState().numberList.list]
  console.log(list)
  store.dispatch(setCurrentAction(0))
  await sort(0, list.length-1)
  store.dispatch(removeCurrentAction())
}


/* const timeoutLoop = async (i: number, j: number, pivot: number, low: number,  high: number) => {
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
} */