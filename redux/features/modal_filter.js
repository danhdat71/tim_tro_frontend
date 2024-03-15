import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    modalFilter : {
        is_enable: false,
        box_type: 'address',
        modal_title: 'address',
    },
};

export const modalFilter = createSlice({
    name: 'modalFilter',
    initialState: initialState,
    reducers: {
        toggleModalFilter: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.modalFilter.is_enable = payload.is_enable;
            newState.modalFilter.box_type = payload.box_type ?? '';
            newState.modalFilter.modal_title = payload.modal_title ?? '';
        },
    }
})

export const { toggleModalFilter } = modalFilter.actions;
export default modalFilter.reducer;