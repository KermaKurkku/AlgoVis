export interface ListState {
  list: number[];
}


export const ADD_LIST = 'ADD_LIST'

interface AddListAction {
  type: typeof ADD_LIST;
  payload: number[];
}

export type ListActionType = AddListAction