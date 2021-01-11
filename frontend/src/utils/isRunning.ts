import state from '../store'

const isRunning = (): boolean => {
	if (state.getState().currentNumber.main === null)
		return false
	else
		return true
}

export default isRunning