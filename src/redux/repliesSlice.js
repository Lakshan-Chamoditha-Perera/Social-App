import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchReplies = createAsyncThunk('replies/fetchReplies', async (commentId) => {
    toast('fetchReplies: comment id ' + commentId);
    const response = await axios.get(`http://localhost:8001/comments/${commentId}`);
    const comment = response.data;
    const replies = comment.replies && Array.isArray(comment.replies) ? comment.replies : [];
    return replies;
});


const setReplies = (list, replies) => {
    const filteredList = list.filter(item => !replies.some(reply => reply.commentId === item.commentId));
    return [...filteredList, ...replies];
};

const repliesSlice = createSlice({
    name: 'replies',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReplies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchReplies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = setReplies(state.items, action.payload);
            })
            .addCase(fetchReplies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default repliesSlice.reducer;
