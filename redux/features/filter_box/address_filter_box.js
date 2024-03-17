import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    addressFilterBox : {
        obj_select_province: {},
        obj_select_district: {},
        obj_select_town: {},
        selected: {},
    }
};

export const addressFilterBox = createSlice({
    name: 'addressFilterBox',
    initialState: initialState,
    reducers: {
        setTmpSelectedProvince: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.addressFilterBox.obj_select_province = payload;
        },
        setTmpSelectedDistrict: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.addressFilterBox.obj_select_district = payload;
        },
        setTmpSelectedTown: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.addressFilterBox.obj_select_town = payload;
        },
        setSelectedValue: function(state, action) {
            let newState = {...state};
            let payload = action.payload;

            if (newState.addressFilterBox.obj_select_town.value != null) {
                newState.addressFilterBox.selected = {
                    value: newState.addressFilterBox.obj_select_town.value,
                    label: newState.addressFilterBox.obj_select_province.label,
                };
            } else {
                newState.addressFilterBox.selected = {};
            }
        },
        resetSelectedValue: function(state, action) {
            let newState = {...state};
            newState.addressFilterBox.obj_select_province = {};
            newState.addressFilterBox.obj_select_district = {};
            newState.addressFilterBox.obj_select_town = {};
        },
        resetAllAddress: function(state, action) {
            let newState = {...state};
            newState.addressFilterBox.obj_select_province = {};
            newState.addressFilterBox.obj_select_district = {};
            newState.addressFilterBox.obj_select_town = {};
            newState.addressFilterBox.selected = {};
        }
    }
})

export const {
    setTmpSelectedProvince,
    setTmpSelectedDistrict,
    setTmpSelectedTown,
    setSelectedValue,
    resetSelectedValue,
    resetAllAddress,
} = addressFilterBox.actions;
export default addressFilterBox.reducer;