import {createSlice} from '@reduxjs/toolkit';

const initialUserState = {
    userEmail: "",
    userName: "",
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
        }
    }
});

console.log("use",initialUserState.user);

export default userSlice.reducer
export const {myName, myEmail} = userSlice.actions