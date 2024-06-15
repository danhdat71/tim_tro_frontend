import { configureStore, createSlice } from "@reduxjs/toolkit";
import headerReducer from './features/header';
import adsReducer from './features/ads';
import authUserReducer from './auth';
import { useSelector } from "react-redux";

export const store = configureStore({
    reducer : {
        headerReducer: headerReducer,
        authUserReducer: authUserReducer,
        adsReducer: adsReducer,
    }
});

export const useAppSelector = useSelector;