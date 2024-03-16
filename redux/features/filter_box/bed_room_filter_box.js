import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    bedRoomFilterBox : {
        value: {},
        selected_value: null,
        selected_label: null,
    }
};

export const bedRoomFilterBox = createSlice({
    name: 'bedRoomFilterBox',
    initialState: initialState,
    reducers: {
        selectValue: function(state, action) {
            let newState = {...state};
            let payload = action.payload;

            newState.bedRoomFilterBox.value = payload;
        },
        submitValue: function(state, action) {
            let newState = {...state};
            newState.bedRoomFilterBox.selected_value = newState.bedRoomFilterBox.value.value;
            newState.bedRoomFilterBox.selected_label = newState.bedRoomFilterBox.value.label;
        },
        resetValue: function(state, action) {
            let newState = {...state};
            newState.bedRoomFilterBox.value = {};
        },
    }
})

export const {
    selectValue,
    submitValue,
    resetValue,
} = bedRoomFilterBox.actions;
export default bedRoomFilterBox.reducer;