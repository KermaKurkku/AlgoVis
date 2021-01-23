export const BubbleSort = 'BubbleSort'
export const QuickSort = 'QuickSort'
export const BogoSort = 'BogoSort'
export const InsertionSort = 'InsertionSort'
export const StalinSort = 'StalinSort'

export enum AlgorithmTypes {
  BubbleSort = 'BubbleSort',
  InsertionSort = 'InsertionSort',
  QuickSort = 'QuickSort',
  BogoSort = 'BogoSort',
  StalinSort = 'StalinSort'
}

export type Algorithms = typeof BubbleSort | typeof QuickSort | typeof BogoSort | typeof InsertionSort
  | typeof StalinSort

export type isAlgorithm<T> = T extends 'BubbleSort' ? typeof BubbleSort : typeof QuickSort