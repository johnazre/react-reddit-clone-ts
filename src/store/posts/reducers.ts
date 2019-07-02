import { IPost } from './types'

const initialState: IPost[] = []

export function postsReducer(state = initialState, action: any) {
  switch (action.type) {
    default:
      return state
  }
}
