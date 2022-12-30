import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './css/bootstrap.min.css'
import './css/App.css'
import Description from "./components/Description";
import Results from "./components/Results";
import Favorites from "./components/Favorites";



function App() {
  const [favorites, setFavorites] = useState([])

    useEffect(()=>{
        const favsInLocal = localStorage.getItem('favs')
        if(favsInLocal !== null) {
            const favsArray = JSON.parse(favsInLocal)
            setFavorites(favsArray)
        }
    },[])

  
  const addOrRemoveFromFavs = (e) =>{

    const  favMovies = localStorage.getItem('favs')
  

  let tempMoviesInFav;

  if (favMovies === null) {
    tempMoviesInFav = []
  } else {
    tempMoviesInFav = JSON.parse(favMovies)
  }
  console.log(tempMoviesInFav)


    const btn = e.currentTarget
    const parent = btn.parentElement
    const imgURL = parent.querySelector('img').getAttribute('src')
    const title = parent.querySelector('h5').innerText
    const overview = parent.querySelector('p').innerText
    const movieData = {
        imgURL,
        title,
        overview,
        id: btn.dataset.movieId
    }

    let movieIsInArray = tempMoviesInFav.find( oneMovie => {
      return oneMovie.id === movieData.id
    })

    if(!movieIsInArray){
      tempMoviesInFav.push(movieData)
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFav))
      setFavorites(tempMoviesInFav)
      console.log('se agrego la pelicula')
    }else {
      let moviesLeft = tempMoviesInFav.filter(oneMovie =>{
        return oneMovie.id !== movieData.id
      })
      localStorage.setItem('favs', JSON.stringify(moviesLeft))
      setFavorites(moviesLeft)
      console.log('Se elimino una pelicula')
    }
    
  }
  return (
    <>
    
    <div className="body">
    <Header favorites={favorites} />
    
      <Routes>
        <Route exact path="/" element={<Login />}   />
        <Route path="/list" element={<List addOrRemoveFromFavs={addOrRemoveFromFavs} />}  exact={true}/>
        <Route path="/description" element={<Description />} exact={true} />
        <Route path="/results" element={<Results addOrRemoveFromFavs={addOrRemoveFromFavs} />} exact={true}/>
        <Route path="/favorites" element={<Favorites   favorites={favorites} addOrRemoveFromFavs={addOrRemoveFromFavs}  />}  exact={true}/>
      </Routes>

      <Footer className="foot"/>
    </div>
    
    
    </>
  );
}

export default App;
