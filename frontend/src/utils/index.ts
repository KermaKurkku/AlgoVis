import state from '../store'
import { runningType } from '../store/running/types'

export const isRunning = (): runningType => {
  const running = state.getState().running.state
  switch (running) {
  case 'running':
    return 'running'
  case 'finished':
    return 'finished'
  default:
    return 'stopped'
  }
}

export const wait = async (ms: number): Promise<void> => await new Promise(resolve => setTimeout(resolve, ms))
