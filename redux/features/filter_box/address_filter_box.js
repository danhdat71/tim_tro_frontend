import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    addressFilterBox : {
        defaul_label: 'Địa điểm',
        selected_town_id: '',
        tmp_selected_province_label: '',
        tmp_selected_province_id: '',
        tmp_selected_district_id: '',
        tmp_selected_town_id: '',
    }
};

export const addressFilterBox = createSlice({
    name: 'addressFilterBox',
    initialState: initialState,
    reducers: {
        setTmpSelectedProvince: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.addressFilterBox.tmp_selected_province_label = payload.tmp_selected_province_label;
            newState.addressFilterBox.tmp_selected_province_id = payload.tmp_selected_province_id;
        },
    }
})

export const { toggleMenuHeader } = addressFilterBox.actions;
export default addressFilterBox.reducer;