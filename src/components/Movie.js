import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ title, year, summary, poster, genres, description_full}){
    return(
        <div className="movie">
            <Link to={{
                pathname:'/movie-detail',
                state:{year, title, summary, poster, genres, description_full}
            }}>
            <img src={poster} alt={title} title={title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => {
                        return <li key={index} className="movie__genre">{genre}</li>
                    })}
                </ul>
                <p className="movie_summary">{summary.slice(0,180)}...</p>
            </div>
            </Link>  
        </div>
    );
}

Movie.prototype = { //props 검사 , 자료형과 그 이름의 값이 전달되었는지 검사해주는 기능. 콘솔 오류로 나타남
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.string.isRequired
};
export default Movie;