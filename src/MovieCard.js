import React from 'react'
import imdb from "../src/assests/imdb.svg"
import tomato from "../src/assests/tomato.svg"
import { useNavigate } from 'react-router-dom'



const MovieCard = ({movie}) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

 const  navigateTo = useNavigate();

 const handleClick = (id) => {
    navigateTo(`/movie-details/${id}`);}

  return (
    <div className='move'>
    <div className='moviecard' onClick={()=>handleClick(movie.id)}>
        <img className='movieimg' src={`${imageBaseUrl}/${movie?.poster_path}`} alt='' />
        <h4>{movie?.title}</h4>
        <div className='ratings-card'>
        <div className='rating-card'>
            <img src={imdb} alt='imdb'/>
            <small>90/100</small>
        </div>
        <div className='rating-card'>
        <img src={tomato}  alt='tomato'/>
        <small>75%</small>
        </div>
       </div>
    </div>
    </div>
  )
}

export default MovieCard