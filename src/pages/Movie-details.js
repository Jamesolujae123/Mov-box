import React from 'react'
import axios from 'axios';
import logo from '../assests/logo.svg'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './details.css'
import { FaPlay } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoVideocamSharp } from "react-icons/io5";
import { SiCinema4D } from "react-icons/si";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";

const Videodetails = () => {

  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWQ4OWFhZjNjM2FkYjdiODc2MWYzMWJlZTYwZDIyZCIsInN1YiI6IjY2MzhkMjMzMmZhZjRkMDEyYWM2NjhmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z5XIw2tuyaTVvs8oeULS7Fn9vqmK_XtUogCmAQ4BcqE";

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getDetails = async () => {
    const response = await axios.get (
       `https://api.themoviedb.org/3/movie/${id}`,
      { headers }
    );
    setDetail(response.data)

  }

useEffect (()=> {
  getDetails();
}, [])

  return (
    <div className='details-cont'>
<aside className='left-cont'>
  <div className='top-ting'><img className='logo' src={logo} alt='logo' />
<span>Movie Box</span></div>
 
 <div className='details-links'>
  <a href='#' className='d-link'> <IoHomeOutline  className='icon'/> Home</a>
  <a href='#' className='d-link-select'><IoVideocamSharp className='icon-2'/> Movies</a>
  <a href='#' className='d-link'><SiCinema4D className='icon'/> Cinema</a>
  <a href='#' className='d-link'><IoIosInformationCircle className='icon'/> Popular</a>
  <a href='#' className='d-link'><FaArrowTrendUp className='icon'/> Trending</a>
 </div>

</aside>
<div className='movie-d-cont'>
  <div className='m-img'><img className='movie-img' src={`${imageBaseUrl}/${detail?.backdrop_path}`} alt='' />
   <span><FaPlay /></span>
  </div >
 <div className='mov-cont'>
  
  <div className='dtls'><h1>{detail && detail.original_title}. Fri, {detail && detail.release_date}. {detail && detail.runtime} mins</h1>
  
  <p className='overview-m'>{detail?.overview}</p>
  </div>
  <div className='mov1-cont'>
    <div className='rating-m'> <span>PG13</span> 
    <button>More watch options</button></div>
    </div> 
  </div>

</div>

    </div>
  )
}

export default Videodetails