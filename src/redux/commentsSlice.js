import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {toast} from "react-toastify";

export const fetchComments = createAsyncThunk('comments/fetchComments', async (postId) => {
    try {
        toast.success('fetchComments post no: ' + postId);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/comments?postId=${postId}`);
        return response.data && Array.isArray(response.data) ? response.data : [];
    } catch (error) {
        toast.error('Failed to fetch comments: ' + error.message);
        throw error;
    }
});

const setItems = (list, comments) => {
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
