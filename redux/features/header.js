import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    header : {
        is_enable: false,
        is_enable_notification_box: false
    }
};

export const header = createSlice({
    name: 'header',
    initialState: initialState,
    reducers: {
        toggleMenuHeader: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.header.is_enable = payload;
        },
        toggleNotificationBox: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.header.is_enable_notification_box = payload;
        },
    }
})

export const { toggleMenuHeader, toggleNotificationBox } = header.actions;
export default header.reducer;