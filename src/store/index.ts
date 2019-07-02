import { postsReducer } from './posts/reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  posts: postsReducer
})

export type AppState = ReturnType<typeof rootReducer>
