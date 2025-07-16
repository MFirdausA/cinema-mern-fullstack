import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './features/filter/filterSlice';

export const store = configureStore({
    reducer: {
        filter:filterReducer,
        // posts: postsReducer,
        // comments: commentsReducer,
        // users: usersReducer
    }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export default store;