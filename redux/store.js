import { configureStore, createSlice } from "@reduxjs/toolkit";
import headerReducer from './features/header';
import modalFilterReducer from './features/modal_filter';
import filterAddressReducer from './features/filter_box/address_filter_box';
import filterAcreageReducer from './features/filter_box/acreage_filter_box';
import filterPriceReducer from './features/filter_box/price_range_box';
import filterCategoryReducer from './features/filter_box/category_filter_box';
import filterBedroomReducer from './features/filter_box/bed_room_filter_box';
import filterToiletRoomReducer from './features/filter_box/toilet_room_filter_box';
import filterPetReducer from './features/filter_box/pet_filter_box';
import searchFilterReducer from './features/filter_box/search_filter_box';
import { useSelector } from "react-redux";

export const store = configureStore({
    reducer : {
        headerReducer: headerReducer,
        modalFilterReducer: modalFilterReducer,
        filterAddressReducer: filterAddressReducer,
        filterAcreageReducer: filterAcreageReducer,
        filterPriceReducer: filterPriceReducer,
        filterCategoryReducer: filterCategoryReducer,
        filterBedroomReducer: filterBedroomReducer,
        filterToiletRoomReducer: filterToiletRoomReducer,
        filterPetReducer: filterPetReducer,
        searchFilterReducer: searchFilterReducer,
    }
});

export const useAppSelector = useSelector;