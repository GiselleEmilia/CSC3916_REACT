import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchMovie } from "../actions/movieActions";
import MovieDetail from "../components/moviedetail"

// support routing

function Movie(props) {
    const [selectedMovie] = useState(props.selectedMovie);
    const params = useParams();
    const movie_id = params.movie_id;
    console.log(params.movie_id);
    const dispatch = useDispatch();
   /* if (selectedMovie == null) {
        dispatch(fetchMovie(movieId));
    }*/

    return (<MovieDetail movie_id={movie_id} />)
}

export default Movie;