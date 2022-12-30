import './Card.css'
import { Navigate } from 'react-router-dom'

function Favorites({favorites, addOrRemoveFromFavs}) {
    let token = sessionStorage.getItem('token')
    

    return(
        <>
        { !token && <Navigate to={"/"} />}
        <h2>
            Seccion de favoritos
        </h2>
            { favorites.length === 0 && <p className='text-danger'>No tenes nada en favoritos</p> }
            <div className="row  vw-100 d-flex justify-content-center">
            {favorites.map((movie, idx) =>{
                return (<div className="card m-3 p-1 col-3" key={idx}>
                <img className="card-img" src={`https://image.tmdb.org/t/p/w500/${movie.imgURL}`} alt=""/>
                <button onClick={ addOrRemoveFromFavs} 
                        data-movie-id={movie.id}
                        className="favourite-btn"
                 >❤</button>
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <p className="card-text">{movie.overview.substring(0, 100)}...</p>
                </div>
            </div>)
            })}
            </div>
        </>
    )
}

export default Favorites