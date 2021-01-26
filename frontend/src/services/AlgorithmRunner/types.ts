export const BubbleSort = 'BubbleSort'
export const QuickSort = 'QuickSort'
export const BogoSort = 'BogoSort'
export const InsertionSort = 'InsertionSort'
export const StalinSort = 'StalinSort'
export const MergeSort = 'MergeSort'

export enum AlgorithmTypes {
  BubbleSort = 'BubbleSort',
  InsertionSort = 'InsertionSort',
  QuickSort = 'QuickSort',
  BogoSort = 'BogoSort',
  StalinSort = 'StalinSort',
  MergeSort = 'MergeSort'
}

export type Algorithms = typeof BubbleSort | typeof QuickSort | typeof BogoSort | typeof InsertionSort
  | typeof StalinSort | typeof MergeSort

