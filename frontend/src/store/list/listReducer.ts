import {
  ListState,
  ListActionType,
  ADD_LIST
} from './types'
import { setNewAction } from './actions'
import { AppType } from '../'

import listService from '../../services/lists'

const initialState: ListState = {
  list: [],
  size: 25
}

export const fetchNewList = (listSize: number): AppType => async dispatch => {
  const newList: number[] = await listService.fetchNew(listSize)
  dispatch(setNewAction(newList, listSize))
}

const reducer = (state = initialState, action: ListActionType): ListState => {
  switch (action.type) {
  case ADD_LIST:

    return {
      list: [...action.payload.list],
      size: action.payload.size
    }
  default:
    return state
  }
}

export default reducer