import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {toast} from 'react-toastify';

export const login = createAsyncThunk('user/login', async (credentials, thunkAPI) => {
    try {
        console.log(credentials);

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/user?email=${credentials.email}`);
        const user = response.data[0];
        console.log(user);
        if (!user) {
            throw new Error('User not found');
        }

        // Assuming user object has a password property for simplicity
        if (user.password !== credentials.password) {
            throw new Error('Incorrect password');
        }

        return user;
    } catch (error) {
        toast.error('Failed to login: ' + error.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});

const usersSlice = createSlice({
    name: 'user', initialState: {
        user: null, status: 'idle', error: null,
    }, reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    }, extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
                state.error = null;
                toast.success('Login successful');
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const {setUser} = usersSlice.actions;
export default usersSlice.reducer;