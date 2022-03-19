import { configureStore } from "@reduxjs/toolkit";

import homepageReducer from './homepage/homepage.slice';
import universitiesReducer from './universities/universities.slice';

export const store = configureStore({
    reducer:{
        homepage:homepageReducer,
        universities:universitiesReducer,
    }
})