import React from 'react'
import "./search.css";
import MovieCard from "./MovieCard.js";
import "../src/search.css"
import { useNavigate } from 'react-router-dom';

const Search = ({results, searchQuery}) => {
  console.log(results)
 const navigateTo = useNavigate();
  

  return (
    
    <div className='search-cont'>
      <div>
      Showing {results.length} result(s) for {searchQuery}</div>
      <div className='search-ting'>{results?.map((movie, index) =>
       <MovieCard movie={movie}/> )}</div>
        
    </div>
  )
}

export default Search