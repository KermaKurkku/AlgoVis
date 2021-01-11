export type runningType = 'running' | 'stopped' | 'finished'

export interface RunningState {
  running: runningType
}

export const SET_RUNNING = 'SET_RUNNING'

export const SET_STOPPED = 'SET_STOPPED'

export const SET_FINISHED = 'SET_FINISHED'

interface SetRunning {
  type: typeof SET_RUNNING,
}

interface SetStopped {
  type: typeof SET_STOPPED
}

interface SetFinished {
  type: typeof SET_FINISHED
}

export type RunningStateAction = SetRunning | SetStopped | SetFinished