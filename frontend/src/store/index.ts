import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Action } from 'redux'
import thunk, { ThunkAction } from 'redux-thunk'
import listReducer from './list/listReducer'
import currentNumberReducer from './currentNumber/currentNumberReducer'
import runningStateReducer from './running/runningReducer'

import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  numberList: listReducer,
  currentNumber: currentNumberReducer,
  running: runningStateReducer
})

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
)

export type RootState = ReturnType<typeof rootReducer>

export * from './currentNumber/types'
export * from './list/types'
export * from './running/types'

export type AppType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store