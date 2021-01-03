export interface CurrentNumberState {
  current: number
}

export const SET_CURRENT = 'SET_CURRENT'

export const REMOVE_CURRENT = 'REMOVE_CURRENT'

interface setCurrentAction {
  type: typeof SET_CURRENT;
  payload: number
}

interface removeCurrentAction {
  type: typeof REMOVE_CURRENT;
}

export type CurrentNumberActionType = setCurrentAction | removeCurrentAction