import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Button} from "react-bootstrap"
import './welcome.css'

export const WelcomePage = () => {
    const navigate = useNavigate();

    const handleLoginPage = ()=>{
        navigate('/login');
    }
    const handleRegisterPage = ()=>{
        navigate('/register');
    }


    return (
        <div className="welcomeContainer">
        <h1 className="welcomeTitle">Bienvenidos a Piggy Finance</h1>
            <p>Una app pensada para ayudarte en tu organización financiera</p> 
                <div className="welcomeButtonsContainer">
                    <div className="welcomeButtons">
                        <p> ¿Tenés Cuenta?</p>
                        <Button variant="outline-primary"onClick={ handleLoginPage} >Logueate</Button>
                    </div>
                    <div className="welcomeButtons">
                        <p>¿Sos nuevo en la app?</p>
                        <Button variant ="outline-info"onClick={handleRegisterPage}>Registrate</Button>
                    </div>
                </div>
        </div>
    )
}
