export interface ListState {
  list: number[];
  size: number;
}

export const ADD_LIST = 'ADD_LIST'
export const CHANGE_SIZE = 'CHANGE_SIZE'

interface SetList {
  type: typeof ADD_LIST;
  payload: number[];
}

interface ChangeListSize {
  type: typeof CHANGE_SIZE;
  payload: number;
}

export type ListActionType = SetList | ChangeListSize