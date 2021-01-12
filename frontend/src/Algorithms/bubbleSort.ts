import { removeCurrentAction, setMainAction } from '../store/currentNumber/actions'
import { setNewAction } from '../store/list/actions'
import { setFinishedAction } from '../store/running/actions'

import store from '../store'

import isRunning from '../utils/isRunning'

const timeoutLoop = (i: number, loop: number): void => {

  const list: number[] = [...store.getState().numberList.list]

  setTimeout(() => {
    if (isRunning() === 'stopped') {
      store.dispatch(removeCurrentAction())
    }
    if (list[i] > list[i + 1]) {
      [list[i], list[i + 1]] = [list[i + 1], list[i]]
      store.dispatch(setNewAction(list))
    }
    i++
    store.dispatch(setMainAction(i))
    if (i === (loop-1)) {
      timeoutLoop(-1, loop - 1)
    }else if (loop === 0) {
      store.dispatch(removeCurrentAction())
      store.dispatch(setFinishedAction())
    }else  {
      timeoutLoop(i, loop)
    }
  }, 80)
}

export const bubbleSort = (): void => {
  const list: number[] = [...store.getState().numberList.list]
  const i = 0
  store.dispatch(setMainAction(0))
  timeoutLoop(i, list.length)
}