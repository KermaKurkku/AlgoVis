import {
  RunningStateAction,
  RunningState,
  SET_RUNNING,
  SET_STOPPED,
  SET_FINISHED,
  SET_WAITING,
  SET_RUNNABLE
} from './types'
import {
  setRunningAction,
  setStoppedAction,
  setFinishedAction,
  setWaitingAction,
  setRunnableAction
} from './actions'

import {Algorithms} from '../../services/AlgorithmRunner'


import { AppType } from '..'

const initialState: RunningState = {
  state: 'finished',
  runnable: 'BubbleSort'
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

export const setWaiting = (): AppType => async dispatch => {
  dispatch(setWaitingAction())
}

export const setRunnable = (algorithmName: Algorithms): AppType => async dispatch => {
  dispatch(setRunnableAction(algorithmName))
}

const reducer = (runningState = initialState, action: RunningStateAction): RunningState  => {
  switch (action.type){
  case SET_RUNNING:
    return {
      state: 'running',
      runnable: runningState.runnable
    }
  case SET_STOPPED:
    return {
      state: 'stopped',
      runnable: runningState.runnable
    }
  case SET_FINISHED:
    return {
      state: 'finished',
      runnable: runningState.runnable
    }
  case SET_WAITING:
    return {
      state: 'waiting',
      runnable: runningState.runnable
    }
  case SET_RUNNABLE:
    return {
      state: runningState.state,
      runnable: action.payload
    }
  default:
    return runningState
  }
}

export default reducer