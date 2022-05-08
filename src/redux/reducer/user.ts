import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
    user_id: string,
    user_pw: string,
    access_token: string,
    refresh_token: string
}

const createUser = createAsyncThunk(
    'createUser',
    async (user: User ) => {
        const response = await axios.post("/user/login", { user });
        return response.data;
    }
)
const loginUser = createAsyncThunk(
    'loginUser',
    async(user: User) => {

    }
)

const initialState: User = {
    user_id: '',
    user_pw: '',
    access_token: '',
    refresh_token: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(createUser.fulfilled, (state, action) => {

        })
    }
})

export default userSlice.reducer;