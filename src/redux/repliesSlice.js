import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {toast} from 'react-toastify';

export const fetchReplies = createAsyncThunk('replies/fetchReplies', async (commentId, thunkAPI) => {
    try {
        toast.success('fetchReplies: comment id ' + commentId);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/comments/${commentId}`);
        const comment = response.data;
        return comment.replies && Array.isArray(comment.replies) ? comment.replies : [];
    } catch (error) {
        toast.error('Failed to fetch replies: ' + error.message);
        throw error;
    }
});

const setReplies = (list, replies) => {
    const filteredList = list.filter(item => !replies.some(reply => reply.commentId === item.commentId));
    return [...filteredList, ...replies];
};

const repliesSlice = createSlice({
    name: 'replies', initialState: {
        items: [], status: 'idle', error: null,
    }, reducers: {}, extraReducers: (builder) => {
        builder
            .addCase(fetchReplies.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchReplies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = setReplies(state.items, action.payload);
            })
            .addCase(fetchReplies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message; // Store the error message
            });
    },
});

export default repliesSlice.reducer;
