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

export class AlgorithmRunner {  
  selectedAlgorithm: Algorithms

  constructor() {
    this.selectedAlgorithm = 'BubbleSort' as Algorithms
  }

  setAlgorithm(algorithm: Algorithms) {
    this.selectedAlgorithm = algorithm
    console.log('selected algorithm', this.selectedAlgorithm)
  }

  getAlgorithm() {
    return this.selectedAlgorithm
  }

  runAlgorithm = async () => {
    switch (this.selectedAlgorithm) {
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

}