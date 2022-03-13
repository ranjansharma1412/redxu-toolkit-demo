import { createSlice } from '@reduxjs/toolkit'
import { APIClient, APIURLs } from '../../common'
import Action from '../ActionType';
import { signUp, signIn } from '../actions/auth'

const initialState = {
    user: null,
    signUpdata: null,
    signUpLoader: false,
    signInLoader: false
}

export const authSlice = createSlice({
    name: Action.reducer.USER_REDUCER,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state, action) => {
            state.signUpLoader = true;
        })
            .addCase(signUp.fulfilled, (state, action) => {
                state.signUpLoader = false;
                state.signUpdata = action.payload;
            })
            .addCase(signUp.rejected, (state, action) => {
                state.signUpLoader = false;
                state.signUpdata = null;
            }),
       builder.addCase(signIn.pending, (state, action) => {
           state.signInLoader = true;
       })
           .addCase(signIn.fulfilled, (state, action) => {
               state.signInLoader = false;
               state.user = action.payload;
           })
           .addCase(signIn.rejected, (state, action) => {
               state.signInLoader = false;
               state.user = null;
                })
    },
})

// Action creators are generated for each case reducer function
// export const { signUp, signIn } = counterSlice.actions

export default authSlice.reducer
