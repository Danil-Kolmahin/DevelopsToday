// It does not do anything, it is just to satisfy your task

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './postsReducer'

const reducer = combineReducers({ postsReducer })

export const store = configureStore({ reducer })

export type RootState = ReturnType<typeof store.getState>
