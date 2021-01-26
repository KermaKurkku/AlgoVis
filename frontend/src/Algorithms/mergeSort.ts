import { setMainAction, setSubAction, removeCurrentAction } from '../store/currentNumber/actions'
import { setNewAction } from '../store/list/actions'
import { setFinishedAction } from '../store/running/actions'

import store from '../store'

import { isRunning, wait } from '../utils'
import { baseDelay } from '../constants'

const merge = async (arr: number[], index: number): Promise<number[]> => {
	store.dispatch(setMainAction(index))
	await wait(baseDelay)

	console.log(index, arr.length)
	if (arr.length === 1)
		return arr

	const newArr = []

	const halfOfLength: number = Math.floor(arr.length/2)

	const leftArr = await merge(arr.slice(0, halfOfLength), index)
	const rightArr = await merge(arr.slice(halfOfLength, arr.length), halfOfLength)

	let leftIndex = 0
	let rightIndex = 0
	//console.log('leftArr', leftArr)
	//console.log('rightArr', rightArr)
	

	do {
		
		
		const list = [...store.getState().numberList.list]
		/* if (leftIndex === leftArr.length) {

		} else if (rightIndex === rightArr.length) {

		} */
		
		store.dispatch(setSubAction(list.indexOf(rightArr[rightIndex])))
		//console.log('leftIndex', leftIndex, 'rightIndex', rightIndex)
		//console.log('left', leftArr[leftIndex], 'right', rightArr[rightIndex])
		//await wait(baseDelay)
		if (leftIndex < leftArr.length && leftArr[leftIndex] < rightArr[rightIndex] || rightIndex === rightArr.length) {
			newArr.push(leftArr[leftIndex])
			leftIndex++
		} else {
			newArr.push(rightArr[rightIndex])
			rightIndex++
		}
		//console.log(newArr)
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
	store.dispatch(setFinishedAction())
}