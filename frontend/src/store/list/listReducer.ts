import {
  ListState,
  ListActionType,
  ADD_LIST,
  CHANGE_SIZE
} from './types'
import { setNewAction, changeListSizeAction } from './actions'
import { AppType } from '../'

import listService from '../../services/lists'

const initialState: ListState = {
  list: [],
  size: 25
}

export const fetchNewList = (listSize: number): AppType => async dispatch => {
  const newList: number[] = await listService.fetchNew(listSize)
  dispatch(setNewAction(newList))
}

export const changeListSize = (listSize: number): AppType => async dispatch => {
  dispatch(changeListSizeAction(listSize))
}

const reducer = (state = initialState, action: ListActionType): ListState => {
  switch (action.type) {
    case ADD_LIST:
      
      return {
        list: [...action.payload],
        size: state.size
      }
    case CHANGE_SIZE:
      return {
        list: state.list,
        size: action.payload
      }
    default:
      return state
  }
}

export default reducer