
import {  Navigate } from "react-router-dom";
import './List.css'
import Card from "./Card";


const List = () => {

    let token = localStorage.getItem('token')

    

    return(
        <>
        { !token && <Navigate to={"/"} />}
        <div className="list-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    
        </>
    )
}

export default List