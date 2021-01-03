import { setCurrentAction, removeCurrentAction} from '../store/currentNumber/actions'

import { getStore } from '../store'

const timeOut = (i: number, store: any, length: number) => {
  setTimeout(() => {
    i++
    console.log('dispatched')
    store.dispatch(setCurrentAction(i))
    if ((length - i) > 0)
      timeOut(i, store, length)
    else
      store.dispatch(removeCurrentAction())
  }, 200)
}

const selectAll = (): void => {
  const store = getStore()
  const list = store.getState().numberList.list
  console.log(list)

  const i = 0

  store.dispatch(setCurrentAction(i))
  
  timeOut(i, store, list.length)
  

}

export default selectAll