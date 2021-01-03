import {
  CurrentNumberState,
  CurrentNumberActionType,
  SET_CURRENT,
  REMOVE_CURRENT
} from './types'
import {
  setCurrentAction,
  removeCurrentAction
} from './actions'
import { AppType } from '../'

const initialState: CurrentNumberState = {
  current: -1
}

export const setCurrent = (currentNumber: number): AppType => async dispatch => {
  dispatch(setCurrentAction(currentNumber))
}

export const removeCurrent = ():AppType => async dispatch => {
  dispatch(removeCurrentAction())
}

const reducer = (state = initialState, action: CurrentNumberActionType): CurrentNumberState => {
  switch(action.type) {
    case SET_CURRENT:
      return {
        current: action.payload
      }
    case REMOVE_CURRENT:
      return {
        current: -1
      }
    default:
      return state
  }
}

export default reducer