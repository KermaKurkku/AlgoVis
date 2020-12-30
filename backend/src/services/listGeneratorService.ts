// Recursively add a random number
const addNumber = (list: number[], size: number): number => {
  const rand: number = Math.floor(Math.random() * size + 1)

  // If number is already in a list, run the function again
  if (list.includes(rand)) {
    return addNumber(list, size)
  }

  return rand

}

export const listGenerator = (size: number): number[] => {
  const list: number[] = []
  console.log('generating list length of', size)

  // Create a list of a given size
  for (let i = 0; i < size; i++) {
    list.push(addNumber(list, size))
  }
  console.log('generated list', list)
  return list
}



