import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMoviesToHome = createAsyncThunk('GET_MOVIES_TO_HOME', () => {
    return axios
        .get('https://imdb-api.com/en/API/Top250Movies/k_814iwprr')
        .then((response) => {
            return response.data;
        })
        .catch((e) => {
            return e;
        });
});

const homeReducer = createReducer(
    {},
    {
        [getMoviesToHome.fulfilled]: (state, action) => action.payload,
    }
);

export default homeReducer;
