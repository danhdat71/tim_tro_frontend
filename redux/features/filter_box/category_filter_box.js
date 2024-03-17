import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    categoryFilterBox : {
        value: [],
        selected_value: null,
        selected_label: null,
    }
};

export const categoryFilterBox = createSlice({
    name: 'categoryFilterBox',
    initialState: initialState,
    reducers: {
        selectValue: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            
            let index = newState.categoryFilterBox.value.findIndex(function(item) {
                return item.value == payload.value;
            });

            if (index === -1) {
                newState.categoryFilterBox.value.push(payload);
            } else {
                newState.categoryFilterBox.value.splice(index, 1);
            }
        },
        submitValue: function(state, action) {
            let newState = {...state};
            let selectedValue = null;
            let selectedLabel = null;
            if (newState.categoryFilterBox.value.length != 0) {
                let value = newState.categoryFilterBox.value.map(function(value, index) {
                    return value.value;
                });
                let label = newState.categoryFilterBox.value.map(function(value, index) {
                    return value.label;
                });
                selectedValue = value.join(', ');
                selectedLabel = label.join(', ');
            }
            newState.categoryFilterBox.selected_value = selectedValue;
            newState.categoryFilterBox.selected_label = selectedLabel;
        },
        resetValue: function(state, action) {
            let newState = {...state};
            newState.categoryFilterBox.value = [];
        },
        resetAllCategory: function(state, action) {
            let newState = {...state};
            newState.categoryFilterBox.value = [];
            newState.categoryFilterBox.selected_value = null;
            newState.categoryFilterBox.selected_label = null;
        },
    }
})

export const {
    selectValue,
    submitValue,
    resetValue,
    resetAllCategory,
} = categoryFilterBox.actions;
export default categoryFilterBox.reducer;