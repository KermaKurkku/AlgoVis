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
  current: {
    main: null,
    sub: null
  }
}

export const setCurrent = (main: number, sub: number | null): AppType => async dispatch => {
  dispatch(setCurrentAction(main, sub))
}

export const setMain = (main: number): AppType => async dispatch => {
  dispatch(setMainAction(main))
}

export const setSub = (sub: number): AppType => async dispatch => {
  console.log('sub',sub)
  dispatch(setSubAction(sub))
}

export const removeCurrent = ():AppType => async dispatch => {
  dispatch(removeCurrentAction())
}

export const removeSub = ():AppType => async dispatch => {
  dispatch(removeSubAction())
}

const reducer = (state = initialState, action: CurrentNumberActionType): CurrentNumberState => {
  switch(action.type) {
    case SET_CURRENT:
      return {
        current: {
          main: action.payload.main,
          sub: action.payload.sub
        }
      }
    case SET_MAIN:
      console.log(action.payload)
      return {
        current: {
          main: action.payload.main,
          sub: state.current.sub
        }
      }
    case SET_SUB:
      return {
        current: {
          main: state.current.main,
          sub: action.payload.sub
        }
      }
    case REMOVE_CURRENT:
      return {
        current: {
          main: null,
          sub: null,
        }
      }
    case REMOVE_SUB:
      return {
        current: {
          sub: null,
          ...state.current
        }
      }
    default:
      return state
  }
}

export default reducer