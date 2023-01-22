import axios from "axios";


const KEY = '6bc047b88f669d1fb86574f06381005d93d3517a';
const BASE_URL = 'https://api.themoviedb.org/3/';
const URL_POSTER = 'https://image.tmdb.org/t/p/w500';
const URL_BACKDROP = 'https://image.tmdb.org/t/p/original/';
const LOGO_URL = `https://image.tmdb.org/t/p/w185`;

export { KEY, BASE_URL, URL_POSTER, URL_BACKDROP, LOGO_URL };

export const getTrandingMovies = async () => {
    const response = await axios.get(
        `${BASE_URL}trending/movie/day?api_key=${KEY}&language=en-US`
    );
    return response.data;
};

export const getMoviesQuery = async query => {
    const response = await axios.get(
        `${BASE_URL}search/movie?api_key=${KEY}&query=${query}&language=en-US`
    );
    return response.data;
};

export const getMovieById = async id => {
    const response = await axios.get(
        `${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`
    );
    return response.data;
};

export const getMovieCast = async id => {
    const response = await axios.get(
        `${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`
    );
    return response.data.cast;
};

export const getMovieReviews = async id => {
    const response = await axios.get(
        `${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    return response.data.results;
};