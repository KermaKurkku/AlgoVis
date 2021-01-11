import {
  RunningState,
  RunningStateAction,
  runningType,
  SET_RUNNING,
  SET_STOPPED,
  SET_FINISHED
} from './types'
import {
  setRunningAction,
  setStoppedAction,
  setFinishedAction
} from './actions'

import { AppType } from '../'

const initialState: RunningState = {
  running: 'stopped'
}

export const setRunning = (): AppType => async dispatch => {
  dispatch(setRunningAction())
}

export const setStopped = (): AppType => async dispatch => {
  dispatch(setStoppedAction())
}

export const setFinished = (): AppType => async dispatch => {
  dispatch(setFinishedAction())
}

const reducer = (state = initialState, action: RunningStateAction) => {
  switch (action.type){
    case SET_RUNNING:
      return { running: 'running' }
    case SET_STOPPED:
      return { running: 'stopped' }
    case SET_FINISHED:
      return { running: 'finished' }
    default:
      return state
  }
}

export default reducer