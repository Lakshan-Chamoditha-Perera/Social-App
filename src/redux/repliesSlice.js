import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReplies = createAsyncThunk('replies/fetchReplies', async (commentId) => {
    const response = await axios.get(`/comments/${commentId}`);
    return response.data;
});

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
                state.items = action.payload;
            })
            .addCase(fetchReplies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default repliesSlice.reducer;
