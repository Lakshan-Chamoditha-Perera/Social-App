import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchComments = createAsyncThunk('comments/fetchComments', async (postId) => {
    console.log('fetchComments ' + postId);
    const response = await axios.get(`http://localhost:8001/comments?postId=${postId}`);
    return response.data;
});

const setItems = (list, comments) => {
    console.log(comments)
    const filteredList = list.filter(item => item.postId !== comments[0]?.postId);
    return [...filteredList, ...comments];
}

const commentsSlice = createSlice({
    name: 'comments', initialState: {
        items: [], status: 'idle', error: null,
    }, reducers: {}, extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = setItems(state.items, action.payload);
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default commentsSlice.reducer;
