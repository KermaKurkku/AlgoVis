export interface ListState {
  list: number[];
  size: number;
}

export const ADD_LIST = 'ADD_LIST'

interface SetList {
  type: typeof ADD_LIST;
  payload: {
    list: number[];
    size: number;
  }
}

export type ListActionType = SetList