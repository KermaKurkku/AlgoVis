import {
  RunningStateAction,
  SET_RUNNING,
  SET_STOPPED,
  SET_FINISHED,
  SET_WAITING
} from './types'

export const setRunningAction = (): RunningStateAction => {
  return {
    type: SET_RUNNING
  }
}

export const setStoppedAction = (): RunningStateAction => {
  return {
    type: SET_STOPPED
  }
}

export const setFinishedAction = (): RunningStateAction => {
  return {
    type: SET_FINISHED
  }
}

export const setWaitingAction = (): RunningStateAction => {
  return {
    type: SET_WAITING
  }
}