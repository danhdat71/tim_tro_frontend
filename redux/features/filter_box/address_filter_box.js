import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    addressFilterBox : {
        default_label: 'Địa điểm',
        obj_select_province: {},
        obj_select_district: {},
        obj_select_town: {},
        is_clicked_filter: false,
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
            newState.addressFilterBox.default_label = payload.default_label;

            if (newState.addressFilterBox.obj_select_town.value != null) {
                newState.addressFilterBox.is_clicked_filter = true;
            }
            
        },
        resetSelectedValue: function(state, action) {
            let newState = {...state};
            newState.addressFilterBox.default_label = 'Địa điểm';
            newState.addressFilterBox.obj_select_province = {};
            newState.addressFilterBox.obj_select_district = {};
            newState.addressFilterBox.obj_select_town = {};
            newState.addressFilterBox.is_clicked_filter = false;
        }
    }
})

export const {
    setTmpSelectedProvince,
    setTmpSelectedDistrict,
    setTmpSelectedTown,
    setSelectedValue,
    resetSelectedValue,
} = addressFilterBox.actions;
export default addressFilterBox.reducer;