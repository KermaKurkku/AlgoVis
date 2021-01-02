import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Action } from 'redux'
import thunk, { ThunkAction } from 'redux-thunk'
import listReducer from './list/listReducer'

import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  listReducer
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

export type AppType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store