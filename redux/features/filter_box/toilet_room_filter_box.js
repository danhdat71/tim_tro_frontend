import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    toiletRoomFilterBox : {
        value: {},
        selected_value: null,
        selected_label: null,
    }
};

export const toiletRoomFilterBox = createSlice({
    name: 'toiletRoomFilterBox',
    initialState: initialState,
    reducers: {
        selectValue: function(state, action) {
            let newState = {...state};
            let payload = action.payload;

            newState.toiletRoomFilterBox.value = payload;
        },
        submitValue: function(state, action) {
            let newState = {...state};
            newState.toiletRoomFilterBox.selected_value = newState.toiletRoomFilterBox.value.value;
            newState.toiletRoomFilterBox.selected_label = newState.toiletRoomFilterBox.value.label;
        },
        resetValue: function(state, action) {
            let newState = {...state};
            newState.toiletRoomFilterBox.value = {};
        },
        resetAllToiletRoom: function(state, action) {
            let newState = {...state};
            newState.toiletRoomFilterBox.value = {};
            newState.toiletRoomFilterBox.selected_value = null;
            newState.toiletRoomFilterBox.selected_label = null;
        },
    }
})

export const {
    selectValue,
    submitValue,
    resetValue,
    resetAllToiletRoom,
} = toiletRoomFilterBox.actions;
export default toiletRoomFilterBox.reducer;