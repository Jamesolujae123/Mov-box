import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import "../src/hero.css"
import play from '../src/assests/play.svg';
import imdb from "../src/assests/imdb.svg";
import tomato from "../src/assests/tomato.svg"; 

const Hero = () => {

const [heroMovie, setHeroMovie] = useState(null);

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWQ4OWFhZjNjM2FkYjdiODc2MWYzMWJlZTYwZDIyZCIsInN1YiI6IjY2MzhkMjMzMmZhZjRkMDEyYWM2NjhmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z5XIw2tuyaTVvs8oeULS7Fn9vqmK_XtUogCmAQ4BcqE"

const headers = {
    Authorization: `Bearer ${token}`,
};
  const HeroMovie = async () => {
    try {
        const response = await axios.get (
            "https://api.themoviedb.org/3/movie/249660", {headers}
        );
        console.log(response.data);
        setHeroMovie(response.data);
    } catch (errors) {
        console.log(errors)
    }
  }

  const imageBaseUrl = "https://image.tmdb.org/t/p/original";


  useEffect (() => {HeroMovie()}, [])
  


  return (
    <div className='heroCont'>

<main className='h-cont'>
    

    <img src={`${imageBaseUrl}/${heroMovie?.backdrop_path}`}   className="hero-img" alt="movie-pic"/>
    <div className='movies'>
    <h2>{heroMovie?.original_title}</h2>
<div className='ratings'>
    <div className='rating'>
        <img src={imdb} alt='imdb'/>
        <small>90/100</small>
    </div>
    <div className='rating'>
    <img src={tomato}  alt='tomato'/>
    <small>75%</small>
    </div>
</div>
    <p className='overview'>{heroMovie?.overview}</p>
<a className='trailer' href="https://www.youtube.com/watch?v=7mgu9mNZ8Hk">  <span>WATCH TRAILER</span>
<img src={play}  alt='play'/>  </a>
</div>


</main>

  
    </div>
  )
}

export default Hero
