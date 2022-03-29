import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * Id of movie
 */
let movieIdSaved = '';

export const getMovieDetail = createAsyncThunk(
    'GET_DETAIL_MOVIE',
    function (movieId) {
        movieIdSaved = movieId;
        return axios
            .get(
                `https://imdb-api.com/en/API/SearchMovie/k_814iwprr/${movieId}`
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => error);
    }
);

export const getFullCast = createAsyncThunk('GET_FULL_CAST', () => {
    return axios
        .get(`https://imdb-api.com/en/API/FullCast/k_814iwprr/${movieIdSaved}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => error);
});

export const getWikiData = createAsyncThunk('GET_WIKI_DATA', () => {
    return axios
        .get(`https://imdb-api.com/en/API/Wikipedia/k_814iwprr/${movieIdSaved}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => error);
});

export const getTrailer = createAsyncThunk('GET_TRAILER', () => {
    return axios
        .get(`https://imdb-api.com/en/API/Trailer/k_814iwprr/${movieIdSaved}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => error);
});

const detailReducer = createReducer(
    { isLoading: false },
    {
        [getMovieDetail.fulfilled]: (state, action) => {
            state.isLoading = false;
            return action.payload;
        },

        [getFullCast.fulfilled]: (state, action) =>
            (state = { ...state, fullCast: action.payload }),
        [getWikiData.fulfilled]: (state, action) =>
            (state = { ...state, wikiData: action.payload }),
        [getTrailer.fulfilled]: (state, action) =>
            (state = { ...state, trailerData: action.payload }),
    }
);

export default detailReducer;
