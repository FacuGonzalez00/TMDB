import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './search';
import homeReducer from './home';
import detailReducer from './detail';

export const store = configureStore({
    reducer: {
        searchedMovie: searchReducer,
        movieToHome: homeReducer,
        detailMovie: detailReducer,
    },
});

export default store;

//k_s9nw0p9d FacuGonzalezMILU
//k_814iwprr FacuGonzalezCundito
