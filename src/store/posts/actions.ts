import { IPost, ADD_POST } from './types'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { AppState } from '..'

export const thunkAddPost = (
  post: IPost
): ThunkAction<void, AppState, null, Action<string>> => {
  return async dispatch => {
    let response = await axios.post(`http://localhost:8082/api/posts`, post)
    let newPost = response.data
    dispatch({
      type: ADD_POST,
      payload: newPost
    })
  }
}
