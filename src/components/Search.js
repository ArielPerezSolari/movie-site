import swal from "@sweetalert/with-react"
import { useNavigate } from "react-router-dom"

function Search() {
    const navigate = useNavigate()
    const submitHandler = (e) =>{
        e.preventDefault()
        const keyword = e.currentTarget.keyword.value.trim()


        if(keyword.length === 0){
            swal( 
                <h2>Tienes que poner un valor correcto</h2>
            )
        }else if (keyword.length > 1) {
            e.currentTarget.keyword.value = ''
            navigate(`/results?keyword=${keyword}`)
        }


    }
    return(
        <>
        <form className="d-flex g-3" onSubmit={submitHandler}>
        <input className="form-control" type="text"  placeholder="Buscar" name="keyword"/>
        <button className="btn btn-success " type="submit">Buscar</button>
        </form>
        </>
    )
}

export default Search