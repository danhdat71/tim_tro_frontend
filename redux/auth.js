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
        updateUserDataAttr: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.user.data[payload.key] = payload.value;
        }
    }
})

export const {
    setUserData,
    updateUserDataAttr,
} = userData.actions;
export default userData.reducer;