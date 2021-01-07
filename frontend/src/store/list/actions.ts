import {
  ListActionType,
  ADD_LIST,
  CHANGE_SIZE
} from './types'


export const setNewAction = (list: number[]): ListActionType => {
    return {
      type: ADD_LIST,
      payload: list
    }
}

export const changeListSizeAction = (size: number): ListActionType => {
  return {
    type: CHANGE_SIZE,
    payload: size
  }
}