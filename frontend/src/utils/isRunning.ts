import state from '../store'
import { runningType } from '../store/running/types'

const isRunning = (): runningType => {
  const running = state.getState().running
	switch (running) {
		case 'running':
			return 'running'
		case 'finished':
			return 'finished'
		default:
			return 'stopped'
	}
}

export default isRunning