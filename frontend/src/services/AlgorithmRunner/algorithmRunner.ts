import {
  BubbleSort,
  QuickSort,
  BogoSort,
  Algorithms
} from './types'

import {
  quickSort,
  bubbleSort,
  bogoSort
} from '../../Algorithms'

export const runAlgorithm = async (type: Algorithms) => {
  console.log(type)
  switch (type) {
    case BubbleSort:
      return await bubbleSort()
    case QuickSort:
      return await quickSort()
    case BogoSort:
      return await bogoSort()
    default:
      return
  }
}