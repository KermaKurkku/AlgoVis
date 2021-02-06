import { CurrentNumberActionType, SET_CURRENT, SET_MAIN, SET_SUB, REMOVE_CURRENT, REMOVE_SUB, SET_AREA } from './types'

export const setCurrentAction = (main: number, sub?: number | null): CurrentNumberActionType => {
  return {
    type: SET_CURRENT,
    payload: {
      main: main,
      sub: sub || null
    }
  }
}

export const setMainAction = (main: number): CurrentNumberActionType => {
  return {
    type: SET_MAIN,
    payload: {
      main: main,
    }
  }
}

export const setSubAction = (sub: number): CurrentNumberActionType => {
  return {
    type: SET_SUB,
    payload: {
      sub: sub
    }
  }
}

export const removeCurrentAction = (): CurrentNumberActionType => {
  return {
    type: REMOVE_CURRENT
  }
}

export const removeSubAction = (): CurrentNumberActionType => {
  return {
    type: REMOVE_SUB
  }
}

export const setAreaAction = (start: number, end: number): CurrentNumberActionType => {
  return {
    type: SET_AREA,
    payload: {
      start: start,
      end: end
    }
  }
}