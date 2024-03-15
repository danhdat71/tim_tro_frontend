import { configureStore, createSlice } from "@reduxjs/toolkit";
import headerReducer from './features/header';
import { useSelector } from "react-redux";

export const store = configureStore({
    reducer : {
        headerReducer: headerReducer
    }
});

export const useAppSelector = useSelector;