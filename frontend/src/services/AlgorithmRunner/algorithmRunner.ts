import {
  BubbleSort,
  QuickSort,
  Algorithms
} from './types'

import {
  quickSort,
  bubbleSort
} from '../../Algorithms'

export const runAlgorithm = async (type: Algorithms) => {
  console.log(type)
  switch (type) {
    case BubbleSort:
      return await bubbleSort()
    case QuickSort:
      return await quickSort()
    default:
      return
  }
}