import state from '../store'

const stillRunning = (): boolean => {
	if (state.getState().currentNumber.main == null)
		return false
	else
		return true
}

export default stillRunning