import { configureStore, createSlice } from "@reduxjs/toolkit";
import headerReducer from './features/header';
import modalFilterReducer from './features/modal_filter';
import { useSelector } from "react-redux";

export const store = configureStore({
    reducer : {
        headerReducer: headerReducer,
        modalFilterReducer: modalFilterReducer,
    }
});

export const useAppSelector = useSelector;