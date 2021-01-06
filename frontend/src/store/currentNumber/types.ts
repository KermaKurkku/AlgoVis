export interface CurrentNumberState {
  current: {
    main: number | null
    sub: number | null
  }
}

export const SET_CURRENT = 'SET_CURRENT'

export const SET_MAIN = 'SET_MAIN'

export const SET_SUB = 'SET_SUB'

export const REMOVE_CURRENT = 'REMOVE_CURRENT'

export const REMOVE_SUB = 'REMOVE_SUB'

interface setCurrentAction {
  type: typeof SET_CURRENT;
  payload: {
    main: number,
    sub: number | null
  }
}

interface setMainAction {
  type: typeof SET_MAIN;
  payload: {
    main: number
  }
}

interface setSubAction {
  type: typeof SET_SUB;
  payload: {
    sub: number
  }
}

interface removeCurrentAction {
  type: typeof REMOVE_CURRENT;
}

interface removeSubAction {
  type: typeof REMOVE_SUB
}

export type CurrentNumberActionType = setCurrentAction | setMainAction | setSubAction | removeCurrentAction | removeSubAction