import {
	RunningStateAction,
	SET_RUNNING,
	SET_STOPPED,
	SET_FINISHED
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