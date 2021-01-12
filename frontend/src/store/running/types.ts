export type runningType = 'running' | 'stopped' | 'finished' | 'waiting'

export const SET_RUNNING = 'SET_RUNNING'

export const SET_STOPPED = 'SET_STOPPED'

export const SET_FINISHED = 'SET_FINISHED'

export const SET_WAITING = 'SET_WAITING'

interface SetRunning {
  type: typeof SET_RUNNING;
}

interface SetStopped {
  type: typeof SET_STOPPED;
}

interface SetFinished {
  type: typeof SET_FINISHED;
}

interface SetWaiting {
  type: typeof SET_WAITING;
}

export type RunningStateAction = SetRunning | SetStopped | SetFinished | SetWaiting