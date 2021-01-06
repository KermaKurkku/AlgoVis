export const BubbleSort = 'BubbleSort'

export const QuickSort = 'QuickSort'

export enum AlgorithmTypes {
  BubbleSort = 'BubbleSort',
  QuickSort = 'QuickSort'
}

export type Algorithms = typeof BubbleSort | typeof QuickSort

export type isAlgorithm<T> = T extends 'BubbleSort' ? typeof BubbleSort : typeof QuickSort