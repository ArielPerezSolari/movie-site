import axios from 'axios';
import swal from '@sweetalert/with-react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useEffect } from 'react';



function Login() {
    
    
    const navigate = useNavigate()
    useEffect(() => {
        const alreadyLogged = sessionStorage.getItem('token')
        if(alreadyLogged !== null) {
            navigate("/list")
        }
    },)
    

    const subtmitHandler = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = 
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;

      
        if(email === '' || password === '') {
            swal(
                <div>
                <h2>Los campos no pueden estar vacíos</h2>
                </div>
            );
            return;
        }

        if(email !== '' && !regexEmail.test(email)){
            swal(
                <div>
                <h2>Debes ingresar una direccion de correo válida</h2>
                </div>
            );
            return;
        }

        if(email !== 'challenge@alkemy.org' || password !== 'react') {
            swal(
                <div>
                    <h2>Credenciales inválidas</h2>
                </div>
            );
            return;
        }
        
        swal(
        <h2>Ingreso autorizado</h2>
        );
        axios
            .post('http://challenge-react.alkemy.org', {email, password})
            .then( res => {
                console.log(res.data);
                const tokenRecived = res.data.token
                sessionStorage.setItem('token', tokenRecived)
                navigate("/list")
                
            })         
    }
    let token = sessionStorage.getItem('token')
    return(
        <>
        { token && <Navigate to={"/list"} />}
        <div className="container mt-10 vh-100 d-flex justify-content-center flex-column align-items-center">
        <h2 className='pb-3'>Formulario de login</h2>
        <form className='d-flex flex-column pb-2' onSubmit={subtmitHandler}>
            <label for="email">
                <span>Correo electronico:</span> <br />
                <input className='form-control' type="email" name="email"/>
            </label>
            <br />
            <label for="password">
                <span>Contraseña:</span> <br />
                <input className='form-control' type="password" name="password"/>
            </label>
            <br />
            <button className='btn btn-light' type="submit">Ingresar</button>
        </form>
        </div>
        </>
    )
}

export default Login;