import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSearchedMovie = createAsyncThunk(
    'GET_SEARCHED_MOVIE',
    (movie) => {
        return axios
            .get(`https://imdb-api.com/en/API/SearchMovie/k_814iwprr/${movie}`)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                return error;
            });
    }
);

const searchReducer = createReducer(
    {},
    {
        [getSearchedMovie.fulfilled]: (state, action) => action.payload,
    }
);

export default searchReducer;
