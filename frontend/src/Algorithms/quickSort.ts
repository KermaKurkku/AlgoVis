import { setMainAction, setSubAction, removeCurrentAction } from '../store/currentNumber/actions'
import { setNewAction } from '../store/list/actions'
import { setFinishedAction } from '../store/running/actions'

import store from '../store'

import { isRunning, wait } from '../utils'

const partition = async (A: number[], low: number, high: number): Promise<number> => {
  const list: number[] = [...A]
  const pivot: number = list[high]
  store.dispatch(setMainAction(high))
  let i = low

  if (!pivot)
    return -1
  for (let j = low; j < high; j++) {
    if (isRunning() === 'stopped')
      return -1
    store.dispatch(setSubAction(j))

    await wait(400) // Wait for given amount of ms

    if (list[j] < pivot) {
      [list[i], list[j]] = [list[j], list[i]]
      store.dispatch(setNewAction(list))
      i++
    }
  }
  [list[i], list[high]] = [list[high], list[i]]
  store.dispatch(setNewAction(list))
  return i
}

const sort = async (low: number, high: number): Promise<void> => {
  if (isRunning() === 'stopped')
    return

  const list = [...store.getState().numberList.list]
  if (low < high) {
    const p: number = await partition(list, low, high)

    if (p === -1)
      return
    await sort(low, p - 1)
    await sort(p + 1, high)
  }

}

export const quickSort = async (): Promise<void> => {
  const list = [...store.getState().numberList.list]
  store.dispatch(setMainAction(-1))
  await sort(0, list.length-1)
  store.dispatch(removeCurrentAction())
  if (isRunning() === 'running')
    store.dispatch(setFinishedAction())
}