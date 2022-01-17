import React from 'react'
import { Spinner } from 'react-bootstrap'
import "./loading.css"

export const Loading = () => {
    return (
        <div className="spinnerContainer">
            <Spinner animation ="border" className= "spinner-style">

            </Spinner>
        </div>
    )
}