import { setMainAction, removeCurrentAction, setSubAction, removeSubAction } from '../store/currentNumber/actions'
import { setNewAction } from '../store/list/actions'
import { setFinishedAction } from '../store/running/actions'

import store from '../store'

import { isRunning, wait } from '../utils'


const sort = async (list: number[]): Promise<void> => {
  for (let i = 1; i < list.length; i++) {
    if (isRunning() === 'stopped')
      return
    await wait(300)
    let j = i
    store.dispatch(setMainAction(i))
    while (j > 0 && list[j - 1] > list[j]) {
      if (isRunning() === 'stopped')
        return
      await wait(400);
      store.dispatch(removeCurrentAction());
      store.dispatch(setSubAction(j - 1));
      
      

      [list[j], list[j - 1]] = [list[j - 1], list[j]]

      store.dispatch(setNewAction([...list]))
      
      j--
    }
    store.dispatch(removeSubAction())
  }

}

export const insertionSort = async (): Promise<void> => {
  const list = [...store.getState().numberList.list]
  store.dispatch(setMainAction(-1))
  await sort(list)
  store.dispatch(removeCurrentAction())
  store.dispatch(setFinishedAction())
}