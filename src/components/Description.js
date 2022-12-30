import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import axios from "axios"

function Description() {

    let token = sessionStorage.getItem('token')

    let query = new URLSearchParams(window.location.search)
    let movieID = query.get('movieID')
    
    const [movie, setMovie] = useState(null)
   

    useEffect(()=>{
        const endpoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=a13a7f0d91cc7cdf1ae03ddd15219ffc&language=es-ES`
        axios.get(endpoint).then(response =>{
            const movieData = response.data
            setMovie(movieData)
        })
        .catch(error =>{
            console.log('Hubo un error lo sentimos vuelve a intentar')
        })
    },[movieID])

    return(
        <>
        {!token && <Navigate to={"/"} />}
        { !movie && (
            <>
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                <div className="spinner-border" role="status">
                
                </div>
                <span>Loading...</span>
            </div>
            </>
        )}
        { movie && (
            <div className="">
                <h2 className="text-center p-4">Detalle de la pelicula</h2>
                <div className="d-flex ">
                    <div className="col-4 ms-5">
                        <img className="" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster"/>
                    </div>
                    <div className="col-6 ">
                        <h5 className="m-2">Titulo: {movie.title}</h5>
                        <h5 className="m-2">Fecha de estreno:   {movie.release_date} </h5>
                        <h5 className="mt-4">Reseña: </h5>
                        <p className="m-2 p-4">{movie.overview}</p>
                        <h5 className="mt-4">Rating: {movie.vote_average}</h5>
                        <h5 className="m-4">Genero: </h5>
                        <ul>
                            {movie.genres.map((oneGenre) => <li key={oneGenre.id} className="m-2 p-2">{oneGenre.name}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default Description