export interface CurrentNumberState {
  main: number;
  sub: number | null;
}

export const SET_CURRENT = 'SET_CURRENT'

export const SET_MAIN = 'SET_MAIN'

export const SET_SUB = 'SET_SUB'

export const REMOVE_CURRENT = 'REMOVE_CURRENT'

export const REMOVE_SUB = 'REMOVE_SUB'

interface SetCurrentAction {
  type: typeof SET_CURRENT;
  payload: {
    main: number;
    sub: number | null;
  };
}

interface SetMainAction {
  type: typeof SET_MAIN;
  payload: {
    main: number;
  };
}

interface SetSubAction {
  type: typeof SET_SUB;
  payload: {
    sub: number;
  };
}

interface RemoveCurrentAction {
  type: typeof REMOVE_CURRENT;
}

interface RemoveSubAction {
  type: typeof REMOVE_SUB;
}

export type CurrentNumberActionType = SetCurrentAction | SetMainAction | SetSubAction | RemoveCurrentAction | RemoveSubAction