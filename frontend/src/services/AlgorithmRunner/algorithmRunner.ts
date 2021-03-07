import {
  BubbleSort,
  QuickSort,
  BogoSort,
  InsertionSort,
  StalinSort,
  MergeSort,
  Algorithms
} from './types'

import * as a from '../../Algorithms'

const algorithmRunner = async (algorithm: Algorithms): Promise<void> =>  {  
    switch (algorithm) {
    case BubbleSort:
      return await a.bubbleSort()
    case QuickSort:
      return await a.quickSort()
    case BogoSort:
      return await a.bogoSort()
    case InsertionSort:
      return await a.insertionSort()
    case StalinSort:
      return await a.stalinSort()
    case MergeSort:
      return await a.mergeSort()
    default:
      return
    }
}

export default algorithmRunner