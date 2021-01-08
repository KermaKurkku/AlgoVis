export const BubbleSort = 'BubbleSort'
export const QuickSort = 'QuickSort'
export const BogoSort = 'BogoSort'

export enum AlgorithmTypes {
  BubbleSort = 'BubbleSort',
  QuickSort = 'QuickSort',
  BogoSort = 'BogoSort'
}

export type Algorithms = typeof BubbleSort | typeof QuickSort | typeof BogoSort

export type isAlgorithm<T> = T extends 'BubbleSort' ? typeof BubbleSort : typeof QuickSort