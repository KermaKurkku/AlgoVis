
const wrkr: Worker = self as any



const wait = async (ms: number): Promise<void> => await new Promise(resolve => setTimeout(resolve, ms))

export const quickSort = async (): Promise<void> => {
  const result = 'Yeetus deletus'
  console.log('yaat')
  wrkr.postMessage(result)
  await wait(4000)
  console.log('yeet')
  //sort(0, list.length-1)
}