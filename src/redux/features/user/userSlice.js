import {createSlice} from '@reduxjs/toolkit';

const initialUserState = {
    userEmail: "",
    userName: "",
    errMessage: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        myName: (state, action) => {
            state.userName = action.payload;
        },
        myEmail: (state, action) => {
            state.userEmail = action.payload;
        },
        loginError: (state, action) => {
            state.errMessage = action.payload;
        },
    }
});

console.log("use",initialUserState.user);

export default userSlice.reducer
export const {myName, myEmail, loginError} = userSlice.actions