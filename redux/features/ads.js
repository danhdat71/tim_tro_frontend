import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    adsData : {
        side_left: {},
        side_right: {},
        top_head: []
    }
};

export const ads = createSlice({
    name: 'ads',
    initialState: initialState,
    reducers: {
        setAdsData: function(state, action) {
            let newState = {...state};
            let payload = action.payload;
            newState.adsData.side_left = payload.side_left;
            newState.adsData.side_right = payload.side_right;
            newState.adsData.top_head = payload.top_head;
        },
    }
})

export const { setAdsData } = ads.actions;
export default ads.reducer;