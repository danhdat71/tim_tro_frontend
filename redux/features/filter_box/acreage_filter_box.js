import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    acreageFilterBox : {
        value: [0, 100],
        selected_value: null,
    }
};

export const acreageFilterBox = createSlice({
    name: 'acreageFilterBox',
    initialState: initialState,
    reducers: {
        changeMinValue: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.acreageFilterBox.value[0] = payload;
        },
        changeMaxValue: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.acreageFilterBox.value[1] = payload;
        },
        changeValue: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.acreageFilterBox.value = payload;
        },
        submitValue: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.acreageFilterBox.selected_value = `${newState.acreageFilterBox.value[0]},${newState.acreageFilterBox.value[1]}`;

            if (newState.acreageFilterBox.value[0] == 0 && newState.acreageFilterBox.value[1] == 100) {
                newState.acreageFilterBox.selected_value = null;
            }
        },
        resetValue: function(state, action) {
            let newState = {...state};
            newState.acreageFilterBox.default_label = 'Diện tích';
            newState.acreageFilterBox.value = [0, 100];
        },
    }
})

export const {
    changeMinValue,
    changeMaxValue,
    changeValue,
    submitValue,
    resetValue,
} = acreageFilterBox.actions;
export default acreageFilterBox.reducer;