import {
  ListState,
  ListActionType,
  ADD_LIST
} from './types'
import { setNewList } from './actions'
import { AppType } from '../store'

import listService from '../../services/lists'

const initialState: ListState = {
  list: []
}

export const fetchNewList = (listSize: number): AppType => async dispatch => {
  const newList = await listService.fetchNew(listSize)
  dispatch(setNewList(newList))
}

const reducer = (state = initialState, action: ListActionType): ListState => {
  switch(action.type) {
    case ADD_LIST:
      return {
        list: [...action.payload]
      }
    default:
      return state
  }
}

export default reducer