import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import commentsReducer from './commentsSlice';
import repliesReducer from './repliesSlice';
import usersReducer from './usersSlice';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer,
        replies: repliesReducer,
        users: usersReducer
    },
});
