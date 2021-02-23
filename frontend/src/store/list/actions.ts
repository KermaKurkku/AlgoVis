import {
  ListActionType,
  ADD_LIST,
} from './types'


export const setNewAction = (list: number[], size: number): ListActionType => {
  return {
    type: ADD_LIST,
    payload: {
      list: list,
      size: size
    }
  }
}