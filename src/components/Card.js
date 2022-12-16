import { Link } from "react-router-dom"
import './Card.css'

function Card(){
    return(
        <>
            <div className="item-container">
                <img  alt=""/>
                <div className="item-body">
                    <h5>item title</h5>
                    <p>blalblablalsls blaslbl blslsals blalblablalsls</p>
                </div>
                <button>
                    <Link to={"/description"}>View Detail</Link>
                </button>
            </div>
        </>
    )
}



export default Card