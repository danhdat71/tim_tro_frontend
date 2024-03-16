import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    priceFilterBox : {
        value: [500000, 20000000],
        selected_value: null,
    }
};

export const priceFilterBox = createSlice({
    name: 'priceFilterBox',
    initialState: initialState,
    reducers: {
        changeMinValue: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.priceFilterBox.value[0] = payload;
        },
        changeMaxValue: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.priceFilterBox.value[1] = payload;
        },
        changeValue: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.priceFilterBox.value = payload;
        },
        submitValue: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.priceFilterBox.selected_value = `${newState.priceFilterBox.value[0]},${newState.priceFilterBox.value[1]}`;

            if (newState.priceFilterBox.value[0] == 500000 && newState.priceFilterBox.value[1] == 20000000) {
                newState.priceFilterBox.selected_value = null;
            }
        },
        resetValue: function(state, action) {
            let newState = {...state};
            newState.priceFilterBox.default_label = 'Diện tích';
            newState.priceFilterBox.value = [500000, 20000000];
        },
    }
})

export const {
    changeMinValue,
    changeMaxValue,
    changeValue,
    submitValue,
    resetValue,
} = priceFilterBox.actions;
export default priceFilterBox.reducer;