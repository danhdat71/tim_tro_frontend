import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    searchFilterBox : {
        value: '',
        selected_value: '',
    }
};

export const searchFilterBox = createSlice({
    name: 'searchFilterBox',
    initialState: initialState,
    reducers: {
        changeValue: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.searchFilterBox.value = payload;
        },
        submitValue: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.searchFilterBox.selected_value = newState.searchFilterBox.value;
        },
        resetAllSearchFilter: function(state, action) {
            let newState = {...state};
            newState.searchFilterBox.value = '';
            newState.searchFilterBox.selected_value = '';
        }
    }
})

export const {
    changeValue,
    submitValue,
    resetAllSearchFilter,
} = searchFilterBox.actions;
export default searchFilterBox.reducer;