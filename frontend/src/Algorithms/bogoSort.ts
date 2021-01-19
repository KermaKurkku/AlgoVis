import { setMainAction, removeCurrentAction } from '../store/currentNumber/actions'
import { setFinishedAction } from '../store/running/actions'

import { setNewAction } from '../store/list/actions'

import listService from '../services/lists'

import store from '../store'

import { isRunning, wait } from '../utils'

import _ from 'lodash'


const sort = async (): Promise<void> => {
  const list: number[] = [...store.getState().numberList.list]
  const listSize: number = store.getState().numberList.size
  let rerun = false

  for (let i = 0; i < listSize - 1; i++) {
    await wait(200)
    if (isRunning() === 'stopped')
      return
    store.dispatch(setMainAction(i))
    if (list[i] > list[i + 1]) {
      rerun = !rerun
      break
    }
  }

  if (rerun) {
    store.dispatch(setNewAction(_.shuffle(list)))
    store.dispatch(setMainAction(-1))
    await wait(400)
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