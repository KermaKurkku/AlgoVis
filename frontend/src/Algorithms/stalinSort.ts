import { setMainAction, removeCurrentAction, removeSubAction } from '../store/currentNumber/actions'
import { setFinishedAction } from '../store/running/actions'

import { setNewAction } from '../store/list/actions'


import store from '../store'

import { isRunning, wait } from '../utils'

import { baseDelay } from '../constants'

const sort = async (): Promise<void> => {
  
  if (!isRunning())
    return

  let index = 1;
  do {
    const list = store.getState().numberList.list
    store.dispatch(setMainAction(index))
    if (list.length <= 1)
      return

    if (index === list.length)
      return

    await wait(baseDelay)

    if (list[index - 1] > list[index]) {
      const newList = list.filter(v => v !== list[index]) 
      store.dispatch(setNewAction(newList))
      continue
    }
    index++
  } while(index > 0)

}

export const stalinSort = async (): Promise<void> => {
  store.dispatch(setMainAction(-1))
  await sort()
  store.dispatch(removeCurrentAction())
  store.dispatch(removeSubAction())
  store.dispatch(setFinishedAction())
}