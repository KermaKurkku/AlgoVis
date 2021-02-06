import {
	setMainAction, setSubAction, removeCurrentAction, removeSubAction, setAreaAction
} from '../store/currentNumber/actions'
import { setNewAction } from '../store/list/actions'
import { setFinishedAction } from '../store/running/actions'

import store from '../store'

import { isRunning, wait } from '../utils'
import { baseDelay } from '../constants'

const merge = async (arr: number[], index: number): Promise<number[] | null> => {
	let list = [...store.getState().numberList.list]


	if (arr.length === 1)
		return arr

	const baseIndex = index

	const newArr: number[] = []

	const halfOfLength: number = Math.floor(arr.length/2)

	const leftArr: number[] | null = await merge(arr.slice(0, halfOfLength), index)
	const rightArr: number[] | null = await merge(arr.slice(halfOfLength, arr.length), list.indexOf(arr[halfOfLength]))

	if (leftArr === null || rightArr === null)
		return null
	
	list = [...store.getState().numberList.list]

	let leftIndex = 0
	let rightIndex = 0

	store.dispatch(setAreaAction(list.indexOf(leftArr[0]), list.indexOf(rightArr[rightArr.length-1])))
	
	do {
		if (isRunning() === 'stopped') 
			return null
		
		store.dispatch(setMainAction(index))

		store.dispatch(setSubAction(list.indexOf(rightArr[rightIndex])))
		await wait(baseDelay)
		if (leftIndex < leftArr.length && leftArr[leftIndex] < rightArr[rightIndex] || rightIndex === rightArr.length) {
			newArr.push(leftArr[leftIndex])
			leftIndex++
		} else {
			newArr.push(rightArr[rightIndex])
			rightIndex++
		}

		const rtrArr: number[] = [...newArr, ...leftArr.filter(v => newArr.indexOf(v) === -1), ...rightArr.filter(v => newArr.indexOf(v) === -1)]
		
		store.dispatch(removeCurrentAction())
		store.dispatch(removeSubAction())
		store.dispatch(setNewAction(list.map(
				(v, i) => (i-baseIndex) >= 0 && (i-baseIndex) < rtrArr.length ?
				rtrArr[i-baseIndex] : v
			)
			))

		index++

	} while (leftIndex < leftArr.length || rightIndex < rightArr.length)

	return newArr
}

const sort = async (): Promise<void> => {
	const list = [...store.getState().numberList.list]

	if (isRunning() === 'stopped') 
		return

	await merge(list, 0)
	
}

export const mergeSort = async (): Promise<void> => {
	await sort()
	store.dispatch(removeCurrentAction())
	store.dispatch(removeSubAction())
	store.dispatch(setAreaAction(-1, -1))
	store.dispatch(setFinishedAction())
}