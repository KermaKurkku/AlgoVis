import { setMainAction, removeCurrentAction, removeSubAction } from '../store/currentNumber/actions'
import { setFinishedAction } from '../store/running/actions'

import { setNewAction } from '../store/list/actions'

import store from '../store'

import { isRunning, wait } from '../utils'

import {shuffle} from 'lodash'
import { baseDelay } from '../constants'


const sort = async (): Promise<void> => {
  const list: number[] = [...store.getState().numberList.list]
  const listSize: number = store.getState().numberList.size
  let rerun = false

  for (let i = 1; i < listSize - 1; i++) {
    store.dispatch(setMainAction(i-1))
    await wait(baseDelay)
    if (isRunning() === 'stopped')
      return
    store.dispatch(setMainAction(i))
    if (list[i] < list[i - 1]) {
      rerun = !rerun
      break
    }
  }

  if (rerun) {
    store.dispatch(setNewAction(shuffle(list), list.length))
    store.dispatch(setMainAction(-1))
    await wait(300)
    return await sort()
  }
  store.dispatch(setFinishedAction())
  return
}

export const bogoSort = async (): Promise<void> => {
  store.dispatch(setMainAction(-1))
  await sort()
  store.dispatch(removeCurrentAction())
  store.dispatch(removeSubAction())

}