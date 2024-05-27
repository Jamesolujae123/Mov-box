import React from 'react'
import FeaturedMovie from './featuredMovie';
import Hero from './Hero';
import People from './people';
import Arrival from './nwarrival';
import Nav from './nav';
import Search from './search';
import { useState } from 'react';
import './Home.css'


const Home = () => {
  return (
    <div className='home'>
    <Nav />
    <FeaturedMovie url={"https://api.themoviedb.org/3/movie/top_rated"} heading={"Featured Movies"} />
    <FeaturedMovie url={"https://api.themoviedb.org/3/movie/upcoming"} heading={" New Arrival"} />
    <Arrival  url={"https://api.themoviedb.org/3/movie/now_playing"} heading={"Exclusive Videos"} />
    <People url={"https://api.themoviedb.org/3/person/popular"} heading={"Featured Cast"} />
    </div>
  )
}

export default Home