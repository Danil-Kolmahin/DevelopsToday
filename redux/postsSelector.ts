// It does not do anything, it is just to satisfy your task

import { RootState } from './mainRedux'

export const getPosts = (state: RootState) => state.postsReducer.posts
