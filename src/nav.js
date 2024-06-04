import React from 'react'
import { TbMenu } from "react-icons/tb";
import logo from "../src/assests/logo.svg";
import { CiSearch } from "react-icons/ci";
import "../src/hero.css"
import "../src/nav.css"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Search from './search';
import axios from 'axios';
import Footer from './footer';
import Hero from './Hero';
import FeaturedMovie from './featuredMovie';
import Hero from './Hero';
import People from './people';
import Arrival from './nwarrival';

const Nav = () => {

    const footer = <Footer />

    const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWQ4OWFhZjNjM2FkYjdiODc2MWYzMWJlZTYwZDIyZCIsInN1YiI6IjY2MzhkMjMzMmZhZjRkMDEyYWM2NjhmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z5XIw2tuyaTVvs8oeULS7Fn9vqmK_XtUogCmAQ4BcqE";

  const headers = {
    Authorization: `Bearer ${token}`,
  };

    const [searchQuery, setSearchQuery] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState(null);
    const imageBaseUrl = "https://image.tmdb.org/t/p/original";

    function HandleSearchChange (e) {
        setSearchQuery(e.target.value)
    }


const  hSubmit = async (e) => {
    e.preventDefault();
     console.log(searchQuery);
    
     try {
         const response = await axios.get(
           `https://api.themoviedb.org/3/search/movie?query=${searchQuery}`,
           { headers }
         );
         setShowResults(true);
         console.log(response);
         setResults(response.data.results);
       } catch (error) {
         console.log(error);
       }
 
}

  return (

    
    <>
   
         <nav className='nav-ting'>
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>MovieBox</span>
        </div>
        {/* Search box */}
        <form onSubmit={hSubmit}>
        <div className="searchbox">
           
            <input
            onChange={HandleSearchChange}
            type="search"
            className="search"
            placeholder="What do you want to watch"
          />
          
          <CiSearch className="searchicon" />
           
        </div>
        </form>
        {/* Sign in */}
        <div className="signin">
          <button>Sign in</button>
          <div className="menu-icon">
            <TbMenu className="hambugger" />
          </div>
        </div>
      </nav>


          {showResults ? ( <Search results={results} searchQuery={searchQuery} />) : ( <><Hero />
                <FeaturedMovie url={"https://api.themoviedb.org/3/movie/top_rated"} heading={"Featured Movies"} />
                <FeaturedMovie url={"https://api.themoviedb.org/3/movie/upcoming"} heading={" New Arrival"} />
                <Arrival  url={"https://api.themoviedb.org/3/movie/now_playing"} heading={"Exclusive Videos"} />
                <People url={"https://api.themoviedb.org/3/person/popular"} heading={"Featured Cast"} /> 
              </>) }
          
    </>
       
  )
}

export default Nav
