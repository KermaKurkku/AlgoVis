import bubbleSort from './Algorithms/bubbleSort'
import listGenerator from './utils/listGenerator'

const list: number[] = listGenerator(100)

const sortedList = bubbleSort(list)

console.log('sorted',sortedList)