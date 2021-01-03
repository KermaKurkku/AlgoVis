import { CurrentNumberActionType, SET_CURRENT, REMOVE_CURRENT } from './types'

export const setCurrentAction = (number: number): CurrentNumberActionType => {
  return {
    type: SET_CURRENT,
    payload: number
  }
}

export const removeCurrentAction = (): CurrentNumberActionType => {
  return {
    type: REMOVE_CURRENT
  }
}