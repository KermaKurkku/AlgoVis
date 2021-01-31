export const BubbleSort = 'BubbleSort'
export const QuickSort = 'QuickSort'
export const BogoSort = 'BogoSort'
export const InsertionSort = 'InsertionSort'
export const StalinSort = 'StalinSort'
export const MergeSort = 'MergeSort'

export enum AlgorithmTypes {
  BubbleSort = 'BubbleSort',
  InsertionSort = 'InsertionSort',
  MergeSort = 'MergeSort',
  QuickSort = 'QuickSort',
  BogoSort = 'BogoSort',
  StalinSort = 'StalinSort',
  
}

export type Algorithms = typeof BubbleSort | typeof QuickSort | typeof BogoSort | typeof InsertionSort
  | typeof StalinSort | typeof MergeSort

