import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Action, Store } from 'redux'
import thunk, { ThunkAction } from 'redux-thunk'
import listReducer from './list/listReducer'
import currentNumberReducer from './currentNumber/currentNumberReducer'

import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  numberList: listReducer,
  currentNumber: currentNumberReducer
})

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
)

export const getStore = (): Store => store

export type RootState = ReturnType<typeof rootReducer>

export type AppType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store