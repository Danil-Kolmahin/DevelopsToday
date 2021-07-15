// It does not do anything, it is just to satisfy your task

import { createSlice } from '@reduxjs/toolkit'

export interface PostType {
	postId: number,
	title: string,
	body: string
}

const slice = createSlice({
	name: 'postsReducer',

	initialState: {
		posts: []
	},

	reducers: {
		addPost: (state, action) => {
			state.posts.push(action.payload)
		}
	}
})

export const postsReducer = slice.reducer

export const {
	addPost
} = slice.actions
