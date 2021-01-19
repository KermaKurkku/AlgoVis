import {
  BubbleSort,
  QuickSort,
  BogoSort,
  InsertionSort,
  Algorithms
} from './types'

import * as a from '../../Algorithms'

export const runAlgorithm = async (type: Algorithms) => {
  switch (type) {
  case BubbleSort:
    return await a.bubbleSort()
  case QuickSort:
    return await a.quickSort()
  case BogoSort:
    return await a.bogoSort()
  case InsertionSort:
    return await a.insertionSort()
  default:
    return
  }
}