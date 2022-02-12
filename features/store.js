import { configureStore } from "@reduxjs/toolkit";

import nav from './navSlice/navSlice';

export const store = configureStore({
    reducer: {
        nav
    }
});