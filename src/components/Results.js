import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'


function Results( {addOrRemoveFromFavs} ){

    const [moviesResult, setMoviesResult] = useState([])


    let query = new URLSearchParams(window.location.search)
    
    let keyword = query.get('keyword')

    useEffect(()=>{
        const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=a13a7f0d91cc7cdf1ae03ddd15219ffc&language=es-ES&query=${keyword}`
        axios.get(endpoint).then(response =>{
            const moviesArray = response.data.results
            setMoviesResult(moviesArray)
        })
        .catch(error =>{
            console.log(error)
        })
    },[moviesResult, keyword])
    
    
    
    
    return(
        <div>
        
        {moviesResult.length === 0 ? <h3 className="text-center mt-2">No hay resultados para: <em>{keyword}</em></h3> : <h2 className="text-center mt-2">Resultados para: <em>{keyword}</em></h2> }
        <div className="row d-flex  justify-content-center">
        {moviesResult.map((movie, idx) =>{
                return (<div className="card m-3 p-1 col-3" key={idx}>
                <img className="card-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                <button onClick={addOrRemoveFromFavs} 
                        data-movie-id={movie.id}
                        className="favourite-btn"
                 >❤</button>
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <p className="card-text">{movie.overview.substring(0, 100)}...</p>
                </div>
                    <Link className="btn btn-primary " to={`/description?movieID=${movie.id}`} >View Detail</Link>
            </div>)
            })}
            </div>
        </div>
    )
}

export default Results