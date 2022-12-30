import { useEffect, useState } from "react";
import axios from "axios";
import swal from '@sweetalert/with-react'
import { Link, Navigate } from "react-router-dom";
import './List.css'
import './Card.css'



const List = (props) => {
    const [moviesList, setMoviesList] = useState([])

    
    let token = sessionStorage.getItem('token')
    
    useEffect(()=>{
        const endpoint =  'https://api.themoviedb.org/3/discover/movie?api_key=a13a7f0d91cc7cdf1ae03ddd15219ffc&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
        axios.get(endpoint)
        .then(response => {
            const apiData = response.data.results
            setMoviesList(apiData)
        })
        .catch(error => {
            swal(<h2>Hubo un inconveniente, vuelve a intentarlo.</h2>)
        }) 
    },[setMoviesList])


    return(
        <>
        { !token && <Navigate to={"/"} />}
        <div className="list-container">
            {moviesList.map((movie, idx) =>{
                return (<div className="card m-3 p-1 col-3" key={idx}>
                <img className="card-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <p className="card-text">{movie.overview.substring(0, 100)}...</p>
                </div>
                <button onClick={props.addOrRemoveFromFavs} 
                        data-movie-id={movie.id}
                        className="favourite-btn"
                 >❤</button>
                    <Link className="btn btn-primary " to={`/description?movieID=${movie.id}`} >View Detail</Link>
            </div>)
            })}
        </div>
    
        </>
    )
}

export default List