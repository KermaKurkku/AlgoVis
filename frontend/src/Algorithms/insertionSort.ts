import { setMainAction, removeCurrentAction, setSubAction, removeSubAction } from '../store/currentNumber/actions'
import { setNewAction } from '../store/list/actions'
import { setFinishedAction } from '../store/running/actions'

import store from '../store'

import { isRunning, wait } from '../utils'

import { baseDelay } from '../constants'


const sort = async (list: number[]): Promise<void> => {
  for (let i = 1; i < list.length; i++) {
    if (isRunning() === 'stopped')
      return
      
    await wait(baseDelay)

    store.dispatch(removeSubAction())

    store.dispatch(setMainAction(i-1))
    await wait(baseDelay)
    let j = i
    store.dispatch(setMainAction(i))
    while (j > 0 && list[j - 1] > list[j]) {
      if (isRunning() === 'stopped')
        return
      
      store.dispatch(setSubAction(j))
      await wait(300);
      store.dispatch(setSubAction(j - 1));
      store.dispatch(removeCurrentAction());

      [list[j], list[j - 1]] = [list[j - 1], list[j]]

      store.dispatch(setNewAction([...list], list.length))
      
      j--
    }
    
  }

}

export const insertionSort = async (): Promise<void> => {
  const list = [...store.getState().numberList.list]
  store.dispatch(setMainAction(-1))
  await sort(list)
  store.dispatch(removeCurrentAction())
  store.dispatch(removeSubAction())
  store.dispatch(setFinishedAction())
}