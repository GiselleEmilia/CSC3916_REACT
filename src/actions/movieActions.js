import actionTypes from '../constants/actionTypes';
//import runtimeEnv from '@mars/heroku-js-runtime-env'
const env = process.env;

function moviesFetched(movies) {
    return {
        type: actionTypes.FETCH_MOVIES,
        movies: movies
    }
}

function movieFetched(movie) {
    return {
        type: actionTypes.FETCH_MOVIE,
        selectedMovie: movie
    }
}

function movieSet(movie) {
    return {
        type: actionTypes.SET_MOVIE,
        selectedMovie: movie
    }
}

function movieSet(movies) {
    return {
        type: actionTypes.SET_MOVIE,
        selectedMovie: movies
    }
}

export function setMovie(movie) {
    return dispatch => {
        dispatch(movieSet(movie));
    }
}

export function setMovie(movies) {
    return dispatch => {
        dispatch(movieSet(movies));
    }
}


export function fetchMovie(movie_id) {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/movies/${movie_id}?reviews=true`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).then((res) => {
            dispatch(movieFetched(res));
        }).catch((e) => console.log(e));
    }
}

export function fetchMovies(movie_id) {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/movies/${movie_id}?reviews=true`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).then((res) => {
            dispatch(moviesFetched(res));
        }).catch((e) => console.log(e));
    }
}