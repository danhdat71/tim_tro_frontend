import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    user : {
        data: {}
    }
};

export const userData = createSlice({
    name: 'userData',
    initialState: initialState,
    reducers: {
        setUserData: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.user.data = payload;
        },
    }
})

export const {
    setUserData,
} = userData.actions;
export default userData.reducer;