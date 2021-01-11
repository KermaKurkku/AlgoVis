import { setMainAction, removeCurrentAction } from '../store/currentNumber/actions'
import { setFinishedAction } from '../store/running/actions'

import { setNewAction } from '../store/list/actions'

import listService from '../services/lists'

import store from '../store'

import isRunning from '../utils/isRunning'

const wait = async (ms: number): Promise<void> => await new Promise(resolve => setTimeout(resolve, ms))


const sort = async (): Promise<void> => {
  
  const list: number[] = [...store.getState().numberList.list]
  const listSize: number = store.getState().numberList.size
  let rerun = false

  for (let i = 0; i < listSize - 1; i++) {
    await wait(100)
    if (isRunning() === 'stopped')
      return
    store.dispatch(setMainAction(i))
    if (list[i] > list[i + 1]) {
      rerun = !rerun
      break
    }
  }

  if (rerun) {
    const newList = await listService.fetchNew(listSize)
    store.dispatch(setNewAction(newList))
    store.dispatch(setMainAction(-1))
    await wait(100)
    return await sort()
  }
  store.dispatch(setFinishedAction())
  return 
}

export const bogoSort = async (): Promise<void> => {
  store.dispatch(setMainAction(-1))
  await sort()
  store.dispatch(removeCurrentAction())
  
}
