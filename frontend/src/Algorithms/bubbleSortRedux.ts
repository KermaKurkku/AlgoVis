import { setCurrentAction, removeCurrentAction } from '../store/currentNumber/actions'
import { setNewAction } from '../store/list/actions'

import { getStore } from '../store'

const store = getStore()


const timeoutLoop = (i: number, loop: number) => {
  const list = store.getState().numberList.list
  setTimeout(() => {
    console.log(i)
    if (list[i] > list[i + 1]) {
      [list[i], list[i + 1]] = [list[i + 1], list[i]]
      store.dispatch(setNewAction(list))
    }
    i++
    store.dispatch(setCurrentAction(i))
    if (i === (loop-1)) {
      timeoutLoop(-1, loop - 1)
    }else if (loop == 0) {
      store.dispatch(removeCurrentAction())
    }else  {
      timeoutLoop(i, loop)
    }
  }, 20)
}

const bubbleSort = (): void => {
  const list = store.getState().numberList.list

  const i = -1

  timeoutLoop(i, list.length)
}

export default bubbleSort