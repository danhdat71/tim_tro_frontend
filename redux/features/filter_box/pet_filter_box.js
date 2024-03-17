import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    petFilterBox : {
        value: {},
        selected_value: null,
        selected_label: null,
    }
};

export const petFilterBox = createSlice({
    name: 'petFilterBox',
    initialState: initialState,
    reducers: {
        selectValue: function(state, action) {
            let newState = {...state};
            let payload = action.payload;

            newState.petFilterBox.value = payload;
        },
        submitValue: function(state, action) {
            let newState = {...state};
            newState.petFilterBox.selected_value = newState.petFilterBox.value.value;
            newState.petFilterBox.selected_label = newState.petFilterBox.value.label;
        },
        resetValue: function(state, action) {
            let newState = {...state};
            newState.petFilterBox.value = {};
        },
        resetAllPet: function(state, action) {
            let newState = {...state};
            newState.petFilterBox.value = {};
            newState.petFilterBox.selected_value = null;
            newState.petFilterBox.selected_label = null;
        },
    }
})

export const {
    selectValue,
    submitValue,
    resetValue,
    resetAllPet,
} = petFilterBox.actions;
export default petFilterBox.reducer;