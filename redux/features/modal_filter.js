import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    modalFilter : {
        is_enable: false,
    }
};

export const modalFilter = createSlice({
    name: 'modalFilter',
    initialState: initialState,
    reducers: {
        toggleModalFilter: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.modalFilter.is_enable = payload;
        },
    }
})

export const { toggleModalFilter } = modalFilter.actions;
export default modalFilter.reducer;