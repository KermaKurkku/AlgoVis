import {
  CurrentNumberState,
  CurrentNumberActionType,
  SET_CURRENT,
  SET_MAIN,
  SET_SUB,
  REMOVE_CURRENT,
  REMOVE_SUB,
} from './types'
import {
  setCurrentAction,
  setMainAction,
  setSubAction,
  removeCurrentAction,
  removeSubAction
} from './actions'
import { AppType } from '../'

const initialState: CurrentNumberState = {
  main: -1,
  sub: null
}

export const setCurrent = (main: number, sub: number | null): AppType => async dispatch => {
  dispatch(setCurrentAction(main, sub))
}

export const setMain = (main: number): AppType => async dispatch => {
  dispatch(setMainAction(main))
}

export const setSub = (sub: number): AppType => async dispatch => {
  dispatch(setSubAction(sub))
}

export const removeCurrent = (): AppType => async dispatch => {
  dispatch(removeCurrentAction())
}

export const removeSub = (): AppType => async dispatch => {
  dispatch(removeSubAction())
}

const reducer = (state = initialState, action: CurrentNumberActionType): CurrentNumberState => {
  switch(action.type) {
  case SET_CURRENT:
    return {
      main: action.payload.main,
      sub: action.payload.sub
    }
  case SET_MAIN:
    return {
      main: action.payload.main,
      sub: state.sub
    }
  case SET_SUB:
    return {
      main: state.main,
      sub: action.payload.sub
    }
  case REMOVE_CURRENT:
    return {
      main: -1,
      sub: null,
    }
  case REMOVE_SUB:
    return {
      sub: null,
      ...state
    }
  default:
    return state
  }
}

export default reducer