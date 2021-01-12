import {
  RunningStateAction,
  runningType,
  SET_RUNNING,
  SET_STOPPED,
  SET_FINISHED,
  SET_WAITING
} from './types'
import {
  setRunningAction,
  setStoppedAction,
  setFinishedAction,
  setWaitingAction
} from './actions'

import { AppType } from '..'

const initialState: runningType = 'waiting'

export const setRunning = (): AppType => async dispatch => {
  dispatch(setRunningAction())
}

export const setStopped = (): AppType => async dispatch => {
  dispatch(setStoppedAction())
}

export const setFinished = (): AppType => async dispatch => {
  dispatch(setFinishedAction())
}

export const setWaiting = (): AppType => async dispatch => {
  dispatch(setWaitingAction())
}

const reducer = (state = initialState, action: RunningStateAction) => {
  switch (action.type){
  case SET_RUNNING:
    return 'running'
  case SET_STOPPED:
    return 'stopped'
  case SET_FINISHED:
    return 'finished'
  case SET_WAITING:
    return 'waiting'
  default:
    return state
  }
}

export default reducer