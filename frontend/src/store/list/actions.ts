import { ListActionType, ADD_LIST } from './types'


export const setNewList = (list: number[]): ListActionType => {
    return {
      type: ADD_LIST,
      payload: list
    }
}