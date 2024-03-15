import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    header : {
        is_enable: false,
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
    }
})

export const { toggleMenuHeader } = header.actions;
export default header.reducer;