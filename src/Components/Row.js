import axios from 'axios';
import React, { useState,useEffect } from 'react'
import '../Css/Row.css'
//import axios from '../axios';
function Row({title,fetchUrl,isLargeRow=false}) {
    const [movies,setMovies] = useState([]);
    const [text,setText] = useState(false);
    const baseurl = "https://image.tmdb.org/t/p/original/"
    useEffect(() => 
    {
      async function fetchData()
      {
          const request = await axios.get(fetchUrl);
          setMovies(request.data.results);
          setText(true);
          return request;
      } 
      fetchData(); 
    },[fetchUrl])
    console.log(movies);
  return (
    <div className='Row'>
        <h2>{title}</h2>
       <div className="posters">
        
        {movies.map(movie => 
            {
               return <img className={`poster ${isLargeRow && "largeposter"}`} key = {movie.id} src={`${baseurl}${isLargeRow ?movie.poster_path:movie.backdrop_path }`} alt={movie?.title || movie?.name || movie?.original_name} />
               
            }
             
            )}
   
       </div>
       <div className="title Largeposter">
       { text && movies.map(movie => 
            {
               return <div className='title_names'>
                 <p> {movie?.title || movie?.name || movie?.original_name}</p>
                </div>
               
            }
             
            )}
       </div>
  
    </div>
  )
}

export default Row