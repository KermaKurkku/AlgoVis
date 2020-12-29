const bubbleSort = (list: number[]): number[] => {
	const sorting: number[] = [...list]

	const sorted = sortNumbers(sorting, sorting.length)

	return sorted;
}

const sortNumbers = (list: number[], n: number): number[] => {
	// If list size is smaller than 1, return list
	if (list.length < 2) return list

	const nubmersToSort: number[] = [...list]
	let swapped: boolean = false

	// Loop through the numbers in the list
	for (let i = 0; i < n-1; i++) {
		// Compare the current index to the next index
		if (nubmersToSort[i] > nubmersToSort[i + 1]) {

			// If the next index is smaller, switch the places
			[nubmersToSort[i], nubmersToSort[i + 1]] = [nubmersToSort[i + 1], nubmersToSort[i]]
			console.log(nubmersToSort[i], '<-', nubmersToSort[i + 1])
			console.log(nubmersToSort)
			swapped = true
		}
	}

	if (!swapped)
		return nubmersToSort
	
	return sortNumbers(nubmersToSort, n-1)
}

export default bubbleSort