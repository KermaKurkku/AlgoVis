import { setMainAction, setSubAction, removeCurrentAction } from '../store/currentNumber/actions'
import { setNewAction } from '../store/list/actions'
import { setFinishedAction } from '../store/running/actions'

import store from '../store'

import { isRunning, wait } from '../utils'

const sort = async (list: number[]): Promise<void> => {

}

export const mergeSort = async (): Promise<void> => {
  const list = [...store.getState().numberList.list]

}