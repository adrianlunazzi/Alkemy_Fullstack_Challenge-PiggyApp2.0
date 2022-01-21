import React from 'react'
import { Link } from 'react-router-dom'
import "./notfoundpage.css"
export const NotFoundPage = () => {
    return (
        <div className="notFoundContainer">
            <div className="notFoundTitle">
            <h2>La pagina que estas buscando no fue encontrada!</h2>
            </div>
            
            <p><Link to="/">Volver al inicio</Link></p>
    
            <div className="notFoundContent"></div>
            
        </div>
    )
}
