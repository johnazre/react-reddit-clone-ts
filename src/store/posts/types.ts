// Action creator labels
export const ADD_POST = 'ADD_POST'
export const FETCH_POSTS = 'FETCH_POSTS'

// Maybe don't need this?
// export interface addPostAction {
//   type: typeof ADD_POST
//   payload: IPost
// }

// Post state IS an array of posts (IPost[]), so no need for IPostState in this case, in my opinion
export interface IPost {
  title: string
  author: string
  content: string
  createdAt: string
  votes: number
  img_url: string
  inCart: boolean
  id: boolean
}
